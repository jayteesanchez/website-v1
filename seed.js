var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.database);

var Tech = require('./models/Tech');

// callback-style
Tech.remove({}, function(err) {
  if (err) console.log(err);
  console.log("All Techs removed...");
});

var newTechs = [
  {
  tech_name: 'React',
  tech_img: 'http://moduscreate.com/wp-content/uploads/2014/03/react-opti.png',
  },
  {
  tech_name: 'Node.js',
  tech_img: 'https://node-os.com/images/nodejs.png',
  },
  {
  tech_name: 'MongoDB',
  tech_img: 'http://jstricks.com/wp-content/uploads/2014/10/mongodb-gui-tools.png',
  },
  {
  tech_name: 'AngularJS',
  tech_img: 'https://luisfarzati.github.io/angulartics/images/angularjs.png',
  },
  {
  tech_name: 'Ruby on Rails',
  tech_img: 'https://s3.amazonaws.com/codementor_content/2014-Aug-Week4-interviews/Ruby_on_Rails-logo.png',
  },
  {
  tech_name: 'HTML/CSS',
  tech_img: 'http://www.hortongroup.com/sites/default/files/tech-icons-css-html.jpg',
  },
  {
  tech_name: 'JS5',
  tech_img: 'http://www.pinyourclient.com/wp-content/uploads/2015/01/9455413519_javascript.png',
  },
  {
  tech_name: 'ES6',
  tech_img: 'http://blog.falafel.com/wp-content/uploads/2015/01/JS6_Logo.png',
  },
  {
  tech_name: 'Socket.io',
  tech_img: 'https://www.pubnub.com/blog/wp-content/uploads/2014/07/SOCKETIOICON.gif',
  }
];

// promise-style
Tech
  .create(newTechs)
  .then(
    function(Techs) {
      console.log(Techs.length + " Techs seeded.");
    }, function(err) {
      console.log(err);
  })
  .then(function() {
    mongoose.disconnect();
  });
