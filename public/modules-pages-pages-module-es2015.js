(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"],{

/***/ "./src/app/modules/pages/all-requests-page/all-requests-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/pages/all-requests-page/all-requests-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: AllRequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRequestsPageComponent", function() { return AllRequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../request-details-page/request-details-page.component */ "./src/app/modules/pages/request-details-page/request-details-page.component.ts");








function AllRequestsPageComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function AllRequestsPageComponent_div_1_clr_dg_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", r_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, r_r4.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, r_r4.updated_at));
} }
function AllRequestsPageComponent_div_1_clr_dg_detail_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-detail-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-detail-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-request-details-page", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("request", detail_r5);
} }
function AllRequestsPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-datagrid", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrDgSelectedChange", function AllRequestsPageComponent_div_1_Template_clr_datagrid_clrDgSelectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AllRequestsPageComponent_div_1_clr_dg_row_11_Template, 11, 9, "clr-dg-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AllRequestsPageComponent_div_1_clr_dg_detail_12_Template, 5, 2, "clr-dg-detail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgSelected", ctx_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "state");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created_at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updated_at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx_r1.requests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.requests.length, " requests");
} }
class AllRequestsPageComponent {
    constructor(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.loading = true;
    }
    ngOnInit() {
        this.authService.logIn()
            .then(res => {
            console.log(res.user._id);
            this.dataService.findRecords('requests', {
                $sort: {
                    created_at: -1
                }
            })
                .then(requests => {
                console.log(requests);
                this.requests = requests.data;
                this.loading = false;
            });
        });
    }
}
AllRequestsPageComponent.ɵfac = function AllRequestsPageComponent_Factory(t) { return new (t || AllRequestsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AllRequestsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllRequestsPageComponent, selectors: [["all-requests-page"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "module-content-container", "style", "height: 100%;", 4, "ngIf"], [1, "module-content-container", 2, "height", "100%"], [1, "module-content-area", 2, "padding", "10px"], [3, "clrDgSelected", "clrDgSelectedChange"], [3, "clrDgField"], [3, "clrDgItem", 4, "clrDgItems", "clrDgItemsOf"], [4, "clrIfDetail"], [3, "clrDgItem"], [3, "request"]], template: function AllRequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllRequestsPageComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRequestsPageComponent_div_1_Template, 15, 7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetailHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetailBody"], _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_6__["RequestDetailsPageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWxsLXJlcXVlc3RzLXBhZ2UvYWxsLXJlcXVlc3RzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllRequestsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'all-requests-page',
                templateUrl: './all-requests-page.component.html',
                styleUrls: ['./all-requests-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/approvals-page/approvals-page.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/pages/approvals-page/approvals-page.component.ts ***!
  \**************************************************************************/
/*! exports provided: ApprovalsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovalsPageComponent", function() { return ApprovalsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ApprovalsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApprovalsPageComponent.ɵfac = function ApprovalsPageComponent_Factory(t) { return new (t || ApprovalsPageComponent)(); };
ApprovalsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalsPageComponent, selectors: [["app-approvals-page"]], decls: 2, vars: 0, template: function ApprovalsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "approvals-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYXBwcm92YWxzLXBhZ2UvYXBwcm92YWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApprovalsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-approvals-page',
                templateUrl: './approvals-page.component.html',
                styleUrls: ['./approvals-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/catalog-page/catalog-page.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/catalog-page/catalog-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CatalogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogPageComponent", function() { return CatalogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");








function CatalogPageComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function CatalogPageComponent_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "clr-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/catalog/launch/", item_r5._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("shape", item_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
} }
function CatalogPageComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CatalogPageComponent_div_1_div_2_div_3_Template, 9, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r3);
} }
function CatalogPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CatalogPageComponent_div_1_div_2_Template, 4, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.catalogItems$));
} }
class CatalogPageComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.loading = true;
    }
    ngOnInit() {
        this.catalogItems$ = this.dataService.records$('workflows', {
            type: 'stack/provision'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((r) => r.data));
        this.catalogItems$.subscribe(() => {
            this.loading = false;
        });
    }
}
CatalogPageComponent.ɵfac = function CatalogPageComponent_Factory(t) { return new (t || CatalogPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
CatalogPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CatalogPageComponent, selectors: [["app-catalog-page"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "catalog-browse-container", 4, "ngIf"], [1, "catalog-browse-container"], [1, "catalog-browse-menu"], ["class", "catalog-items-container", "style", "padding: 15px;", 4, "ngIf"], [1, "catalog-items-container", 2, "padding", "15px"], [1, "catalog-items"], [1, "clr-row", "items-row"], ["class", "clr-col-lg-3 clr-col-md-4 clr-col-6", 4, "ngFor", "ngForOf"], [1, "clr-col-lg-3", "clr-col-md-4", "clr-col-6"], [1, "card", "item-card", "clickable", 3, "routerLink"], [1, "card-block", 2, "height", "190px !important", "overflow", "scroll"], [1, "card-title", "flex-container"], [2, "margin-left", "10px"], [1, "card-text"]], template: function CatalogPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CatalogPageComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CatalogPageComponent_div_1_Template, 4, 3, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__["PageLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  min-height: 200px !important;\n  max-height: 200px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaGF3bmJyYWRsZXkvcHJvamVjdHMvc3RhY2tzL3N0YWNrcy13ZWItY2xpZW50L3NyYy9hcHAvbW9kdWxlcy9wYWdlcy9jYXRhbG9nLXBhZ2UvY2F0YWxvZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2NhdGFsb2ctcGFnZS9jYXRhbG9nLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLDRCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3BhZ2VzL2NhdGFsb2ctcGFnZS9jYXRhbG9nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG59IiwiLmNhcmQge1xuICBtaW4taGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CatalogPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catalog-page',
                templateUrl: './catalog-page.component.html',
                styleUrls: ['./catalog-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/home-page/home-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/home-page/home-page.component.ts ***!
  \****************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 2, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/my-requests-page/my-requests-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pages/my-requests-page/my-requests-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: MyRequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRequestsPageComponent", function() { return MyRequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../request-details-page/request-details-page.component */ "./src/app/modules/pages/request-details-page/request-details-page.component.ts");








function MyRequestsPageComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function MyRequestsPageComponent_div_1_clr_dg_row_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-row", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "clr-dg-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItem", r_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](r_r4.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, r_r4.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, r_r4.updated_at));
} }
function MyRequestsPageComponent_div_1_clr_dg_detail_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-dg-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "clr-dg-detail-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-detail-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-request-details-page", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](detail_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("request", detail_r5);
} }
function MyRequestsPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-datagrid", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrDgSelectedChange", function MyRequestsPageComponent_div_1_Template_clr_datagrid_clrDgSelectedChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clr-dg-column", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MyRequestsPageComponent_div_1_clr_dg_row_11_Template, 11, 9, "clr-dg-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyRequestsPageComponent_div_1_clr_dg_detail_12_Template, 5, 2, "clr-dg-detail", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "clr-dg-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgSelected", ctx_r1.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "state");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "created_at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgField", "updated_at");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrDgItemsOf", ctx_r1.requests);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.requests.length, " requests");
} }
class MyRequestsPageComponent {
    constructor(dataService, authService) {
        this.dataService = dataService;
        this.authService = authService;
        this.loading = true;
    }
    ngOnInit() {
        this.authService.logIn()
            .then(res => {
            console.log(res.user._id);
            this.dataService.findRecords('requests', {
                created_by: `${res.user._id}`,
                $sort: {
                    created_at: -1
                }
            })
                .then(requests => {
                console.log(requests);
                this.requests = requests.data;
                this.loading = false;
            });
        });
    }
}
MyRequestsPageComponent.ɵfac = function MyRequestsPageComponent_Factory(t) { return new (t || MyRequestsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
MyRequestsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyRequestsPageComponent, selectors: [["my-requests-page"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "module-content-container", "style", "height: 100%;", 4, "ngIf"], [1, "module-content-container", 2, "height", "100%"], [1, "module-content-area", 2, "padding", "10px"], [3, "clrDgSelected", "clrDgSelectedChange"], [3, "clrDgField"], [3, "clrDgItem", 4, "clrDgItems", "clrDgItemsOf"], [4, "clrIfDetail"], [3, "clrDgItem"], [3, "request"]], template: function MyRequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MyRequestsPageComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyRequestsPageComponent_div_1_Template, 15, 7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_4__["PageLoadingComponent"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagrid"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdj"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdp"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdr"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridColumn"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdk"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridItems"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrIfDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridFooter"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridRow"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdl"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridCell"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ɵdm"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetail"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetailHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClrDatagridDetailBody"], _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_6__["RequestDetailsPageComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbXktcmVxdWVzdHMtcGFnZS9teS1yZXF1ZXN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyRequestsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'my-requests-page',
                templateUrl: './my-requests-page.component.html',
                styleUrls: ['./my-requests-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/pages-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/pages-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/modules/pages/home-page/home-page.component.ts");
/* harmony import */ var _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catalog-page/catalog-page.component */ "./src/app/modules/pages/catalog-page/catalog-page.component.ts");
/* harmony import */ var _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./requests-page/requests-page.component */ "./src/app/modules/pages/requests-page/requests-page.component.ts");
/* harmony import */ var _approvals_page_approvals_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approvals-page/approvals-page.component */ "./src/app/modules/pages/approvals-page/approvals-page.component.ts");
/* harmony import */ var _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./request-details-page/request-details-page.component */ "./src/app/modules/pages/request-details-page/request-details-page.component.ts");
/* harmony import */ var _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-requests-page/my-requests-page.component */ "./src/app/modules/pages/my-requests-page/my-requests-page.component.ts");











const routes = [
    {
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'catalog'
            },
            {
                path: 'home',
                component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
            },
            {
                path: 'catalog',
                component: _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_4__["CatalogPageComponent"]
            },
            {
                path: 'requests',
                component: _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_5__["RequestsPageComponent"],
                children: [
                    {
                        path: 'details/:id',
                        component: _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_7__["RequestDetailsPageComponent"]
                    },
                    {
                        path: 'me',
                        component: _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_8__["MyRequestsPageComponent"]
                    }
                ]
            },
            {
                path: 'approvals',
                component: _approvals_page_approvals_page_component__WEBPACK_IMPORTED_MODULE_6__["ApprovalsPageComponent"]
            }
        ]
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/pages/pages.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/pages/pages.component.ts ***!
  \**************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PagesComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagesComponent.ɵfac = function PagesComponent_Factory(t) { return new (t || PagesComponent)(); };
PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagesComponent, selectors: [["app-pages"]], decls: 12, vars: 0, consts: [[1, "main-container"], [1, "subnav"], [1, "nav"], [1, "nav-item"], ["routerLink", "/pages/catalog", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/pages/requests", "routerLinkActive", "active", 1, "nav-link"], [1, "content-container"], [1, "content-area", 2, "padding", "0", "margin", "0"]], template: function PagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pages',
                templateUrl: './pages.component.html',
                styleUrls: ['./pages.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/modules/pages/pages-routing.module.ts");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.component */ "./src/app/modules/pages/pages.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/modules/pages/home-page/home-page.component.ts");
/* harmony import */ var _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalog-page/catalog-page.component */ "./src/app/modules/pages/catalog-page/catalog-page.component.ts");
/* harmony import */ var _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests-page/requests-page.component */ "./src/app/modules/pages/requests-page/requests-page.component.ts");
/* harmony import */ var _approvals_page_approvals_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./approvals-page/approvals-page.component */ "./src/app/modules/pages/approvals-page/approvals-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./request-details-page/request-details-page.component */ "./src/app/modules/pages/request-details-page/request-details-page.component.ts");
/* harmony import */ var _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./my-requests-page/my-requests-page.component */ "./src/app/modules/pages/my-requests-page/my-requests-page.component.ts");
/* harmony import */ var _team_requests_page_team_requests_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./team-requests-page/team-requests-page.component */ "./src/app/modules/pages/team-requests-page/team-requests-page.component.ts");
/* harmony import */ var angular_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-split */ "./node_modules/angular-split/__ivy_ngcc__/fesm2015/angular-split.js");
/* harmony import */ var _request_details_workflow_request_details_workflow_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./request-details-workflow/request-details-workflow.component */ "./src/app/modules/pages/request-details-workflow/request-details-workflow.component.ts");
/* harmony import */ var _all_requests_page_all_requests_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./all-requests-page/all-requests-page.component */ "./src/app/modules/pages/all-requests-page/all-requests-page.component.ts");

















class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angular_split__WEBPACK_IMPORTED_MODULE_13__["AngularSplitModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__["CatalogPageComponent"], _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_6__["RequestsPageComponent"], _approvals_page_approvals_page_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalsPageComponent"], _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_10__["RequestDetailsPageComponent"], _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_11__["MyRequestsPageComponent"], _team_requests_page_team_requests_page_component__WEBPACK_IMPORTED_MODULE_12__["TeamRequestsPageComponent"], _request_details_workflow_request_details_workflow_component__WEBPACK_IMPORTED_MODULE_14__["RequestDetailsWorkflowComponent"], _all_requests_page_all_requests_page_component__WEBPACK_IMPORTED_MODULE_15__["AllRequestsPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angular_split__WEBPACK_IMPORTED_MODULE_13__["AngularSplitModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"], _catalog_page_catalog_page_component__WEBPACK_IMPORTED_MODULE_5__["CatalogPageComponent"], _requests_page_requests_page_component__WEBPACK_IMPORTED_MODULE_6__["RequestsPageComponent"], _approvals_page_approvals_page_component__WEBPACK_IMPORTED_MODULE_7__["ApprovalsPageComponent"], _request_details_page_request_details_page_component__WEBPACK_IMPORTED_MODULE_10__["RequestDetailsPageComponent"], _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_11__["MyRequestsPageComponent"], _team_requests_page_team_requests_page_component__WEBPACK_IMPORTED_MODULE_12__["TeamRequestsPageComponent"], _request_details_workflow_request_details_workflow_component__WEBPACK_IMPORTED_MODULE_14__["RequestDetailsWorkflowComponent"], _all_requests_page_all_requests_page_component__WEBPACK_IMPORTED_MODULE_15__["AllRequestsPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angular_split__WEBPACK_IMPORTED_MODULE_13__["AngularSplitModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _clr_angular__WEBPACK_IMPORTED_MODULE_9__["ClarityModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/pages/request-details-page/request-details-page.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/pages/request-details-page/request-details-page.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RequestDetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsPageComponent", function() { return RequestDetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/data.service */ "./src/app/modules/core/services/data.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/page-loading/page-loading.component */ "./src/app/modules/shared/page-loading/page-loading.component.ts");









function RequestDetailsPageComponent_app_page_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-page-loading");
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "progress", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r6.ui_state_error_msg, " ");
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_3_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailsPageComponent_div_1_div_4_div_2_div_1_div_4_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "clr-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestDetailsPageComponent_div_1_div_4_div_2_div_1_p_10_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RequestDetailsPageComponent_div_1_div_4_div_2_div_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.showActivityLogs(act_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "View Logs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.ui_state_icon == "in-progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.ui_state_icon == "complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.ui_state_icon == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("shape", act_r6._block_data.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r6._block_data.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r6.ui_state_msg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6.ui_state_icon == "error");
} }
function RequestDetailsPageComponent_div_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailsPageComponent_div_1_div_4_div_2_div_1_Template, 14, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", act_r6._block_data);
} }
function RequestDetailsPageComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RequestDetailsPageComponent_div_1_div_4_div_2_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activities_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", activities_r4);
} }
function RequestDetailsPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RequestDetailsPageComponent_div_1_div_4_Template, 3, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("REQUEST ID: ", ctx_r1.request._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx_r1.activities$));
} }
function RequestDetailsPageComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "pre", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("      ", ctx_r2.selectedActivity.ui_console_out, "\n    ");
} }
class RequestDetailsPageComponent {
    constructor(
    // private treelistsvc: TreelistService,
    // private nodeService: NodeService,
    dataService, authService, activatedRoute) {
        this.dataService = dataService;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.loading = true;
        this.displayActivityLogs = false;
    }
    ngOnInit() {
        this.activities$ = this.dataService.records$('request-activities', {
            parent_request: this.request._id,
            start: false
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((a) => a.data));
        this.activities$.subscribe(activities => {
            activities.forEach(act => {
                this.dataService.getRecord('workflow-blocks', act.parent_workflow_block)
                    .then(res => {
                    act._block_data = res;
                });
            });
            this.loading = false;
        });
    }
    showActivityLogs(activity) {
        this.selectedActivity = activity;
        console.log(this.selectedActivity);
        this.displayActivityLogs = true;
    }
}
RequestDetailsPageComponent.ɵfac = function RequestDetailsPageComponent_Factory(t) { return new (t || RequestDetailsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
RequestDetailsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestDetailsPageComponent, selectors: [["app-request-details-page"]], inputs: { request: "request" }, decls: 4, vars: 5, consts: [[4, "ngIf"], ["class", "request-details-page", 4, "ngIf"], [2, "height", "100% !important", 3, "clrModalOpen", "clrModalSize", "clrModalOpenChange"], ["class", "modal-body activity-console-out", "style", "height: 800px !important; background-color: #000000;", 4, "ngIf"], [1, "request-details-page"], [1, "request-tags"], ["class", "request-activity-cards", 4, "ngIf"], [1, "request-activity-cards"], [1, "clr-row"], ["class", "clr-col-12 clr-col-sm-12", 4, "ngFor", "ngForOf"], [1, "clr-col-12", "clr-col-sm-12"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-block"], ["class", "progress loop top", 4, "ngIf"], ["class", "progress success top", 4, "ngIf"], ["class", "progress danger top", 4, "ngIf"], [1, "card-title"], [1, "card-text"], ["class", "card-text", 4, "ngIf"], [1, "card-footer"], [1, "btn", "btn-link", 3, "click"], [1, "progress", "loop", "top"], [1, "progress", "success", "top"], ["max", "100", "value", "100", "data-displayval", "100%"], [1, "progress", "danger", "top"], [1, "modal-body", "activity-console-out", 2, "height", "800px !important", "background-color", "#000000"], [2, "border", "0 !important"]], template: function RequestDetailsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RequestDetailsPageComponent_app_page_loading_0_Template, 1, 0, "app-page-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RequestDetailsPageComponent_div_1_Template, 6, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-modal", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clrModalOpenChange", function RequestDetailsPageComponent_Template_clr_modal_clrModalOpenChange_2_listener($event) { return ctx.displayActivityLogs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RequestDetailsPageComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrModalOpen", ctx.displayActivityLogs)("clrModalSize", "xl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedActivity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModal"], _shared_page_loading_page_loading_component__WEBPACK_IMPORTED_MODULE_7__["PageLoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_6__["ClrModalBody"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcmVxdWVzdC1kZXRhaWxzLXBhZ2UvcmVxdWVzdC1kZXRhaWxzLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-details-page',
                templateUrl: './request-details-page.component.html',
                styleUrls: ['./request-details-page.component.scss']
            }]
    }], function () { return [{ type: _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, { request: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['request']
        }] }); })();


/***/ }),

/***/ "./src/app/modules/pages/request-details-workflow/request-details-workflow.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/pages/request-details-workflow/request-details-workflow.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RequestDetailsWorkflowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsWorkflowComponent", function() { return RequestDetailsWorkflowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RequestDetailsWorkflowComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestDetailsWorkflowComponent.ɵfac = function RequestDetailsWorkflowComponent_Factory(t) { return new (t || RequestDetailsWorkflowComponent)(); };
RequestDetailsWorkflowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestDetailsWorkflowComponent, selectors: [["request-details-workflow"]], decls: 2, vars: 0, template: function RequestDetailsWorkflowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "request-details-workflow works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcmVxdWVzdC1kZXRhaWxzLXdvcmtmbG93L3JlcXVlc3QtZGV0YWlscy13b3JrZmxvdy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailsWorkflowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'request-details-workflow',
                templateUrl: './request-details-workflow.component.html',
                styleUrls: ['./request-details-workflow.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/requests-page/requests-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/requests-page/requests-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestsPageComponent", function() { return RequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/__ivy_ngcc__/fesm2015/clr-angular.js");
/* harmony import */ var _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-requests-page/my-requests-page.component */ "./src/app/modules/pages/my-requests-page/my-requests-page.component.ts");
/* harmony import */ var _all_requests_page_all_requests_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../all-requests-page/all-requests-page.component */ "./src/app/modules/pages/all-requests-page/all-requests-page.component.ts");





function RequestsPageComponent_clr_tab_content_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "my-requests-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RequestsPageComponent_clr_tab_content_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-tab-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "all-requests-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RequestsPageComponent {
    constructor() {
        this.loading = false;
    }
    ngOnInit() {
    }
}
RequestsPageComponent.ɵfac = function RequestsPageComponent_Factory(t) { return new (t || RequestsPageComponent)(); };
RequestsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestsPageComponent, selectors: [["app-requests-page"]], decls: 11, vars: 1, consts: [[1, "requests-page-wrapper", 2, "height", "100%"], [1, "requests-page-container", 2, "padding", "15px", "height", "calc(100% - 40px)"], ["clrTabLink", ""], [4, "clrIfActive"], ["clrTabLink", "", "id", "allRequestsTab"], ["id", "allRequests", 4, "clrIfActive"], ["id", "allRequests"]], template: function RequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "clr-tabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RequestsPageComponent_clr_tab_content_6_Template, 2, 0, "clr-tab-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "clr-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "All Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RequestsPageComponent_clr_tab_content_10_Template, 2, 0, "clr-tab-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("clrIfActive", true);
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTabs"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ɵem"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTab"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTabLink"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ɵen"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrIfActive"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrTabContent"], _my_requests_page_my_requests_page_component__WEBPACK_IMPORTED_MODULE_2__["MyRequestsPageComponent"], _all_requests_page_all_requests_page_component__WEBPACK_IMPORTED_MODULE_3__["AllRequestsPageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcmVxdWVzdHMtcGFnZS9yZXF1ZXN0cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-requests-page',
                templateUrl: './requests-page.component.html',
                styleUrls: ['./requests-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/pages/team-requests-page/team-requests-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pages/team-requests-page/team-requests-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TeamRequestsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamRequestsPageComponent", function() { return TeamRequestsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TeamRequestsPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
TeamRequestsPageComponent.ɵfac = function TeamRequestsPageComponent_Factory(t) { return new (t || TeamRequestsPageComponent)(); };
TeamRequestsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TeamRequestsPageComponent, selectors: [["team-requests-page"]], decls: 2, vars: 0, template: function TeamRequestsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "team-requests-page works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdGVhbS1yZXF1ZXN0cy1wYWdlL3RlYW0tcmVxdWVzdHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamRequestsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'team-requests-page',
                templateUrl: './team-requests-page.component.html',
                styleUrls: ['./team-requests-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-pages-pages-module-es2015.js.map