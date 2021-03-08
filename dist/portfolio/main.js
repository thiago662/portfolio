(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thiago/Code/playground/portfolio/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");


class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 15, vars: 0, consts: [[1, "header"], [1, "nav-logo"], ["type", "checkbox", "id", "nav-btn", 1, "nav-btn"], ["for", "nav-btn", 1, "nav-icon"], [1, "nav"], [1, "nav-item"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "LOGO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ICON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Our Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Careers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".nav[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  overflow: hidden;\n  max-height: 0;\n}\n\n.nav-btn[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-btn[_ngcontent-%COMP%]:checked    ~ .nav[_ngcontent-%COMP%] {\n  max-height: 240px;\n}\n\n.nav-icon[_ngcontent-%COMP%] {\n  float: right;\n}\n\n@media (min-width: 48em) {\n  .nav-item[_ngcontent-%COMP%] {\n    float: left;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    float: right;\n    max-height: none;\n  }\n\n  .nav-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBR0E7RUFDSTtJQUNJLFdBQUE7RUFBTjs7RUFFRTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQUNOOztFQUNFO0lBQ0ksYUFBQTtFQUVOO0FBQ0Y7O0FBQ0EsYUFBQSIsImZpbGUiOiJuYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LWhlaWdodDogMDtcbn1cblxuLm5hdi1idG4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uYXYtYnRuOmNoZWNrZWQgfiAubmF2IHtcbiAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbn1cblxuLm5hdi1pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5AbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuICAgIC5uYXYtaXRlbSB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAubmF2IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xuICAgIH1cbiAgICAubmF2LWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyogT1JJR0lOQUwgKi9cblxuLy8gYm9keSB7XG4vLyAgICAgbWFyZ2luOiAwO1xuLy8gICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcbi8vICAgfVxuICBcbi8vICAgYSB7XG4vLyAgICAgY29sb3I6ICMwMDA7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIGhlYWRlciAqL1xuICBcbi8vICAgLmhlYWRlciB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgICBib3gtc2hhZG93OiAxcHggMXB4IDRweCAwIHJnYmEoMCwwLDAsLjEpO1xuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICB6LWluZGV4OiAzO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyIHVsIHtcbi8vICAgICBtYXJnaW46IDA7XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBsaXN0LXN0eWxlOiBub25lO1xuLy8gICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlciBsaSBhIHtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XG4vLyAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Y0ZjRmNDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXIgbGkgYTpob3Zlcixcbi8vICAgLmhlYWRlciAubWVudS1idG46aG92ZXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXIgLmxvZ28ge1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGZsb2F0OiBsZWZ0O1xuLy8gICAgIGZvbnQtc2l6ZTogMmVtO1xuLy8gICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbi8vICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIG1lbnUgKi9cbiAgXG4vLyAgIC5oZWFkZXIgLm1lbnUge1xuLy8gICAgIGNsZWFyOiBib3RoO1xuLy8gICAgIG1heC1oZWlnaHQ6IDA7XG4vLyAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuMnMgZWFzZS1vdXQ7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIG1lbnUgaWNvbiAqL1xuICBcbi8vICAgLmhlYWRlciAubWVudS1pY29uIHtcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICAgIGZsb2F0OiByaWdodDtcbi8vICAgICBwYWRkaW5nOiAyOHB4IDIwcHg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHVzZXItc2VsZWN0OiBub25lO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyIC5tZW51LWljb24gLm5hdmljb24ge1xuLy8gICAgIGJhY2tncm91bmQ6ICMzMzM7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgaGVpZ2h0OiAycHg7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjJzIGVhc2Utb3V0O1xuLy8gICAgIHdpZHRoOiAxOHB4O1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YmVmb3JlLFxuLy8gICAuaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YWZ0ZXIge1xuLy8gICAgIGJhY2tncm91bmQ6ICMzMzM7XG4vLyAgICAgY29udGVudDogJyc7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyIC5tZW51LWljb24gLm5hdmljb246YmVmb3JlIHtcbi8vICAgICB0b3A6IDVweDtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlciAubWVudS1pY29uIC5uYXZpY29uOmFmdGVyIHtcbi8vICAgICB0b3A6IC01cHg7XG4vLyAgIH1cbiAgXG4vLyAgIC8qIG1lbnUgYnRuICovXG4gIFxuLy8gICAuaGVhZGVyIC5tZW51LWJ0biB7XG4vLyAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51IHtcbi8vICAgICBtYXgtaGVpZ2h0OiAyNDBweDtcbi8vICAgfVxuICBcbi8vICAgLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb24gLm5hdmljb24ge1xuLy8gICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICB9XG4gIFxuLy8gICAuaGVhZGVyIC5tZW51LWJ0bjpjaGVja2VkIH4gLm1lbnUtaWNvbiAubmF2aWNvbjpiZWZvcmUge1xuLy8gICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uIC5uYXZpY29uOmFmdGVyIHtcbi8vICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4vLyAgIH1cbiAgXG4vLyAgIC5oZWFkZXIgLm1lbnUtYnRuOmNoZWNrZWQgfiAubWVudS1pY29uOm5vdCguc3RlcHMpIC5uYXZpY29uOmJlZm9yZSxcbi8vICAgLmhlYWRlciAubWVudS1idG46Y2hlY2tlZCB+IC5tZW51LWljb246bm90KC5zdGVwcykgLm5hdmljb246YWZ0ZXIge1xuLy8gICAgIHRvcDogMDtcbi8vICAgfVxuICBcbi8vICAgLyogNDhlbSA9IDc2OHB4ICovXG4gIFxuLy8gICBAbWVkaWEgKG1pbi13aWR0aDogNDhlbSkge1xuLy8gICAgIC5oZWFkZXIgbGkge1xuLy8gICAgICAgZmxvYXQ6IGxlZnQ7XG4vLyAgICAgfVxuLy8gICAgIC5oZWFkZXIgbGkgYSB7XG4vLyAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4vLyAgICAgfVxuLy8gICAgIC5oZWFkZXIgLm1lbnUge1xuLy8gICAgICAgY2xlYXI6IG5vbmU7XG4vLyAgICAgICBmbG9hdDogcmlnaHQ7XG4vLyAgICAgICBtYXgtaGVpZ2h0OiBub25lO1xuLy8gICAgIH1cbi8vICAgICAuaGVhZGVyIC5tZW51LWljb24ge1xuLy8gICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICB9XG4vLyAgIH1cbiAgIl19 */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map