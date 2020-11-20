function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-shell></app-shell>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/event-create.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/event-create.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventCreateEventCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container *ngIf=\"!isFormVisible && !isEditMode\">\r\n    <div class=\"text-center\">\r\n        <button mat-raised-button color=\"primary\" style=\"width:150px;\"\r\n            (click)=\"btnAddEvent()\">\r\n            <mat-icon>add</mat-icon>\r\n            <span>&nbsp;Add Event</span>\r\n        </button>\r\n    </div>\r\n    <br />\r\n</ng-container>\r\n<ng-container *ngIf=\"isFormVisible || isEditMode\">\r\n    <mat-card class=\"mat-elevation-z6\">\r\n        <div>\r\n            <span>Event Num: </span>\r\n            <span>{{eventNum}}</span>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-6\">\r\n                <mat-form-field>\r\n                    <mat-label>Title</mat-label>\r\n                    <input matInput [formControl]=\"titleFormControl\" placeholder=\"Event Title\" />\r\n                    <mat-error *ngIf=\"titleFormControl.hasError('required')\">\r\n                        Required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <mat-form-field>\r\n                    <mat-label>Follow up Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"datePicker\" [formControl]=\"dateFormControl\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #datePicker></mat-datepicker>\r\n                    <mat-error *ngIf=\"dateFormControl.hasError('required')\">\r\n                        Required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">\r\n                <div class=\"py-3\">\r\n                    <ngx-timepicker-field [defaultTime]=\"time\" (timeChanged)=\"setTime($event)\"></ngx-timepicker-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-notes-create\r\n            [isEditMode]=\"isEditMode\"\r\n            [eventID]=\"eventInformation.id\"\r\n            [savingEventID]=\"savingEventID\"\r\n            [isFormVisible]=\"isFormVisible\"\r\n            (doneSaving)=\"isFormVisible = false\">\r\n        </app-notes-create>\r\n        <br />\r\n        <mat-card-actions>\r\n            <div class=\"text-right\">\r\n                <button mat-button color=\"warn\" (click)=\"isFormVisible = false\">\r\n                    <mat-icon>close</mat-icon>\r\n                    <span>&nbsp;Close Event</span>\r\n                </button>\r\n                <button mat-button color=\"primary\" (click)=\"btnSave()\">\r\n                    <mat-icon>save</mat-icon>\r\n                    <span>&nbsp;Save Event</span>\r\n                </button>\r\n            </div>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/notes-create/notes-create.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/notes-create/notes-create.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventCreateNotesCreateNotesCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button mat-button color=\"primary\" style=\"float:right;\"\r\n    (click)=\"btnAddNote()\">\r\n    <mat-icon>add</mat-icon> Note\r\n</button>\r\n<h4>Notes</h4>\r\n<mat-divider></mat-divider>\r\n<div>\r\n    <ng-container *ngFor=\"let noteID of noteIDs; let i = index\">\r\n        <!-- <mat-divider></mat-divider> -->\r\n        <div class=\"row py-2\">\r\n            <div class=\"col-xs-6 col-sm-6 col-md-3 text-center\" style=\"padding-top:16px;\">\r\n                <mat-checkbox color=\"primary\" [formControl]=\"notePinnedFormControls[i]\">\r\n                    Pin\r\n                </mat-checkbox>\r\n            </div>\r\n            <div class=\"d-md-none col-xs-6 col-sm-6 text-center\" style=\"padding-top:12px;\">\r\n                <button mat-button color=\"warn\"\r\n                    (click)=\"btnDeleteNote(i)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete Note</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-sm-12 col-md-6\">\r\n                <mat-form-field>\r\n                    <mat-label>Date</mat-label>\r\n                    <input matInput [matDatepicker]=\"datePicker\" [formControl]=\"noteDateFormControls[i]\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"datePicker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #datePicker></mat-datepicker>\r\n                    <mat-error *ngIf=\"noteDateFormControls[i].hasError('required')\">\r\n                        Required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n            <div class=\"d-none d-md-block col-3 text-center\" style=\"padding-top:12px;\">\r\n                <button mat-button color=\"warn\"\r\n                    (click)=\"btnDeleteNote(i)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                    <span>Delete Note</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"col-12\">\r\n                <mat-form-field>\r\n                    <mat-label>Note</mat-label>\r\n                    <textarea matInput [formControl]=\"notesFormControls[i]\" placeholder=\"Enter Note . . .\"></textarea>\r\n                    <mat-error *ngIf=\"notesFormControls[i].hasError('required')\">\r\n                        Required\r\n                    </mat-error>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n    </ng-container>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view-notes/event-view-notes.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view-notes/event-view-notes.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventViewEventViewNotesEventViewNotesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h4>Notes</h4>\r\n<mat-divider></mat-divider>\r\n<ng-container *ngIf=\"notes && notes.length\">\r\n    <div *ngFor=\"let note of notes\">\r\n        <div class=\"my-2\">\r\n            <div class=\"date-label\">{{note.date}}</div>\r\n            <div [ngClass]=\"{'note-content': true, 'pinned-note': note.pinned}\">{{note.description}}</div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n    </div>\r\n</ng-container>\r\n<ng-container *ngIf=\"!notes || !notes.length\">\r\n    <div class=\"my-2\">\r\n        No notes for this event\r\n    </div>\r\n</ng-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEventViewEventViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-expansion-panel (afterExpand)=\"btnExpand()\" class=\"mat-elevation-z6\">\r\n    <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            <span>{{displayedTitle}}</span>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            <span>{{displayedDate}}</span>\r\n            <mat-icon>info</mat-icon>\r\n        </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ng-container *ngIf=\"eventInformation && !isEditMode\">\r\n        <app-event-view-notes [eventID]=\"eventInformation.id\">\r\n        </app-event-view-notes>\r\n        <br />\r\n        <mat-action-row>\r\n            <button mat-button color=\"primary\" (click)=\"isEditMode = !isEditMode\">\r\n                <mat-icon>create</mat-icon>\r\n                <span>&nbsp;Edit</span>\r\n            </button>\r\n            <button mat-button color=\"warn\" (click)=\"btnDelete()\">\r\n                <mat-icon>delete</mat-icon>\r\n                <span>&nbsp;Delete</span></button>\r\n        </mat-action-row>\r\n    </ng-container>\r\n    <app-event-create *ngIf=\"isEditMode\"\r\n        [eventInformation]=\"eventInformation\" [isEditMode]=\"true\"\r\n        (onClose)=\"isEditMode = !isEditMode\">\r\n    </app-event-create>\r\n    <ng-container *ngIf=\"!eventInformation\">\r\n        <mat-spinner></mat-spinner>\r\n    </ng-container>\r\n</mat-expansion-panel>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4\">\r\n        <app-about></app-about>\r\n    </div>\r\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8\">\r\n        <br />\r\n        <br />\r\n        <h2 class=\"text-center\">{{ greeting }}, {{ username }}</h2>\r\n        <br/>\r\n        <app-event-create></app-event-create>\r\n        <br/>\r\n        <mat-tab-group mat-stretch-tabs selectedIndex=\"1\">\r\n            <mat-tab label=\"Past\">\r\n                <ng-container *ngTemplateOutlet=\"listTemplate;context:pastEvents\"></ng-container>\r\n            </mat-tab>\r\n            <mat-tab label=\"Today\">\r\n                <ng-container *ngTemplateOutlet=\"listTemplate;context:todayEvents\"></ng-container>\r\n            </mat-tab>\r\n            <mat-tab label=\"Future\">\r\n                <ng-container *ngTemplateOutlet=\"listTemplate;context:futureEvents\"></ng-container>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n        <br/>\r\n        \r\n        <ng-template #listTemplate let-events=\"events\">\r\n            <div class=\"mx-3\">\r\n                <br />\r\n                <div *ngIf=\"!events || events.length === 0\">\r\n                    There are no events in the queue\r\n                </div>\r\n                <div *ngIf=\"events && events.length !== 0\">\r\n                    <ng-container *ngFor=\"let eventID of events\">\r\n                        <app-event-view\r\n                            [eventID]=\"eventID\">\r\n                        </app-event-view>\r\n                        <br />\r\n                    </ng-container>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br />\r\n<mat-card class=\"mat-elevation-z6\">\r\n    <h1>Event Scheduler</h1>\r\n    <br />\r\n    <mat-form-field>\r\n        <mat-label>Username</mat-label>\r\n        <input matInput [formControl]=\"usernameFormControl\" placeholder=\"John.Smith\" />\r\n        <mat-error *ngIf=\"usernameFormControl.hasError('required')\">\r\n            Required\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <br />\r\n    <mat-form-field>\r\n        <mat-label>Password</mat-label>\r\n        <input matInput [formControl]=\"passwordFormControl\" placeholder=\"••••••••\" type=\"password\" />\r\n        <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n            Required\r\n        </mat-error>\r\n        <mat-error *ngIf=\"passwordFormControl.hasError('password')\">\r\n            Must be 8+ characters with one upper, lower, number, special character\r\n        </mat-error>\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"isCreateAccountMode\">\r\n        <br />\r\n        <mat-form-field>\r\n            <mat-label>Confirm Password</mat-label>\r\n            <input matInput [formControl]=\"confirmPasswordFormControl\" placeholder=\"••••••••\" type=\"password\" />\r\n            <mat-error *ngIf=\"confirmPasswordFormControl.hasError('required')\">\r\n                Required\r\n            </mat-error>\r\n        </mat-form-field>\r\n    </ng-container>\r\n    <br />\r\n    <button mat-raised-button color=\"primary\" (click)=\"btnSubmit()\">\r\n        {{ isCreateAccountMode ? 'Create Account' : 'Login' }}\r\n    </button>\r\n    <br />\r\n    <br />\r\n    <button mat-button color=\"primary\" (click)=\"isCreateAccountMode = !isCreateAccountMode\">\r\n        {{ isCreateAccountMode ? 'Back to Login' : 'Create Account' }}\r\n    </button>\r\n    <br />\r\n</mat-card>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "Report Component Works!\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "Search Component Works!\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shell/shell.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shell/shell.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsShellShellComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-login *ngIf=\"isOnLogin()\"></app-login>\r\n<mat-drawer-container *ngIf=\"!isOnLogin()\" class=\"example-container\" autosize>\r\n    <!--\r\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\r\n        <mat-list>\r\n            <ng-container *ngFor=\"let link of sidenavLinks\">\r\n                <mat-list-item matRipple (click)=\"btnSidenav(link)\">\r\n                    {{link.label}}\r\n                </mat-list-item>\r\n                <mat-divider></mat-divider>\r\n            </ng-container>\r\n          </mat-list>\r\n    </mat-drawer>\r\n    -->\r\n\r\n    <mat-toolbar color=\"primary\">\r\n        <!--\r\n        <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\"\r\n            (click)=\"drawer.toggle()\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        -->\r\n        <img src=\"https://nathangawith.com/favicon.ico\" height=\"25px\">\r\n        <span>&nbsp;&nbsp;Event Scheduler</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <button *ngFor=\"let link of toolbarLinks\" mat-icon-button class=\"mr-5\"\r\n            [attr.aria-label]=\"link.label\" (click)=\"link.func()\">\r\n            <span>{{link.label}}&nbsp;</span>\r\n            <mat-icon>{{link.icon}}</mat-icon>\r\n        </button>\r\n    </mat-toolbar>\r\n    <br />\r\n    <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <br />\r\n</mat-drawer-container>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./guards/authentication.guard */
    "./src/app/guards/authentication.guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts");

    var NotFoundComponent = function NotFoundComponent(router) {
      _classCallCheck(this, NotFoundComponent);

      router.navigate(['/']);
    };

    NotFoundComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      template: ''
    })], NotFoundComponent);
    var routes = [{
      path: '',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'home',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'search',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"]
    }, {
      path: 'report',
      component: _components__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"]
    }, {
      path: '**',
      component: NotFoundComponent
    }].map(function (route) {
      if (route.path !== '') {
        return {
          path: route.path,
          component: route.component,
          canActivate: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"]]
        };
      }

      return route;
    });

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [NotFoundComponent],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./interceptors/authentication.interceptor */
    "./src/app/interceptors/authentication.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./interceptors/error.interceptor */
    "./src/app/interceptors/error.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components */
    "./src/app/components/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__["NgxMaterialTimepickerModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_4__["NgxMaterialTimepickerModule"]]
    })], MaterialModule);

    var EventSchedulerModule = function EventSchedulerModule() {
      _classCallCheck(this, EventSchedulerModule);
    };

    EventSchedulerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      declarations: [_components__WEBPACK_IMPORTED_MODULE_12__["EventViewNotesComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["EventCreateComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["NotesCreateComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["EventViewComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"]],
      imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], MaterialModule],
      providers: [_services__WEBPACK_IMPORTED_MODULE_13__["EventSchedulerService"], _services__WEBPACK_IMPORTED_MODULE_13__["UtilityService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_authentication_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthenticationInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
        useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
        multi: true
      }]
    })], EventSchedulerModule);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["ShellComponent"], _components__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], EventSchedulerModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/about/about.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/about/about.component.ts ***!
    \*****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppComponentsAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.cards = [];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cards = [{
            title: 'About the Developer',
            image: 'http://cdn.nathangawith.com/images/twitter_profile.png',
            text: "\nHello, my name is Nathan Gawith. I am a senior at UMKC and\ngraduating in December of 2020. This application was designed\nby me for my CS456 (Human Computer Interaction) course.\nYou can check out other web applications I have made at my website\n<a href=\"https://nathangawith.com/\" target=\"_blank\">https://nathangawith.com/</a>"
          }, {
            title: 'Testimonial',
            image: 'https://pbs.twimg.com/profile_images/857430767068004352/DshBij_v_400x400.jpg',
            text: "\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam incidunt id vel!\nEnim impedit fugit culpa esse, eveniet et soluta, iusto repellendus delectus dolor\nexercitationem non recusandae. Veniam, praesentium autem?\n<a href=\"http://thepicandbow.com/\" target=\"_blank\">http://thepicandbow.com/</a>"
          }];
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: "\n<ng-container *ngFor=\"let card of cards\">\n    <mat-card class=\"mat-elevation-z6 text-center\">\n        <div [innerHTML]=\"card.title\"></div>\n        <img style=\"border-radius:50%;\" width=\"100px\" [src]=\"card.image\">\n        <div [innerHTML]=\"card.text\"></div>\n    </mat-card>\n    <br />\n    <br />\n</ng-container>\n    "
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/components/event-create/event-create.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/event-create/event-create.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventCreateEventCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n\nbutton {\n  width: 96px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC1jcmVhdGUvQzpcXFVzZXJzXFxOYXRoYVxcRG9jdW1lbnRzXFxEZXNrdG9wXFxEZXNrdG9wMTFcXFVNS0NcXDIwMjFcXEZhbGxcXENTNDU2XFxldmVudC1zY2hlZHVsZXJcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnQtY3JlYXRlXFxldmVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL2V2ZW50LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgd2lkdGg6IDk2cHg7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDk2cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/event-create/event-create.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/event-create/event-create.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EventCreateComponent */

  /***/
  function srcAppComponentsEventCreateEventCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function () {
      return EventCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");

    var EventCreateComponent = /*#__PURE__*/function () {
      function EventCreateComponent(eventSchedulerService, utilityService) {
        _classCallCheck(this, EventCreateComponent);

        this.eventSchedulerService = eventSchedulerService;
        this.utilityService = utilityService;
        this.eventInformation = {
          id: null
        };
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.titleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.dateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.time = '12:00 AM';
      }

      _createClass(EventCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.titleFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.eventInformation.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
          this.dateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("".concat(this.eventInformation.date, "T00:00:00"), [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);

          if (this.isEditMode) {
            this.time = this.utilityService.formatTimeToString(this.eventInformation.time);
            this.eventNum = this.eventInformation.num;
          }
        }
      }, {
        key: "btnAddEvent",
        value: function btnAddEvent() {
          var _this = this;

          this.isFormVisible = true;
          this.eventSchedulerService.getNextEventNum().subscribe(function (resp) {
            _this.eventNum = resp;
          });
        }
      }, {
        key: "setTime",
        value: function setTime($event) {
          this.time = $event;
        }
      }, {
        key: "btnSave",
        value: function btnSave() {
          var _this2 = this;

          var event = {
            id: this.isEditMode ? this.eventInformation.id : null,
            title: this.titleFormControl.value,
            date: this.dateFormControl.value,
            time: this.time
          };
          (this.isEditMode ? this.eventSchedulerService.putEventUpdate(event) : this.eventSchedulerService.postEventCreate(event)).subscribe(function (eventID) {
            _this2.savingEventID = eventID;
          });
        }
      }, {
        key: "isFormVisible",
        get: function get() {
          return this.PisFormVisible;
        },
        set: function set(value) {
          this.PisFormVisible = value;

          if (value === false) {
            [this.titleFormControl, this.dateFormControl].forEach(function (x) {
              return x.setValue('');
            });
            this.onClose.next(true);
          }
        }
      }]);

      return EventCreateComponent;
    }();

    EventCreateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EventCreateComponent.prototype, "eventInformation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EventCreateComponent.prototype, "isEditMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], EventCreateComponent.prototype, "onClose", void 0);
    EventCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-event-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/event-create.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-create.component.scss */
      "./src/app/components/event-create/event-create.component.scss"))["default"]]
    })], EventCreateComponent);
    /***/
  },

  /***/
  "./src/app/components/event-create/notes-create/notes-create.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/event-create/notes-create/notes-create.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventCreateNotesCreateNotesCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC1jcmVhdGUvbm90ZXMtY3JlYXRlL0M6XFxVc2Vyc1xcTmF0aGFcXERvY3VtZW50c1xcRGVza3RvcFxcRGVza3RvcDExXFxVTUtDXFwyMDIxXFxGYWxsXFxDUzQ1NlxcZXZlbnQtc2NoZWR1bGVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50LWNyZWF0ZVxcbm90ZXMtY3JlYXRlXFxub3Rlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtY3JlYXRlL25vdGVzLWNyZWF0ZS9ub3Rlcy1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LWNyZWF0ZS9ub3Rlcy1jcmVhdGUvbm90ZXMtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIiwibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/event-create/notes-create/notes-create.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/components/event-create/notes-create/notes-create.component.ts ***!
    \********************************************************************************/

  /*! exports provided: NotesCreateComponent */

  /***/
  function srcAppComponentsEventCreateNotesCreateNotesCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotesCreateComponent", function () {
      return NotesCreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NotesCreateComponent = /*#__PURE__*/function () {
      function NotesCreateComponent(eventSchedulerService) {
        _classCallCheck(this, NotesCreateComponent);

        this.eventSchedulerService = eventSchedulerService;
        this.doneSaving = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.noteIDs = [];
        this.notesFormControls = [];
        this.noteDateFormControls = [];
        this.notePinnedFormControls = [];
      }

      _createClass(NotesCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          if (this.eventID) {
            var observable = this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(function (notes) {
              _this3.noteIDs = notes.map(function (note) {
                return note.id;
              });
              _this3.notesFormControls = notes.map(function (note) {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](note.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              });
              _this3.noteDateFormControls = notes.map(function (note) {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("".concat(note.date, "T00:00:00"), [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              });
              _this3.notePinnedFormControls = notes.map(function (note) {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](note.pinned, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
              });
              observable.unsubscribe();
            });
          }
        }
      }, {
        key: "saveNotes",
        value: function saveNotes(eventID) {
          var _this4 = this;

          var notes = this.noteIDs.map(function (noteID, i) {
            return {
              eventID: eventID,
              date: _this4.noteDateFormControls[i].value,
              description: _this4.notesFormControls[i].value,
              id: noteID,
              userID: null,
              pinned: _this4.notePinnedFormControls[i].value
            };
          });
          Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"]).apply(void 0, _toConsumableArray(notes.map(function (note) {
            return _this4.isEditMode && note.id ? _this4.eventSchedulerService.putNoteUpdate(note) : _this4.eventSchedulerService.postNoteCreate(note);
          }))).subscribe(function (resp) {
            return _this4.doneSaving.next(resp);
          });
        }
      }, {
        key: "btnAddNote",
        value: function btnAddNote() {
          this.noteIDs = [null].concat(this.noteIDs);
          this.notesFormControls = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])].concat(this.notesFormControls);
          this.noteDateFormControls = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])].concat(this.noteDateFormControls);
          this.notePinnedFormControls = [new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])].concat(this.notePinnedFormControls);
        }
      }, {
        key: "btnDeleteNote",
        value: function btnDeleteNote(index) {
          var noteID = this.noteIDs[index];

          var removeIndex = function removeIndex(arr, idx) {
            return arr.filter(function (_, i) {
              return i !== idx;
            });
          };

          this.noteIDs = removeIndex(this.noteIDs, index);
          this.notesFormControls = removeIndex(this.notesFormControls, index);
          this.noteDateFormControls = removeIndex(this.noteDateFormControls, index);
          this.notePinnedFormControls = removeIndex(this.notePinnedFormControls, index);

          if (noteID) {
            this.eventSchedulerService.deleteNote(noteID).subscribe(function (resp) {
              return console.log(resp);
            });
          }
        }
      }, {
        key: "savingEventID",
        set: function set(value) {
          if (value) {
            this.saveNotes(value);
          }
        }
      }, {
        key: "isFormVisible",
        set: function set(value) {
          if (value === false) {
            this.noteIDs = [];
            this.notesFormControls = [];
            this.noteDateFormControls = [];
            this.notePinnedFormControls = [];
          }
        }
      }]);

      return NotesCreateComponent;
    }();

    NotesCreateComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], NotesCreateComponent.prototype, "isEditMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], NotesCreateComponent.prototype, "eventID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], NotesCreateComponent.prototype, "savingEventID", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], NotesCreateComponent.prototype, "isFormVisible", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], NotesCreateComponent.prototype, "doneSaving", void 0);
    NotesCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-notes-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notes-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-create/notes-create/notes-create.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notes-create.component.scss */
      "./src/app/components/event-create/notes-create/notes-create.component.scss"))["default"]]
    })], NotesCreateComponent);
    /***/
  },

  /***/
  "./src/app/components/event-view/event-view-notes/event-view-notes.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/event-view/event-view-notes/event-view-notes.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventViewEventViewNotesEventViewNotesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".note-content {\n  white-space: pre-wrap;\n}\n\n.date-label {\n  float: right;\n  font-weight: 600;\n}\n\n.pinned-note {\n  background-color: #FAFAD2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC12aWV3L2V2ZW50LXZpZXctbm90ZXMvQzpcXFVzZXJzXFxOYXRoYVxcRG9jdW1lbnRzXFxEZXNrdG9wXFxEZXNrdG9wMTFcXFVNS0NcXDIwMjFcXEZhbGxcXENTNDU2XFxldmVudC1zY2hlZHVsZXJcXGNsaWVudC9zcmNcXGFwcFxcY29tcG9uZW50c1xcZXZlbnQtdmlld1xcZXZlbnQtdmlldy1ub3Rlc1xcZXZlbnQtdmlldy1ub3Rlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC12aWV3L2V2ZW50LXZpZXctbm90ZXMvZXZlbnQtdmlldy1ub3Rlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LXZpZXcvZXZlbnQtdmlldy1ub3Rlcy9ldmVudC12aWV3LW5vdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUtY29udGVudCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbn1cclxuXHJcbi5kYXRlLWxhYmVsIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5waW5uZWQtbm90ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUQyXHJcbn1cclxuIiwiLm5vdGUtY29udGVudCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cblxuLmRhdGUtbGFiZWwge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5waW5uZWQtbm90ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRDI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/event-view/event-view-notes/event-view-notes.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/event-view/event-view-notes/event-view-notes.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: EventViewNotesComponent */

  /***/
  function srcAppComponentsEventViewEventViewNotesEventViewNotesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventViewNotesComponent", function () {
      return EventViewNotesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventViewNotesComponent = /*#__PURE__*/function () {
      function EventViewNotesComponent(eventSchedulerService) {
        _classCallCheck(this, EventViewNotesComponent);

        this.eventSchedulerService = eventSchedulerService;
      }

      _createClass(EventViewNotesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.eventSchedulerService.getNotesForEventID(this.eventID).subscribe(function (resp) {
            _this5.notes = resp;
            _this5.notes = _this5.notes.filter(function (x) {
              return x.pinned;
            }).concat(_this5.notes.filter(function (x) {
              return !x.pinned;
            }));
          });
        }
      }]);

      return EventViewNotesComponent;
    }();

    EventViewNotesComponent.ctorParameters = function () {
      return [{
        type: src_app_services__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], EventViewNotesComponent.prototype, "eventID", void 0);
    EventViewNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-event-view-notes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-view-notes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view-notes/event-view-notes.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-view-notes.component.scss */
      "./src/app/components/event-view/event-view-notes/event-view-notes.component.scss"))["default"]]
    })], EventViewNotesComponent);
    /***/
  },

  /***/
  "./src/app/components/event-view/event-view.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/event-view/event-view.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEventViewEventViewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  width: 100%;\n}\n\n.mat-expansion-panel-header-title,\n.mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudC12aWV3L0M6XFxVc2Vyc1xcTmF0aGFcXERvY3VtZW50c1xcRGVza3RvcFxcRGVza3RvcDExXFxVTUtDXFwyMDIxXFxGYWxsXFxDUzQ1NlxcZXZlbnQtc2NoZWR1bGVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV2ZW50LXZpZXdcXGV2ZW50LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnQtdmlldy9ldmVudC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBRE1BOztFQUVJLGFBQUE7QUNISjs7QURNQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2V2ZW50LXZpZXcvZXZlbnQtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gLmV4YW1wbGUtYWN0aW9uLWJ1dHRvbnMge1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICAgIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG4iLCJidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/event-view/event-view.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/event-view/event-view.component.ts ***!
    \***************************************************************/

  /*! exports provided: EventViewComponent */

  /***/
  function srcAppComponentsEventViewEventViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventViewComponent", function () {
      return EventViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony import */


    var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventViewComponent = /*#__PURE__*/function () {
      function EventViewComponent(eventSchedulerService, utilityService) {
        _classCallCheck(this, EventViewComponent);

        this.eventSchedulerService = eventSchedulerService;
        this.utilityService = utilityService;
      }

      _createClass(EventViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayedTitle = this.eventID.title;
          this.displayedDate = this.utilityService.formatDateToString(new Date(this.eventID.date), this.eventID.time);
        }
      }, {
        key: "btnExpand",
        value: function btnExpand() {
          var _this6 = this;

          this.eventSchedulerService.getEvent(this.eventID.id).subscribe(function (resp) {
            resp.num = _this6.eventID.num;
            _this6.eventInformation = resp;
          });
        }
      }, {
        key: "btnDelete",
        value: function btnDelete() {
          this.eventSchedulerService.deleteEvent(this.eventID.id).subscribe(function (resp) {
            return console.log(resp);
          });
        }
      }]);

      return EventViewComponent;
    }();

    EventViewComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }, {
        type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], EventViewComponent.prototype, "eventID", void 0);
    EventViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-event-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/event-view/event-view.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./event-view.component.scss */
      "./src/app/components/event-view/event-view.component.scss"))["default"]]
    })], EventViewComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-card {\n  text-align: center;\n  width: 80%;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcTmF0aGFcXERvY3VtZW50c1xcRGVza3RvcFxcRGVza3RvcDExXFxVTUtDXFwyMDIxXFxGYWxsXFxDUzQ1NlxcZXZlbnQtc2NoZWR1bGVyXFxjbGllbnQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiIsIm1hdC1jYXJkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony import */


    var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(eventSchedulerService, utilityService) {
        var _this7 = this;

        _classCallCheck(this, HomeComponent);

        this.eventSchedulerService = eventSchedulerService;
        this.utilityService = utilityService;

        this.greeting = function () {
          var hour = new Date().getHours();
          return "Good ".concat(hour < 12 ? 'morning' : hour < 6 ? 'afternoon' : 'evening');
        }();

        this.username = function () {
          return _this7.utilityService.getToken().username;
        }();
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.eventSchedulerService.getApiInformation().subscribe(function (x) {
            return _this8.about = x;
          });
          this.eventSchedulerService.getEventIDs().subscribe(function (resp) {
            var today = _this8.utilityService.formatDateToString(new Date());

            var filterOnToday = function filterOnToday(f) {
              return resp.filter(function (x) {
                return f(_this8.utilityService.formatDateToString(new Date("".concat(x.date, "T00:00:00"))), today);
              });
            };

            _this8.pastEvents = {
              events: filterOnToday(function (date, t) {
                return date < t;
              })
            };
            _this8.todayEvents = {
              events: filterOnToday(function (date, t) {
                return date === t;
              })
            };
            _this8.futureEvents = {
              events: filterOnToday(function (date, t) {
                return date > t;
              }).reverse()
            };
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }, {
        type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/index.ts":
  /*!*************************************!*\
    !*** ./src/app/components/index.ts ***!
    \*************************************/

  /*! exports provided: EventViewNotesComponent, NotesCreateComponent, EventCreateComponent, EventViewComponent, ShellComponent, LoginComponent, HomeComponent, AboutComponent, SearchComponent, ReportComponent */

  /***/
  function srcAppComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _event_view_event_view_notes_event_view_notes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event-view/event-view-notes/event-view-notes.component */
    "./src/app/components/event-view/event-view-notes/event-view-notes.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventViewNotesComponent", function () {
      return _event_view_event_view_notes_event_view_notes_component__WEBPACK_IMPORTED_MODULE_1__["EventViewNotesComponent"];
    });
    /* harmony import */


    var _event_create_notes_create_notes_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./event-create/notes-create/notes-create.component */
    "./src/app/components/event-create/notes-create/notes-create.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotesCreateComponent", function () {
      return _event_create_notes_create_notes_create_component__WEBPACK_IMPORTED_MODULE_2__["NotesCreateComponent"];
    });
    /* harmony import */


    var _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./event-create/event-create.component */
    "./src/app/components/event-create/event-create.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventCreateComponent", function () {
      return _event_create_event_create_component__WEBPACK_IMPORTED_MODULE_3__["EventCreateComponent"];
    });
    /* harmony import */


    var _event_view_event_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./event-view/event-view.component */
    "./src/app/components/event-view/event-view.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventViewComponent", function () {
      return _event_view_event_view_component__WEBPACK_IMPORTED_MODULE_4__["EventViewComponent"];
    });
    /* harmony import */


    var _shell_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shell/shell.component */
    "./src/app/components/shell/shell.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
      return _shell_shell_component__WEBPACK_IMPORTED_MODULE_5__["ShellComponent"];
    });
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"];
    });
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"];
    });
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/components/about/about.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"];
    });
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"];
    });
    /* harmony import */


    var _report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./report/report.component */
    "./src/app/components/report/report.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return _report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"];
    });
    /***/

  },

  /***/
  "./src/app/components/login/login.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/login/login.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "* {\n  text-align: center;\n}\n\nmat-card {\n  width: 80%;\n  margin: auto;\n}\n\nmat-form-field {\n  width: 45%;\n}\n\nbutton {\n  width: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXE5hdGhhXFxEb2N1bWVudHNcXERlc2t0b3BcXERlc2t0b3AxMVxcVU1LQ1xcMjAyMVxcRmFsbFxcQ1M0NTZcXGV2ZW50LXNjaGVkdWxlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUFZLFlBQUE7QUNDaEI7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbioge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogODAlOyBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG59XHJcbiIsIioge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA0NSU7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiA0NSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");

    var passwordValidator = function passwordValidator(control) {
      var value = control.value ? control.value : '';

      var valueContainsCharacterInCharset = function valueContainsCharacterInCharset(arr) {
        return arr.split('').map(function (x) {
          return value.includes(x);
        }).includes(true);
      };

      var valid = value.length >= 8 && valueContainsCharacterInCharset('abcdefghijklmnopqrstuvwxyz') && valueContainsCharacterInCharset('ABCDEFGHIJKLMNOPQRSTUVWXYZ') && valueContainsCharacterInCharset('0123456789') && valueContainsCharacterInCharset('`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?');
      return valid ? null : {
        password: true
      };
    };

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(eventSchedulerService, utilityService, router) {
        _classCallCheck(this, LoginComponent);

        this.eventSchedulerService = eventSchedulerService;
        this.utilityService = utilityService;
        this.router = router;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, passwordValidator]);
        this.confirmPasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var token = this.utilityService.getToken();

          if (token && !token.isExpired()) {
            this.router.navigate(['/home']);
          } else {
            this.utilityService.deleteToken();
          }
        }
      }, {
        key: "btnSubmit",
        value: function btnSubmit() {
          var _this9 = this;

          if (this.isCreateAccountMode) {
            if (this.passwordFormControl.value !== this.confirmPasswordFormControl.value) {
              alert('Password and Confirm Password must match');
              return;
            }

            this.eventSchedulerService.postAuthCreateAccount(this.usernameFormControl.value, this.passwordFormControl.value).subscribe(function (resp) {
              if (resp) {
                _this9.isCreateAccountMode = false;

                _this9.btnSubmit();
              } else {
                alert('Error creating account');
              }
            }, function (err) {
              return alert(JSON.stringify(err));
            });
          } else {
            this.eventSchedulerService.postAuthLogin(this.usernameFormControl.value, this.passwordFormControl.value).subscribe(function (resp) {
              if (resp) {
                _this9.utilityService.setToken(resp);

                _this9.router.navigate(['/home']);
              } else {
                alert('Incorrect credentials');
              }
            }, function (err) {
              return alert(JSON.stringify(err));
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_services_event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"]
      }, {
        type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/report/report.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/report/report.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReportReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/report/report.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/report/report.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ReportComponent = /*#__PURE__*/function () {
      function ReportComponent() {
        _classCallCheck(this, ReportComponent);
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ReportComponent;
    }();

    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./report.component.scss */
      "./src/app/components/report/report.component.scss"))["default"]]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/components/search/search.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/search/search.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchSearchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.scss */
      "./src/app/components/search/search.component.scss"))["default"]]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/components/shell/shell.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/shell/shell.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsShellShellComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-spacer {\n  flex: 1 1 auto;\n}\n\nmat-drawer-container {\n  height: 100vh;\n  background-color: #EEEEEE;\n}\n\nmat-list-item {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGVsbC9DOlxcVXNlcnNcXE5hdGhhXFxEb2N1bWVudHNcXERlc2t0b3BcXERlc2t0b3AxMVxcVU1LQ1xcMjAyMVxcRmFsbFxcQ1M0NTZcXGV2ZW50LXNjaGVkdWxlclxcY2xpZW50L3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGVsbFxcc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG59XHJcblxyXG5tYXQtbGlzdC1pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIuZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xufVxuXG5tYXQtbGlzdC1pdGVtIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shell/shell.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/shell/shell.component.ts ***!
    \*****************************************************/

  /*! exports provided: ShellComponent */

  /***/
  function srcAppComponentsShellShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellComponent", function () {
      return ShellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ShellComponent = /*#__PURE__*/function () {
      function ShellComponent(utilityService, router) {
        var _this10 = this;

        _classCallCheck(this, ShellComponent);

        this.utilityService = utilityService;
        this.router = router;
        this.toolbarLinks = [{
          label: 'Home',
          icon: 'home',
          func: function () {
            _this10.router.navigate(['/home']);
          }.bind(this)
        }, {
          label: 'Search',
          icon: 'search',
          func: function () {
            _this10.router.navigate(['/search']);
          }.bind(this)
        }, {
          label: 'Reports',
          icon: 'assignment',
          func: function () {
            _this10.router.navigate(['/report']);
          }.bind(this)
        }, {
          label: 'Sign out',
          icon: 'exit_to_app',
          func: function () {
            _this10.utilityService.deleteToken();

            _this10.router.navigate(['/']);
          }.bind(this)
        }];
        this.sidenavLinks = [{
          label: 'Item 1'
        }, {
          label: 'Item 2'
        }, {
          label: 'Item 3'
        }, {
          label: 'Item 4'
        }];
      }

      _createClass(ShellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "isOnLogin",
        value: function isOnLogin() {
          var result = this.router.url === '/';
          return result;
        }
      }, {
        key: "btnSidenav",
        value: function btnSidenav(value) {
          console.log(value);
        }
      }]);

      return ShellComponent;
    }();

    ShellComponent.ctorParameters = function () {
      return [{
        type: src_app_services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-shell',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shell.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shell/shell.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shell.component.scss */
      "./src/app/components/shell/shell.component.scss"))["default"]]
    })], ShellComponent);
    /***/
  },

  /***/
  "./src/app/guards/authentication.guard.ts":
  /*!************************************************!*\
    !*** ./src/app/guards/authentication.guard.ts ***!
    \************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppGuardsAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthenticationGuard = /*#__PURE__*/function () {
      function AuthenticationGuard(utilityService, router) {
        _classCallCheck(this, AuthenticationGuard);

        this.utilityService = utilityService;
        this.router = router;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var token = this.utilityService.getToken();

          if (token && !token.isExpired()) {
            return true;
          } else {
            this.router.navigate(['/']);
          }
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.ctorParameters = function () {
      return [{
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AuthenticationGuard);
    /***/
  },

  /***/
  "./src/app/interceptors/authentication.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/interceptors/authentication.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: AuthenticationInterceptor */

  /***/
  function srcAppInterceptorsAuthenticationInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationInterceptor", function () {
      return AuthenticationInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthenticationInterceptor = /*#__PURE__*/function () {
      function AuthenticationInterceptor(utilityService) {
        _classCallCheck(this, AuthenticationInterceptor);

        this.utilityService = utilityService;
      }

      _createClass(AuthenticationInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          req = req.clone({
            setHeaders: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: "Bearer ".concat(this.utilityService.getRawToken())
            }
          });
          return next.handle(req);
        }
      }]);

      return AuthenticationInterceptor;
    }();

    AuthenticationInterceptor.ctorParameters = function () {
      return [{
        type: _services_utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    AuthenticationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthenticationInterceptor);
    /***/
  },

  /***/
  "./src/app/interceptors/error.interceptor.ts":
  /*!***************************************************!*\
    !*** ./src/app/interceptors/error.interceptor.ts ***!
    \***************************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppInterceptorsErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(snackBar) {
        _classCallCheck(this, ErrorInterceptor);

        this.snackBar = snackBar;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this11 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            var errorMsg = '';

            if (error.error instanceof ErrorEvent) {
              console.error('this is client side error');
              errorMsg = "Error: ".concat(error.error.message);
            } else {
              console.error('this is server side error');
              errorMsg = "Error Code: ".concat(error.status, ",  Message: ").concat(error.message);

              _this11.snackBar.open(errorMsg, '', {
                duration: 5000
              });
            }

            console.error(errorMsg);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMsg);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/services/base.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/base.service.ts ***!
    \******************************************/

  /*! exports provided: BaseService */

  /***/
  function srcAppServicesBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseService", function () {
      return BaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BaseService = /*#__PURE__*/function () {
      function BaseService(http, utilityService) {
        _classCallCheck(this, BaseService);

        this.http = http;
        this.utilityService = utilityService;
        this.API_URL = 'http://localhost:5000/api/v1';
      }

      _createClass(BaseService, [{
        key: "getURL",
        value: function getURL(path) {
          return "".concat(this.API_URL).concat(path);
        }
      }, {
        key: "mapDates",
        value: function mapDates(obj) {
          var _this12 = this;

          var replaceDate = function replaceDate(x) {
            if (x.date) {
              x.date = _this12.utilityService.formatDateToString(new Date(x.date));
            }

            return x;
          }; // tslint:disable-next-line:no-string-literal


          if (obj['map']) {
            // tslint:disable-next-line:no-string-literal
            obj = obj['map'](function (x) {
              return replaceDate(x);
            });
          } else {
            obj = replaceDate(obj);
          }

          return obj;
        }
      }, {
        key: "pipe",
        value: function pipe(observable) {
          var _this13 = this;

          return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return _this13.mapDates(resp);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(0));
        }
      }, {
        key: "httpGet",
        value: function httpGet(path) {
          return this.pipe(this.http.get(this.getURL(path)));
        }
      }, {
        key: "httpPost",
        value: function httpPost(path, body) {
          body = this.mapDates(body);
          return this.pipe(this.http.post(this.getURL(path), body));
        }
      }, {
        key: "httpPut",
        value: function httpPut(path, body) {
          body = this.mapDates(body);
          return this.pipe(this.http.put(this.getURL(path), body));
        }
      }, {
        key: "httpDelete",
        value: function httpDelete(path) {
          return this.pipe(this.http["delete"](this.getURL(path)));
        }
      }]);

      return BaseService;
    }();
    /***/

  },

  /***/
  "./src/app/services/event-scheduler/event-scheduler.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/event-scheduler/event-scheduler.service.ts ***!
    \*********************************************************************/

  /*! exports provided: EventSchedulerService */

  /***/
  function srcAppServicesEventSchedulerEventSchedulerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventSchedulerService", function () {
      return EventSchedulerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/base.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EventSchedulerService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(EventSchedulerService, _base_service__WEBPAC);

      var _super = _createSuper(EventSchedulerService);

      function EventSchedulerService(http, utilityService) {
        var _this14;

        _classCallCheck(this, EventSchedulerService);

        _this14 = _super.call(this, http, utilityService);
        _this14.eventIDs$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        return _this14;
      }

      _createClass(EventSchedulerService, [{
        key: "postAuthCreateAccount",
        value: function postAuthCreateAccount(username, password) {
          var body = {
            username: username,
            password: password
          };
          return this.httpPost("/auth/create-account", body);
        }
      }, {
        key: "postAuthLogin",
        value: function postAuthLogin(username, password) {
          var body = {
            username: username,
            password: password
          };
          return this.httpPost("/auth/login", body);
        }
      }, {
        key: "getApiInformation",
        value: function getApiInformation() {
          return this.httpGet("/");
        }
      }, {
        key: "pipeUpdateEventList",
        value: function pipeUpdateEventList(observable) {
          var _this15 = this;

          return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (x) {
            if (x) {
              _this15.getEventIDs().subscribe();
            }
          }));
        }
      }, {
        key: "postEventCreate",
        value: function postEventCreate(event) {
          var body = event;
          return this.pipeUpdateEventList(this.httpPost("/events", body));
        }
      }, {
        key: "putEventUpdate",
        value: function putEventUpdate(event) {
          var body = event;
          return this.pipeUpdateEventList(this.httpPut("/events", body));
        }
      }, {
        key: "getEventIDs",
        value: function getEventIDs() {
          var _this16 = this;

          this.httpGet("/events").subscribe(function (resp) {
            _this16.nextEventNum = Math.max.apply(Math, _toConsumableArray(resp.map(function (x) {
              return x.num;
            }))) + 1;

            _this16.eventIDs$.next(resp);
          });
          return this.eventIDs$.asObservable();
        }
      }, {
        key: "getNextEventNum",
        value: function getNextEventNum() {
          return this.httpGet("/events/nextEventNum");
        }
      }, {
        key: "getEvent",
        value: function getEvent(id) {
          return this.httpGet("/events/".concat(id));
        }
      }, {
        key: "deleteEvent",
        value: function deleteEvent(id) {
          return this.pipeUpdateEventList(this.httpDelete("/events/".concat(id)));
        }
      }, {
        key: "postNoteCreate",
        value: function postNoteCreate(note) {
          var body = note;
          return this.httpPost("/notes", body);
        }
      }, {
        key: "getNotesForEventID",
        value: function getNotesForEventID(eventID) {
          return this.httpGet("/notes/event/".concat(eventID));
        }
      }, {
        key: "putNoteUpdate",
        value: function putNoteUpdate(note) {
          var body = note;
          return this.httpPut("/notes", body);
        }
      }, {
        key: "deleteNote",
        value: function deleteNote(noteID) {
          return this.httpDelete("/notes/".concat(noteID));
        }
      }]);

      return EventSchedulerService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]);

    EventSchedulerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _utility_utility_service__WEBPACK_IMPORTED_MODULE_1__["UtilityService"]
      }];
    };

    EventSchedulerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Inject"])({
      provide: 'root'
    })], EventSchedulerService);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: EventSchedulerService, UtilityService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event-scheduler/event-scheduler.service */
    "./src/app/services/event-scheduler/event-scheduler.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventSchedulerService", function () {
      return _event_scheduler_event_scheduler_service__WEBPACK_IMPORTED_MODULE_1__["EventSchedulerService"];
    });
    /* harmony import */


    var _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./utility/utility.service */
    "./src/app/services/utility/utility.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return _utility_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"];
    });
    /***/

  },

  /***/
  "./src/app/services/utility/utility.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/utility/utility.service.ts ***!
    \*****************************************************/

  /*! exports provided: UtilityService */

  /***/
  function srcAppServicesUtilityUtilityServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilityService", function () {
      return UtilityService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/build/jwt-decode.esm.js");

    var Token = /*#__PURE__*/function () {
      function Token(token) {
        var _this17 = this;

        _classCallCheck(this, Token);

        Object.keys(token).forEach(function (key) {
          return _this17[key] = token[key];
        });
      }

      _createClass(Token, [{
        key: "isExpired",
        value: function isExpired() {
          return this.exp <= Math.floor(Date.now() / 1000);
        }
      }]);

      return Token;
    }();

    var padWithZero = function padWithZero(x) {
      return x <= 9 ? '0' + x : x;
    };

    var UtilityService = /*#__PURE__*/function () {
      function UtilityService() {
        _classCallCheck(this, UtilityService);
      }

      _createClass(UtilityService, [{
        key: "setToken",
        value: function setToken(token) {
          localStorage.setItem('token', token);
        }
      }, {
        key: "getRawToken",
        value: function getRawToken() {
          return localStorage.getItem('token');
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var lsToken = this.getRawToken();
          return lsToken ? new Token(Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(lsToken)) : null;
        }
      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "formatTimeToString",
        value: function formatTimeToString(time) {
          if (time) {
            var hour = Number(time.split(/[: ]/)[0]);
            var minute = Number(time.split(/[: ]/)[1]);
            var isPM = hour >= 12;
            return "".concat(hour === 0 ? 12 : hour - (isPM && hour > 12 ? 12 : 0), ":").concat(padWithZero(minute), " ").concat(isPM ? 'PM' : 'AM');
          } else {
            return '12:00 AM';
          }
        }
      }, {
        key: "formatDateToString",
        value: function formatDateToString(date, time) {
          var year = date.getFullYear();
          var month = date.getMonth() + 1; // Month from 0 to 11

          var day = date.getDate();
          return "".concat("".concat(year, "-").concat(padWithZero(month), "-").concat(padWithZero(day)), time ? ' ' + this.formatTimeToString(time) : '');
        }
      }]);

      return UtilityService;
    }();

    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])({
      provide: 'root'
    })], UtilityService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Natha\Documents\Desktop\Desktop11\UMKC\2021\Fall\CS456\event-scheduler\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map