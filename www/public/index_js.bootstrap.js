"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwww"] = self["webpackChunkwww"] || []).push([["index_js"],{

/***/ "../pkg/rusty_snake.js":
/*!*****************************!*\
  !*** ../pkg/rusty_snake.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   World: () => (/* binding */ World),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   initSync: () => (/* binding */ initSync)\n/* harmony export */ });\nlet wasm;\n\nconst cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );\n\nif (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst WorldFinalization = (typeof FinalizationRegistry === 'undefined')\n    ? { register: () => {}, unregister: () => {} }\n    : new FinalizationRegistry(ptr => wasm.__wbg_world_free(ptr >>> 0));\n/**\n*/\nclass World {\n\n    static __wrap(ptr) {\n        ptr = ptr >>> 0;\n        const obj = Object.create(World.prototype);\n        obj.__wbg_ptr = ptr;\n        WorldFinalization.register(obj, obj.__wbg_ptr, obj);\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.__wbg_ptr;\n        this.__wbg_ptr = 0;\n        WorldFinalization.unregister(this);\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        wasm.__wbg_world_free(ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get width() {\n        const ret = wasm.__wbg_get_world_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set width(arg0) {\n        wasm.__wbg_set_world_width(this.__wbg_ptr, arg0);\n    }\n    /**\n    * @returns {World}\n    */\n    static new() {\n        const ret = wasm.world_new();\n        return World.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = wasm.__wbg_get_world_width(this.__wbg_ptr);\n        return ret >>> 0;\n    }\n}\n\nasync function __wbg_load(module, imports) {\n    if (typeof Response === 'function' && module instanceof Response) {\n        if (typeof WebAssembly.instantiateStreaming === 'function') {\n            try {\n                return await WebAssembly.instantiateStreaming(module, imports);\n\n            } catch (e) {\n                if (module.headers.get('Content-Type') != 'application/wasm') {\n                    console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", e);\n\n                } else {\n                    throw e;\n                }\n            }\n        }\n\n        const bytes = await module.arrayBuffer();\n        return await WebAssembly.instantiate(bytes, imports);\n\n    } else {\n        const instance = await WebAssembly.instantiate(module, imports);\n\n        if (instance instanceof WebAssembly.Instance) {\n            return { instance, module };\n\n        } else {\n            return instance;\n        }\n    }\n}\n\nfunction __wbg_get_imports() {\n    const imports = {};\n    imports.wbg = {};\n    imports.wbg.__wbindgen_throw = function(arg0, arg1) {\n        throw new Error(getStringFromWasm0(arg0, arg1));\n    };\n\n    return imports;\n}\n\nfunction __wbg_init_memory(imports, maybe_memory) {\n\n}\n\nfunction __wbg_finalize_init(instance, module) {\n    wasm = instance.exports;\n    __wbg_init.__wbindgen_wasm_module = module;\n    cachedUint8Memory0 = null;\n\n\n    return wasm;\n}\n\nfunction initSync(module) {\n    if (wasm !== undefined) return wasm;\n\n    const imports = __wbg_get_imports();\n\n    __wbg_init_memory(imports);\n\n    if (!(module instanceof WebAssembly.Module)) {\n        module = new WebAssembly.Module(module);\n    }\n\n    const instance = new WebAssembly.Instance(module, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\nasync function __wbg_init(input) {\n    if (wasm !== undefined) return wasm;\n\n    if (typeof input === 'undefined') {\n        input = new URL(/* asset import */ __webpack_require__(/*! rusty_snake_bg.wasm */ \"../pkg/rusty_snake_bg.wasm\"), __webpack_require__.b);\n    }\n    const imports = __wbg_get_imports();\n\n    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {\n        input = fetch(input);\n    }\n\n    __wbg_init_memory(imports);\n\n    const { instance, module } = await __wbg_load(await input, imports);\n\n    return __wbg_finalize_init(instance, module);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__wbg_init);\n\n\n//# sourceURL=webpack://www/../pkg/rusty_snake.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var rusty_snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rusty_snake */ \"../pkg/rusty_snake.js\");\n\n\n\n\n\n(0,rusty_snake__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(_ => {\n\tconst CELL_SIZE = 20;\n\n\tconst world = rusty_snake__WEBPACK_IMPORTED_MODULE_0__.World.new();\n\tconst worldWidth = world.width;\n\n\tconst canvas = document.getElementById(\"rusty-canvas\");\n\tconst ctx = canvas.getContext(\"2d\");\n\n\tcanvas.height = worldWidth * CELL_SIZE;\n\tcanvas.width = worldWidth * CELL_SIZE;\n\n\tfunction drawWorld() {\n\t\tctx.beginPath();\n\n\t\tfor (let x = 0; x < worldWidth + 1; x++) {\n\t\t\tctx.moveTo(CELL_SIZE * x, 0)\n\t\t\tctx.lineTo(CELL_SIZE * x, worldWidth * CELL_SIZE)\n\t\t}\n\n\t\tfor (let y = 0; y < worldWidth + 1; y++) {\n\t\t\tctx.moveTo(0, CELL_SIZE * y)\n\t\t\tctx.lineTo(worldWidth * CELL_SIZE, CELL_SIZE * y)\n\t\t}\n\n\n\t\tctx.stroke();\n\t}\n\n\tdrawWorld();\n})\n\n\n//# sourceURL=webpack://www/./index.js?");

/***/ }),

/***/ "../pkg/rusty_snake_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/rusty_snake_bg.wasm ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91ce76d7cf1250c17535.wasm\";\n\n//# sourceURL=webpack://www/../pkg/rusty_snake_bg.wasm?");

/***/ })

}]);