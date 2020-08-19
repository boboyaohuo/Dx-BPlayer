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
/******/ 	return __webpack_require__(__webpack_require__.s = "112a");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bb2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_a7ed97c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fc2c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_a7ed97c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_a7ed97c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Volume_vue_vue_type_style_index_0_id_a7ed97c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "112a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/VuePlayer.vue?vue&type=template&id=02dbb42f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"qun-player",on:{"click":function($event){$event.stopPropagation();_vm.isClearMode=!_vm.isClearMode}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isPlaying&&_vm.isStart),expression:"!isPlaying&&isStart"}],staticClass:"_poster",style:({backgroundImage:("url(" + (_vm.options.cover) + ")")})}),[_c('video',{ref:"video",staticClass:"_video-ref",attrs:{"webkit-playsinline":"","playsinline":"","x5-video-player-fullscreen":"","x-webkit-airplay":"allow","x5-video-player-type":"h5","crossorigin":"anonymous","loop":_vm.options.loop,"preload":_vm.options.preload,"poster":_vm.options.cover},domProps:{"muted":_vm.options.muted}},[_vm._l((_vm.vUrl),function(item,index){return _c('source',{key:index,attrs:{"src":item,"type":("video/" + (_vm.getUrlType(item)))}})}),_vm._v("\n      Your browser does not support the video element.\n    ")],2),_c('transition',{attrs:{"name":"fade"}},[_c('PlayBtn',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isClearMode),expression:"!isClearMode"}],attrs:{"isPlaying":_vm.isPlaying},on:{"update:isPlaying":function($event){_vm.isPlaying=$event},"update:is-playing":function($event){_vm.isPlaying=$event}}})],1),_c('transition',{attrs:{"name":"fade"}},[_c('BaseControls',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isClearMode),expression:"!isClearMode"}],on:{"paused":_vm.handlePaused,"fullscreen":function($event){return _vm.$emit('fullscreen',$event)}}})],1)]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/VuePlayer.vue?vue&type=template&id=02dbb42f&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/BaseControls.vue?vue&type=template&id=1f550239&scoped=true&
var BaseControlsvue_type_template_id_1f550239_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"qun-base-controls"},[_c('Volume',{attrs:{"isMuted":_vm.isMuted},on:{"update:isMuted":function($event){_vm.isMuted=$event},"update:is-muted":function($event){_vm.isMuted=$event}}}),_c('Progress',{on:{"paused":function($event){return _vm.$emit('paused')}}}),_c('Fullscreen',{attrs:{"isFullscreen":_vm.isFullscreen},on:{"update:isFullscreen":function($event){_vm.isFullscreen=$event},"update:is-fullscreen":function($event){_vm.isFullscreen=$event}}})],1)}
var BaseControlsvue_type_template_id_1f550239_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/BaseControls.vue?vue&type=template&id=1f550239&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Volume.vue?vue&type=template&id=a7ed97c0&scoped=true&
var Volumevue_type_template_id_a7ed97c0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_vol",on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[(!_vm.isMuted)?_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(-40.000000, -281.000000)"}},[_c('g',{attrs:{"transform":"translate(40.000000, 281.000000)"}},[_c('g',{attrs:{"transform":"translate(0.000000, 4.000000)"}},[_c('path',{attrs:{"d":"M10.314666,7.29159253 L10.314666,23.8296452 L4.05278755,23.8296452 C2.32789564,23.8296452 0.927090038,22.5856319 0.927090038,21.1011808 L0.927090038,10.0200629 C0.927090038,8.50947627 2.31222825,7.29159253 4.05278755,7.29159253 L10.314666,7.29159253 L10.314666,7.29159253 Z","fill":"#FFFFFF","fill-rule":"nonzero"}}),_c('path',{attrs:{"d":"M18.0191834,0.674274796 C19.237061,-0.240440841 20.2249539,0.277026428 20.2249539,1.78238658 L20.2249539,29.3335821 C20.2249539,30.8598483 19.2475171,31.361636 18.0191834,30.4416938 L9.19610116,23.8296087 L9.19610116,7.29155607 L18.0191834,0.674244409 L18.0191834,0.674274796 Z","fill":"#FFFFFF","fill-rule":"nonzero"}}),_c('path',{attrs:{"d":"M29.5357411,25.6333387 C32.0371112,23.0341574 33.5750798,19.5011972 33.5750798,15.6090251 C33.5750798,11.7410714 32.0561911,8.2278731 29.582322,5.63333866","stroke":"#FFFFFF","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])]):_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"transform":"translate(-40.000000, -354.000000)","fill":"#FFFFFF","fill-rule":"nonzero"}},[_c('g',{attrs:{"transform":"translate(40.000000, 354.000000)"}},[_c('g',{attrs:{"transform":"translate(0.000000, 5.000000)"}},[_c('path',{attrs:{"d":"M10.314666,7.29159253 L10.314666,23.8296452 L4.05278755,23.8296452 C2.32789564,23.8296452 0.927090038,22.5856319 0.927090038,21.1011808 L0.927090038,10.0200629 C0.927090038,8.50947627 2.31222825,7.29159253 4.05278755,7.29159253 L10.314666,7.29159253 L10.314666,7.29159253 Z"}}),_c('path',{attrs:{"d":"M18.0191834,0.674274796 C19.237061,-0.240440841 20.2249539,0.277026428 20.2249539,1.78238658 L20.2249539,29.3335821 C20.2249539,30.8598483 19.2475171,31.361636 18.0191834,30.4416938 L9.19610116,23.8296087 L9.19610116,7.29155607 L18.0191834,0.674244409 L18.0191834,0.674274796 Z"}}),_c('path',{attrs:{"d":"M23.9256893,11.143836 C23.1573282,10.3754749 23.1573282,9.12100861 23.9256893,8.35265052 L23.9570512,8.32128901 C24.7254123,7.55292788 25.9798786,7.55292788 26.7482367,8.32128901 L38.4461438,20.0191961 C39.2145049,20.7875573 39.2145049,22.0420236 38.4461438,22.8103817 L38.4147823,22.8417435 C37.6411947,23.6153311 36.3919549,23.6153311 35.6235968,22.8417435 L23.9256893,11.143836 Z"}}),_c('path',{attrs:{"d":"M23.9517611,19.9930508 L35.6496683,8.29514369 C36.4180294,7.52678255 37.6724957,7.52678255 38.4408538,8.29514369 L38.4722156,8.32650519 C39.2405767,9.09486633 39.2405767,10.3493326 38.4722156,11.1176907 L26.7743085,22.8208244 C26.0059473,23.5891855 24.751481,23.5891855 23.9831229,22.8208244 L23.9517614,22.7894625 C23.1781738,22.0158749 23.1781738,20.7666351 23.9517614,19.9930505 L23.9517611,19.9930508 Z"}})])])])])])])}
var Volumevue_type_template_id_a7ed97c0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Volume.vue?vue&type=template&id=a7ed97c0&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Volume.vue?vue&type=script&lang=js&
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
//
//
/* harmony default export */ var Volumevue_type_script_lang_js_ = ({
  props: {
    isMuted: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {
    $video() {
      return this.$parent.$parent.$video;
    }

  },
  methods: {
    handleClick() {
      const isMuted = !this.isMuted;
      this.$emit('update:isMuted', isMuted);
      this.$video && (this.$video.muted = isMuted);
    }

  }
});
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Volume.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Volumevue_type_script_lang_js_ = (Volumevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/controls/Volume.vue?vue&type=style&index=0&id=a7ed97c0&lang=scss&scoped=true&
var Volumevue_type_style_index_0_id_a7ed97c0_lang_scss_scoped_true_ = __webpack_require__("0bb2");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.9.3@vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Volume.vue






/* normalize component */

var component = normalizeComponent(
  controls_Volumevue_type_script_lang_js_,
  Volumevue_type_template_id_a7ed97c0_scoped_true_render,
  Volumevue_type_template_id_a7ed97c0_scoped_true_staticRenderFns,
  false,
  null,
  "a7ed97c0",
  null
  
)

/* harmony default export */ var Volume = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Progress.vue?vue&type=template&id=58cdeb72&scoped=true&
var Progressvue_type_template_id_58cdeb72_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_progress",on:{"click":function($event){$event.stopPropagation();}}},[_c('span',{staticClass:"_time-current"},[_vm._v(_vm._s(_vm.textCurrentTime))]),_c('div',{ref:"_sliderRef",staticClass:"_slider",on:{"click":function($event){$event.stopPropagation();return _vm.clickSlider($event)}}},[_c('div',{staticClass:"_slider-cur",style:({ width: _vm.offsetLeft })}),_c('i',{ref:"_sliderBtnRef",staticClass:"_slider-btn",style:({ left: _vm.offsetLeft }),on:{"click":function($event){$event.stopPropagation();}}})]),_c('span',{staticClass:"_time-amount"},[_vm._v(_vm._s(_vm.textTotalTime))])])}
var Progressvue_type_template_id_58cdeb72_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Progress.vue?vue&type=template&id=58cdeb72&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Progress.vue?vue&type=script&lang=js&
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
  props: {},

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
    playerRef() {
      return this.$parent.$parent;
    },

    $video() {
      return this.$parent.$parent.$video;
    },

    sliderRef() {
      return this.$refs._sliderRef;
    }

  },
  watch: {},
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
        this.$video.currentTime = second;
      }
    },

    clickSlider($event) {
      const sliderW = this.sliderRef.offsetWidth;
      const curOffestLeft = $event.clientX - $event.target.getBoundingClientRect().left;
      this.offsetLeft = `${~~(curOffestLeft / sliderW * 100)}%`;
      this.updateVideoState();
    },

    updateVideoState() {
      const newSecond = ~~(this.$video.duration * (parseFloat(this.offsetLeft) / 100));
      this.updateVideoTime(newSecond);
      this.updateTextTime(newSecond);
      this.playerRef.isPlaying = true;
    },

    initVideoEvents() {
      const events = ['pause', 'play', 'waiting', 'timeupdate', 'durationchange', 'loadeddata'];
      events.forEach(e => {
        this.$video.addEventListener(e, this[`handle${e.toLowerCase().replace(/^./, f => f.toUpperCase())}`], false);
      });
    },

    initSliderBtnEvents() {
      const dragEventMap = {
        DragStart: isMobile ? 'touchstart' : 'mousedown',
        DragMove: isMobile ? 'touchmove' : 'mousemove',
        DragEnd: isMobile ? 'touchend' : 'mouseup'
      };
      Object.keys(dragEventMap).forEach(key => {
        const bindRef = key === 'DragStart' ? this.$refs._sliderBtnRef : this.playerRef.$container;
        bindRef.addEventListener(dragEventMap[key], this[`handle${key}`], false);
      });
    },

    handleLoadeddata() {
      const totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },

    handleDurationchange() {
      // 视频读取完成拿到视频长度
      const totalTime = this.$video.duration;
      this.textTotalTime = this.secondToTime(totalTime);
    },

    handleTimeupdate() {
      // 视频播放时间变化执行
      const currentTime = this.$video.currentTime;
      const ratio = currentTime / this.$video.duration * 100;
      this.updateTextTime(currentTime);
      this.updateSlider(ratio);
    },

    handlePause() {
      // 视频暂停
      const totalTime = this.$video.duration;
      const currentTime = this.$video.currentTime;
      if (currentTime === totalTime) this.playerRef.isPlaying = false;
      this.$emit('paused');
    },

    handlePlay() {// 视频播放
    },

    handleWaiting() {// 视频因点击下一帧等待
    },

    computeMoveInfo(moveX) {
      const sliderW = this.sliderRef.offsetWidth;
      let offset = moveX - this.sliderInfo.startX;

      if (Math.abs(offset) >= sliderW) {
        offset = offset > 0 ? sliderW : -sliderW;
      }

      const ratio = offset / sliderW * 100;
      const second = this.$video.duration * (ratio / 100);
      return {
        ratio,
        second
      };
    },

    handleDragStart($event) {
      $event.stopPropagation(); // 滑块拖拽开始

      this.sliderInfo.startX = $event.clientX || $event.changedTouches[0].clientX;
      this.sliderInfo.isMove = true;
      this.sliderInfo.oldTime = this.$video.currentTime;
      this.sliderInfo.oldOffsetLeft = parseFloat(this.offsetLeft);
    },

    handleDragMove($event) {
      const ClienX = $event.clientX || $event.changedTouches[0].clientX; // 滑块拖拽移动中

      if (this.sliderInfo.isMove) {
        const {
          ratio,
          second
        } = this.computeMoveInfo(ClienX); // this.updateVideoTime(second);

        this.updateTextTime(second + this.sliderInfo.oldTime);
        this.updateSlider(ratio + this.sliderInfo.oldOffsetLeft);
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
        this.updateTextTime(second + this.sliderInfo.oldTime);
        this.updateSlider(ratio + parseFloat(this.offsetLeft));
        this.sliderInfo.isMove = false; // this.playerRef.isPlaying = true;
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
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Progress.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Progressvue_type_script_lang_js_ = (Progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/controls/Progress.vue?vue&type=style&index=0&id=58cdeb72&lang=scss&scoped=true&
var Progressvue_type_style_index_0_id_58cdeb72_lang_scss_scoped_true_ = __webpack_require__("bd19");

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Progress.vue






/* normalize component */

var Progress_component = normalizeComponent(
  controls_Progressvue_type_script_lang_js_,
  Progressvue_type_template_id_58cdeb72_scoped_true_render,
  Progressvue_type_template_id_58cdeb72_scoped_true_staticRenderFns,
  false,
  null,
  "58cdeb72",
  null
  
)

/* harmony default export */ var Progress = (Progress_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Fullscreen.vue?vue&type=template&id=5d714ba4&scoped=true&
var Fullscreenvue_type_template_id_5d714ba4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_fullscreen",on:{"click":function($event){$event.stopPropagation();return _vm.handleClickToggle($event)}}},[_c('svg',{attrs:{"viewBox":"0 0 40 40","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[_c('g',{attrs:{"transform":"translate(-670.000000, -354.000000)","stroke":"#FFFFFF","stroke-width":"5"}},[_c('g',{attrs:{"transform":"translate(670.000000, 354.000000)"}},[_c('path',{attrs:{"d":"M35,20 L35,34 C35,34.5522847 34.5522847,35 34,35 L20,35 M5,20 L5,6 C5,5.44771525 5.44771525,5 6,5 L6,5 L20,5"}})])])])])])}
var Fullscreenvue_type_template_id_5d714ba4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Fullscreen.vue?vue&type=template&id=5d714ba4&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/controls/Fullscreen.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Fullscreenvue_type_script_lang_js_ = ({
  props: {
    isFullscreen: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {};
  },

  computed: {
    $video() {
      return this.$parent.$parent.$video;
    },

    $container() {
      return this.$parent.$parent.$container;
    }

  },
  watch: {},
  methods: {
    handleClickToggle() {
      if (this.isFullscreen) {
        this.resetFullScreen();
      } else {
        this.reqFullScreen(this.$container);
      }
    },

    setFullscreenState() {
      const fullEle = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement;
      this.$emit('update:isFullscreen', !!fullEle);
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
      } else if (this.$video.webkitEnterFullscreen) {
        // Safari for iOS
        this.$video.webkitEnterFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      } else {
        console.log('进入全屏失败');
      }
    },

    resetFullScreen() {
      if (document.exitFullscreen) {
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
        this.$container.removeEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.removeEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.removeEventListener('msfullscreenchange', this.docfullscreenchange);
        document.removeEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    },

    bindChangeEvent() {
      if (/Firefox/.test(navigator.userAgent)) {
        document.addEventListener('mozfullscreenchange', this.docfullscreenchange);
        document.addEventListener('fullscreenchange', this.docfullscreenchange);
      } else {
        this.$container.addEventListener('fullscreenchange', this.fullscreenchange);
        this.$container.addEventListener('webkitfullscreenchange', this.fullscreenchange);
        document.addEventListener('msfullscreenchange', this.docfullscreenchange);
        document.addEventListener('MSFullscreenChange', this.docfullscreenchange);
      }
    }

  },

  mounted() {
    this.$nextTick(() => {
      this.bindChangeEvent();
    });
  },

  beforeDestroy() {
    if (this.$container) {
      this.unbindChangeEvent();
    }
  }

});
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Fullscreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_Fullscreenvue_type_script_lang_js_ = (Fullscreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/controls/Fullscreen.vue?vue&type=style&index=0&id=5d714ba4&lang=scss&scoped=true&
var Fullscreenvue_type_style_index_0_id_5d714ba4_lang_scss_scoped_true_ = __webpack_require__("6701");

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/controls/Fullscreen.vue






/* normalize component */

var Fullscreen_component = normalizeComponent(
  controls_Fullscreenvue_type_script_lang_js_,
  Fullscreenvue_type_template_id_5d714ba4_scoped_true_render,
  Fullscreenvue_type_template_id_5d714ba4_scoped_true_staticRenderFns,
  false,
  null,
  "5d714ba4",
  null
  
)

/* harmony default export */ var Fullscreen = (Fullscreen_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/BaseControls.vue?vue&type=script&lang=js&
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
    Volume: Volume,
    Progress: Progress,
    Fullscreen: Fullscreen
  },

  data() {
    return {
      isMuted: false,
      isFullscreen: false
    };
  },

  watch: {
    isFullscreen(newData, oldData) {
      this.$emit('fullscreen', newData);
    }

  },
  computed: {
    $parentComponent() {
      return this.$parent;
    },

    $video() {
      return this.$parentComponent.$video;
    }

  },
  filters: {},
  methods: {
    initVideoEvents() {
      this.$video.addEventListener('volumechange', function (e) {
        this.isMuted = e.target.muted;
      });
    }

  },

  created() {},

  mounted() {
    this.$nextTick(() => {
      this.initVideoEvents();
    });
  },

  updated() {},

  beforeDestroy() {},

  destroyed() {}

});
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/BaseControls.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_BaseControlsvue_type_script_lang_js_ = (BaseControlsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/BaseControls.vue?vue&type=style&index=0&id=1f550239&lang=scss&scoped=true&
var BaseControlsvue_type_style_index_0_id_1f550239_lang_scss_scoped_true_ = __webpack_require__("8fd8");

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/BaseControls.vue






/* normalize component */

var BaseControls_component = normalizeComponent(
  src_BaseControlsvue_type_script_lang_js_,
  BaseControlsvue_type_template_id_1f550239_scoped_true_render,
  BaseControlsvue_type_template_id_1f550239_scoped_true_staticRenderFns,
  false,
  null,
  "1f550239",
  null
  
)

/* harmony default export */ var BaseControls = (BaseControls_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"55c47cba-vue-loader-template"}!./node_modules/_vue-loader@15.9.3@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/PlayBtn.vue?vue&type=template&id=7f6c2668&scoped=true&
var PlayBtnvue_type_template_id_7f6c2668_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"_play-btn",on:{"click":function($event){$event.stopPropagation();return _vm.handleClick($event)}}},[(_vm.isPlaying)?_c('svg',{attrs:{"viewBox":"0 0 64 64","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',[_c('path',{attrs:{"d":"M64,32 C64,49.6733333 49.6733333,64 32,64 C14.3266667,64 0,49.6733333 0,32 C0,14.3266667 14.3266667,0 32,0 C49.6733333,0 64,14.3266667 64,32","fill-opacity":"0.5","fill":"#231F20"}}),_c('rect',{attrs:{"fill":"#FFFFFF","fill-rule":"nonzero","x":"23","y":"19","width":"5","height":"26","rx":"2.5"}}),_c('rect',{attrs:{"fill":"#FFFFFF","fill-rule":"nonzero","x":"36","y":"19","width":"5","height":"26","rx":"2.5"}})])])]):_c('svg',{attrs:{"viewBox":"0 0 96 96","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('g',{attrs:{"stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',[_c('path',{attrs:{"d":"M96,48 C96,74.51 74.51,96 48,96 C21.49,96 0,74.51 0,48 C0,21.49 21.49,0 48,0 C74.51,0 96,21.49 96,48","fill-opacity":"0.5","fill":"#231F20"}}),_c('path',{attrs:{"d":"M68.332,49.1162 L36.209,67.4722 C35.352,67.9622 34.286,67.3432 34.286,66.3552 L34.286,29.6442 C34.286,28.6572 35.352,28.0382 36.209,28.5272 L68.332,46.8842 C69.196,47.3772 69.196,48.6232 68.332,49.1162","fill":"#FFFFFF"}})])])])])}
var PlayBtnvue_type_template_id_7f6c2668_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/vue-BPlayer/src/PlayBtn.vue?vue&type=template&id=7f6c2668&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/PlayBtn.vue?vue&type=script&lang=js&
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
/* harmony default export */ var PlayBtnvue_type_script_lang_js_ = ({
  props: {
    isPlaying: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    handleClick() {
      this.$emit('update:isPlaying', !this.isPlaying);
    }

  }
});
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/PlayBtn.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_PlayBtnvue_type_script_lang_js_ = (PlayBtnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/PlayBtn.vue?vue&type=style&index=0&id=7f6c2668&lang=scss&scoped=true&
var PlayBtnvue_type_style_index_0_id_7f6c2668_lang_scss_scoped_true_ = __webpack_require__("e1a7");

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/PlayBtn.vue






/* normalize component */

var PlayBtn_component = normalizeComponent(
  src_PlayBtnvue_type_script_lang_js_,
  PlayBtnvue_type_template_id_7f6c2668_scoped_true_render,
  PlayBtnvue_type_template_id_7f6c2668_scoped_true_staticRenderFns,
  false,
  null,
  "7f6c2668",
  null
  
)

/* harmony default export */ var PlayBtn = (PlayBtn_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.9.3@vue-loader/lib??vue-loader-options!./packages/vue-BPlayer/src/VuePlayer.vue?vue&type=script&lang=js&
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

/* harmony default export */ var VuePlayervue_type_script_lang_js_ = ({
  name: 'VueBPlayer',
  components: {
    BaseControls: BaseControls,
    PlayBtn: PlayBtn
  },
  props: {
    video: {
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
        muted: true,
        loop: false,
        preload: 'metadata',
        poster: '',
        volume: 1,
        autoplay: false
      },
      $video: null,
      $container: null,
      clearModeTimer: null,
      isStart: true,
      isPlaying: false,
      isClearMode: false
    };
  },

  watch: {
    isPlaying() {
      this.isStart = false;
      this.play();
      this.setClearModeTimer();
    }

  },
  computed: {
    vUrl() {
      let url = this.video.url || [];

      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }

      return url;
    },

    // 合并默认和用户自定义属性配置
    options() {
      return Object.assign({}, this.baseVideo, this.video);
    }

  },
  methods: {
    getUrlType(url) {
      let u = url.split('?')[0] + '?v=1';
      return u.match(/[^\.]+(?=\?)/) || 'mp4';
    },

    init() {
      this.$video = this.$refs.video;
      this.$container = this.$refs.container;
      this.isPlaying = true;
      this.$video.load();
      this.initPlayer();
      this.$emit('ready');
      setTimeout(() => {
        this.isPlaying = this.options.autoplay;
      }, 300);
    },

    initPlayer() {
      this.$video.volume = this.options.volume;
      setTimeout(() => {
        this.$video.muted = false;
      }, 500);
    },

    setClearModeTimer() {
      if (this.clearModeTimer) {
        clearTimeout(this.clearModeTimer);
      }

      this.clearModeTimer = setTimeout(() => {
        this.isClearMode = true;
        this.$emit('clearMode');
      }, 3000);
    },

    pauseAllVideo() {
      if (this.mutex) {
        const videos = document.querySelectorAll('video');
        videos.forEach(v => {
          v.pause && v.pause();
        });
      }
    },

    play() {
      if (this.isPlaying) {
        this.pauseAllVideo();
        this.$video.play();
      } else {
        this.$video.pause();
      }

      this.$emit('videoPlay', this.isPlaying);
    },

    handlePaused() {
      this.isPlaying = false;
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
    console.log('\n' + ' %c vue-bplayer v' + VERSION + ' %c https://github.com/boboyaohuo/vue-bplayer ' + '\n' + '\n', 'color: #fadfa3; background: #030307; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
  },

  updated() {},

  beforeDestroy() {
    this.$emit('beforeDestroy');
  },

  destroyed() {
    this.$emit('destroyed');
  }

});
// CONCATENATED MODULE: ./packages/vue-BPlayer/src/VuePlayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_VuePlayervue_type_script_lang_js_ = (VuePlayervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/vue-BPlayer/src/VuePlayer.vue?vue&type=style&index=0&id=02dbb42f&lang=scss&scoped=true&
var VuePlayervue_type_style_index_0_id_02dbb42f_lang_scss_scoped_true_ = __webpack_require__("1af1");

// CONCATENATED MODULE: ./packages/vue-BPlayer/src/VuePlayer.vue






/* normalize component */

var VuePlayer_component = normalizeComponent(
  src_VuePlayervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "02dbb42f",
  null
  
)

/* harmony default export */ var VuePlayer = (VuePlayer_component.exports);
// CONCATENATED MODULE: ./packages/vue-BPlayer/index.js


VuePlayer.install = function (Vue) {
  Vue.component(VuePlayer.name, VuePlayer);
};

/* harmony default export */ var vue_BPlayer = (VuePlayer);
// CONCATENATED MODULE: ./packages/index.js


const version = __webpack_require__("9224").version;

const components = [vue_BPlayer];

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
  vueBPlayer: vue_BPlayer
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.12.1@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "1af1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_02dbb42f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f928");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_02dbb42f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_02dbb42f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_VuePlayer_vue_vue_type_style_index_0_id_02dbb42f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2267":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "363a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6701":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_5d714ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2267");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_5d714ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_5d714ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_style_index_0_id_5d714ba4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8fd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_1f550239_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("363a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_1f550239_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_1f550239_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_BaseControls_vue_vue_type_style_index_0_id_1f550239_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-bplayer\",\"version\":\"0.1.0\",\"description\":\"This is a simple HTML5 video player based on Vue.\",\"main\":\"lib/vue-bplayer.umd.min.js\",\"private\":false,\"scripts\":{\"serve\":\"vue-cli-service serve\",\"build\":\"vue-cli-service build\",\"lib\":\"vue-cli-service build --target lib --name vue-bplayer --dest lib packages/index.js\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/boboyaohuo/Vue-BPlayer.git\"},\"keywords\":[\"vue\",\"vue-BPlayer\",\"BPlayer\",\"player\",\"video\",\"vue-video\"],\"author\":\"wujianbo\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/boboyaohuo/Vue-BPlayer/issues\"},\"homepage\":\"https://github.com/boboyaohuo/Vue-BPlayer#readme\",\"dependencies\":{\"vue\":\"^2.6.11\"},\"devDependencies\":{\"@vue/cli-plugin-babel\":\"^3.9.0\",\"@vue/cli-plugin-unit-mocha\":\"^3.9.0\",\"@vue/cli-service\":\"^3.9.0\",\"@vue/eslint-config-standard\":\"^4.0.0\",\"node-sass\":\"^4.12.0\",\"sass-loader\":\"^7.1.0\",\"vue-template-compiler\":\"^2.6.10\"}}");

/***/ }),

/***/ "bd19":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_58cdeb72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fa50");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_58cdeb72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_58cdeb72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_style_index_0_id_58cdeb72_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d01f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "e1a7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_7f6c2668_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d01f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_7f6c2668_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_7f6c2668_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_0_8_2_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_9_3_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_2_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_9_3_vue_loader_lib_index_js_vue_loader_options_PlayBtn_vue_vue_type_style_index_0_id_7f6c2668_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "e67d":
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

/***/ "f928":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fa50":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fc2c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=vue-bplayer.common.js.map