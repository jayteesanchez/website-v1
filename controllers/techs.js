var Tech = require('../models/Tech');

Tech.prototype.expireAt = function() {
  return (this.posted_date + this.expiration)
}

Tech.prototype.totalVote = function() {
  return (this.votes_choice_1 + this.votes_choice_2);
}

// GET
function getAll(request, response) {
  Tech.find(function(error, tech) {
    if(error) response.json({message: 'Could not find any tech'});
    response.json({tech: tech});
  });
}

// POST
function createTech(request, response) {
  console.log('in Tech');
  console.log('body:',request.body);

  var tech = new Tech({
  tech_img:             request.body.tech-img,
  tech_name:             request.body.tech-name
});

  tech.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate tech b/c:' + error});

    response.json({tech: tech});
  });
}

// GET
function getOneTech(request, response) {
  var id = request.params.id;

  Tech.findById({_id: id}, function(error, tech) {
    if(error) response.json({message: 'Could not find tech b/c:' + error});

    response.json({tech: tech});
  });
}

function updateTech(request, response) {
  var id = request.params.id;

  Tech.findById({_id: id}, function(error, tech) {
    if(error) response.json({message: 'Could not find tech b/c:' + error});

    if(request.body.tech_img)            tech_img        = request.body.tech_img;
    if(request.body.tech_name)           tech_name       = request.body.tech_name;


    tech.save(function(error) {
      if(error) response.json({messsage: 'Could not update tech b/c:' + error});

      response.json({message: 'Tech successfully updated', tech: tech});
    });
  });
}

function removeTech(request, response) {
  var id = request.params.id;

  Tech.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete tech b/c:' + error});

    response.json({message: 'Tech successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createTech: createTech,
  getOneTech: getOneTech,
  updateTech: updateTech,
  removeTech: removeTech
}
