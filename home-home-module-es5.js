function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Nami's Ninjutsu Tracker\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button size=\"small\" expand=\"full\" (click)=\"editLevel()\">\n          Character Level\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button size=\"small\" expand=\"full\" (click)=\"longRest()\">\n          Long Rest\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <div class=\"fixed-padding\">\n    <h3>Mudra</h3>\n    <ion-list class=\"no-bottom\">\n      <ion-item *ngIf=\"character.level >= 3\" (click)=\"useMudra('ten')\">\n        <ion-label>Ten</ion-label>\n        <ion-badge slot=\"end\" [color]=\"available_ten > 0 ? 'tertiary' : 'danger'\">{{ available_ten }} / {{ ten }}</ion-badge>\n      </ion-item>\n      <ion-item *ngIf=\"character.level >= 9\" (click)=\"useMudra('chi')\">\n        <ion-label>Chi</ion-label>\n        <ion-badge slot=\"end\" [color]=\"available_chi > 0 ? 'tertiary' : 'danger'\">{{ available_chi }} / {{ chi }}</ion-badge>\n      </ion-item>\n      <ion-item *ngIf=\"character.level >= 13\" (click)=\"useMudra('jin')\">\n        <ion-label>Jin</ion-label>\n        <ion-badge slot=\"end\" [color]=\"available_jin > 0 ? 'tertiary' : 'danger'\">{{ available_jin }} / {{ jin }}</ion-badge>\n      </ion-item>\n      <ion-item *ngIf=\"!character.level\">\n        <ion-label>\n          Please set your character level\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"character.level < 3\">\n        <ion-label>\n          Mudra only available at 3rd level\n        </ion-label>\n      </ion-item>\n    </ion-list>\n    <small *ngIf=\"character.level >= 3\">\n      Tap the Mudra to use it\n    </small>\n\n\n    <h3>Ninjutsu</h3>\n    <ion-list>\n      <ion-item detail=\"true\" *ngFor=\"let n of ninjutsus\" (click)=\"loadNinjutsu(n.id)\">\n        <ion-label>\n          {{ n.name }}\n        </ion-label>\n        <ion-label class=\"spell\" *ngIf=\"n.spell.length > 1\">\n          ({{ n.spell }})\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n\n<!-- <ion-tabs>\n  <ion-tab-bar color=\"tertiary\" slot=\"bottom\">\n    <ion-tab-button selected=\"true\" (click)=\"editLevel()\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Character Level</ion-label>\n    </ion-tab-button>\n    <ion-tab-button selected=\"true\" (click)=\"updateMudra()\">\n      <ion-icon name=\"bed\"></ion-icon>\n      <ion-label>Long Rest</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs> -->\n";
    /***/
  },

  /***/
  "./src/app/character.service.ts":
  /*!**************************************!*\
    !*** ./src/app/character.service.ts ***!
    \**************************************/

  /*! exports provided: CharacterService */

  /***/
  function srcAppCharacterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterService", function () {
      return CharacterService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");

    var CharacterService =
    /*#__PURE__*/
    function () {
      function CharacterService(storage) {
        var _this = this;

        _classCallCheck(this, CharacterService);

        this.storage = storage;
        storage.get("level").then(function (val) {
          console.log(val);
          _this.level = Number(val);
        });
      }

      _createClass(CharacterService, [{
        key: "setLevel",
        value: function setLevel(l) {
          this.storage.set("level", l);
        }
      }]);

      return CharacterService;
    }();

    CharacterService.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }];
    };

    CharacterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])], CharacterService);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".no-bottom {\n  margin-bottom: 0;\n}\n\nsmall {\n  text-align: center;\n  font-style: italic;\n  display: block;\n  font-size: 50%;\n}\n\n.fixed-padding {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.spell {\n  font-size: 75%;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXNleS9Eb2N1bWVudHMvQXBwRGV2ZWxvcG1lbnQvbmluanV0c3Uvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuc21hbGwge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiA1MCU7XG59XG5cbi5maXhlZC1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuLnNwZWxsIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59IiwiLm5vLWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnNtYWxsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDUwJTtcbn1cblxuLmZpeGVkLXBhZGRpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbi5zcGVsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../character.service */
    "./src/app/character.service.ts");
    /* harmony import */


    var _ninjutsu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../ninjutsu.service */
    "./src/app/ninjutsu.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(router, alertController, character, toastController, ninjutsu) {
        var _this2 = this;

        _classCallCheck(this, HomePage);

        this.router = router;
        this.alertController = alertController;
        this.character = character;
        this.toastController = toastController;
        this.ninjutsu = ninjutsu;
        this.updateMudra();
        this.ninjutsu.getNinjutsu().then(function (res) {
          _this2.ninjutsus = res;
        });
      }

      _createClass(HomePage, [{
        key: "updateMudra",
        value: function updateMudra() {
          this.ten = 0;
          this.chi = 0;
          this.jin = 0;

          if (!isNaN(this.character.level)) {
            if (this.character.level >= 3) {
              this.ten = Math.floor(this.character.level / 2);
            }

            if (this.character.level >= 9) {
              this.chi = Math.floor(this.character.level / 2);
            }

            if (this.character.level >= 13) {
              this.jin = Math.floor(this.character.level / 2);
            }
          }

          this.available_chi = this.chi;
          this.available_jin = this.jin;
          this.available_ten = this.ten;
        }
      }, {
        key: "loadNinjutsu",
        value: function loadNinjutsu(id) {
          this.router.navigate(['/ninjutsu/' + id]);
        }
      }, {
        key: "useMudra",
        value: function useMudra(type) {
          if (type == 'ten' && this.available_ten > 0) {
            this.available_ten--;
          }

          if (type == 'chi' && this.available_chi > 0) {
            this.available_chi--;
          }

          if (type == 'jin' && this.available_jin > 0) {
            this.available_jin--;
          }
        }
      }, {
        key: "longRest",
        value: function longRest() {
          this.updateMudra();
          this.finishedLongRest();
        }
      }, {
        key: "editLevel",
        value: function editLevel() {
          this.setCharacterLevel();
        } // controllers

      }, {
        key: "finishedLongRest",
        value: function finishedLongRest() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: "You've taken a long rest!",
                      duration: 2000,
                      color: "dark",
                      keyboardClose: true
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setCharacterLevel",
        value: function setCharacterLevel() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: "Set Character Level",
                      inputs: [{
                        name: "level",
                        type: "number",
                        value: this.character.level,
                        min: 1,
                        max: 20
                      }],
                      buttons: ['Cancel', {
                        text: "Save",
                        cssClass: 'tertiary',
                        handler: function handler(data) {
                          var characterLevel = parseInt(data.level);

                          if (characterLevel >= 1 && characterLevel <= 20) {
                            console.log("Valid!");
                            _this3.character.level = characterLevel;
                            console.log("Character Level: ", _this3.character.level);

                            _this3.character.setLevel(characterLevel);

                            _this3.updateMudra();
                          } else {
                            console.log("Invalid");
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: _ninjutsu_service__WEBPACK_IMPORTED_MODULE_4__["NinjutsuService"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ninjutsu_service__WEBPACK_IMPORTED_MODULE_4__["NinjutsuService"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map