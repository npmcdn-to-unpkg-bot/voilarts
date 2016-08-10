'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import App from './components/App.vue'
//import Home from './components/Home.vue'
//import Users from './components/Users.vue'
//import VueRouter from 'vue-router'
//import VueResource from 'vue-resource'
//Vue.use(VueResource)
//Vue.use(VueRouter)

var router = new VueRouter();

// Pointing routes to the components they should use
router.map({
  '/home': {
    component: Home
  },
  'users': {
    component: Users
  }
});

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
});

router.start(App, '#app');
