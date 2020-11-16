module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "048c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0c18":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "13ff":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DxPlayer_vue_vue_type_style_index_0_id_1d2f8da9_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8c0a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DxPlayer_vue_vue_type_style_index_0_id_1d2f8da9_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DxPlayer_vue_vue_type_style_index_0_id_1d2f8da9_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DxPlayer_vue_vue_type_style_index_0_id_1d2f8da9_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1ce2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "1db2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3e2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_79e44aac_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("048c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_79e44aac_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_79e44aac_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_79e44aac_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5313":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7deb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_93531b68_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5313");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_93531b68_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_93531b68_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_93531b68_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8c0a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"dx-bplayer\",\"version\":\"0.1.5\",\"description\":\"This is a simple HTML5 video player based on Vue.\",\"main\":\"lib/dx-bplayer.umd.min.js\",\"private\":false,\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lib\":\"vue-cli-service build --target lib --name dx-bplayer --dest lib packages/index.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/boboyaohuo/Dx-BPlayer.git\"},\"keywords\":[\"vue\",\"Dx-BPlayer\",\"BPlayer\",\"player\",\"video\",\"vue-video\"],\"author\":\"wujianbo\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/boboyaohuo/Dx-BPlayer/issues\"},\"homepage\":\"https://github.com/boboyaohuo/Dx-BPlayer#readme\",\"devDependencies\":{\"vue\":\"^2.6.11\",\"@vue/cli-plugin-babel\":\"^3.9.0\",\"@vue/cli-service\":\"^3.9.0\",\"stylus\":\"^0.54.5\",\"stylus-loader\":\"^3.0.2\",\"vue-template-compiler\":\"^2.6.10\"}}");

/***/ }),

/***/ "b37b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_58a459b1_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("deb0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_58a459b1_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_58a459b1_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_58a459b1_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cc14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_06e68366_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0c18");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_06e68366_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_06e68366_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_06e68366_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "deb0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e673":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_c3fe80c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1db2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_c3fe80c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_c3fe80c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_c3fe80c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f20b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartBtn_vue_vue_type_style_index_0_id_3c7b52bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1ce2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartBtn_vue_vue_type_style_index_0_id_3c7b52bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartBtn_vue_vue_type_style_index_0_id_3c7b52bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_stylus_loader_index_js_ref_11_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartBtn_vue_vue_type_style_index_0_id_3c7b52bc_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/DxPlayer.vue?vue&type=template&id=1d2f8da9&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"bplayer_container",staticClass:"dx-bplayer",class:[_vm.isFixed ? 'fixed' : '', _vm.isFullscreen ? 'fullscreen' : ''],on:{"click":function($event){$event.stopPropagation();return _vm.clearModeTogger($event)}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isPlaying && _vm.isStart),expression:"!isPlaying && isStart"}],staticClass:"bplayer_poster",style:({ backgroundImage: ("url(" + (_vm.options.cover) + ")") })}),[_c('video',{ref:"bplayer_video",staticClass:"bplayer-video",attrs:{"id":"bplayer-video","webkit-playsinline":"","playsinline":"","x5-video-player-fullscreen":"false","x-webkit-airplay":"allow","x5-video-player-type":"h5","x5-video-orientation":"landscape","loop":_vm.options.loop,"preload":_vm.options.preload},domProps:{"muted":_vm.options.muted}},[_c('source',{attrs:{"src":_vm.options.url,"type":("video/" + (_vm.getUrlType(_vm.options.url)))}}),_vm._v("\n      Your browser does not support the video element.\n    ")]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isFixed),expression:"!isFixed"}]},[_c('transition',{attrs:{"name":"fade-center"}},[(_vm.isStart || _vm.isWaiting)?_c('StartBtn',{attrs:{"isStart":_vm.isStart,"isWaiting":_vm.isWaiting},on:{"play":_vm.handlePlay}}):_vm._e()],1),_c('transition',{attrs:{"name":"fade-bottom"}},[_c('BaseControls',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isClearMode && !_vm.isStart),expression:"!isClearMode && !isStart"}],attrs:{"isPlaying":_vm.isPlaying},on:{"pause":_vm.handlePause,"play":_vm.handlePlay,"wait":_vm.handleWait,"canplay":_vm.handleCanplay,"fullscreen":_vm.handleFullscreen}})],1)],1),_c('transition',{attrs:{"name":"fade-center"}},[((_vm.isClearMode && !_vm.isStart) || _vm.isFixed)?_c('div',{staticClass:"bplayer_slider"},[_c('div',{staticClass:"bplayer_slider-cur",style:({ width: _vm.offsetLeft })})]):_vm._e()]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFixed),expression:"isFixed"}]},[_c('div',{staticClass:"bplayer-close",on:{"click":_vm.handleClose}},[_vm._v("×")])])]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/DxPlayer.vue?vue&type=template&id=1d2f8da9&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/BaseControls.vue?vue&type=template&id=58a459b1&scoped=true&
var BaseControlsvue_type_template_id_58a459b1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bplayer-base-controls"},[_c('PlayBtn'),_c('Volume'),_c('Progress'),_c('Fullscreen')],1)}
var BaseControlsvue_type_template_id_58a459b1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/BaseControls.vue?vue&type=template&id=58a459b1&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/PlayBtn.vue?vue&type=template&id=79e44aac&scoped=true&
var PlayBtnvue_type_template_id_79e44aac_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bplayer_play",class:_vm.isPlaying ? 'play' : 'pause',on:{"click":function($event){$event.stopPropagation();return _vm.handlePlay($event)}}})}
var PlayBtnvue_type_template_id_79e44aac_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/PlayBtn.vue?vue&type=template&id=79e44aac&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/PlayBtn.vue?vue&type=script&lang=js&
//
//
//
/* harmony default export */ var PlayBtnvue_type_script_lang_js_ = ({
  name: 'PlayBtn',
  inject: ['$player'],
  computed: {
    isPlaying() {
      return this.$player.isPlaying;
    }

  },
  methods: {
    handlePlay() {
      if (this.isPlaying) {
        this.$player.handlePause();
      } else {
        this.$player.handlePlay();
      }
    }

  }
});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/PlayBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_PlayBtnvue_type_script_lang_js_ = (PlayBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/Controls/PlayBtn.vue?vue&type=style&index=0&id=79e44aac&lang=stylus&scoped=true&
var PlayBtnvue_type_style_index_0_id_79e44aac_lang_stylus_scoped_true_ = __webpack_require__("3e2a");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/PlayBtn.vue






/* normalize component */

var component = normalizeComponent(
  Controls_PlayBtnvue_type_script_lang_js_,
  PlayBtnvue_type_template_id_79e44aac_scoped_true_render,
  PlayBtnvue_type_template_id_79e44aac_scoped_true_staticRenderFns,
  false,
  null,
  "79e44aac",
  null
  
)

/* harmony default export */ var PlayBtn = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Volume.vue?vue&type=template&id=93531b68&scoped=true&
var Volumevue_type_template_id_93531b68_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bplayer_vol",class:_vm.isMuted ? 'muted' : 'noMuted',on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}})}
var Volumevue_type_template_id_93531b68_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Volume.vue?vue&type=template&id=93531b68&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Volume.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Volumevue_type_script_lang_js_ = ({
  name: 'Volume',
  inject: ['$player'],
  computed: {
    isMuted() {
      return this.$player.options.muted;
    }

  },
  methods: {
    handleClick() {
      this.$player.handleMute();
    }

  }
});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Volumevue_type_script_lang_js_ = (Volumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/Controls/Volume.vue?vue&type=style&index=0&id=93531b68&lang=stylus&scoped=true&
var Volumevue_type_style_index_0_id_93531b68_lang_stylus_scoped_true_ = __webpack_require__("7deb");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Volume.vue






/* normalize component */

var Volume_component = normalizeComponent(
  Controls_Volumevue_type_script_lang_js_,
  Volumevue_type_template_id_93531b68_scoped_true_render,
  Volumevue_type_template_id_93531b68_scoped_true_staticRenderFns,
  false,
  null,
  "93531b68",
  null
  
)

/* harmony default export */ var Volume = (Volume_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Progress.vue?vue&type=template&id=06e68366&scoped=true&
var Progressvue_type_template_id_06e68366_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bplayer_progress",on:{"click":function($event){$event.stopPropagation();}}},[_c('span',{staticClass:"bplayer_time-current"},[_vm._v(_vm._s(_vm.textCurrentTime))]),_c('div',{ref:"bplayer_sliderRef",staticClass:"bplayer_slider",class:_vm.sliderInfo.isMove ? 'move' : '',on:{"click":function($event){$event.stopPropagation();return _vm.clickSlider($event)}}},[_c('div',{staticClass:"bplayer_slider-cur",style:({ width: _vm.offsetLeft })}),_c('i',{ref:"bplayer_sliderBtnRef",staticClass:"bplayer_slider-btn",class:_vm.sliderInfo.isMove ? 'move' : '',style:({ left: _vm.offsetLeft }),on:{"click":function($event){$event.stopPropagation();}}})]),_c('span',{staticClass:"bplayer_time-amount"},[_vm._v(_vm._s(_vm.textTotalTime))])])}
var Progressvue_type_template_id_06e68366_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Progress.vue?vue&type=template&id=06e68366&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Progress.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const isMobile = /mobile/i.test(window.navigator.userAgent);
/* harmony default export */ var Progressvue_type_script_lang_js_ = ({
  name: 'Progress',
  inject: ['$player'],

  data() {
    return {
      textTotalTime: '00:00',
      textCurrentTime: '00:00',
      offsetLeft: 0,
      sliderInfo: {
        isMove: false,
        startX: 0,
        oldTime: 0,
        oldOffsetLeft: 0
      }
    };
  },

  computed: {
    sliderRef() {
      return this.$refs.bplayer_sliderRef;
    }

  },
  watch: {
    offsetLeft(newData, oldData) {
      this.$player.offsetLeft = newData;
    }

  },
  methods: {
    secondToTime(time = 0) {
      time = time > 0 ? time : 0;

      const add0 = num => num < 10 ? `0${num}` : num;

      const h = ~~(time / 3600);
      const m = ~~(time % 3600 / 60);
      const s = ~~(time % 60);
      return (h > 0 ? [h, m, s] : [m, s]).map(add0).join(':');
    },

    updateSlider(ratio) {
      if (ratio >= 0 && ratio <= 100) {
        this.offsetLeft = `${ratio}%`;
      }
    },

    updateTextTime(second) {
      this.textCurrentTime = this.secondToTime(second);
    },

    updateVideoTime(second) {
      if (second) {
        this.$player.$video.currentTime = second;
      }
    },

    clickSlider($event) {
      if (this.$player.isStart) return;
      const sliderW = this.sliderRef.offsetWidth;
      const curOffestLeft = $event.clientX - $event.target.getBoundingClientRect().left;
      this.offsetLeft = `${~~(curOffestLeft / sliderW * 100)}%`;
      this.updateVideoState();
    },

    updateVideoState() {
      const newSecond = ~~(this.$player.$video.duration * (parseFloat(this.offsetLeft) / 100));
      this.updateVideoTime(newSecond);
      this.updateTextTime(newSecond);
      this.$player.setClearModeTimer();
    },

    initVideoEvents() {
      const events = ['pause', 'canplay', 'play', 'waiting', 'timeupdate', 'durationchange', 'loadeddata'];
      events.forEach(e => {
        this.$player.$video.addEventListener(e, this[`handle${e.toLowerCase().replace(/^./, f => f.toUpperCase())}`], false);
      });
    },

    initSliderBtnEvents() {
      const dragEventMap = {
        DragStart: isMobile ? 'touchstart' : 'mousedown',
        DragMove: isMobile ? 'touchmove' : 'mousemove',
        DragEnd: isMobile ? 'touchend' : 'mouseup'
      };
      Object.keys(dragEventMap).forEach(key => {
        // const bindRef = key === 'DragStart' ? this.$refs.bplayer_sliderBtnRef : this.$player.$container;
        const bindRef = this.$refs.bplayer_sliderBtnRef;
        bindRef.addEventListener(dragEventMap[key], this[`handle${key}`], false);
      });
    },

    handleLoadeddata() {
      const totalTime = this.$player.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },

    handleCanplay() {
      this.$player.handleCanplay();
    },

    handleDurationchange() {
      // 视频读取完成拿到视频长度
      const totalTime = this.$player.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },

    handleTimeupdate() {
      if (this.sliderInfo.isMove) return; // 视频播放时间变化执行

      const currentTime = this.$player.$video.currentTime;
      const ratio = currentTime / this.$player.$video.duration * 100;
      this.updateTextTime(currentTime);
      this.updateSlider(ratio);
    },

    handlePause() {
      // 视频暂停
      const totalTime = this.$player.$video.duration;
      const currentTime = this.$player.$video.currentTime;
      if (currentTime === totalTime) this.$player.isPlaying = false;
      this.$player.handlePause();
    },

    handlePlay() {
      // 视频播放
      this.$player.handlePlay();
    },

    handleWaiting() {
      // 视频因点击下一帧等待
      this.$player.handleWait();
    },

    computeMoveInfo(moveX) {
      const sliderW = this.sliderRef.offsetWidth;
      let offset = moveX - this.sliderInfo.startX;

      if (Math.abs(offset) >= sliderW) {
        offset = offset > 0 ? sliderW : -sliderW;
      }

      const ratio = offset / sliderW * 100;
      const second = this.$player.$video.duration * (ratio / 100);
      return {
        ratio,
        second
      };
    },

    handleDragStart($event) {
      $event.preventDefault();
      $event.stopPropagation();
      if (this.$player.isStart) return; // 滑块拖拽开始

      this.sliderInfo.startX = $event.clientX || $event.changedTouches[0].clientX;
      this.sliderInfo.isMove = true;
      this.$player.isMove = true;
      this.sliderInfo.oldTime = this.$player.$video.currentTime;
      this.sliderInfo.oldOffsetLeft = parseFloat(this.offsetLeft);
    },

    handleDragMove($event) {
      $event.preventDefault();
      $event.stopPropagation();
      const ClienX = $event.clientX || $event.changedTouches[0].clientX; // 滑块拖拽移动中

      if (this.sliderInfo.isMove) {
        const {
          ratio,
          second
        } = this.computeMoveInfo(ClienX);
        this.updateSlider(ratio + this.sliderInfo.oldOffsetLeft);
        this.updateTextTime(second + this.sliderInfo.oldTime);
      }
    },

    handleDragEnd($event) {
      const ClienX = $event.clientX || $event.changedTouches[0].clientX; // 滑块拖拽结束

      if (this.sliderInfo.isMove) {
        const {
          ratio,
          second
        } = this.computeMoveInfo(ClienX);
        this.updateVideoTime(second + this.sliderInfo.oldTime);
        this.sliderInfo.isMove = false;
        this.$player.isMove = false;
        this.$player.setClearModeTimer();
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.initVideoEvents();
      this.initSliderBtnEvents();
    });
  }

});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Progressvue_type_script_lang_js_ = (Progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/Controls/Progress.vue?vue&type=style&index=0&id=06e68366&lang=stylus&scoped=true&
var Progressvue_type_style_index_0_id_06e68366_lang_stylus_scoped_true_ = __webpack_require__("cc14");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Progress.vue






/* normalize component */

var Progress_component = normalizeComponent(
  Controls_Progressvue_type_script_lang_js_,
  Progressvue_type_template_id_06e68366_scoped_true_render,
  Progressvue_type_template_id_06e68366_scoped_true_staticRenderFns,
  false,
  null,
  "06e68366",
  null
  
)

/* harmony default export */ var Progress = (Progress_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Fullscreen.vue?vue&type=template&id=c3fe80c4&scoped=true&
var Fullscreenvue_type_template_id_c3fe80c4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bplayer_fullscreen",class:_vm.isFullscreen ? 'full' : 'noFull',on:{"click":function($event){$event.stopPropagation();return _vm.handleClickToggle($event)}}})}
var Fullscreenvue_type_template_id_c3fe80c4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Fullscreen.vue?vue&type=template&id=c3fe80c4&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/Controls/Fullscreen.vue?vue&type=script&lang=js&
//
//
//
//
/* harmony default export */ var Fullscreenvue_type_script_lang_js_ = ({
  name: 'Fullscreen',
  inject: ['$player'],

  data() {
    return {
      isFullscreen: false
    };
  },

  methods: {
    handleClickToggle() {
      if (this.isFullscreen) {
        this.resetFullScreen();
      } else {
        this.reqFullScreen(this.$player.$container);
      }
    },

    setFullscreenState() {
      const fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;

      if (fullEle && fullEle !== this.$player.$container) {
        return;
      }

      this.isFullscreen = !!fullEle;
      this.$player.handleFullscreen(this.isFullscreen);
    },

    reqFullScreen(element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.webkitEnterFullscreen) {
        element.webkitEnterFullscreen();
      } else if (this.$player.$video.webkitEnterFullscreen) {
        // Safari for iOS
        this.$player.$video.webkitEnterFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('进入全屏失败');
      }
    },

    resetFullScreen() {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    },

    docfullscreenchange() {
      this.setFullscreenState();
    },

    fullscreenchange() {
      this.setFullscreenState();
    },

    unbindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.removeEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$player.$container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.$player.$container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
        document.removeEventListener('x5videoenterfullscreen', this.docfullscreenchange);
      }
    },

    bindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.addEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$player.$container.addEventListener('fullscreenchange', this.fullscreenchange);
        this.$player.$container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.addEventListener('msfullscreenchange', this.docfullscreenchange);
        document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
        document.addEventListener('x5videoenterfullscreen', this.docfullscreenchange);
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.bindChangeEvent();
    });
  },

  beforeDestroy() {
    if (this.$player.$container) {
      this.unbindChangeEvent();
    }
  }

});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Fullscreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var Controls_Fullscreenvue_type_script_lang_js_ = (Fullscreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/Controls/Fullscreen.vue?vue&type=style&index=0&id=c3fe80c4&lang=stylus&scoped=true&
var Fullscreenvue_type_style_index_0_id_c3fe80c4_lang_stylus_scoped_true_ = __webpack_require__("e673");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/Controls/Fullscreen.vue






/* normalize component */

var Fullscreen_component = normalizeComponent(
  Controls_Fullscreenvue_type_script_lang_js_,
  Fullscreenvue_type_template_id_c3fe80c4_scoped_true_render,
  Fullscreenvue_type_template_id_c3fe80c4_scoped_true_staticRenderFns,
  false,
  null,
  "c3fe80c4",
  null
  
)

/* harmony default export */ var Fullscreen = (Fullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/BaseControls.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//




/* harmony default export */ var BaseControlsvue_type_script_lang_js_ = ({
  name: 'BaseControls',
  components: {
    PlayBtn: PlayBtn,
    Volume: Volume,
    Progress: Progress,
    Fullscreen: Fullscreen
  }
});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/BaseControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BaseControlsvue_type_script_lang_js_ = (BaseControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/BaseControls.vue?vue&type=style&index=0&id=58a459b1&lang=stylus&scoped=true&
var BaseControlsvue_type_style_index_0_id_58a459b1_lang_stylus_scoped_true_ = __webpack_require__("b37b");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/BaseControls.vue






/* normalize component */

var BaseControls_component = normalizeComponent(
  src_BaseControlsvue_type_script_lang_js_,
  BaseControlsvue_type_template_id_58a459b1_scoped_true_render,
  BaseControlsvue_type_template_id_58a459b1_scoped_true_staticRenderFns,
  false,
  null,
  "58a459b1",
  null
  
)

/* harmony default export */ var BaseControls = (BaseControls_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"f04bd83a-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/StartBtn.vue?vue&type=template&id=3c7b52bc&scoped=true&
var StartBtnvue_type_template_id_3c7b52bc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isStart)?_c('div',{staticClass:"bplayer_start",on:{"click":function($event){$event.stopPropagation();return _vm.handleStart($event)}}}):_vm._e(),(_vm.isWaiting && !_vm.isStart)?_c('div',{staticClass:"bplayer_waiting"}):_vm._e()])}
var StartBtnvue_type_template_id_3c7b52bc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/dx-BPlayer/src/StartBtn.vue?vue&type=template&id=3c7b52bc&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/StartBtn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var StartBtnvue_type_script_lang_js_ = ({
  inject: ['$player'],
  props: {
    isStart: {
      default: true,
      type: Boolean
    },
    isWaiting: {
      default: true,
      type: Boolean
    }
  },
  methods: {
    // 开始播放操作
    handleStart() {
      this.$player.handlePlay();
    }

  }
});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/StartBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_StartBtnvue_type_script_lang_js_ = (StartBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/StartBtn.vue?vue&type=style&index=0&id=3c7b52bc&lang=stylus&scoped=true&
var StartBtnvue_type_style_index_0_id_3c7b52bc_lang_stylus_scoped_true_ = __webpack_require__("f20b");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/StartBtn.vue






/* normalize component */

var StartBtn_component = normalizeComponent(
  src_StartBtnvue_type_script_lang_js_,
  StartBtnvue_type_template_id_3c7b52bc_scoped_true_render,
  StartBtnvue_type_template_id_3c7b52bc_scoped_true_staticRenderFns,
  false,
  null,
  "3c7b52bc",
  null
  
)

/* harmony default export */ var StartBtn = (StartBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/dx-BPlayer/src/DxPlayer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const VERSION = __webpack_require__("9224").version;

/* harmony default export */ var DxPlayervue_type_script_lang_js_ = ({
  name: 'DxBPlayer',

  provide() {
    return {
      $player: this
    };
  },

  components: {
    BaseControls: BaseControls,
    StartBtn: StartBtn
  },
  props: {
    playerOptions: {
      type: Object,
      default: function () {
        return {};
      }
    },
    mutex: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        muted: false,
        loop: false,
        preload: 'auto',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      clearModeTimer: null,
      isStart: true,
      isWaiting: true,
      isPlaying: false,
      isMove: false,
      isClearMode: false,
      isFixed: false,
      isFullscreen: false,
      offsetLeft: 0
    };
  },

  watch: {
    isPlaying(newData, oldData) {
      this.play();

      if (newData) {
        this.$emit('play');
      } else {
        this.$emit('pause');
      }
    }

  },
  computed: {
    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.playerOptions);
    }

  },
  methods: {
    // 判断视频类型
    getUrlType(url) {
      let u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },

    // 全局初始化
    init() {
      this.$video = this.$refs.bplayer_video;
      this.$container = this.$refs.bplayer_container;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
      setTimeout(() => {
        this.isPlaying = this.options.autoplay;
      }, 300);
    },

    // 初始化音量及静音
    initPlayer() {// this.$video.volume = this.options.volume;
      // setTimeout(() => {
      //   this.$video.muted = false;
      // }, 500);
    },

    // 隐藏或显示控件 *注：未开始播放或暂停播放不可以隐藏控件
    clearModeTogger() {
      if (this.isStart || !this.isPlaying) return;
      this.isClearMode = !this.isClearMode; // 显示控件，增加倒计时隐藏

      if (!this.isClearMode) {
        this.setClearModeTimer();
      }
    },

    // 控件隐藏倒计时
    setClearModeTimer() {
      // 清除已有倒计时 *注：未开始播放或暂停播放不可以隐藏控件
      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }

      this.clearModeTimer = setTimeout(() => {
        if (this.isMove || !this.isPlaying) return;
        this.isClearMode = true;
        this.$emit('clearMode');
      }, 4000);
    },

    // 暂停除本视频的所有视频
    pauseAllVideo() {
      if (this.mutex) {
        const videos = document.querySelectorAll('video:not(.bplayer-video)');
        videos.forEach(v => {
          v.pause && v.pause();
        });
      }
    },

    // 播放或暂停
    play() {
      if (this.isPlaying) {
        this.pauseAllVideo();
        this.$video.play().then(() => {
          this.setClearModeTimer();
        }).catch(e => {});
      } else {
        this.$video.pause();
      }
    },

    // 视频加载完成
    handleCanplay() {
      this.isWaiting = false;
      this.$emit('canplay');
    },

    // 视频加载中
    handleWait() {
      this.isWaiting = true;
      this.$emit('wait');
    },

    // 视频暂停
    handlePause() {
      this.isPlaying = false;
      this.isClearMode = false;
    },

    // 视频播放
    handlePlay() {
      this.isPlaying = true;
      this.isStart = false;
    },

    // 视频全屏或取消全屏
    handleFullscreen(newData) {
      this.setClearModeTimer();
      this.isFullscreen = newData;
      this.$emit('fullscreen', newData);
    },

    // 视频静音或取消静音
    handleMute() {
      this.setClearModeTimer();
      this.baseVideo.muted = !this.baseVideo.muted;
    },

    // 关闭小窗
    handleClose() {
      this.isFixed = false;
      this.isPlaying = false;
      this.isClearMode = false;
      this.$emit('close');
    }

  },

  created() {
    this.$emit('created');
    this.$nextTick(() => {
      this.init();
    });
  },

  mounted() {
    this.$emit('mounted');
    console.log('\n' + ' %c dx-bplayer v' + VERSION + ' %c https://github.com/boboyaohuo/dx-bplayer ' + '\n', 'color: #ff461a; background: #f5f5f5; padding:6px 0;', 'background: #f5f5f5; padding:6px 0;');
  },

  beforeDestroy() {
    this.$emit('beforeDestroy');
  },

  destroyed() {
    this.$emit('destroyed');
  }

});
// CONCATENATED MODULE: ./packages/dx-BPlayer/src/DxPlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_DxPlayervue_type_script_lang_js_ = (DxPlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/dx-BPlayer/src/DxPlayer.vue?vue&type=style&index=0&id=1d2f8da9&lang=stylus&scoped=true&
var DxPlayervue_type_style_index_0_id_1d2f8da9_lang_stylus_scoped_true_ = __webpack_require__("13ff");

// CONCATENATED MODULE: ./packages/dx-BPlayer/src/DxPlayer.vue






/* normalize component */

var DxPlayer_component = normalizeComponent(
  src_DxPlayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1d2f8da9",
  null
  
)

/* harmony default export */ var DxPlayer = (DxPlayer_component.exports);
// CONCATENATED MODULE: ./packages/dx-BPlayer/index.js


DxPlayer.install = function (Vue) {
  Vue.component(DxPlayer.name, DxPlayer);
};

/* harmony default export */ var dx_BPlayer = (DxPlayer);
// CONCATENATED MODULE: ./packages/index.js


const version = __webpack_require__("9224").version;

const components = [dx_BPlayer];

const install = function (Vue) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  version,
  // 以下是具体的组件列表
  DxBPlayer: dx_BPlayer
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
//# sourceMappingURL=dx-bplayer.common.js.map