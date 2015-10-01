var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var techsController = require('../controllers/techs');

// var AllowCrossOrigin function(request, response, next) {
//   response.header('Access-Control-Allow-Origin', '*');
//   response.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
//   response.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//   if("OPTIONS" == request.method) {
//     response.send(200);
//   }
//   else {
//     next();
//   }
// };

// http://127.0.0.1:3000/techs
router.route('/techs')

  // all techs
  .get(techsController.getAll)

  // a new Tech
  .post(techsController.createTech);


router.route('/techs/:id')

  // return specific Tech
  .get(techsController.getOneTech)

  // update existing Tech
  .put(techsController.updateTech)

  // remove specific Tech from DB
  .delete(techsController.removeTech);



module.exports = router

