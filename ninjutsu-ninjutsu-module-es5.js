function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ninjutsu-ninjutsu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjutsu/ninjutsu.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ninjutsu/ninjutsu.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNinjutsuNinjutsuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>{{ ninjutsuData.name }}</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        {{ ninjutsuData.name }}\n      </ion-card-title>\n      <ion-card-subtitle>\n        {{ ninjutsuData.description }}\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <p>\n        <strong>Requirement:</strong> {{ ninjutsuData.mudra }}\n      </p>\n    </ion-card-content>\n    <ion-card-content>\n      <strong>Spell Description (Level {{ ninjutsuData.spell_level }})</strong>\n      <p>\n        {{ ninjutsuData.spell_description }}\n      </p>\n    </ion-card-content>\n    <ion-card-content>\n      <strong *ngIf=\"ninjutsuData.higher_level\">At Higher Levels</strong>\n      <p>\n        {{ ninjutsuData.higher_level }}\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/ninjutsu/ninjutsu-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/ninjutsu/ninjutsu-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: NinjutsuPageRoutingModule */

  /***/
  function srcAppNinjutsuNinjutsuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NinjutsuPageRoutingModule", function () {
      return NinjutsuPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ninjutsu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ninjutsu.page */
    "./src/app/ninjutsu/ninjutsu.page.ts");

    var routes = [{
      path: '',
      component: _ninjutsu_page__WEBPACK_IMPORTED_MODULE_3__["NinjutsuPage"]
    }];

    var NinjutsuPageRoutingModule = function NinjutsuPageRoutingModule() {
      _classCallCheck(this, NinjutsuPageRoutingModule);
    };

    NinjutsuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NinjutsuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ninjutsu/ninjutsu.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/ninjutsu/ninjutsu.module.ts ***!
    \*********************************************/

  /*! exports provided: NinjutsuPageModule */

  /***/
  function srcAppNinjutsuNinjutsuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NinjutsuPageModule", function () {
      return NinjutsuPageModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ninjutsu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ninjutsu-routing.module */
    "./src/app/ninjutsu/ninjutsu-routing.module.ts");
    /* harmony import */


    var _ninjutsu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ninjutsu.page */
    "./src/app/ninjutsu/ninjutsu.page.ts");

    var NinjutsuPageModule = function NinjutsuPageModule() {
      _classCallCheck(this, NinjutsuPageModule);
    };

    NinjutsuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ninjutsu_routing_module__WEBPACK_IMPORTED_MODULE_5__["NinjutsuPageRoutingModule"]],
      declarations: [_ninjutsu_page__WEBPACK_IMPORTED_MODULE_6__["NinjutsuPage"]]
    })], NinjutsuPageModule);
    /***/
  },

  /***/
  "./src/app/ninjutsu/ninjutsu.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/ninjutsu/ninjutsu.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNinjutsuNinjutsuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNleS9Eb2N1bWVudHMvQXBwRGV2ZWxvcG1lbnQvbmluanV0c3Uvc3JjL2FwcC9uaW5qdXRzdS9uaW5qdXRzdS5wYWdlLnNjc3MiLCJzcmMvYXBwL25pbmp1dHN1L25pbmp1dHN1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9uaW5qdXRzdS9uaW5qdXRzdS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ninjutsu/ninjutsu.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/ninjutsu/ninjutsu.page.ts ***!
    \*******************************************/

  /*! exports provided: NinjutsuPage */

  /***/
  function srcAppNinjutsuNinjutsuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NinjutsuPage", function () {
      return NinjutsuPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ninjutsu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ninjutsu.service */
    "./src/app/ninjutsu.service.ts");

    var NinjutsuPage =
    /*#__PURE__*/
    function () {
      function NinjutsuPage(route, ninjutsu) {
        _classCallCheck(this, NinjutsuPage);

        this.route = route;
        this.ninjutsu = ninjutsu;
        this.id = parseInt(this.route.snapshot.paramMap.get("id"));
        this.ninjutsuData = ninjutsu.getOneNinjutsu(this.id);
      }

      _createClass(NinjutsuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NinjutsuPage;
    }();

    NinjutsuPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ninjutsu_service__WEBPACK_IMPORTED_MODULE_3__["NinjutsuService"]
      }];
    };

    NinjutsuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ninjutsu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ninjutsu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ninjutsu/ninjutsu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ninjutsu.page.scss */
      "./src/app/ninjutsu/ninjutsu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ninjutsu_service__WEBPACK_IMPORTED_MODULE_3__["NinjutsuService"]])], NinjutsuPage);
    /***/
  }
}]);
//# sourceMappingURL=ninjutsu-ninjutsu-module-es5.js.map