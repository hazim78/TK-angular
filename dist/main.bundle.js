webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".mainText{\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n <!--<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n   <span class=\"navbar-toggler-icon\")></span>\n </button>\n\n <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n   <ul class=\"navbar-nav mr-auto\">\n     <li class=\"nav-item active\">\n       <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n     </li>\n     <li class=\"nav-item\">\n       <a class=\"nav-link\" href=\"#\">Link</a>\n     </li>\n     <li class=\"nav-item\">\n       <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n     </li>\n     <li class=\"nav-item dropdown\" ngbDropdown>\n       <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Category</a>\n       <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\n         <a class=\"dropdown-item\" href=\"#\">Angular</a>\n         <a class=\"dropdown-item\" href=\"#\">React</a>\n         <a class=\"dropdown-item\" href=\"#\">Firebase</a>\n       </div>\n     </li>\n   </ul>\n </div>-->\n</nav>\n<div>\n  <h1 class=\"mainText\">TIMEKEEPER.my</h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <total-list *ngIf=\"this.lid\" [lid]=\"this.lid\"></total-list>\n  </div>\n  <div class=\"col-md-4\">\n    <log-list *ngIf=\"this.lid\" [lid]=\"this.lid\"></log-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app-navbar/app-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppNavbarComponent = /** @class */ (function () {
    function AppNavbarComponent(db, modalService, route) {
        var _this = this;
        this.db = db;
        this.modalService = modalService;
        this.route = route;
        console.log('Called Constructor');
        this.route.queryParams.subscribe(function (params) {
            _this.lid = params['lid'];
            console.log(_this.lid);
        });
    }
    AppNavbarComponent.prototype.ngOnInit = function () {
    };
    AppNavbarComponent.prototype.startDay = function () {
        console.log("Select date:" + this.date);
        this.year = '2018';
        this.month = '3';
        this.day = '29';
    };
    AppNavbarComponent.prototype.checkIn = function () {
        var _this = this;
        console.log(this.year);
        console.log(this.month);
        console.log(this.day);
        console.log(this.contractIn);
        console.log(this.timeOut);
        this.getTotal('/1/total/')
            .subscribe(function (result) {
            _this.totalIn = result[2],
                _this.expireSoon = result[1],
                _this.expire = result[0],
                console.log("Old Total:" + result);
            if (_this.contractIn == "Expired") {
                _this.expire++;
            }
            else if (_this.contractIn == "About Expire") {
                _this.expireSoon++;
            }
            else if (_this.contractIn == "Valid") {
                _this.totalIn++;
            }
            else { }
            ;
            var newUpdate = {};
            newUpdate['/staff/' + _this.year + '/' + _this.month + '/' + _this.day + '/total'] =
                {
                    totalIn: _this.totalIn,
                    expire: _this.expire,
                    expireSoon: _this.expireSoon
                };
            _this.contractIn = null;
            console.log(_this.contractIn);
            _this.db.object('/').update(newUpdate);
        });
    };
    AppNavbarComponent.prototype.getTotal = function (listPath) {
        console.log("Triggered");
        return this.db.list(listPath).valueChanges();
    };
    AppNavbarComponent.prototype.checkOut = function () {
        var _this = this;
        this.upDate = this.db.database.ref('/staff/' + this.year + '/' + this.month + '/' + this.day + '/users/' + this.name + '/').remove();
        if (this.contractOut == 'Expired') {
            console.log("Push Expired Notice");
        }
        else if (this.contractOut == 'About Expire') {
            console.log("Push About Expired Notice");
        }
        console.log(this.contractOut);
        this.getTotal('/staff/' + this.year + '/' + this.month + '/' + this.day + '/total/')
            .subscribe(function (result) {
            _this.totalIn = result[2],
                _this.expireSoon = result[1],
                _this.expire = result[0],
                console.log("Old Total:" + result);
            if (_this.contractOut == "Expired") {
                _this.expire--;
            }
            else if (_this.contractOut == "About Expire") {
                _this.expireSoon--;
            }
            else if (_this.contractOut == "Valid") {
                _this.totalIn--;
            }
            else { }
            var newUpdate = {};
            newUpdate['/staff/' + _this.year + '/' + _this.month + '/' + _this.day + '/total'] =
                {
                    totalIn: _this.totalIn,
                    expire: _this.expire,
                    expireSoon: _this.expireSoon
                };
            _this.contractOut = null;
            console.log(_this.contractOut);
            _this.db.object('/').update(newUpdate);
        });
    };
    AppNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/app-navbar/app-navbar.component.html"),
            styles: [__webpack_require__("./src/app/app-navbar/app-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], AppNavbarComponent);
    return AppNavbarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_navbar_app_navbar_component__ = __webpack_require__("./src/app/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__courses_list_courses_list_component__ = __webpack_require__("./src/app/courses-list/courses-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__total_list_total_list_component__ = __webpack_require__("./src/app/total-list/total-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__log_list_log_list_component__ = __webpack_require__("./src/app/log-list/log-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__total_list_total_list_component__["a" /* TotalListComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__courses_list_courses_list_component__["a" /* CoursesListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__total_list_total_list_component__["a" /* TotalListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__log_list_log_list_component__["a" /* LogListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/courses-list/courses-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row state-overview\">\n  <div class=\"col-lg-3 col-sm-6\">\n    <h1 class=\"count\">495</h1>\n    <p>New Users</p>\n  </div>\n</div>\n<ul>\n  <div *ngFor=\"let course of coursesObservable | async\">\n    <ngb-alert type=\"info\" [dismissible]=\"false\">\n      <h3><a href=\"#\">{{course.title}}</a></h3>\n      <p>{{course.description}}</p>\n      <div>\n        <a href=\"{{course.url}}\" target=\"_blank\" class=\"btn btn-danger\"> Go To Course</a>\n      </div>\n    </ngb-alert>\n  </div>\n</ul>\n"

/***/ }),

/***/ "./src/app/courses-list/courses-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoursesListComponent = /** @class */ (function () {
    function CoursesListComponent(db) {
        this.db = db;
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        this.coursesObservable = this.Courses('/courses');
        console.log(this.coursesObservable);
    };
    CoursesListComponent.prototype.Courses = function (listPath) {
        return this.db.list(listPath).valueChanges();
    };
    CoursesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'courses-list',
            template: __webpack_require__("./src/app/courses-list/courses-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], CoursesListComponent);
    return CoursesListComponent;
}());



/***/ }),

/***/ "./src/app/log-list/log-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card mb-4 box-shadow\">\n    <div class=\"card-header\">\n      <h1>News</h1>\n    </div>\n    <ul class=\"list-group mb-3\" *ngFor=\"let item of list | async\">\n      <li class=\"list-group-item d-flex justify-content-between lh-condensed\">\n        <div class=\"text-danger\">\n          <h6 class=\"my-0\">{{item.name}}</h6>\n          <small class=\"my-0\">{{item.contract}}</small>\n        </div>\n        <span class=\"text-danger\"><img height=\"100px\" width=\"100px\" class=\"rounded-circle\" src=\"{{item.pic}}\"></span>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/log-list/log-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogListComponent = /** @class */ (function () {
    function LogListComponent(db) {
        this.db = db;
    }
    LogListComponent.prototype.ngOnInit = function () {
        console.log("Recieved:" + this.lid);
        this.year = '2018';
        this.month = '3';
        this.day = '29';
        this.list = this.lists('/' + this.lid + '/expired/');
        console.log("Table:" + this.list);
    };
    LogListComponent.prototype.lists = function (route) {
        return this.db.list(route).valueChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], LogListComponent.prototype, "lid", void 0);
    LogListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'log-list',
            template: __webpack_require__("./src/app/log-list/log-list.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LogListComponent);
    return LogListComponent;
}());



/***/ }),

/***/ "./src/app/total-list/total-list.component.css":
/***/ (function(module, exports) {

module.exports = ".total{\n  font-size: 100pt;\n  font-weight: bold ;\n}\n.totalSub{\n  font-size: 50pt;\n  font-weight: bold ;\n}\n"

/***/ }),

/***/ "./src/app/total-list/total-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card-deck mb-3 text-center\">\n  <div class=\"card mb-4 box-shadow\">\n    <div class=\"card-header\">\n      <h1>Site:{{this.lid}} | Total In</h1>\n    </div>\n    <div class=\"card-body\">\n      <span class=\"total\">{{totalIn}}</span>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <div class=\"card-deck mb-3 text-center\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <h1>Expire Soon</h1>\n        </div>\n        <div class=\"card-body\">\n            <span class=\"totalSub\">{{expireSoon}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"card-deck mb-3 text-center\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-header\">\n          <h1>Expired</h1>\n        </div>\n        <div class=\"card-body\">\n            <span class=\"totalSub\">{{expire}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/total-list/total-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TotalListComponent = /** @class */ (function () {
    function TotalListComponent(db, route) {
        this.db = db;
        this.route = route;
    }
    TotalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Recieved:" + this.lid);
        this.coursesObservable = this.Courses('/' + this.lid + '/total/')
            .subscribe(function (result) {
            _this.totalIn = result['totalIn'],
                _this.expireSoon = result['expireSoon'],
                _this.expire = result['expire'],
                console.log(result);
        });
    };
    TotalListComponent.prototype.Courses = function (listPath) {
        return this.db.object(listPath).valueChanges();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TotalListComponent.prototype, "lid", void 0);
    TotalListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'total-list',
            template: __webpack_require__("./src/app/total-list/total-list.component.html"),
            styles: [__webpack_require__("./src/app/total-list/total-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], TotalListComponent);
    return TotalListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyAjGyF5CPZHWmCimWPc9gzF0sCCWbNHk0k",
        authDomain: "tk-angular.firebaseapp.com",
        databaseURL: "https://tk-angular.firebaseio.com",
        projectId: "tk-angular",
        storageBucket: "tk-angular.appspot.com",
        messagingSenderId: "41345624654"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map