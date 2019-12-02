(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

    /***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
    /*!*************************************************!*\
      !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
      \*************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    var map = {
        "./log": "./node_modules/webpack/hot/log.js"
    };
    
    
    function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
    }
    function webpackContextResolve(req) {
        var id = map[req];
        if(!(id + 1)) { // check for number or string
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        }
        return id;
    }
    webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
    };
    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";
    
    /***/ }),
    
    /***/ "./shared/helpers/webComponents.helper.ts":
    /*!************************************************!*\
      !*** ./shared/helpers/webComponents.helper.ts ***!
      \************************************************/
    /*! exports provided: addElementToRef, addScriptTag */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addElementToRef", function() { return addElementToRef; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addScriptTag", function() { return addScriptTag; });
    var addElementToRef = function (webComponent, clear, element) {
        if (clear) {
            document.getElementById(webComponent.parent).innerHTML = '';
        }
        var content = (element || document).querySelector("#" + webComponent.parent);
        content.insertAdjacentHTML(webComponent.position, webComponent.html);
    };
    var addScriptTag = function (names) {
        (names || []).forEach(function (webComponent) {
            var scriptId = webComponent + "_script";
            var tmpScript = document.getElementById(scriptId);
            if (!tmpScript) {
                var scriptTag = document.createElement("script");
                scriptTag.setAttribute('src', "assets/web-components/" + webComponent + "/main.js");
                scriptTag.setAttribute('type', 'text/javascript');
                scriptTag.setAttribute('id', webComponent + "_script");
                document.body.appendChild(scriptTag);
            }
        });
    };
    
    
    /***/ }),
    
    /***/ "./src/$$_lazy_route_resource lazy recursive":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
        });
    }
    webpackEmptyAsyncContext.keys = function() { return []; };
    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    
    /***/ }),
    
    /***/ "./src/app/app.component.css":
    /*!***********************************!*\
      !*** ./src/app/app.component.css ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"
    
    /***/ }),
    
    /***/ "./src/app/app.component.html":
    /*!************************************!*\
      !*** ./src/app/app.component.html ***!
      \************************************/
    /*! no static exports found */
    /***/ (function(module, exports) {
    
    module.exports = "<h1>BUILD TEMPLATE</h1>\n<button (click)=\"addNewComponent()\">Add WC</button>\n<button (click)=\"createTemplate()\">Create Template</button>\n<div id=\"page-view\"></div>\n\n"
    
    /***/ }),
    
    /***/ "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /*! exports provided: AppComponent */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var shared_helpers_webComponents_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shared/helpers/webComponents.helper */ "./shared/helpers/webComponents.helper.ts");
    /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
    
    
    
    
    var AppComponent = /** @class */ (function () {
        function AppComponent(_httpClient) {
            this._httpClient = _httpClient;
            this.title = 'build-template';
        }
        AppComponent.prototype.ngOnInit = function () {
            this.addComponent('Titulo de componente 0');
        };
        AppComponent.prototype.addComponent = function (title) {
            Object(shared_helpers_webComponents_helper__WEBPACK_IMPORTED_MODULE_2__["addElementToRef"])({
                html: "<wc-example-app title=\"" + title + "\"><wc-example-app/>",
                position: 'beforeend',
                parent: 'page-view'
            });
            Object(shared_helpers_webComponents_helper__WEBPACK_IMPORTED_MODULE_2__["addScriptTag"])(['wc-example-app']);
        };
        AppComponent.prototype.addNewComponent = function () {
            var number = document.querySelectorAll('#page-view > wc-example-app').length;
            this.addComponent("Titulo de componente " + number++);
        };
        AppComponent.prototype.createTemplate = function () {
            var htmlTmpl = document.querySelectorAll('#page-view > *');
            htmlTmpl.forEach(function (elem) {
                while (elem.hasChildNodes()) {
                    elem.removeChild(elem.lastChild);
                }
            });
            var htmlString = document.querySelector('#page-view').innerHTML;
            this._httpClient.post('http://127.0.0.1:8002/mkhtml', {
                html: {
                    name: 'template',
                    content: htmlString
                }
            })
                .subscribe(function (data) { return console.log(data); });
        };
        AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                selector: 'app-root',
                template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
                styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
            }),
            tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
        ], AppComponent);
        return AppComponent;
    }());
    
    
    
    /***/ }),
    
    /***/ "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: AppModule */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
    /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
    /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
    /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    
    
    
    
    
    var AppModule = /** @class */ (function () {
        function AppModule() {
        }
        AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            })
        ], AppModule);
        return AppModule;
    }());
    
    
    
    /***/ }),
    
    /***/ "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
    // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.
    var environment = {
        production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
    
    
    /***/ }),
    
    /***/ "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
    /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
    /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
    
    
    
    
    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(function (err) { return console.error(err); });
    
    
    /***/ }),
    
    /***/ 0:
    /*!************************************************************************************!*\
      !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
      \************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! C:\Users\Daniel\Documents\proyectos\build-template\node_modules\webpack-dev-server\client\index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
    module.exports = __webpack_require__(/*! C:\Users\Daniel\Documents\proyectos\build-template\src\main.ts */"./src/main.ts");
    
    
    /***/ })
    
    },[[0,"runtime","vendor"]]]);
    //# sourceMappingURL=main.js.map