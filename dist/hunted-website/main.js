(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+7qI":
/*!*********************************************************!*\
  !*** ./src/app/components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function SidenavComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Configuratie");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SidenavComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "gamepad");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Spel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SidenavComponent_a_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavComponent_a_11_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Log uit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SidenavComponent_a_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SidenavComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidenavComponent_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class SidenavComponent {
    constructor(breakpointObserver, authService) {
        this.breakpointObserver = breakpointObserver;
        this.authService = authService;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["shareReplay"])());
    }
    logout() {
        this.authService.logout();
    }
}
SidenavComponent.ɵfac = function SidenavComponent_Factory(t) { return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__["BreakpointObserver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
SidenavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SidenavComponent, selectors: [["app-sidenav"]], ngContentSelectors: _c0, decls: 20, vars: 16, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["color", "primary"], ["mat-list-item", "", "href", "/setup", 4, "ngIf"], ["mat-list-item", "", "href", "/game", 4, "ngIf"], ["mat-list-item", "", "href", "", 3, "click", 4, "ngIf"], ["mat-list-item", "", "href", "/login", 4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "wrapper"], ["mat-list-item", "", "href", "/setup"], ["mat-list-item", "", "href", "/game"], ["mat-list-item", "", "href", "", 3, "click"], ["mat-list-item", "", "href", "/login"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"]], template: function SidenavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Hunted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SidenavComponent_a_9_Template, 5, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SidenavComponent_a_10_Template, 5, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SidenavComponent_a_11_Template, 5, 0, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SidenavComponent_a_12_Template, 5, 0, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SidenavComponent_button_15_Template, 3, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 10, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 12, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 8, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 14, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenav"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\nspan[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\nmat-sidenav[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRiIsImZpbGUiOiJzaWRlbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5tYXQtc2lkZW5hdiB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luuk_\Desktop\hunted-website\ProjectHuntedSOs\src\main.ts */"zUnb");


/***/ }),

/***/ "3QKt":
/*!*************************************************!*\
  !*** ./src/app/models/accesscode_post.model.ts ***!
  \*************************************************/
/*! exports provided: AccessCodePost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCodePost", function() { return AccessCodePost; });
class AccessCodePost {
}


/***/ }),

/***/ "3ZH8":
/*!***************************************************************************!*\
  !*** ./src/app/components/setup-accesscode/setup-accesscode.component.ts ***!
  \***************************************************************************/
/*! exports provided: SetupAccesscodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupAccesscodeComponent", function() { return SetupAccesscodeComponent; });
/* harmony import */ var src_app_models_accesscode_post_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/accesscode_post.model */ "3QKt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_access_code_accesscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/access-code/accesscode.service */ "soF2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _setup_accesscode_card_setup_accesscode_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../setup-accesscode-card/setup-accesscode-card.component */ "uLc4");










function SetupAccesscodeComponent_h4_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Toegangscode(s) aangemaakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupAccesscodeComponent_app_setup_accesscode_card_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-setup-accesscode-card", 21);
} if (rf & 2) {
    const accessCode_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("accessCode", accessCode_r3);
} }
class SetupAccesscodeComponent {
    constructor(accessCodeService) {
        this.accessCodeService = accessCodeService;
        this.showSaveConfirmation = false;
        this.accessCodePost = new src_app_models_accesscode_post_model__WEBPACK_IMPORTED_MODULE_0__["AccessCodePost"]();
    }
    ngOnInit() {
        this.accessCodeService.getAllCodes().subscribe((res) => {
            this.accessCodes = res;
            if (this.accessCodes)
                this.accessCodes.sort(this.compare);
        });
    }
    createNewCodes() {
        this.resetConfirmations();
        let accessCodePost = new src_app_models_accesscode_post_model__WEBPACK_IMPORTED_MODULE_0__["AccessCodePost"]();
        accessCodePost = this.accessCodePost;
        this.accessCodeService.generateCodes(this.accessCodePost).subscribe((res) => {
            console.log('Added ' + this.accessCodePost.amount + ' new ' + this.accessCodePost.role + ' access codes!');
            this.ngOnInit();
            this.showSaveConfirmation = true;
        });
    }
    resetConfirmations() {
        this.showSaveConfirmation = false;
    }
    compare(a, b) {
        if (a.role < b.role) {
            return 1;
        }
        if (a.role > b.role) {
            return -1;
        }
        return 0;
    }
}
SetupAccesscodeComponent.ɵfac = function SetupAccesscodeComponent_Factory(t) { return new (t || SetupAccesscodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_access_code_accesscode_service__WEBPACK_IMPORTED_MODULE_2__["AccessCodeService"])); };
SetupAccesscodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupAccesscodeComponent, selectors: [["app-setup-accesscode"]], decls: 44, vars: 4, consts: [[1, "example-form", 3, "ngSubmit"], ["accessCodeData", "ngForm"], ["appearance", "fill"], [3, "value", "valueChange"], ["value", "Agent"], ["value", "Boef"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["value", "10"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary"], ["class", "mat-h4", 4, "ngIf"], [1, "container"], [3, "accessCode", 4, "ngFor", "ngForOf"], [1, "mat-h4"], [3, "accessCode"]], template: function SetupAccesscodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Toegangscodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SetupAccesscodeComponent_Template_form_ngSubmit_3_listener() { return ctx.createNewCodes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SetupAccesscodeComponent_Template_mat_select_valueChange_8_listener($event) { return ctx.accessCodePost.role = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Agent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Boef");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Aantal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function SetupAccesscodeComponent_Template_mat_select_valueChange_17_listener($event) { return ctx.accessCodePost.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Opslaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, SetupAccesscodeComponent_h4_41_Template, 2, 0, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, SetupAccesscodeComponent_app_setup_accesscode_card_43_Template, 1, 1, "app-setup-accesscode-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.accessCodePost.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.accessCodePost.amount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSaveConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.accessCodes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _setup_accesscode_card_setup_accesscode_card_component__WEBPACK_IMPORTED_MODULE_9__["SetupAccesscodeCardComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC1hY2Nlc3Njb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKIiwiZmlsZSI6InNldHVwLWFjY2Vzc2NvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7iuT":
/*!***************************************************************!*\
  !*** ./src/app/components/setup-jail/setup-jail.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupJailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupJailComponent", function() { return SetupJailComponent; });
/* harmony import */ var src_app_models_jail_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/jail.model */ "CO6I");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_jail_jail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/jail/jail.service */ "ImWd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SetupJailComponent_h4_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gevangenis opgeslagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SetupJailComponent {
    constructor(jailService) {
        this.jailService = jailService;
        this.showConfirmation = false;
        this.location = new src_app_models_jail_model__WEBPACK_IMPORTED_MODULE_0__["Location"]();
    }
    ngOnInit() {
    }
    onClickSubmit() {
        this.showConfirmation = false;
        const jail = new src_app_models_jail_model__WEBPACK_IMPORTED_MODULE_0__["Jail"]();
        jail.location = this.location;
        this.jailService.updateJail(jail).subscribe((res) => {
            console.log('Updated the jail');
            this.showConfirmation = true;
        });
    }
}
SetupJailComponent.ɵfac = function SetupJailComponent_Factory(t) { return new (t || SetupJailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_jail_jail_service__WEBPACK_IMPORTED_MODULE_2__["JailService"])); };
SetupJailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupJailComponent, selectors: [["app-setup-jail"]], decls: 18, vars: 3, consts: [[1, "example-form", 3, "ngSubmit"], ["locationData", "ngForm"], ["appearance", "standard", 1, "example-full-width"], ["matInput", "", "name", "latitude", "placeholder", "51.-------", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "longitude", "placeholder", "5.-------", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary"], ["class", "mat-h4", 4, "ngIf"], [1, "mat-h4"]], template: function SetupJailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Gevangenis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SetupJailComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Breedtegraad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupJailComponent_Template_input_ngModelChange_8_listener($event) { return ctx.location.latitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Lengtegraad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupJailComponent_Template_input_ngModelChange_13_listener($event) { return ctx.location.longitude = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Gevangenis opslaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SetupJailComponent_h4_17_Template, 2, 0, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.location.latitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.location.longitude);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showConfirmation);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC1qYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7QUFDSiIsImZpbGUiOiJzZXR1cC1qYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        this.currentUser = {};
    }
    login(user) {
        return this.http.post(`${this.endpoint}/game/authenticate?name=${user.name}&code=${user.code}`, '{}')
            .subscribe((res) => {
            localStorage.setItem('access_token', res.token);
            this.router.navigate(['setup']);
        });
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn() {
        let authToken = localStorage.getItem('access_token');
        return (authToken !== null) ? true : false;
    }
    logout() {
        let removeToken = localStorage.removeItem('access_token');
        if (removeToken == null) {
            this.router.navigate(['login']);
        }
    }
    // Error
    handleError(error) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        }
        else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(msg);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


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
    production: false,
    apiUrl: 'https://apihuntedsos.herokuapp.com'
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

/***/ "CO6I":
/*!**************************************!*\
  !*** ./src/app/models/jail.model.ts ***!
  \**************************************/
/*! exports provided: Location, Jail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jail", function() { return Jail; });
class Location {
}
class Jail {
}


/***/ }),

/***/ "DDTk":
/*!***********************************************!*\
  !*** ./src/app/services/zone/zone.service.ts ***!
  \***********************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ZoneService {
    constructor(http) {
        this.http = http;
        this.zoneUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/game/playfield`;
    }
    getZone() {
        return this.http.get(this.zoneUrl);
    }
    updateZone(map) {
        map = map.split('lat').join('latitude');
        map = map.split('lng').join('longitude');
        let mapModel = { playfield: JSON.parse(map) };
        return this.http.put(this.zoneUrl, mapModel, { responseType: 'text' });
    }
}
ZoneService.ɵfac = function ZoneService_Factory(t) { return new (t || ZoneService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ZoneService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ZoneService, factory: ZoneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "G49D":
/*!**************************************!*\
  !*** ./src/app/models/loot.model.ts ***!
  \**************************************/
/*! exports provided: Loot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loot", function() { return Loot; });
class Loot {
}


/***/ }),

/***/ "I56V":
/*!***************************************************************!*\
  !*** ./src/app/components/setup-zone/setup-zone.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupZoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupZoneComponent", function() { return SetupZoneComponent; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @geoman-io/leaflet-geoman-free */ "hFpR");
/* harmony import */ var _geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_geoman_io_leaflet_geoman_free__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_zone_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/zone/zone.service */ "DDTk");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SetupZoneComponent_h4_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Speelgebied opgeslagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SetupZoneComponent {
    constructor(zoneService) {
        this.zoneService = zoneService;
        this.showSaveConfirmation = false;
    }
    ngAfterViewInit() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_0__["map"]('map', {
            center: [52.155, 5.295],
            zoom: 7
        });
        this.zoneService.getZone().subscribe((zone) => {
            if (zone.playfield[0][0][0].latitude !== undefined) {
                const playfields = [];
                for (let i = 0; i < zone.playfield.length; i++) {
                    const polygons = [];
                    playfields[i] = polygons;
                    for (let j = 0; j < zone.playfield[i].length; j++) {
                        const latLngs = [];
                        polygons[j] = latLngs;
                        for (let k = 0; k < zone.playfield[i][j].length; k++) {
                            latLngs.push(new leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLng"](zone.playfield[i][j][k].latitude, zone.playfield[i][j][k].longitude));
                        }
                    }
                }
                const polygon = leaflet__WEBPACK_IMPORTED_MODULE_0__["polygon"](playfields).addTo(this.map);
                this.map.fitBounds(polygon.getBounds());
            }
            else if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const coords = position.coords;
                    // Offset to center in view.
                    const latLong = new leaflet__WEBPACK_IMPORTED_MODULE_0__["LatLng"](coords.latitude, coords.longitude);
                    this.map.zoomIn(9);
                    this.map.panTo(latLong);
                });
            }
        });
        this.map.pm.setLang('nl');
        this.map.pm.addControls({
            position: 'bottomleft',
            drawCircle: false,
            drawMarker: false,
            drawCircleMarker: false,
            drawPolyline: false,
            drawRectangle: false
        });
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            minZoom: 3,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        });
        tiles.addTo(this.map);
    }
    onClickSubmit() {
        this.resetConfirmations();
        const layers = this.map.pm.getGeomanLayers(false);
        const polygons = [];
        for (let i = 0; i < layers.length; i++) {
            const layer = layers[i];
            polygons.push(layer._latlngs);
        }
        this.zoneService.updateZone(JSON.stringify(polygons)).subscribe(() => console.log('Updated the zone'));
        this.showSaveConfirmation = true;
    }
    resetConfirmations() {
        this.showSaveConfirmation = false;
    }
}
SetupZoneComponent.ɵfac = function SetupZoneComponent_Factory(t) { return new (t || SetupZoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_zone_zone_service__WEBPACK_IMPORTED_MODULE_3__["ZoneService"])); };
SetupZoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SetupZoneComponent, selectors: [["app-setup-zone"]], decls: 8, vars: 1, consts: [[1, "map-frame"], ["id", "map"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary", 3, "click"], ["class", "mat-h4", 4, "ngIf"], [1, "mat-h4"]], template: function SetupZoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Speelgebied");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SetupZoneComponent_Template_button_click_5_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Speelgebied opslaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SetupZoneComponent_h4_7_Template, 2, 0, "h4", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showSaveConfirmation);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".map-frame[_ngcontent-%COMP%] {\n  border: 2px solid black;\n  width: 600px;\n  height: 400px;\n  margin-bottom: 10px;\n  position: relative;\n  z-index: 0;\n}\n\n#map[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px 10px 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC16b25lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGIiwiZmlsZSI6InNldHVwLXpvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hcC1mcmFtZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDYwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ImWd":
/*!***********************************************!*\
  !*** ./src/app/services/jail/jail.service.ts ***!
  \***********************************************/
/*! exports provided: JailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JailService", function() { return JailService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class JailService {
    constructor(http) {
        this.http = http;
        this.jailURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/jail`;
    }
    getJail() {
        return this.http.get(this.jailURL);
    }
    updateJail(jail) {
        return this.http.put(`${this.jailURL}`, jail, { responseType: 'text' });
    }
}
JailService.ɵfac = function JailService_Factory(t) { return new (t || JailService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
JailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: JailService, factory: JailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Ks4N":
/*!***********************************************!*\
  !*** ./src/app/services/game/game.service.ts ***!
  \***********************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class GameService {
    constructor(http) {
        this.http = http;
        this.gameURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/game`;
        this.timeURL = this.gameURL + '/time';
        this.statusURL = this.gameURL + '/status';
    }
    getGame() {
        return this.http.get(this.gameURL);
    }
    getStatus() {
        return this.http.get(this.statusURL);
    }
    updateTime(time) {
        return this.http.put(this.timeURL, time, { responseType: 'text' });
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "M99E":
/*!***********************************************************!*\
  !*** ./src/app/components/setup-qr/setup-qr.component.ts ***!
  \***********************************************************/
/*! exports provided: SetupQrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupQrComponent", function() { return SetupQrComponent; });
/* harmony import */ var src_app_models_loot_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/loot.model */ "G49D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_loot_loot_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loot/loot.service */ "UEi1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _setup_qr_card_setup_qr_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../setup-qr-card/setup-qr-card.component */ "rPGR");









function SetupQrComponent_h4_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buit aangemaakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SetupQrComponent_app_setup_qr_card_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-setup-qr-card", 9);
} if (rf & 2) {
    const loot_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loot", loot_r3);
} }
class SetupQrComponent {
    constructor(lootService) {
        this.lootService = lootService;
        this.showSaveConfirmation = false;
        this.loot = new src_app_models_loot_model__WEBPACK_IMPORTED_MODULE_0__["Loot"]();
    }
    ngOnInit() {
        this.lootService.getLoot().subscribe((res) => {
            this.lootArray = res;
        });
    }
    onClickSubmit() {
        this.resetConfirmations();
        this.lootService.postLoot(this.loot).subscribe((res) => {
            console.log('Added ' + this.loot.name + ' to loot');
            this.ngOnInit();
            this.showSaveConfirmation = true;
        });
    }
    resetConfirmations() {
        this.showSaveConfirmation = false;
    }
}
SetupQrComponent.ɵfac = function SetupQrComponent_Factory(t) { return new (t || SetupQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_loot_loot_service__WEBPACK_IMPORTED_MODULE_2__["LootService"])); };
SetupQrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupQrComponent, selectors: [["app-setup-qr"]], decls: 17, vars: 3, consts: [[3, "ngSubmit"], ["lootData", "ngForm"], ["appearance", "standard", 1, "example-full-width"], ["matInput", "", "name", "loot", "placeholder", "Bijv. 'Ketting'", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary"], ["class", "mat-h4", 4, "ngIf"], [1, "container"], [3, "loot", 4, "ngFor", "ngForOf"], [1, "mat-h4"], [3, "loot"]], template: function SetupQrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Buit toevoegen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SetupQrComponent_Template_form_ngSubmit_3_listener() { return ctx.onClickSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Buit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupQrComponent_Template_input_ngModelChange_8_listener($event) { return ctx.loot.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Buit opslaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SetupQrComponent_h4_12_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Buit overzicht");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SetupQrComponent_app_setup_qr_card_16_Template, 1, 1, "app-setup-qr-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.loot.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSaveConfirmation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.lootArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _setup_qr_card_setup_qr_card_component__WEBPACK_IMPORTED_MODULE_8__["SetupQrCardComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: flex-start;\n  flex-wrap: wrap;\n}\n\nlabel[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  margin: 20px 0px 20px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC1xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoic2V0dXAtcXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5sYWJlbCwgaDIge1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweCAyMHB4IDBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "MqGQ":
/*!***************************************************!*\
  !*** ./src/app/helpers/authconfig.interceptor.ts ***!
  \***************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth/auth.service */ "9ans");


class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        return next.handle(req);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ "O68N":
/*!**************************************!*\
  !*** ./src/app/models/time.model.ts ***!
  \**************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
class Time {
}


/***/ }),

/***/ "QXHv":
/*!********************************************!*\
  !*** ./src/app/models/accesscode.model.ts ***!
  \********************************************/
/*! exports provided: AccessCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCode", function() { return AccessCode; });
class AccessCode {
}


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
/* harmony import */ var _app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function AppComponent_app_sidenav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sidenav");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_router_outlet_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
} }
class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'Hunted';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_sidenav_0_Template, 2, 0, "app-sidenav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_router_outlet_1_Template, 1, 0, "router-outlet", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authService.isLoggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "UEi1":
/*!***********************************************!*\
  !*** ./src/app/services/loot/loot.service.ts ***!
  \***********************************************/
/*! exports provided: LootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LootService", function() { return LootService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class LootService {
    constructor(http) {
        this.http = http;
        this.lootURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/loot`;
    }
    getLoot() {
        return this.http.get(this.lootURL);
    }
    postLoot(loot) {
        return this.http.post(`${this.lootURL}`, loot, { responseType: 'text' });
    }
}
LootService.ɵfac = function LootService_Factory(t) { return new (t || LootService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
LootService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LootService, factory: LootService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
} }
class LoginComponent {
    constructor(fb, authService, router) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.loginForm = this.fb.group({
            name: [''],
            code: ['']
        });
    }
    ngOnInit() {
    }
    login() {
        this.authService.login(this.loginForm.value);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { error: "error" }, decls: 15, vars: 2, consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username", "formControlName", "name", "placeholder", "Naam"], ["type", "text", "matInput", "", "placeholder", "Toegangscode", "formControlName", "code"], ["class", "error", 4, "ngIf"], [1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_4_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 100px 0px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 300px;\n}\n\nmat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  padding: 16px;\n  width: 300px;\n  color: white;\n  background-color: red;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNRLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ1I7O0FBRU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFFTTs7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7QUFDUjs7QUFFTTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ1I7O0FBRU07RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDUiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1hdC1jYXJkLXRpdGxlLFxyXG4gICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXJyb3Ige1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfSJdfQ== */"] });


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sidenav/sidenav.component */ "+7qI");
/* harmony import */ var _helpers_authconfig_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/authconfig.interceptor */ "MqGQ");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/setup/setup.component */ "oy5Q");
/* harmony import */ var _components_setup_jail_setup_jail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/setup-jail/setup-jail.component */ "7iuT");
/* harmony import */ var _components_setup_qr_setup_qr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/setup-qr/setup-qr.component */ "M99E");
/* harmony import */ var _components_setup_qr_card_setup_qr_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/setup-qr-card/setup-qr-card.component */ "rPGR");
/* harmony import */ var _components_setup_zone_setup_zone_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/setup-zone/setup-zone.component */ "I56V");
/* harmony import */ var _components_setup_accesscode_setup_accesscode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/setup-accesscode/setup-accesscode.component */ "3ZH8");
/* harmony import */ var _components_setup_accesscode_card_setup_accesscode_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/setup-accesscode-card/setup-accesscode-card.component */ "uLc4");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");
/* harmony import */ var _components_game_out_of_bounds_message_game_out_of_bounds_message_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/game-out-of-bounds-message/game-out-of-bounds-message.component */ "ev6z");
/* harmony import */ var _services_zone_zone_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/zone/zone.service */ "DDTk");
/* harmony import */ var _services_jail_jail_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/jail/jail.service */ "ImWd");
/* harmony import */ var _services_loot_loot_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/loot/loot.service */ "UEi1");
/* harmony import */ var _services_access_code_accesscode_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/access-code/accesscode.service */ "soF2");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_setup_time_setup_time_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/setup-time/setup-time.component */ "bRK/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/core */ "fXoL");








//Shared Components




//Setup Components







//Game Components


//Service Components




//Material Components












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({ providers: [
        _services_zone_zone_service__WEBPACK_IMPORTED_MODULE_20__["ZoneService"],
        _services_jail_jail_service__WEBPACK_IMPORTED_MODULE_21__["JailService"],
        _services_loot_loot_service__WEBPACK_IMPORTED_MODULE_22__["LootService"],
        _services_access_code_accesscode_service__WEBPACK_IMPORTED_MODULE_23__["AccessCodeService"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
            useClass: _helpers_authconfig_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
            multi: true
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_11__["SetupComponent"],
        _components_setup_jail_setup_jail_component__WEBPACK_IMPORTED_MODULE_12__["SetupJailComponent"],
        _components_setup_qr_setup_qr_component__WEBPACK_IMPORTED_MODULE_13__["SetupQrComponent"],
        _components_setup_qr_card_setup_qr_card_component__WEBPACK_IMPORTED_MODULE_14__["SetupQrCardComponent"],
        _components_setup_accesscode_setup_accesscode_component__WEBPACK_IMPORTED_MODULE_16__["SetupAccesscodeComponent"],
        _components_setup_accesscode_card_setup_accesscode_card_component__WEBPACK_IMPORTED_MODULE_17__["SetupAccesscodeCardComponent"],
        _components_game_game_component__WEBPACK_IMPORTED_MODULE_18__["GameComponent"],
        _components_game_out_of_bounds_message_game_out_of_bounds_message_component__WEBPACK_IMPORTED_MODULE_19__["GameOutOfBoundsMessageComponent"],
        _components_setup_zone_setup_zone_component__WEBPACK_IMPORTED_MODULE_15__["SetupZoneComponent"],
        _components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
        _components_setup_time_setup_time_component__WEBPACK_IMPORTED_MODULE_34__["SetupTimeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__["QRCodeModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_28__["MatSelectModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_31__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_33__["MatCardModule"]] }); })();


/***/ }),

/***/ "bRK/":
/*!***************************************************************!*\
  !*** ./src/app/components/setup-time/setup-time.component.ts ***!
  \***************************************************************/
/*! exports provided: SetupTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupTimeComponent", function() { return SetupTimeComponent; });
/* harmony import */ var src_app_models_time_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/time.model */ "O68N");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_game_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game/game.service */ "Ks4N");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









const _c0 = function () { return [""]; };
function SetupTimeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Spel starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SetupTimeComponent_div_0_Template_form_ngSubmit_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onClickSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Eindtijd");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SetupTimeComponent_div_0_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.time.end_time = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Spel starten");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.time.end_time);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
} }
function SetupTimeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Spel is bezig!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupTimeComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.endGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Spel be\u00EBindigen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
function SetupTimeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Het spel is afgelopen! Herstarten?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SetupTimeComponent_div_2_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.restartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Herstart spel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
class SetupTimeComponent {
    constructor(gameService, router) {
        this.gameService = gameService;
        this.router = router;
        this.time = new src_app_models_time_model__WEBPACK_IMPORTED_MODULE_0__["Time"]();
    }
    ngOnInit() {
        this.getStatus();
    }
    onClickSubmit() {
        this.time.start_time = new Date();
        if (confirm("Spel starten?")) {
            this.gameService.updateTime(this.time).subscribe((res) => {
                console.log('Updated the time - Game has now started');
                this.ngOnInit();
            });
        }
    }
    endGame() {
        if (confirm("Spel beeindigen?")) {
            let time = new src_app_models_time_model__WEBPACK_IMPORTED_MODULE_0__["Time"]();
            time.start_time = new Date(0);
            time.end_time = new Date();
            this.gameService.updateTime(time).subscribe((res) => {
                console.log("Updated end time - Game has now ended");
                this.ngOnInit();
            });
        }
    }
    restartGame() {
        if (confirm("Spel herstarten?")) {
            let time = new src_app_models_time_model__WEBPACK_IMPORTED_MODULE_0__["Time"]();
            time.start_time = new Date(0);
            time.end_time = new Date(0);
            this.gameService.updateTime(time).subscribe((res) => {
                console.log("Updated end time - Game has now restarted");
                this.ngOnInit();
            });
        }
    }
    getStatus() {
        this.gameService.getStatus().subscribe((res) => {
            this.gameStatus = res;
        });
    }
}
SetupTimeComponent.ɵfac = function SetupTimeComponent_Factory(t) { return new (t || SetupTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_game_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SetupTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupTimeComponent, selectors: [["app-setup-time"]], decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "example-form", 3, "ngSubmit"], ["locationData", "ngForm"], ["appearance", "standard", 1, "example-full-width"], ["matInput", "", "type", "datetime-local", "name", "end_time", "placeholder", "end date", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", "type", "submit", "color", "primary", 3, "routerLink", "click"]], template: function SetupTimeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SetupTimeComponent_div_0_Template, 12, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SetupTimeComponent_div_1_Template, 5, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SetupTimeComponent_div_2_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameStatus == "not started");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameStatus == "in progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameStatus == "stopped");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC10aW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ev6z":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/game-out-of-bounds-message/game-out-of-bounds-message.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: GameOutOfBoundsMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOutOfBoundsMessageComponent", function() { return GameOutOfBoundsMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player/player.service */ "f1e1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GameOutOfBoundsMessageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r1);
} }
class GameOutOfBoundsMessageComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.checkForPlayers = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            while (this.checkForPlayers) {
                yield this.checkPlayersOutOfBounds();
                yield this.sleep(5000);
            }
        });
    }
    checkPlayersOutOfBounds() {
        this.playerService.getPlayersOutOfBounds().toPromise().then(result => {
            this.OutOfBoundsPlayerArray = result;
        });
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
GameOutOfBoundsMessageComponent.ɵfac = function GameOutOfBoundsMessageComponent_Factory(t) { return new (t || GameOutOfBoundsMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_player_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])); };
GameOutOfBoundsMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameOutOfBoundsMessageComponent, selectors: [["app-game-out-of-bounds-message"]], decls: 3, vars: 1, consts: [[4, "ngFor", "ngForOf"]], template: function GameOutOfBoundsMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Spelers buiten Speelgebied");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameOutOfBoundsMessageComponent_div_2_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.OutOfBoundsPlayerArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLW91dC1vZi1ib3VuZHMtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "f1e1":
/*!***************************************************!*\
  !*** ./src/app/services/player/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class PlayerService {
    constructor(http) {
        this.http = http;
        this.playerURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/player`;
    }
    getPlayers() {
        return this.http.get(this.playerURL);
    }
    getPlayersOutOfBounds() {
        let APIurl = this.playerURL + "/outofbounds/";
        return this.http.get(APIurl);
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "opiA":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_out_of_bounds_message_game_out_of_bounds_message_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game-out-of-bounds-message/game-out-of-bounds-message.component */ "ev6z");


class GameComponent {
    constructor() { }
    ngOnInit() {
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 3, vars: 0, template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spel overzicht");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-game-out-of-bounds-message");
    } }, directives: [_game_out_of_bounds_message_game_out_of_bounds_message_component__WEBPACK_IMPORTED_MODULE_1__["GameOutOfBoundsMessageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYW1lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "oy5Q":
/*!*****************************************************!*\
  !*** ./src/app/components/setup/setup.component.ts ***!
  \*****************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _setup_time_setup_time_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../setup-time/setup-time.component */ "bRK/");
/* harmony import */ var _setup_jail_setup_jail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../setup-jail/setup-jail.component */ "7iuT");
/* harmony import */ var _setup_zone_setup_zone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setup-zone/setup-zone.component */ "I56V");
/* harmony import */ var _setup_accesscode_setup_accesscode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../setup-accesscode/setup-accesscode.component */ "3ZH8");
/* harmony import */ var _setup_qr_setup_qr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../setup-qr/setup-qr.component */ "M99E");






class SetupComponent {
    constructor() { }
    ngOnInit() {
    }
}
SetupComponent.ɵfac = function SetupComponent_Factory(t) { return new (t || SetupComponent)(); };
SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SetupComponent, selectors: [["app-setup"]], decls: 7, vars: 0, template: function SetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spel configureren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-setup-time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-setup-jail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-setup-zone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-setup-accesscode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-setup-qr");
    } }, directives: [_setup_time_setup_time_component__WEBPACK_IMPORTED_MODULE_1__["SetupTimeComponent"], _setup_jail_setup_jail_component__WEBPACK_IMPORTED_MODULE_2__["SetupJailComponent"], _setup_zone_setup_zone_component__WEBPACK_IMPORTED_MODULE_3__["SetupZoneComponent"], _setup_accesscode_setup_accesscode_component__WEBPACK_IMPORTED_MODULE_4__["SetupAccesscodeComponent"], _setup_qr_setup_qr_component__WEBPACK_IMPORTED_MODULE_5__["SetupQrComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR1cC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "rPGR":
/*!*********************************************************************!*\
  !*** ./src/app/components/setup-qr-card/setup-qr-card.component.ts ***!
  \*********************************************************************/
/*! exports provided: SetupQrCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupQrCardComponent", function() { return SetupQrCardComponent; });
/* harmony import */ var src_app_models_loot_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/loot.model */ "G49D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-qrcode */ "0hV+");



class SetupQrCardComponent {
    constructor() {
        this.loot = new src_app_models_loot_model__WEBPACK_IMPORTED_MODULE_0__["Loot"];
    }
    ngOnInit() {
    }
}
SetupQrCardComponent.ɵfac = function SetupQrCardComponent_Factory(t) { return new (t || SetupQrCardComponent)(); };
SetupQrCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupQrCardComponent, selectors: [["app-setup-qr-card"]], inputs: { loot: "loot" }, decls: 3, vars: 4, consts: [[3, "qrdata", "width", "errorCorrectionLevel"]], template: function SetupQrCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "qrcode", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.loot.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("qrdata", ctx.loot._id)("width", 256)("errorCorrectionLevel", "M");
    } }, directives: [angularx_qrcode__WEBPACK_IMPORTED_MODULE_2__["QRCodeComponent"]], styles: ["p[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC1xci1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJzZXR1cC1xci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "soF2":
/*!************************************************************!*\
  !*** ./src/app/services/access-code/accesscode.service.ts ***!
  \************************************************************/
/*! exports provided: AccessCodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCodeService", function() { return AccessCodeService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class AccessCodeService {
    constructor(http) {
        this.http = http;
        this.accessCodeURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl}/accesscode`;
    }
    getAllCodes() {
        return this.http.get(this.accessCodeURL);
    }
    generateCodes(accessCodePost) {
        return this.http.post(`${this.accessCodeURL}`, accessCodePost);
    }
}
AccessCodeService.ɵfac = function AccessCodeService_Factory(t) { return new (t || AccessCodeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AccessCodeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccessCodeService, factory: AccessCodeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uLc4":
/*!*************************************************************************************!*\
  !*** ./src/app/components/setup-accesscode-card/setup-accesscode-card.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SetupAccesscodeCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupAccesscodeCardComponent", function() { return SetupAccesscodeCardComponent; });
/* harmony import */ var src_app_models_accesscode_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/accesscode.model */ "QXHv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SetupAccesscodeCardComponent {
    constructor() {
        this.accessCode = new src_app_models_accesscode_model__WEBPACK_IMPORTED_MODULE_0__["AccessCode"];
    }
    ngOnInit() {
    }
}
SetupAccesscodeCardComponent.ɵfac = function SetupAccesscodeCardComponent_Factory(t) { return new (t || SetupAccesscodeCardComponent)(); };
SetupAccesscodeCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SetupAccesscodeCardComponent, selectors: [["app-setup-accesscode-card"]], inputs: { accessCode: "accessCode" }, decls: 3, vars: 2, consts: [[3, "className"]], template: function SetupAccesscodeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("className", ctx.accessCode.role == "Boef" ? "card-red" : "card-blue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.accessCode.code);
    } }, styles: [".card-blue[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: 125px;\n  width: 125px;\n  background-color: #3F51B5;\n  color: white;\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 15px;\n  \n}\n\n.card-red[_ngcontent-%COMP%] {\n  margin: 10px;\n  height: 125px;\n  width: 125px;\n  background-color: #F44336;\n  color: white;\n  text-align: center;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 15px;\n  \n}\n\nh2[_ngcontent-%COMP%] {\n  padding-top: 50px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZXR1cC1hY2Nlc3Njb2RlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtFQUVBLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUFxQix3QkFBQTtBQUF6Qjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBRUEsMENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQXFCLHdCQUFBO0FBRHpCOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESiIsImZpbGUiOiJzZXR1cC1hY2Nlc3Njb2RlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1ibHVlIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICB3aWR0aDogMTI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgXHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDsgLyogNXB4IHJvdW5kZWQgY29ybmVycyAqL1xyXG59XHJcblxyXG4uY2FyZC1yZWQge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjVweDtcclxuICAgIHdpZHRoOiAxMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNDQzMzY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4OyAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXHJcbn1cclxuXHJcbmgyIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */"] });


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
/* harmony import */ var _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/setup/setup.component */ "oy5Q");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game/game.component */ "opiA");
/* harmony import */ var _helpers_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/auth-guard/auth.guard */ "wF0Z");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'setup', component: _components_setup_setup_component__WEBPACK_IMPORTED_MODULE_1__["SetupComponent"], canActivate: [_helpers_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'game', component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"], canActivate: [_helpers_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_helpers_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "wF0Z":
/*!**************************************************!*\
  !*** ./src/app/helpers/auth-guard/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        if (state.url == '/login') {
            if (this.authService.isLoggedIn == true) {
                this.router.navigate(['setup']);
            }
        }
        else {
            if (this.authService.isLoggedIn !== true) {
                window.alert("U bent niet ingelogd!");
                this.router.navigate(['login']);
            }
        }
        return true;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


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