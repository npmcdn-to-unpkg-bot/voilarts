/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	import Vue from 'vue'
	//
	//import App from './components/App.vue'
	//import Home from './components/Home.vue'
	//import Users from './components/Users.vue'
	//import VueRouter from 'vue-router'
	//import VueResource from 'vue-resource'
	//Vue.use(VueResource)
	//Vue.use(VueRouter)

	var router = new VueRouter()

	// Pointing routes to the components they should use
	router.map({
	  '/home': {
	    component: Home
	  },
	  'users': {
	    component: Users
	  },
	})

	// Any invalid route will redirect to home
	router.redirect({
	  '*': '/home'
	})

	router.start(App, '#app')


/***/ }
/******/ ]);