(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/FVd":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TodoListComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1);
} }
class TodoListComponent {
    constructor() {
        this.items = ['Task1', 'Task2', 'Task3', 'Task4'];
    }
    ;
    ngOnInit() {
    }
}
TodoListComponent.ɵfac = function TodoListComponent_Factory(t) { return new (t || TodoListComponent)(); };
TodoListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoListComponent, selectors: [["app-todo-list"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function TodoListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TodoListComponent_li_1_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\r\n    \r\n    width:35%;\r\n    padding-top:1rem ;\r\n    padding-bottom:1rem ;\r\n  \r\n    margin:0 auto;\r\n    background-color: rgba(177, 162, 101, 0.945);\r\n    font-size: 2rem;\r\n    border-radius:10% ;\r\n}\r\nol[_ngcontent-%COMP%]{\r\n    padding-left:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksU0FBUztJQUNULGlCQUFpQjtJQUNqQixvQkFBb0I7O0lBRXBCLGFBQWE7SUFDYiw0Q0FBNEM7SUFDNUMsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XHJcbiAgICBcclxuICAgIHdpZHRoOjM1JTtcclxuICAgIHBhZGRpbmctdG9wOjFyZW0gO1xyXG4gICAgcGFkZGluZy1ib3R0b206MXJlbSA7XHJcbiAgXHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE2MiwgMTAxLCAwLjk0NSk7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjEwJSA7XHJcbn1cclxub2x7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-list',
                templateUrl: './todo-list.component.html',
                styleUrls: ['./todo-list.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell pc\Desktop\first\src\main.ts */"zUnb");


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

/***/ "G1N2":
/*!****************************************!*\
  !*** ./src/app/todo/todo.component.ts ***!
  \****************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoComponent {
    constructor() { }
    ngOnInit() {
    }
}
TodoComponent.ɵfac = function TodoComponent_Factory(t) { return new (t || TodoComponent)(); };
TodoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoComponent, selectors: [["app-todo"]], decls: 2, vars: 0, template: function TodoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "todo wors!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo',
                templateUrl: './todo.component.html',
                styleUrls: ['./todo.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _todo_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo-header/todo-header.component */ "zFRX");
/* harmony import */ var _todo_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/todo-input/todo-input.component */ "TJmV");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "/FVd");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "aG+2");






class AppComponent {
    constructor() {
        this.title = 'first';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-todo-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-todo-input");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-todo-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-todo-footer");
    } }, directives: [_todo_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_1__["TodoHeaderComponent"], _todo_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_2__["TodoInputComponent"], _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_3__["TodoListComponent"], _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_4__["TodoFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TJmV":
/*!*********************************************************!*\
  !*** ./src/app/todo/todo-input/todo-input.component.ts ***!
  \*********************************************************/
/*! exports provided: TodoInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoInputComponent", function() { return TodoInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoInputComponent {
    constructor() { }
    ngOnInit() {
    }
}
TodoInputComponent.ɵfac = function TodoInputComponent_Factory(t) { return new (t || TodoInputComponent)(); };
TodoInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoInputComponent, selectors: [["app-todo-input"]], decls: 1, vars: 0, consts: [["type", "text"]], template: function TodoInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
    } }, styles: ["input[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:50%;\r\n    height:2rem;\r\n    border-radius:10%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWlucHV0L3RvZG8taW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1pbnB1dC90b2RvLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6NTAlO1xyXG4gICAgaGVpZ2h0OjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOjEwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-input',
                templateUrl: './todo-input.component.html',
                styleUrls: ['./todo-input.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo/todo.component */ "G1N2");
/* harmony import */ var _todo_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo/todo-header/todo-header.component */ "zFRX");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "/FVd");
/* harmony import */ var _todo_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todo/todo-input/todo-input.component */ "TJmV");
/* harmony import */ var _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./todo/todo-footer/todo-footer.component */ "aG+2");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
        _todo_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_5__["TodoHeaderComponent"],
        _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"],
        _todo_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_7__["TodoInputComponent"],
        _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__["TodoFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _todo_todo_component__WEBPACK_IMPORTED_MODULE_4__["TodoComponent"],
                    _todo_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_5__["TodoHeaderComponent"],
                    _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"],
                    _todo_todo_input_todo_input_component__WEBPACK_IMPORTED_MODULE_7__["TodoInputComponent"],
                    _todo_todo_footer_todo_footer_component__WEBPACK_IMPORTED_MODULE_8__["TodoFooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aG+2":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-footer/todo-footer.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoFooterComponent", function() { return TodoFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoFooterComponent {
    constructor() {
        this.pa = 4;
    }
    ngOnInit() {
    }
}
TodoFooterComponent.ɵfac = function TodoFooterComponent_Factory(t) { return new (t || TodoFooterComponent)(); };
TodoFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoFooterComponent, selectors: [["app-todo-footer"]], decls: 2, vars: 1, template: function TodoFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total items:", ctx.pa, "");
    } }, styles: ["p[_ngcontent-%COMP%]{\r\n    display:inline-block;\r\n    width:30%;\r\n    padding:1rem;\r\n    height:2rem;\r\n    background-color: rgba(89, 49, 128, 0.787);\r\n    color:white;\r\n    font-size: 1.5rem;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWZvb3Rlci90b2RvLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0lBQ3BCLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1mb290ZXIvdG9kby1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIGhlaWdodDoycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4OSwgNDksIDEyOCwgMC43ODcpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-footer',
                templateUrl: './todo-footer.component.html',
                styleUrls: ['./todo-footer.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zFRX":
/*!***********************************************************!*\
  !*** ./src/app/todo/todo-header/todo-header.component.ts ***!
  \***********************************************************/
/*! exports provided: TodoHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoHeaderComponent", function() { return TodoHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TodoHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
TodoHeaderComponent.ɵfac = function TodoHeaderComponent_Factory(t) { return new (t || TodoHeaderComponent)(); };
TodoHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodoHeaderComponent, selectors: [["app-todo-header"]], decls: 2, vars: 0, template: function TodoHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Todo list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    text-align:center;\r\n    color:white;\r\n    display:inline-block;\r\n    margin:0 auto;\r\n    padding:2%;\r\n    width:30%;\r\n    background:blueviolet;\r\n    border-radius:50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kby90b2RvLWhlYWRlci90b2RvLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFVBQVU7SUFDVixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1oZWFkZXIvdG9kby1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIHBhZGRpbmc6MiU7XHJcbiAgICB3aWR0aDozMCU7XHJcbiAgICBiYWNrZ3JvdW5kOmJsdWV2aW9sZXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodoHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todo-header',
                templateUrl: './todo-header.component.html',
                styleUrls: ['./todo-header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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