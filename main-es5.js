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


    __webpack_exports__["default"] = "<router-outlet name=\"formsOutlet\"></router-outlet>\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<notifier-container></notifier-container>\r\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication-form/authentication-form.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication-form/authentication-form.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationAuthenticationFormAuthenticationFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signCard\" @formState>\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-8 mx-auto\">\r\n            <div class=\"card card-sign my-5\">\r\n                <div class=\"closeDiv\">\r\n                    <button type=\"button\" class=\"close closeForm\" (click)=\"closeSignForm()\">&times;</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <app-sign-in [@moveToLeft]=\"loginState\"></app-sign-in>\r\n                    <app-sign-up [@moveToRight]=\"registeredState\"></app-sign-up>\r\n                    <div class=\"d-flex justify-content-between mt-3\">\r\n                        <button class=\"btn btn-outline-success borders\" (click)=\"moveToLogIn()\"\r\n                            [disabled]=\"moveToLogInBtn\">Move to Log In</button>\r\n                        <button class=\"btn btn-outline-success borders\" (click)=\"moveToRegistered()\"\r\n                            [disabled]=\"moveToRegBtn\">Move to Registered</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile-set-up/profile-set-up.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile-set-up/profile-set-up.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationProfileSetUpProfileSetUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"signCard\" @formState>\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-8 mx-auto\">\r\n            <div class=\"card card-sign my-5\">\r\n                <div class=\"closeDiv\">\r\n                    <button type=\"button\" class=\"close closeForm\" (click)=\"close()\">&times;</button>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-sign\">\r\n                        <h5 class=\"card-title text-center\">Set Up</h5>\r\n                        <blockquote class=\"blockquote text-center\">Do you want to set your userdata?</blockquote>\r\n                        <div class=\"p-3\">\r\n                            <div class=\"m-2 d-flex justify-content-center\">\r\n                                <button class=\"btn btn-outline-success borders\" (click)=\"loadUserEditForm()\">Yes, I want\r\n                                    now.</button>\r\n                            </div>\r\n                            <div class=\"m-2 d-flex justify-content-center\">\r\n                                <button class=\"btn btn-outline-success borders\" (click)=\"close()\">No, I will make this\r\n                                    later.</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-in/sign-in.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-in/sign-in.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationSignInSignInComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-sign\" [formGroup]=\"signInForm\" (ngSubmit)=\"signIn()\">\r\n    <h5 class=\"card-title text-center pb-3\">Log In</h5>\r\n    <input type=\"text\" class=\"form-control form-group customInput\" placeholder=\"Your Email *\" formControlName=\"email\" />\r\n    <div *ngIf=\"email.invalid && email.touched\" class=\"text-danger mb-3\">\r\n        Email is required!\r\n    </div>\r\n    <input type=\"password\" class=\"form-control form-group customInput\" placeholder=\"Your Password *\"\r\n        formControlName=\"password\" />\r\n    <div *ngIf=\"password.invalid && password.touched\" class=\"text-danger mb-3\">\r\n        Password is required and should have more than 8 chars!\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button type=\"submit\" [disabled]=\"signInForm.invalid\" class=\"btn btn-info btn-lg borders\">Sign In</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthenticationSignUpSignUpComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"form-sign\" [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\">\r\n    <h5 class=\"card-title text-center pb-3\">Registered</h5>\r\n    <input type=\"text\" class=\"form-control form-group customInput\" placeholder=\"Your Email *\" formControlName=\"email\" />\r\n    <div *ngIf=\"email.invalid && email.touched\" class=\"text-danger mb-3\">\r\n        Email is required!\r\n    </div>\r\n\r\n    <div formGroupName=\"passwords\">\r\n        <input type=\"password\" class=\"form-control form-group customInput\" placeholder=\"Your Password *\"\r\n            formControlName=\"password\" />\r\n        <input type=\"password\" class=\"form-control form-group customInput\" placeholder=\"Confirm Password *\"\r\n            formControlName=\"confirmPassword\" />\r\n    </div>\r\n\r\n    <div *ngIf=\"passwords?.errors?.passwordsMatch && confirmPassword.touched && password.touched\" class=\"text-danger mb-3\">\r\n        Two passwords must match!\r\n    </div>\r\n    <div *ngIf=\"(confirmPassword.invalid && confirmPassword.touched) || password.invalid && password.touched\" class=\"text-danger mb-3\">\r\n        Password is required and should have more than 8 chars!\r\n    </div>\r\n\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button type=\"submit\" [disabled]=\"signUpForm.invalid\" class=\"btn btn-primary btn-lg borders\">Sign Up</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/catalog/catalog.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/catalog/catalog.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreCatalogCatalogCatalogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <app-search></app-search>\r\n    <app-items-counter></app-items-counter>\r\n    <app-catalog-list [items]=\"items\"></app-catalog-list>\r\n    <app-page-controller *ngIf=\"(items | async)?.length > 0\"></app-page-controller>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/search/search.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/search/search.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreCatalogSearchSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"searchForm\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-10 mx-auto\">\r\n            <div class=\"card card-search my-3\">\r\n                <div>\r\n                    <h5 class=\"card-title title text-center\">Search...</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-search\" [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control customInput\" placeholder=\"Do you search something?\" formControlName=\"name\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-success borders\" type=\"submit\">Search</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"input-group mb-3 my-3\">\r\n                            <select class=\"custom-select customInput\" id=\"selectCategory\" formControlName=\"category\">\r\n                                <option value=\"all\">All</option>\r\n                                <option value=\"pc\">Pc</option>\r\n                                <option value=\"phone\">Phone</option>\r\n                                <option value=\"tablets\">Tablets</option>\r\n                                <option value=\"laptops\">Laptops</option>\r\n                                <option value=\"accForPC\">Accessories for PC</option>\r\n                                <option value=\"accForPhone\">Accessories for Phone</option>\r\n                                <option value=\"audio\">Audio technique</option>\r\n                                <option value=\"photo\">Photo, video</option>\r\n                                <option value=\"nav\">Navigation</option>\r\n                                <option value=\"tv\">TVs</option>\r\n                                <option value=\"other\">Other</option>\r\n                            </select>\r\n                            <div class=\"input-group-append\">\r\n                                <label class=\"input-group-text customInput\" for=\"selectCategory\">Categories</label>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"py-5 d-flex justify-content-between\">\r\n    <div class=\"col text-center my-auto\"><img src=\"./../../assets/images/logo.png\" class=\"w-100\"></div>\r\n    <div class=\"col mt-0\">\r\n        <h5>Dependencies</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\" href=\"https://angular.io/\" target=\"_blank\">Angular</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://developers.google.com/maps/documentation/javascript/places\" target=\"_blank\">Google Maps Places</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://github.com/angular/angularfire\" target=\"_blank\">Firebase for\r\n                    Angular</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://www.npmjs.com/package/angular-notifier\"\r\n                    target=\"_blank\">Angular-Notifier</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://getbootstrap.com/\" target=\"_blank\">Bootstrap</a></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"col mt-0\">\r\n        <h5>Connections</h5>\r\n        <ul class=\"list-unstyled text-small\">\r\n            <li><a class=\"text-muted\" href=\"https://www.facebook.com/profile.php?id=100008368336139\"\r\n                    target=\"_blank\">Facebook</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://www.instagram.com/sandi9999a/\" target=\"_blank\">Instagram</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://www.linkedin.com/in/ak-exp/\" target=\"_blank\">LinkedIn</a></li>\r\n            <li><a class=\"text-muted\" href=\"https://github.com/aleksandar9999a\" target=\"_blank\">Github</a></li>\r\n        </ul>\r\n    </div>\r\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"masthead d-flex\">\r\n    <div class=\"container text-center my-auto\">\r\n        <h1 class=\"mb-1\">Experience Shop</h1>\r\n        <h3 class=\"mb-5\">\r\n            <em>Create your аnnouncements for sale and share it free</em>\r\n        </h3>\r\n        <button class=\"btn btn-outline-success btn-lg borders\" routerLink=\"/catalog\" >Catalog</button>\r\n    </div>\r\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"logo\" routerLink=\"/\">\r\n    <img src=\"./../../assets/images/logo.png\" class=\"w-100\">\r\n</div>\r\n\r\n<nav class=\"navbar navbar-expand-sm navbar-dark p-2 bg-dark\">\r\n    <button class=\"navbar-toggler ml-auto\" type=\"button\" (click)=\"changeNavbarState()\" data-toggle=\"collapse\"\r\n        data-target=\"#collapsibleNavbar\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse navbar-panel\" [ngClass]=\"navBarIsOpen\" id=\"collapsibleNavbar\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item mx-2\">\r\n                <button class=\"btn btn-outline-primary borders navbarBtn\" routerLink=\"/catalog\">Catalog</button>\r\n            </li>\r\n            <li *ngIf=\"isHere\" class=\"nav-item mx-2\">\r\n                <button class=\"btn btn-outline-primary borders navbarBtn\" routerLink=\"/users\">Users</button>\r\n            </li>\r\n            <li *ngIf=\"isHere\" class=\"nav-item mx-2\">\r\n                <button class=\"btn btn-outline-primary borders navbarBtn\" routerLink=\"/profile\">Profile</button>\r\n            </li>\r\n        </ul>\r\n        <ul *ngIf=\"isHere\" class=\"navbar-nav\">\r\n            <li class=\"nav-item\">\r\n                <button class=\"btn btn-outline-primary borders navbarBtn\" (click)=\"openAnnForm()\">Create\r\n                    Аnnouncement</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button (click)=\"openShoppingCard()\" class=\"btn btn-outline-primary borders navbarBtn\">Shopping\r\n                    Card</button>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <button (click)=\"logOut()\" class=\"btn btn-outline-danger borders\">Log Out</button>\r\n            </li>\r\n        </ul>\r\n        <button *ngIf=\"!isHere\" class=\"btn btn-outline-primary borders\" (click)=\"openAuthForm()\">SignUp/SignIn</button>\r\n    </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-card/items-card.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-card/items-card.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileItemsCardItemsCardItemsCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col card-form form\">\r\n    <div class=\"container\">\r\n        <div class=\"col-20\">\r\n            <div class=\"card card-edit\">\r\n                <div class=\"card-header\">\r\n                    <app-profile-navigation></app-profile-navigation>\r\n                </div>\r\n                <div class=\"card-body mt-3\">\r\n                    <app-items-list></app-items-list>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-list/items-list.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-list/items-list.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileItemsCardItemsListItemsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"listType === 'myItems'; else orders\">\r\n    <app-catalog-list [items]=\"items\"></app-catalog-list>\r\n</div>\r\n<ng-template #orders>\r\n    <app-orders-list [orders]=\"items\"></app-orders-list>\r\n</ng-template>\r\n<div *ngIf=\"(items | async)?.length > 0\" class=\"mt-2\">\r\n    <app-page-controller></app-page-controller>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileItemsCardProfileNavigationProfileNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-light bg-light\">\r\n  <div class=\"mx-auto\">\r\n    <button class=\"btn btn-outline-dark borders\" (click)=\"changeItems('shipments')\">Shipments</button>\r\n    <button class=\"btn btn-outline-dark borders\" (click)=\"changeItems('myItems')\">My Items</button>\r\n    <button class=\"btn btn-outline-dark borders\" (click)=\"changeItems('orders')\">Orders</button>\r\n  </div>\r\n</nav>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile/profile.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile/profile.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"myContainer\">\r\n    <app-user-info></app-user-info>\r\n    <app-items-card></app-items-card>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/user-info/user-info/user-info.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/user-info/user-info/user-info.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreProfileUserInfoUserInfoUserInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col card-form form\">\r\n    <div class=\"container\">\r\n        <div class=\"col-20\">\r\n            <div class=\"card card-edit my-3\">\r\n                <div>\r\n                    <h5 class=\"card-title title text-center font-weight-bold\">User Info</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div *ngIf=\"(profile | async) as myProfile; else loading\">\r\n\r\n                        <div class=\"row  d-flex\">\r\n                            <div class=\"col-md-4 itemImg ml-auto\">\r\n                                <img *ngIf=\"myProfile.profileImg\" [src]=\"myProfile.profileImg\" class=\"card-img itemImg\" alt=\"...\">\r\n                            </div>\r\n\r\n                            <div class=\"col-md-6 ml-auto\">\r\n                                <h5 class=\"card-title\">Username</h5>\r\n                                <p>{{myProfile.username || 'Unknown'}}</p>\r\n                                <h5 class=\"card-title\">Summary</h5>\r\n                                <p>{{myProfile.summary || 'Unknown'}}</p>\r\n                                <h5 class=\"card-title\">Location</h5>\r\n                                <p>{{myProfile.location || 'Unknown'}}</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row d-flex justify-content-center my-3\">\r\n                            <button class=\"btn btn-success btn-lg borders editButtons\"\r\n                                (click)=\"openEditForm()\">Edit</button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <ng-template #loading>\r\n                        <div class=\"text-center\">\r\n                            <img src=\"./../../assets/images/progresbar.gif\" class=\"loadingSpinner\">\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-catalog/user-catalog.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-catalog/user-catalog.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreUserCatalogUserCatalogUserCatalogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n    <app-user-search></app-user-search>\r\n    <app-items-counter></app-items-counter>\r\n    <app-user-list></app-user-list>\r\n    <app-page-controller *ngIf=\"(profiles | async)?.length > 0\"></app-page-controller>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-list/user-list.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-list/user-list.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreUserCatalogUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"catalog-list\">\r\n    <div class=\"my-5\" *ngIf=\"(profiles | async) as newProfiles; else loading\">\r\n        <div *ngFor=\"let profile of newProfiles\" class=\"d-flex list-group\">\r\n            <app-user-item [profile]=\"profile\"></app-user-item>\r\n        </div>\r\n        <div *ngIf=\"newProfiles.length === 0\" class=\"noAnnouncementsContainer\">\r\n            <p class=\"text-center\">Sorry, We don't have more users...</p>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-template #loading>\r\n        <div class=\"text-center\">\r\n            <img src=\"./../../assets/images/progresbar.gif\" class=\"loadingSpinner\">\r\n        </div>\r\n    </ng-template>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-search/user-search.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-search/user-search.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCoreUserCatalogUserSearchUserSearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"searchForm\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-10 mx-auto\">\r\n            <div class=\"card card-search my-3\">\r\n                <div>\r\n                    <h5 class=\"card-title title text-center\">Search...</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-search\" [formGroup]=\"searchForm\" (ngSubmit)=\"search()\">\r\n                        <div class=\"input-group\">\r\n                            <input type=\"text\" class=\"form-control customInput\" placeholder=\"Do you search someone?\" formControlName=\"username\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-success borders\" type=\"submit\">Search</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/announcement-form/announcement-form.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/announcement-form/announcement-form.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsAnnouncementFormAnnouncementFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\" @formState>\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-5 mx-auto\">\r\n            <div class=\"card card-edit my-5\">\r\n                <div class=\"closeDiv\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n                    <h5 class=\"card-title title text-center\">Аnnouncement</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-edit\" [formGroup]=\"announcementsFormGroup\" (ngSubmit)=\"setAnnouncement()\">\r\n                        <div class=\"form-label-group\">\r\n                            <img [src]=\"localImageUrl || defaultImage\" class=\"rounded mx-auto d-block adImage\"\r\n                                alt=\"edImage\" />\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Аnnouncement name</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Аnnouncement name\"\r\n                                formControlName=\"name\">\r\n\r\n                            <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"text-danger\">\r\n                                <div *ngIf=\"name.errors.required\">\r\n                                    Name is required.\r\n                                </div>\r\n                                <div *ngIf=\"name.errors.minlength\">\r\n                                    Name must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Description</label>\r\n                            <textarea class=\"form-control\" placeholder=\"Description\" formControlName=\"desc\"\r\n                                rows=\"4\"></textarea>\r\n\r\n                            <div *ngIf=\"desc.invalid && (desc.dirty || desc.touched)\" class=\"text-danger\">\r\n                                <div *ngIf=\"desc.errors.required\">\r\n                                    Description is required.\r\n                                </div>\r\n                                <div *ngIf=\"desc.errors.minlength\">\r\n                                    Description must be at least 6 characters long.\r\n                                </div>\r\n                                <div *ngIf=\"desc.errors.maxlength\">\r\n                                    Description must be at least 300 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Price</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Price in lv.\" formControlName=\"price\" pattern=\"[0-9.]+\">\r\n\r\n                            <div *ngIf=\"price.invalid && price.touched\" class=\"text-danger\">\r\n                                Price is required and must be a number.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Choose type of announcement</label>\r\n                            <div class=\"input-group mb-3\">\r\n                                <select class=\"custom-select customInput\" id=\"selectEditType\"\r\n                                    formControlName=\"category\">\r\n                                    <option value=\"pc\">Pc</option>\r\n                                    <option value=\"phone\">Phone</option>\r\n                                    <option value=\"tablets\">Tablets</option>\r\n                                    <option value=\"laptops\">Laptops</option>\r\n                                    <option value=\"accForPC\">Accessories for PC</option>\r\n                                    <option value=\"accForPhone\">Accessories for Phone</option>\r\n                                    <option value=\"audio\">Audio technique</option>\r\n                                    <option value=\"photo\">Photo, video</option>\r\n                                    <option value=\"nav\">Navigation</option>\r\n                                    <option value=\"tv\">TVs</option>\r\n                                    <option value=\"other\">Other</option>\r\n                                </select>\r\n                                <div class=\"input-group-append\">\r\n                                    <label class=\"input-group-text customInput\" for=\"selectEditType\">Categories</label>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"category.invalid && category.touched\" class=\"text-danger\">\r\n                                    Category is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Choose announcement image</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" class=\"custom-file-input \" id=\"selectEditImg\"\r\n                                    (change)=\"previewImg($event)\" formControlName=\"image\">\r\n                                <label class=\"custom-file-label customInput\" for=\"selectEditImg\">Choose file</label>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"image.invalid && image.touched\" class=\"text-danger\">\r\n                                Image is required.\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase borders\" type=\"submit\"\r\n                            [disabled]=\"announcementsFormGroup.invalid\">Set</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/item-details/item-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/item-details/item-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsItemDetailsItemDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\" @formState>\r\n    <div class=\"container cardContainer mx-auto\">\r\n        <div class=\"col-md-lg-10 mx-auto\">\r\n            <div class=\"card card-edit my-5 no-gutters\">\r\n                <div *ngIf=\"(item | async) as currItem\">\r\n                    <div class=\"closeDiv\">\r\n                        <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n                        <h5 class=\"card-title title text-center\">{{currItem.name | uppercase}}</h5>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <form class=\"form-edit\">\r\n                            <div class=\"row justify-content-center\">\r\n                                <div class=\"col-md-5 itemImg\">\r\n                                    <img *ngIf=\"currItem.image\" [src]=\"currItem.image\" class=\"card-img itemImg\"\r\n                                        alt=\"...\">\r\n                                </div>\r\n                                <div class=\"col-md-5\">\r\n                                    <div class=\"desc\">\r\n                                        <p class=\"card-text\">{{currItem.desc}}</p>\r\n                                    </div>\r\n                                    <div class=\"info d-flex align-items-end\" (click)=\"close()\">\r\n                                        <app-user-item [profile]=\"profile | async\"></app-user-item>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"isHere\" class=\"row d-flex justify-content-center mt-5\">\r\n                                <button *ngIf=\"isCreator()\" class=\"btn btn-primary btn-lg borders detailsButtons\"\r\n                                    (click)=\"edit(currItem)\">Edit</button>\r\n                                <button *ngIf=\"isCreator()\" class=\"btn btn-danger btn-lg borders detailsButtons\"\r\n                                    (click)=\"deleteItem(currItem)\">Delete</button>\r\n                                <button *ngIf=\"!isCreator()\" class=\"btn btn-success btn-lg borders detailsButtons\"\r\n                                    (click)=\"addToShoppingCard(currItem)\">Buy</button>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shipment-details/shipment-details.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shipment-details/shipment-details.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsShipmentDetailsShipmentDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\" @formState>\r\n    <div class=\"container cardContainer mx-auto\">\r\n        <div class=\"col-md-lg-10 mx-auto\">\r\n            <div class=\"card card-edit my-5 no-gutters\">\r\n                <div>\r\n                    <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n                    <h5 class=\"card-title title text-center\">Order number: {{title}}</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-edit\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-md-8\">\r\n                                <h3 class=\"text-center m-3\">Items:</h3>\r\n                                <div *ngFor=\"let item of items\">\r\n                                    <app-item [item]=\"item\"></app-item>\r\n                                </div>\r\n\r\n                                <div class=\"row m-3\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"text-center m-2\">Sender:</h5>\r\n                                        <app-user-item [profile]=\"sender | async\"></app-user-item>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 class=\"text-center m-2\">Receiver:</h5>\r\n                                        <app-user-item [profile]=\"receiver | async\"></app-user-item>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"recInfo\">\r\n                                    <div class=\"row m-3\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-center m-2\">First Name:</h5>\r\n                                            <p class=\"text-center\">{{recInfo.firstName}}</p>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-center m-2\">Last Name:</h5>\r\n                                            <p class=\"text-center\">{{recInfo.lastName}}</p>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-md-4\">\r\n                                            <h5 class=\"text-center m-2\">Phone Number:</h5>\r\n                                            <p class=\"text-center\">{{recInfo.phoneNumber}}</p>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div>\r\n                                        <h5 class=\"text-center m-2\">Location:</h5>\r\n                                        <p class=\"text-center\">{{recInfo.location}}</p>\r\n                                    </div>\r\n\r\n                                    <div *ngIf=\"recInfo.requirements\">\r\n                                        <h5 class=\"text-center m-2\">Requirements:</h5>\r\n                                        <p class=\"text-center\">{{recInfo.requirements}}</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"mt-5\">\r\n                                    <h4 class=\"text-center m-3\">Status</h4>\r\n                                    <h5 class=\"text-center\">{{status}}</h5>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"isSender\" class=\"row d-flex justify-content-center mt-5\">\r\n                                    <button class=\"btn btn-danger btn-lg borders detailsButtons\"\r\n                                        [disabled]=\"btnStatus?.deniedBtn\"\r\n                                        (click)=\"changeStatus('Denied')\">Denied</button>\r\n                                    <button class=\"btn btn-primary btn-lg borders detailsButtons\"\r\n                                        [disabled]=\"btnStatus?.confirmedBtn\"\r\n                                        (click)=\"changeStatus('Confirmed')\">Confirmed</button>\r\n                                    <button class=\"btn btn-warning btn-lg borders detailsButtons\"\r\n                                        [disabled]=\"btnStatus?.sendBtn\" (click)=\"changeStatus('Sended')\">Send</button>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"!isSender\" class=\"row d-flex justify-content-center mt-5\">\r\n                                    <button [disabled]=\"btnStatus?.isSended\"\r\n                                        class=\"btn btn-success btn-lg borders detailsButtons\"\r\n                                        (click)=\"changeStatus('Delivered')\">Delivered</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsShoppingCardShoppingCardDetailsShoppingCardDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"orderDataForm\" (ngSubmit)=\"handleSubmit()\">\r\n    <div class=\"form-label-group\">\r\n        <label>First name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"First name\" formControlName=\"firstName\">\r\n        <div *ngIf=\"firstName.invalid && firstName.touched\" class=\"text-danger\">\r\n                First name is required and must have more than 3 chars.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <label>Last name</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastName\">\r\n        <div *ngIf=\"lastName.invalid && lastName.touched\" class=\"text-danger\">\r\n            Last name is required and must have more than 3 chars.\r\n        </div>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <label>Phone number</label>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Phone number\" formControlName=\"phoneNumber\" pattern=\"[0-9]+\">\r\n        <div *ngIf=\"phoneNumber.invalid && phoneNumber.touched\" class=\"text-danger\">\r\n            Phone number is required and must be from 6 to 15 chars (digits).\r\n        </div>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <label>Additional requirements</label>\r\n        <textarea class=\"form-control\" placeholder=\"Requirements\" rows=\"4\" formControlName=\"requirements\"></textarea>\r\n    </div>\r\n    <div class=\"form-label-group\">\r\n        <label>Type your location</label>\r\n        <input type=\"text\" placeholder=\"Search for Location\" class=\"form-control\" formControlName=\"location\" appAutocomplete>\r\n        <div *ngIf=\"location.invalid && location.touched\" class=\"text-danger\">\r\n            Location is required.\r\n        </div>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <button class=\"btn btn-lg btn-info text-uppercase borders mr-1\" (click)=\"backToList()\">Back</button>\r\n        <button [disabled]=\"orderDataForm.invalid\" class=\"btn btn-lg btn-success text-uppercase borders ml-1\">Buy</button>\r\n    </div>\r\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsShoppingCardShoppingCardListShoppingCardListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(items | async) as newItems; else loading\" class=\"list-group\">\r\n    <div *ngFor=\"let item of newItems\">\r\n        <app-item [item]=\"item\"></app-item>\r\n    </div>\r\n    <div *ngIf=\"newItems.length === 0\" class=\"text-center py-4\">\r\n        <h3 class=\"mb-6 noItems\">\r\n            <em>Sorry, You don't have any products in your shopping card.</em>\r\n        </h3>\r\n    </div>\r\n    <div class=\"d-flex my-3 justify-content-end\">\r\n        <h5 class=\" font-weight-bold\">Full price: <span>{{price}}lv.</span></h5>\r\n    </div>\r\n    <div *ngIf=\"newItems.length > 0\" class=\"d-flex justify-content-center\">\r\n        <button class=\"btn btn-lg btn-danger text-uppercase borders mr-1 myBtn\" (click)=\"clearShoppingCard()\">Clear Shopping\r\n            Card</button>\r\n        <button class=\"btn btn-lg btn-success text-uppercase borders ml-1 myBtn\" (click)=\"makeOrder()\">Make order</button>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n    <div class=\"text-center\">\r\n        <img src=\"./../../../assets/images/progresbar.gif\" class=\"loadingSpinner\">\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card/shopping-card.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card/shopping-card.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsShoppingCardShoppingCardShoppingCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\">\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-10 mx-auto\">\r\n            <div class=\"card card-edit my-5\">\r\n                <div class=\"closeDiv\">\r\n                    <button type=\"button\" class=\"close closeForm\" (click)=\"close()\">&times;</button>\r\n                    <h5 class=\"card-title title text-center\">Shopping Card</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-shopping\">\r\n                        <app-shopping-card-list *ngIf=\"!componentState\"></app-shopping-card-list>\r\n                        <app-shopping-card-details *ngIf=\"componentState\"></app-shopping-card-details>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-data-edit/user-data-edit.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-data-edit/user-data-edit.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsUserDataEditUserDataEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\" @formState>\r\n    <div class=\"container\">\r\n        <div class=\"col-lg-5 mx-auto\">\r\n            <div class=\"card card-edit my-5\">\r\n                <div class=\"closeDiv\">\r\n                    <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n                    <h5 class=\"card-title title text-center\">Edit Userdata</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <form class=\"form-edit\" [formGroup]=\"editForm\" (ngSubmit)=\"editProfile()\">\r\n                        <div class=\"form-label-group\">\r\n                            <img [src]=\"localImageUrl || defaultImage\" class=\"rounded mx-auto d-block adImage\"\r\n                                alt=\"profileImg\" />\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Username</label>\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\">\r\n\r\n                            <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"text-danger\">\r\n                                <div *ngIf=\"username.errors.required\">\r\n                                    Username is required.\r\n                                </div>\r\n                                <div *ngIf=\"username.errors.minlength\">\r\n                                    Username must be at least 4 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Summary</label>\r\n                            <textarea class=\"form-control\" placeholder=\"Summary\" formControlName=\"summary\" rows=\"4\"></textarea>\r\n                            <div *ngIf=\"summary.invalid && (summary.dirty || summary.touched)\" class=\"text-danger\">\r\n                                <div *ngIf=\"summary.errors.required\">\r\n                                    Summary is required.\r\n                                </div>\r\n                                <div *ngIf=\"summary.errors.minlength\">\r\n                                    Summary must be at least 6 characters long.\r\n                                </div>\r\n                                <div *ngIf=\"summary.errors.maxlength\">\r\n                                    Summary must be at least 100 characters long.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Type your location</label>\r\n                            <input type=\"text\" placeholder=\"Search for Location\" class=\"form-control\" appAutocomplete formControlName=\"location\">\r\n                        </div>\r\n                        <div class=\"form-label-group\">\r\n                            <label>Choose profile image</label>\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" class=\"custom-file-input \" id=\"selectProfileImg\"\r\n                                    (change)=\"previewImg($event)\" formControlName=\"profileImg\">\r\n                                <label class=\"custom-file-label customInput\" for=\"selectProfileImg\">Choose file</label>\r\n                            </div>\r\n                        </div>\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase borders\" type=\"submit\"\r\n                            [disabled]=\"editForm.invalid\">Edit</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsUserDetailsListNavigationUserDetailsListNavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(items | async)?.length > 0\" class=\"pagination d-flex\">\r\n    <div class=\"page-item mr-auto\">\r\n        <span class=\"page-link\" (click)=\"backPage()\">Previous</span>\r\n    </div>\r\n    <div class=\"page-item ml-auto\">\r\n        <span class=\"page-link\" (click)=\"nextPage()\">Next</span>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details/user-details.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details/user-details.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFormsUserDetailsUserDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card-form\" @formState>\r\n    <div class=\"container cardContainer mx-auto\">\r\n        <div class=\"col-md-lg-10 mx-auto\">\r\n            <div *ngIf=\"(profile | async) as user\" class=\"card card-edit my-5 no-gutters\">\r\n                <div>\r\n                    <button type=\"button\" class=\"close\" (click)=\"close()\">&times;</button>\r\n                    <h5 class=\"card-title title text-center\">{{user.username | uppercase}}</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <div class=\"form-details\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-md-5 itemImg\">\r\n                                <img *ngIf=\"user.profileImg\" [src]=\"user.profileImg\" class=\"card-img itemImg\"\r\n                                    alt=\"users_profile_img\">\r\n                            </div>\r\n                            <div class=\"col-md-5\">\r\n                                <div class=\"col-md list\">\r\n                                    <app-catalog-list [items]=\"items\"></app-catalog-list>\r\n                                </div>\r\n                                <div class=\"col-md navigation-bar\">\r\n                                    <app-user-details-list-navigation></app-user-details-list-navigation>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"not-found d-flex align-items-center\">\r\n    <div class=\"mx-auto\">\r\n        <h1 class=\"display-1 text-center\">404</h1>\r\n        <h1 class=\"display-3 text-muted text-center\">Page Not Found!</h1>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/catalog-list/catalog-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/catalog-list/catalog-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCatalogListCatalogListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"heightOnMax\">\r\n    <div class=\"heightOnMax m-3\" *ngIf=\"(items | async) as newItems; else loading\">\r\n        <div *ngIf=\"newItems.length > 0; else noItems\">\r\n            <div *ngFor=\"let item of newItems\" class=\"d-flex list-group\">\r\n                <app-item [item]=\"item\"></app-item>\r\n            </div>\r\n        </div>\r\n\r\n        <ng-template #noItems>\r\n            <div class=\"noAnnouncementsContainer heightOnMax d-flex\">\r\n                <p class=\"mx-auto my-auto\">No announcements!</p>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n\r\n    <ng-template #loading>\r\n        <div class=\"heightOnMax d-flex\">\r\n            <img src=\"./../../assets/images/progresbar.gif\" class=\"loadingSpinner mx-auto my-auto\">\r\n        </div>\r\n    </ng-template>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/item/item.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/item/item.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedItemItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list-group-item list-group-item-action no-gutters\" (click)=\"loadDetails()\" @itemState>\r\n    <div class=\"row d-flex\">\r\n        <div class=\"col-2 item-img mr-1 my-auto\">\r\n            <img [src]=\"item.image\" class=\"item-img\">\r\n        </div>\r\n        <div class=\"col ml-1 my-auto\">\r\n            <p class=\"\">{{item.name | uppercase}}</p>\r\n        </div>\r\n        <div class=\"col my-auto\">\r\n            <p class=\"float-right font-weight-bold\">Price: <span>{{item.price}}lv.</span></p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/items-counter/items-counter.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/items-counter/items-counter.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedItemsCounterItemsCounterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form-label-group mt-5\">\r\n    <div class=\"input-group\" [formGroup]=\"pageLimitForm\">\r\n        <select class=\"custom-select customInput\" id=\"selectNumberOfItems\" formControlName=\"pageLimit\" (change)=\"handleChange()\">\r\n            <option value=\"5\">5</option>\r\n            <option value=\"10\">10</option>\r\n            <option value=\"20\">20</option>\r\n            <option value=\"50\">50</option>\r\n            <option value=\"100\">100</option>\r\n        </select>\r\n        <div class=\"input-group-append\">\r\n            <label class=\"input-group-text customInput\" for=\"selectNumberOfItems\">Number of items</label>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/orders-list/orders-list.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/orders-list/orders-list.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedOrdersListOrdersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"(orders | async) as newOrders; else loading\">\r\n    <div *ngFor=\"let order of newOrders\" class=\"list-group\">\r\n        <app-shipment-item [shipment]=\"order\"></app-shipment-item>\r\n    </div>\r\n\r\n    <div *ngIf=\"newOrders.length === 0\" class=\"mb-5\">\r\n        <p class=\"text-center no-data\">You don't have more orders!</p>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n    <div class=\"text-center\">\r\n        <img src=\"./../../assets/images/progresbar.gif\" class=\"loadingSpinner\">\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page-controller/page-controller.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page-controller/page-controller.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPageControllerPageControllerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pagination d-flex\">\r\n    <div class=\"page-item mr-auto\">\r\n        <span class=\"page-link\" (click)=\"backPage()\">Previous</span>\r\n    </div>\r\n    <div class=\"page-item ml-auto\">\r\n        <span class=\"page-link\" (click)=\"nextPage()\">Next</span>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-item/shipment-item.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-item/shipment-item.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedShipmentItemShipmentItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"list-group-item list-group-item-action no-gutters\" (click)=\"openShipmentDetails()\" @itemState>\r\n    <div class=\"row d-flex\">\r\n        <div class=\"col mr-1 my-auto\">\r\n            <p>Shipment: {{shipment?.id}}</p>\r\n        </div>\r\n        <div class=\"col ml-1 my-auto\">\r\n            <p>Number of items: {{shipment?.listOfItems?.length}}</p>\r\n        </div>\r\n        <div class=\"col my-auto\">\r\n            <p class=\"float-right font-weight-bold\">Status: <span>{{shipment?.status}}</span></p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-item/user-item.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-item/user-item.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedUserItemUserItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"profile\" class=\"list-group-item list-group-item-action\" (click)=\"openUserDetails()\" @itemState>\r\n    <div class=\"row\">\r\n        <div class=\"col-2 item-img my-auto\">\r\n            <img [src]=\"profile.profileImg\" class=\"item-img\">\r\n        </div>\r\n        <div class=\"col my-auto\">\r\n            <p>{{profile.username | uppercase}}</p>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_catalog_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/catalog/catalog/catalog.component */
    "./src/app/core/catalog/catalog/catalog.component.ts");
    /* harmony import */


    var _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./core/home/home.component */
    "./src/app/core/home/home.component.ts");
    /* harmony import */


    var _core_user_catalog_user_catalog_user_catalog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/user-catalog/user-catalog/user-catalog.component */
    "./src/app/core/user-catalog/user-catalog/user-catalog.component.ts");
    /* harmony import */


    var _authentication_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentication/authentication-form/authentication-form.component */
    "./src/app/authentication/authentication-form/authentication-form.component.ts");
    /* harmony import */


    var _authentication_profile_set_up_profile_set_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./authentication/profile-set-up/profile-set-up.component */
    "./src/app/authentication/profile-set-up/profile-set-up.component.ts");
    /* harmony import */


    var _forms_shopping_card_shopping_card_shopping_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forms/shopping-card/shopping-card/shopping-card.component */
    "./src/app/forms/shopping-card/shopping-card/shopping-card.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/auth-guard/es2015/index.js");
    /* harmony import */


    var _forms_announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./forms/announcement-form/announcement-form.component */
    "./src/app/forms/announcement-form/announcement-form.component.ts");
    /* harmony import */


    var _forms_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./forms/item-details/item-details.component */
    "./src/app/forms/item-details/item-details.component.ts");
    /* harmony import */


    var _forms_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./forms/shipment-details/shipment-details.component */
    "./src/app/forms/shipment-details/shipment-details.component.ts");
    /* harmony import */


    var _forms_user_data_edit_user_data_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./forms/user-data-edit/user-data-edit.component */
    "./src/app/forms/user-data-edit/user-data-edit.component.ts");
    /* harmony import */


    var _forms_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./forms/user-details/user-details.component */
    "./src/app/forms/user-details/user-details.component.ts");
    /* harmony import */


    var _core_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./core/profile/profile/profile.component */
    "./src/app/core/profile/profile/profile.component.ts");

    var redirectUnauthorizedToCatalog = function redirectUnauthorizedToCatalog() {
      return Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["redirectUnauthorizedTo"])(['catalog']);
    };

    var routes = [{
      path: '',
      component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'catalog',
      component: _core_catalog_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_3__["CatalogComponent"]
    }, {
      path: 'users',
      component: _core_user_catalog_user_catalog_user_catalog_component__WEBPACK_IMPORTED_MODULE_5__["UserCatalogComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'profile',
      component: _core_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'authentication',
      component: _authentication_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_6__["AuthenticationFormComponent"],
      outlet: 'formsOutlet'
    }, {
      path: 'profile_setup',
      component: _authentication_profile_set_up_profile_set_up_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSetUpComponent"],
      outlet: 'formsOutlet'
    }, {
      path: 'userdata_edit',
      component: _forms_user_data_edit_user_data_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserDataEditComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'user_details/:id',
      component: _forms_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'shipments_details/:id',
      component: _forms_shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_13__["ShipmentDetailsComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'item_details/:id/:creatorUid',
      component: _forms_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_12__["ItemDetailsComponent"],
      outlet: 'formsOutlet'
    }, {
      path: 'create_announcement/:id',
      component: _forms_announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_11__["AnnouncementFormComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'create_announcement',
      component: _forms_announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_11__["AnnouncementFormComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: 'shopping_card',
      component: _forms_shopping_card_shopping_card_shopping_card_component__WEBPACK_IMPORTED_MODULE_8__["ShoppingCardComponent"],
      outlet: 'formsOutlet',
      canActivate: [_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthGuard"]],
      data: {
        authGuardPipe: redirectUnauthorizedToCatalog
      }
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./authentication/authentication.module */
    "./src/app/authentication/authentication.module.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/fire/auth-guard */
    "./node_modules/@angular/fire/auth-guard/es2015/index.js");
    /* harmony import */


    var _services_collections_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./services/collections.service */
    "./src/app/services/collections.service.ts");
    /* harmony import */


    var _forms_forms_card_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./forms/forms-card.module */
    "./src/app/forms/forms-card.module.ts");
    /* harmony import */


    var _services_options_validator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/options-validator */
    "./src/app/services/options-validator.ts");
    /* harmony import */


    var _config_collections_restrinctions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./config/collections-restrinctions */
    "./src/app/config/collections-restrinctions.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].agm), _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase, 'experienceShop'), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _authentication_authentication_module__WEBPACK_IMPORTED_MODULE_16__["AuthenticationModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _forms_forms_card_module__WEBPACK_IMPORTED_MODULE_20__["FormsCardModule"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AngularFireAuthGuard"], _services_collections_service__WEBPACK_IMPORTED_MODULE_19__["CollectionsService"], _services_options_validator__WEBPACK_IMPORTED_MODULE_21__["OptionsValidatior"], _config_collections_restrinctions__WEBPACK_IMPORTED_MODULE_22__["OptionsRestrinctions"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authentication/authentication-form/authentication-form.animations.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/authentication/authentication-form/authentication-form.animations.ts ***!
    \**************************************************************************************/

  /*! exports provided: AuthenticationFormAnimations */

  /***/
  function srcAppAuthenticationAuthenticationFormAuthenticationFormAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationFormAnimations", function () {
      return AuthenticationFormAnimations;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var AuthenticationFormAnimations = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveToLeft', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      display: 'block',
      opacity: 1,
      transform: 'translateX(0%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      display: 'none',
      opacity: 0,
      transform: 'translateX(-40%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s'))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('moveToRight', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      display: 'block',
      opacity: 1,
      transform: 'translateX(0%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      display: 'none',
      opacity: 0,
      transform: 'translateX(40%)'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open <=> close', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s'))])];
    /***/
  },

  /***/
  "./src/app/authentication/authentication-form/authentication-form.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/authentication/authentication-form/authentication-form.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationAuthenticationFormAuthenticationFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signCard{\r\n    position: fixed;\r\n    overflow: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\n\r\n.card-sign {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 1);\r\n  }\r\n\r\n.card-sign .card-title {\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n  }\r\n\r\n.card-sign .card-body {\r\n    padding: 2rem;\r\n    padding-top: 0;\r\n  }\r\n\r\n.form-sign .btn {\r\n    font-size: 80%;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n  }\r\n\r\n.closeForm{\r\n    margin: 3%;\r\n  }\r\n\r\n.closeDiv{\r\n    height: 3%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vYXV0aGVudGljYXRpb24tZm9ybS9hdXRoZW50aWNhdGlvbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQix5RUFBeUU7RUFDM0U7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGFBQWE7RUFDZjs7QUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2F1dGhlbnRpY2F0aW9uLWZvcm0vYXV0aGVudGljYXRpb24tZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ25DYXJke1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uY2FyZC1zaWduIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtc2lnbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtc2lnbiAuY2FyZC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcblxyXG4gIC5mb3JtLXNpZ24gLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jbG9zZUZvcm17XHJcbiAgICBtYXJnaW46IDMlO1xyXG4gIH1cclxuICBcclxuICAuY2xvc2VEaXZ7XHJcbiAgICBoZWlnaHQ6IDMlO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/authentication/authentication-form/authentication-form.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/authentication/authentication-form/authentication-form.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AuthenticationFormComponent */

  /***/
  function srcAppAuthenticationAuthenticationFormAuthenticationFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationFormComponent", function () {
      return AuthenticationFormComponent;
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


    var _authentication_form_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication-form.animations */
    "./src/app/authentication/authentication-form/authentication-form.animations.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var AuthenticationFormComponent =
    /*#__PURE__*/
    function () {
      function AuthenticationFormComponent(router) {
        _classCallCheck(this, AuthenticationFormComponent);

        this.router = router;
        this.loginState = 'open';
        this.registeredState = 'close';
        this.moveToLogInBtn = true;
        this.moveToRegBtn = false;
      }

      _createClass(AuthenticationFormComponent, [{
        key: "setLogInAndRegState",
        value: function setLogInAndRegState(logInState, regState) {
          this.loginState = logInState;
          this.registeredState = regState;
        }
      }, {
        key: "setBtnState",
        value: function setBtnState(logInBtn, regBtn) {
          this.moveToLogInBtn = logInBtn;
          this.moveToRegBtn = regBtn;
        }
      }, {
        key: "moveToLogIn",
        value: function moveToLogIn() {
          this.setLogInAndRegState('open', 'close');
          this.setBtnState(true, false);
        }
      }, {
        key: "moveToRegistered",
        value: function moveToRegistered() {
          this.setLogInAndRegState('close', 'open');
          this.setBtnState(false, true);
        }
      }, {
        key: "closeSignForm",
        value: function closeSignForm() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthenticationFormComponent;
    }();

    AuthenticationFormComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthenticationFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentication-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentication-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/authentication-form/authentication-form.component.html")).default,
      animations: [_authentication_form_animations__WEBPACK_IMPORTED_MODULE_2__["AuthenticationFormAnimations"], src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentication-form.component.css */
      "./src/app/authentication/authentication-form/authentication-form.component.css")).default]
    })], AuthenticationFormComponent);
    /***/
  },

  /***/
  "./src/app/authentication/authentication.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/authentication/authentication.module.ts ***!
    \*********************************************************/

  /*! exports provided: AuthenticationModule */

  /***/
  function srcAppAuthenticationAuthenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function () {
      return AuthenticationModule;
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


    var _authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentication-form/authentication-form.component */
    "./src/app/authentication/authentication-form/authentication-form.component.ts");
    /* harmony import */


    var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./sign-in/sign-in.component */
    "./src/app/authentication/sign-in/sign-in.component.ts");
    /* harmony import */


    var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up/sign-up.component */
    "./src/app/authentication/sign-up/sign-up.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _profile_set_up_profile_set_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile-set-up/profile-set-up.component */
    "./src/app/authentication/profile-set-up/profile-set-up.component.ts");

    var AuthenticationModule = function AuthenticationModule() {
      _classCallCheck(this, AuthenticationModule);
    };

    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationFormComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _profile_set_up_profile_set_up_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSetUpComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
      exports: [_authentication_form_authentication_form_component__WEBPACK_IMPORTED_MODULE_3__["AuthenticationFormComponent"], _profile_set_up_profile_set_up_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSetUpComponent"]]
    })], AuthenticationModule);
    /***/
  },

  /***/
  "./src/app/authentication/profile-set-up/profile-set-up.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/authentication/profile-set-up/profile-set-up.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationProfileSetUpProfileSetUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".signCard{\r\n    position: fixed;\r\n    overflow: auto;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 10;\r\n}\r\n\r\n.card-sign {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 1);\r\n  }\r\n\r\n.card-sign .card-title {\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n  }\r\n\r\n.card-sign .card-body {\r\n    padding: 2rem;\r\n    padding-top: 0;\r\n  }\r\n\r\n.form-sign .btn {\r\n    font-size: 80%;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n  }\r\n\r\n.closeForm{\r\n    margin: 3%;\r\n  }\r\n\r\n.closeDiv{\r\n    height: 3%;\r\n  }\r\n\r\n.customInput{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n.customInput::after{\r\n    border-bottom-right-radius: 2rem;\r\n    border-top-right-radius: 2rem;\r\n}\r\n\r\n.card-title {\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vcHJvZmlsZS1zZXQtdXAvcHJvZmlsZS1zZXQtdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHlFQUF5RTtFQUMzRTs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksZ0NBQWdDO0lBQ2hDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL3Byb2ZpbGUtc2V0LXVwL3Byb2ZpbGUtc2V0LXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbkNhcmR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ24ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1zaWduIC5jYXJkLXRpdGxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduIC5jYXJkLWJvZHkge1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2lnbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlRm9ybXtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZURpdntcclxuICAgIGhlaWdodDogMyU7XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuXHJcbi5jdXN0b21JbnB1dDo6YWZ0ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/authentication/profile-set-up/profile-set-up.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/authentication/profile-set-up/profile-set-up.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfileSetUpComponent */

  /***/
  function srcAppAuthenticationProfileSetUpProfileSetUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileSetUpComponent", function () {
      return ProfileSetUpComponent;
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


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var ProfileSetUpComponent =
    /*#__PURE__*/
    function () {
      function ProfileSetUpComponent(router) {
        _classCallCheck(this, ProfileSetUpComponent);

        this.router = router;
      }

      _createClass(ProfileSetUpComponent, [{
        key: "loadUserEditForm",
        value: function loadUserEditForm() {
          this.router.navigate([{
            outlets: {
              formsOutlet: 'userdata_edit'
            }
          }]);
        }
      }, {
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileSetUpComponent;
    }();

    ProfileSetUpComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProfileSetUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-set-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-set-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/profile-set-up/profile-set-up.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_3__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-set-up.component.css */
      "./src/app/authentication/profile-set-up/profile-set-up.component.css")).default]
    })], ProfileSetUpComponent);
    /***/
  },

  /***/
  "./src/app/authentication/sign-in/sign-in.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/authentication/sign-in/sign-in.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationSignInSignInComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customInput{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n.customInput::after{\r\n    border-bottom-right-radius: 2rem;\r\n    border-top-right-radius: 2rem;\r\n}\r\n\r\n.card-title {\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuXHJcbi5jdXN0b21JbnB1dDo6YWZ0ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/authentication/sign-in/sign-in.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentication/sign-in/sign-in.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignInComponent */

  /***/
  function srcAppAuthenticationSignInSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInComponent", function () {
      return SignInComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var SignInComponent =
    /*#__PURE__*/
    function () {
      function SignInComponent(userService, fb) {
        _classCallCheck(this, SignInComponent);

        this.userService = userService;
        this.fb = fb;
        this.signInForm = fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
        });
      }

      _createClass(SignInComponent, [{
        key: "signIn",
        value: function signIn() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.signInForm.valid) {
                      this.userService.logIn(this.email.value, this.password.value);
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "email",
        get: function get() {
          return this.signInForm.get('email');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signInForm.get('password');
        }
      }]);

      return SignInComponent;
    }();

    SignInComponent.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-in/sign-in.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in.component.css */
      "./src/app/authentication/sign-in/sign-in.component.css")).default]
    })], SignInComponent);
    /***/
  },

  /***/
  "./src/app/authentication/sign-up/sign-up.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/authentication/sign-up/sign-up.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthenticationSignUpSignUpComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customInput{\r\n    border-radius: 2rem;\r\n  }\r\n\r\n.customInput::after{\r\n    border-bottom-right-radius: 2rem;\r\n    border-top-right-radius: 2rem;\r\n}\r\n\r\n.card-title {\r\n    margin-bottom: 1rem;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7RUFDckI7O0FBRUY7SUFDSSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuXHJcbi5jdXN0b21JbnB1dDo6YWZ0ZXJ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnJlbTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/authentication/sign-up/sign-up.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentication/sign-up/sign-up.component.ts ***!
    \*************************************************************/

  /*! exports provided: SignUpComponent */

  /***/
  function srcAppAuthenticationSignUpSignUpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpComponent", function () {
      return SignUpComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    function passwordsMatch(c) {
      return c.value.password === c.value.confirmPassword ? null : {
        passwordsMatch: true
      };
    }

    var SignUpComponent =
    /*#__PURE__*/
    function () {
      function SignUpComponent(notifier, userService, fb) {
        _classCallCheck(this, SignUpComponent);

        this.notifier = notifier;
        this.userService = userService;
        this.fb = fb;
        this.signUpForm = fb.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
          passwords: fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]]
          }, {
            validators: [passwordsMatch]
          })
        });
      }

      _createClass(SignUpComponent, [{
        key: "signUp",
        value: function signUp() {
          if (this.password.value === this.confirmPassword.value && this.signUpForm.valid) {
            this.userService.createUser(this.email.value, this.password.value);
          } else {
            this.notifier.notify('warning', 'Confirm password is wrong!');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "email",
        get: function get() {
          return this.signUpForm.get('email');
        }
      }, {
        key: "passwords",
        get: function get() {
          return this.signUpForm.get('passwords');
        }
      }, {
        key: "password",
        get: function get() {
          return this.signUpForm.get('passwords').get('password');
        }
      }, {
        key: "confirmPassword",
        get: function get() {
          return this.signUpForm.get('passwords').get('confirmPassword');
        }
      }]);

      return SignUpComponent;
    }();

    SignUpComponent.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentication/sign-up/sign-up.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.component.css */
      "./src/app/authentication/sign-up/sign-up.component.css")).default]
    })], SignUpComponent);
    /***/
  },

  /***/
  "./src/app/config/collections-restrinctions.ts":
  /*!*****************************************************!*\
    !*** ./src/app/config/collections-restrinctions.ts ***!
    \*****************************************************/

  /*! exports provided: OptionsRestrinctions */

  /***/
  function srcAppConfigCollectionsRestrinctionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsRestrinctions", function () {
      return OptionsRestrinctions;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var OptionsRestrinctions =
    /*#__PURE__*/
    function () {
      function OptionsRestrinctions() {
        _classCallCheck(this, OptionsRestrinctions);

        this.restriction = {
          allItems: {
            category: ['', 'all', 'pc', 'laptops', 'tablets', 'phone', 'accForPC', 'accForPhone', 'audio', 'photo', 'nav', 'tv', 'other'],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: {
              min: 0,
              max: 100
            },
            sortBy: ['allItems', 'myItems']
          },
          orders: {
            category: [''],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: {
              min: 0,
              max: 100
            },
            sortBy: ['sender', 'receiver']
          },
          userdata: {
            category: [''],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: {
              min: 0,
              max: 100
            },
            sortBy: ['userdata']
          }
        };
      }

      _createClass(OptionsRestrinctions, [{
        key: "getRestrictions",
        value: function getRestrictions() {
          return this.restriction;
        }
      }]);

      return OptionsRestrinctions;
    }();
    /***/

  },

  /***/
  "./src/app/core/catalog/catalog.module.ts":
  /*!************************************************!*\
    !*** ./src/app/core/catalog/catalog.module.ts ***!
    \************************************************/

  /*! exports provided: CatalogModule */

  /***/
  function srcAppCoreCatalogCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogModule", function () {
      return CatalogModule;
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


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/core/catalog/search/search.component.ts");
    /* harmony import */


    var _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./catalog/catalog.component */
    "./src/app/core/catalog/catalog/catalog.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CatalogModule = function CatalogModule() {
      _classCallCheck(this, CatalogModule);
    };

    CatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      exports: [_catalog_catalog_component__WEBPACK_IMPORTED_MODULE_4__["CatalogComponent"]]
    })], CatalogModule);
    /***/
  },

  /***/
  "./src/app/core/catalog/catalog/catalog.component.css":
  /*!************************************************************!*\
    !*** ./src/app/core/catalog/catalog/catalog.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreCatalogCatalogCatalogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n    min-height: 600px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jYXRhbG9nL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jYXRhbG9nL2NhdGFsb2cvY2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/catalog/catalog/catalog.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/catalog/catalog/catalog.component.ts ***!
    \***********************************************************/

  /*! exports provided: CatalogComponent */

  /***/
  function srcAppCoreCatalogCatalogCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogComponent", function () {
      return CatalogComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var CatalogComponent =
    /*#__PURE__*/
    function () {
      function CatalogComponent(collService) {
        _classCallCheck(this, CatalogComponent);

        this.collService = collService;
        this.collService.setOptions({
          searchName: '',
          category: 'all',
          position: 'firstPage',
          pageLimit: 5,
          collection: 'allItems',
          sortBy: 'allItems',
          once: true
        });
      }

      _createClass(CatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "items",
        get: function get() {
          return this.collService.items;
        }
      }]);

      return CatalogComponent;
    }();

    CatalogComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }];
    };

    CatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-catalog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catalog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/catalog/catalog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catalog.component.css */
      "./src/app/core/catalog/catalog/catalog.component.css")).default]
    })], CatalogComponent);
    /***/
  },

  /***/
  "./src/app/core/catalog/search/search.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/core/catalog/search/search.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreCatalogSearchSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".searchForm{\r\n    position: relative;\r\n}\r\n.card-search {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3), 0 9px 26px 0 rgba(0, 0, 0, 0.3);\r\n  }\r\n.card-search .card-title {\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n  }\r\n.card-search .card-body {\r\n    padding: 1rem;\r\n    padding-top: 0;\r\n  }\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n.customInput{\r\n    border-radius: 2rem;\r\n  }\r\n.customInput::after{\r\n    border-bottom-right-radius: 2rem;\r\n    border-top-right-radius: 2rem;\r\n  }\r\n.title{\r\n  padding: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jYXRhbG9nL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQiwyRUFBMkU7RUFDN0U7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0FBRUY7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NhdGFsb2cvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEZvcm17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQtc2VhcmNoIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNlYXJjaCAuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zZWFyY2ggLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICAuY3VzdG9tSW5wdXQ6OmFmdGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnJlbTtcclxuICB9XHJcblxyXG4udGl0bGV7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/catalog/search/search.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/catalog/search/search.component.ts ***!
    \*********************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppCoreCatalogSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent(collService, fb) {
        _classCallCheck(this, SearchComponent);

        this.collService = collService;
        this.fb = fb;
        this.searchForm = fb.group({
          name: [''],
          category: ['all']
        });
      }

      _createClass(SearchComponent, [{
        key: "search",
        value: function search() {
          this.collService.setOptions({
            searchName: this.name.value,
            category: this.category.value,
            position: 'firstPage',
            collection: 'allItems',
            sortBy: 'allItems',
            once: true
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "name",
        get: function get() {
          return this.searchForm.get('name');
        }
      }, {
        key: "category",
        get: function get() {
          return this.searchForm.get('category');
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__["CollectionsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/catalog/search/search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search.component.css */
      "./src/app/core/catalog/search/search.component.css")).default]
    })], SearchComponent);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/core/navbar/navbar.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/core/footer/footer.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/core/home/home.component.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/core/profile/profile.module.ts");
    /* harmony import */


    var _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./catalog/catalog.module */
    "./src/app/core/catalog/catalog.module.ts");
    /* harmony import */


    var _user_catalog_user_catalog_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-catalog/user-catalog.module */
    "./src/app/core/user-catalog/user-catalog.module.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _profile_profile_module__WEBPACK_IMPORTED_MODULE_7__["ProfileModule"], _catalog_catalog_module__WEBPACK_IMPORTED_MODULE_8__["CatalogModule"], _user_catalog_user_catalog_module__WEBPACK_IMPORTED_MODULE_9__["UserCatalogModule"]],
      exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/footer/footer.component.css":
  /*!**************************************************!*\
    !*** ./src/app/core/footer/footer.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer {\r\n    color: #fff;\r\n    background-color:#222;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/footer/footer.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/footer/footer.component.ts ***!
    \*************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppCoreFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/core/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/core/home/home.component.css":
  /*!**********************************************!*\
    !*** ./src/app/core/home/home.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".masthead {\r\n    height: 50rem; \r\n    margin-bottom: -50px;\r\n    background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0.08)), to(rgba(255, 255, 255, 0.08))),url('poster.jpg');\r\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.08) 100%),url('poster.jpg');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    color: white;\r\n  }\r\n  \r\n  .masthead h1 {\r\n    font-size: 4rem;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsMklBQXlJO0lBQXpJLGtIQUF5STtJQUN6SSwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXN0aGVhZCB7XHJcbiAgICBoZWlnaHQ6IDUwcmVtOyBcclxuICAgIG1hcmdpbi1ib3R0b206IC01MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDEwMCUpLHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcG9zdGVyLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAubWFzdGhlYWQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/core/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppCoreHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/core/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/core/navbar/navbar.component.css":
  /*!**************************************************!*\
    !*** ./src/app/core/navbar/navbar.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navbarBtn{\r\n    color: white;\r\n}\r\n\r\n.logo{\r\n    padding-top: 0%;\r\n    width: 100px;\r\n    position: absolute;\r\n    z-index: 5;\r\n}\r\n\r\n.navbar-panel{\r\n    padding-left: 80px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyQnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nb3tcclxuICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDU7XHJcbn1cclxuICBcclxuLm5hdmJhci1wYW5lbHtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/navbar/navbar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/navbar/navbar.component.ts ***!
    \*************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppCoreNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(fireBaseAuth, userService, router, zone) {
        _classCallCheck(this, NavbarComponent);

        this.fireBaseAuth = fireBaseAuth;
        this.userService = userService;
        this.router = router;
        this.zone = zone;
        this.navBarIsOpen = 'hide';
      }

      _createClass(NavbarComponent, [{
        key: "logOut",
        value: function logOut() {
          this.userService.logOut();
        }
      }, {
        key: "changeNavbarState",
        value: function changeNavbarState() {
          if (this.navBarIsOpen === 'show') {
            this.navBarIsOpen = 'hide';
          } else {
            this.navBarIsOpen = 'show';
          }
        }
      }, {
        key: "openShoppingCard",
        value: function openShoppingCard() {
          this.router.navigate([{
            outlets: {
              formsOutlet: 'shopping_card'
            }
          }]);
        }
      }, {
        key: "openAnnForm",
        value: function openAnnForm() {
          this.router.navigate([{
            outlets: {
              formsOutlet: 'create_announcement'
            }
          }]);
        }
      }, {
        key: "openAuthForm",
        value: function openAuthForm() {
          this.router.navigate([{
            outlets: {
              formsOutlet: 'authentication'
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.fireBaseAuth.auth.onAuthStateChanged(function (user) {
            return _this.zone.run(function () {
              return _this.isHere = !!user;
            });
          });
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/core/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/items-card.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/profile/items-card/items-card.module.ts ***!
    \**************************************************************/

  /*! exports provided: ItemsCardModule */

  /***/
  function srcAppCoreProfileItemsCardItemsCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsCardModule", function () {
      return ItemsCardModule;
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


    var _items_list_items_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./items-list/items-list.component */
    "./src/app/core/profile/items-card/items-list/items-list.component.ts");
    /* harmony import */


    var _profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-navigation/profile-navigation.component */
    "./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.ts");
    /* harmony import */


    var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _items_card_items_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./items-card/items-card.component */
    "./src/app/core/profile/items-card/items-card/items-card.component.ts");
    /* harmony import */


    var _services_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/list.service */
    "./src/app/core/profile/items-card/services/list.service.ts");

    var ItemsCardModule = function ItemsCardModule() {
      _classCallCheck(this, ItemsCardModule);
    };

    ItemsCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_items_list_items_list_component__WEBPACK_IMPORTED_MODULE_3__["ItemsListComponent"], _profile_navigation_profile_navigation_component__WEBPACK_IMPORTED_MODULE_4__["ProfileNavigationComponent"], _items_card_items_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemsCardComponent"]],
      providers: [_services_list_service__WEBPACK_IMPORTED_MODULE_8__["ListService"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      exports: [_items_card_items_card_component__WEBPACK_IMPORTED_MODULE_7__["ItemsCardComponent"]]
    })], ItemsCardModule);
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/items-card/items-card.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/core/profile/items-card/items-card/items-card.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileItemsCardItemsCardItemsCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form{\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL2l0ZW1zLWNhcmQvaXRlbXMtY2FyZC9pdGVtcy1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUvaXRlbXMtY2FyZC9pdGVtcy1jYXJkL2l0ZW1zLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/items-card/items-card.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/core/profile/items-card/items-card/items-card.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ItemsCardComponent */

  /***/
  function srcAppCoreProfileItemsCardItemsCardItemsCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsCardComponent", function () {
      return ItemsCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ItemsCardComponent =
    /*#__PURE__*/
    function () {
      function ItemsCardComponent() {
        _classCallCheck(this, ItemsCardComponent);
      }

      _createClass(ItemsCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemsCardComponent;
    }();

    ItemsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-items-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./items-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-card/items-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./items-card.component.css */
      "./src/app/core/profile/items-card/items-card/items-card.component.css")).default]
    })], ItemsCardComponent);
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/items-list/items-list.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/core/profile/items-card/items-list/items-list.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileItemsCardItemsListItemsListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form{\r\n    position: relative;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL2l0ZW1zLWNhcmQvaXRlbXMtbGlzdC9pdGVtcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUvaXRlbXMtY2FyZC9pdGVtcy1saXN0L2l0ZW1zLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jte1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/items-list/items-list.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/core/profile/items-card/items-list/items-list.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ItemsListComponent */

  /***/
  function srcAppCoreProfileItemsCardItemsListItemsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsListComponent", function () {
      return ItemsListComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");
    /* harmony import */


    var _services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/list.service */
    "./src/app/core/profile/items-card/services/list.service.ts");

    var ItemsListComponent =
    /*#__PURE__*/
    function () {
      function ItemsListComponent(collService, listService) {
        _classCallCheck(this, ItemsListComponent);

        this.collService = collService;
        this.listService = listService;
        this.listType = 'myItems';
      }

      _createClass(ItemsListComponent, [{
        key: "setListType",
        value: function setListType(type) {
          this.listType = type;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.collService.setOptions({
            position: 'firstPage',
            pageLimit: 5,
            collection: 'allItems',
            sortBy: 'myItems',
            category: '',
            once: false
          });
          this.listEvents = this.listService.listType.subscribe(this.setListType.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.listEvents.unsubscribe();
        }
      }, {
        key: "items",
        get: function get() {
          return this.collService.items;
        }
      }]);

      return ItemsListComponent;
    }();

    ItemsListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }, {
        type: _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]
      }];
    };

    ItemsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-items-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./items-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/items-list/items-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./items-list.component.css */
      "./src/app/core/profile/items-card/items-list/items-list.component.css")).default]
    })], ItemsListComponent);
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileItemsCardProfileNavigationProfileNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button{\r\n    padding: 10px;\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL2l0ZW1zLWNhcmQvcHJvZmlsZS1uYXZpZ2F0aW9uL3Byb2ZpbGUtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3Byb2ZpbGUvaXRlbXMtY2FyZC9wcm9maWxlLW5hdmlnYXRpb24vcHJvZmlsZS1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b257XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ProfileNavigationComponent */

  /***/
  function srcAppCoreProfileItemsCardProfileNavigationProfileNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileNavigationComponent", function () {
      return ProfileNavigationComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");
    /* harmony import */


    var _services_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/list.service */
    "./src/app/core/profile/items-card/services/list.service.ts");

    var ProfileNavigationComponent =
    /*#__PURE__*/
    function () {
      function ProfileNavigationComponent(collService, listService) {
        _classCallCheck(this, ProfileNavigationComponent);

        this.collService = collService;
        this.listService = listService;
      }

      _createClass(ProfileNavigationComponent, [{
        key: "changeItems",
        value: function changeItems(type) {
          var types = {
            myItems: {
              position: 'firstPage',
              pageLimit: 5,
              collection: 'allItems',
              sortBy: 'myItems',
              category: '',
              once: false
            },
            shipments: {
              position: 'firstPage',
              pageLimit: 5,
              collection: 'orders',
              sortBy: 'receiver',
              category: '',
              once: false
            },
            orders: {
              position: 'firstPage',
              pageLimit: 5,
              collection: 'orders',
              sortBy: 'sender',
              category: '',
              once: false
            }
          };

          if (types[type]) {
            this.collService.setOptions(types[type]);
            this.listService.changeListType(type);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileNavigationComponent;
    }();

    ProfileNavigationComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }, {
        type: _services_list_service__WEBPACK_IMPORTED_MODULE_3__["ListService"]
      }];
    };

    ProfileNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile-navigation.component.css */
      "./src/app/core/profile/items-card/profile-navigation/profile-navigation.component.css")).default]
    })], ProfileNavigationComponent);
    /***/
  },

  /***/
  "./src/app/core/profile/items-card/services/list.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/core/profile/items-card/services/list.service.ts ***!
    \******************************************************************/

  /*! exports provided: ListService */

  /***/
  function srcAppCoreProfileItemsCardServicesListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListService", function () {
      return ListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ListService =
    /*#__PURE__*/
    function () {
      function ListService() {
        _classCallCheck(this, ListService);

        this.listType = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ListService, [{
        key: "changeListType",
        value: function changeListType(type) {
          this.listType.emit(type);
        }
      }]);

      return ListService;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ListService.prototype, "listType", void 0);
    ListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ListService);
    /***/
  },

  /***/
  "./src/app/core/profile/profile.module.ts":
  /*!************************************************!*\
    !*** ./src/app/core/profile/profile.module.ts ***!
    \************************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppCoreProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
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


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/core/profile/profile/profile.component.ts");
    /* harmony import */


    var _user_info_user_info_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-info/user-info.module */
    "./src/app/core/profile/user-info/user-info.module.ts");
    /* harmony import */


    var _items_card_items_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./items-card/items-card.module */
    "./src/app/core/profile/items-card/items-card.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _user_info_user_info_module__WEBPACK_IMPORTED_MODULE_4__["UserInfoModule"], _items_card_items_card_module__WEBPACK_IMPORTED_MODULE_5__["ItemsCardModule"]],
      exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/core/profile/profile/profile.component.css":
  /*!************************************************************!*\
    !*** ./src/app/core/profile/profile/profile.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".myContainer{\r\n  min-height: 900px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29yZS9wcm9maWxlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q29udGFpbmVye1xyXG4gIG1pbi1oZWlnaHQ6IDkwMHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/core/profile/profile/profile.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/core/profile/profile/profile.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppCoreProfileProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/core/profile/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/core/profile/user-info/services/user-info.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/core/profile/user-info/services/user-info.service.ts ***!
    \**********************************************************************/

  /*! exports provided: UserInfoService */

  /***/
  function srcAppCoreProfileUserInfoServicesUserInfoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoService", function () {
      return UserInfoService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var UserInfoService =
    /*#__PURE__*/
    function () {
      function UserInfoService(afs, userService) {
        _classCallCheck(this, UserInfoService);

        this.afs = afs;
        this.userService = userService;
      }

      _createClass(UserInfoService, [{
        key: "refreshUserInfo",
        value: function refreshUserInfo() {
          this.profileDoc = this.afs.doc("userdata/".concat(this.uid));
          this.profile = this.profileDoc.valueChanges();
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return UserInfoService;
    }();

    UserInfoService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    UserInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserInfoService);
    /***/
  },

  /***/
  "./src/app/core/profile/user-info/user-info.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/profile/user-info/user-info.module.ts ***!
    \************************************************************/

  /*! exports provided: UserInfoModule */

  /***/
  function srcAppCoreProfileUserInfoUserInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoModule", function () {
      return UserInfoModule;
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


    var _user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-info/user-info.component */
    "./src/app/core/profile/user-info/user-info/user-info.component.ts");
    /* harmony import */


    var _services_user_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/user-info.service */
    "./src/app/core/profile/user-info/services/user-info.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var UserInfoModule = function UserInfoModule() {
      _classCallCheck(this, UserInfoModule);
    };

    UserInfoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"]],
      providers: [_services_user_info_service__WEBPACK_IMPORTED_MODULE_4__["UserInfoService"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
      exports: [_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_3__["UserInfoComponent"]]
    })], UserInfoModule);
    /***/
  },

  /***/
  "./src/app/core/profile/user-info/user-info/user-info.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/core/profile/user-info/user-info/user-info.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreProfileUserInfoUserInfoUserInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n  .form{\r\n      position: relative;\r\n  }\r\n  \r\n  .title{\r\n    padding: 3%;\r\n    font-weight: 400;\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .itemImg{\r\n    width: 100%;\r\n  }\r\n  \r\n  .editButtons{\r\n    margin: 2%;\r\n    width: 23%;\r\n  }\r\n  \r\n  .loadingSpinner{\r\n    width: 50%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .no-data{\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wcm9maWxlL3VzZXItaW5mby91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO01BQ0ksa0JBQWtCO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsVUFBVTtJQUNWLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZmlsZS91c2VyLWluZm8vdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmZvcm17XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxle1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuaXRlbUltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZWRpdEJ1dHRvbnN7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmdTcGlubmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm5vLWRhdGF7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/profile/user-info/user-info/user-info.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/core/profile/user-info/user-info/user-info.component.ts ***!
    \*************************************************************************/

  /*! exports provided: UserInfoComponent */

  /***/
  function srcAppCoreProfileUserInfoUserInfoUserInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function () {
      return UserInfoComponent;
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


    var _services_user_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user-info.service */
    "./src/app/core/profile/user-info/services/user-info.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserInfoComponent =
    /*#__PURE__*/
    function () {
      function UserInfoComponent(userInfoService, router) {
        _classCallCheck(this, UserInfoComponent);

        this.userInfoService = userInfoService;
        this.router = router;
      }

      _createClass(UserInfoComponent, [{
        key: "openEditForm",
        value: function openEditForm() {
          this.router.navigate([{
            outlets: {
              formsOutlet: 'userdata_edit'
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userInfoService.refreshUserInfo();
        }
      }, {
        key: "profile",
        get: function get() {
          return this.userInfoService.profile;
        }
      }]);

      return UserInfoComponent;
    }();

    UserInfoComponent.ctorParameters = function () {
      return [{
        type: _services_user_info_service__WEBPACK_IMPORTED_MODULE_2__["UserInfoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/profile/user-info/user-info/user-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-info.component.css */
      "./src/app/core/profile/user-info/user-info/user-info.component.css")).default]
    })], UserInfoComponent);
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-catalog.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/user-catalog/user-catalog.module.ts ***!
    \**********************************************************/

  /*! exports provided: UserCatalogModule */

  /***/
  function srcAppCoreUserCatalogUserCatalogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCatalogModule", function () {
      return UserCatalogModule;
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


    var _user_catalog_user_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-catalog/user-catalog.component */
    "./src/app/core/user-catalog/user-catalog/user-catalog.component.ts");
    /* harmony import */


    var _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-search/user-search.component */
    "./src/app/core/user-catalog/user-search/user-search.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/core/user-catalog/user-list/user-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var UserCatalogModule = function UserCatalogModule() {
      _classCallCheck(this, UserCatalogModule);
    };

    UserCatalogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_catalog_user_catalog_component__WEBPACK_IMPORTED_MODULE_3__["UserCatalogComponent"], _user_search_user_search_component__WEBPACK_IMPORTED_MODULE_4__["UserSearchComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      exports: [_user_catalog_user_catalog_component__WEBPACK_IMPORTED_MODULE_3__["UserCatalogComponent"]]
    })], UserCatalogModule);
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-catalog/user-catalog.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/core/user-catalog/user-catalog/user-catalog.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreUserCatalogUserCatalogUserCatalogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci1jYXRhbG9nL3VzZXItY2F0YWxvZy91c2VyLWNhdGFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-catalog/user-catalog.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/core/user-catalog/user-catalog/user-catalog.component.ts ***!
    \**************************************************************************/

  /*! exports provided: UserCatalogComponent */

  /***/
  function srcAppCoreUserCatalogUserCatalogUserCatalogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserCatalogComponent", function () {
      return UserCatalogComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var UserCatalogComponent =
    /*#__PURE__*/
    function () {
      function UserCatalogComponent(collService) {
        _classCallCheck(this, UserCatalogComponent);

        this.collService = collService;
      }

      _createClass(UserCatalogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.collService.setOptions({
            searchName: '',
            category: '',
            position: 'firstPage',
            pageLimit: 5,
            collection: 'userdata',
            sortBy: 'userdata',
            once: true
          });
        }
      }, {
        key: "profiles",
        get: function get() {
          return this.collService.items;
        }
      }]);

      return UserCatalogComponent;
    }();

    UserCatalogComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }];
    };

    UserCatalogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-catalog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-catalog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-catalog/user-catalog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-catalog.component.css */
      "./src/app/core/user-catalog/user-catalog/user-catalog.component.css")).default]
    })], UserCatalogComponent);
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-list/user-list.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/core/user-catalog/user-list/user-list.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreUserCatalogUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loadingSpinner{\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n\r\n.noAnnouncementsContainer{\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n}\r\n\r\n.catalog-list{\r\n    min-height: 500px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLWNhdGFsb2cvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdXNlci1jYXRhbG9nL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nU3Bpbm5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5ub0Fubm91bmNlbWVudHNDb250YWluZXJ7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG4uY2F0YWxvZy1saXN0e1xyXG4gICAgbWluLWhlaWdodDogNTAwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-list/user-list.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/core/user-catalog/user-list/user-list.component.ts ***!
    \********************************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppCoreUserCatalogUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var UserListComponent =
    /*#__PURE__*/
    function () {
      function UserListComponent(collService) {
        _classCallCheck(this, UserListComponent);

        this.collService = collService;
      }

      _createClass(UserListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "profiles",
        get: function get() {
          return this.collService.items;
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-list/user-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/core/user-catalog/user-list/user-list.component.css")).default]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-search/user-search.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/core/user-catalog/user-search/user-search.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCoreUserCatalogUserSearchUserSearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".searchForm{\r\n    position: relative;\r\n}\r\n.card-search {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.3), 0 9px 26px 0 rgba(0, 0, 0, 0.3);\r\n  }\r\n.card-search .card-title {\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n  }\r\n.card-search .card-body {\r\n    padding: 1rem;\r\n    padding-top: 0;\r\n  }\r\n.form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n.customInput{\r\n    border-radius: 2rem;\r\n  }\r\n.customInput::after{\r\n    border-bottom-right-radius: 2rem;\r\n    border-top-right-radius: 2rem;\r\n  }\r\n.title{\r\n  padding: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS91c2VyLWNhdGFsb2cvdXNlci1zZWFyY2gvdXNlci1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQiwyRUFBMkU7RUFDN0U7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsY0FBYztFQUNoQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSxnQ0FBZ0M7SUFDaEMsNkJBQTZCO0VBQy9CO0FBRUY7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3VzZXItY2F0YWxvZy91c2VyLXNlYXJjaC91c2VyLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEZvcm17XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNhcmQtc2VhcmNoIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgOXB4IDI2cHggMCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNlYXJjaCAuY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zZWFyY2ggLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY3VzdG9tSW5wdXR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICAuY3VzdG9tSW5wdXQ6OmFmdGVye1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJyZW07XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnJlbTtcclxuICB9XHJcblxyXG4udGl0bGV7XHJcbiAgcGFkZGluZzogMyU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/core/user-catalog/user-search/user-search.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/core/user-catalog/user-search/user-search.component.ts ***!
    \************************************************************************/

  /*! exports provided: UserSearchComponent */

  /***/
  function srcAppCoreUserCatalogUserSearchUserSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function () {
      return UserSearchComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var UserSearchComponent =
    /*#__PURE__*/
    function () {
      function UserSearchComponent(collService, fb) {
        _classCallCheck(this, UserSearchComponent);

        this.collService = collService;
        this.fb = fb;
        this.searchForm = fb.group({
          username: ['']
        });
      }

      _createClass(UserSearchComponent, [{
        key: "search",
        value: function search() {
          this.collService.setOptions({
            searchName: this.username.value,
            position: 'firstPage',
            collection: 'userdata',
            sortBy: 'userdata',
            category: '',
            once: true
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "username",
        get: function get() {
          return this.searchForm.get('username');
        }
      }]);

      return UserSearchComponent;
    }();

    UserSearchComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__["CollectionsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    UserSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-search',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-search.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/core/user-catalog/user-search/user-search.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-search.component.css */
      "./src/app/core/user-catalog/user-search/user-search.component.css")).default]
    })], UserSearchComponent);
    /***/
  },

  /***/
  "./src/app/forms/announcement-form/announcement-form.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/forms/announcement-form/announcement-form.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsAnnouncementFormAnnouncementFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n  position: fixed;\r\n  overflow: scroll;\r\n  z-index: 10;\r\n}\r\n\r\n.adImage{\r\n    width: 18rem;\r\n    margin: 1rem;\r\n}\r\n\r\n.close{\r\n  margin: 5%;\r\n}\r\n\r\n.closeDiv{\r\n  height: 5%;\r\n}\r\n\r\n.title{\r\n  margin: 10%;\r\n  font-weight: 500;\r\n}\r\n\r\n.blockquote{\r\n  font-size: xx-small;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvYW5ub3VuY2VtZW50LWZvcm0vYW5ub3VuY2VtZW50LWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvYW5ub3VuY2VtZW50LWZvcm0vYW5ub3VuY2VtZW50LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvcm17XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5hZEltYWdle1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4uY2xvc2V7XHJcbiAgbWFyZ2luOiA1JTtcclxufVxyXG5cclxuLmNsb3NlRGl2e1xyXG4gIGhlaWdodDogNSU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBtYXJnaW46IDEwJTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uYmxvY2txdW90ZXtcclxuICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/forms/announcement-form/announcement-form.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/forms/announcement-form/announcement-form.component.ts ***!
    \************************************************************************/

  /*! exports provided: AnnouncementFormComponent */

  /***/
  function srcAppFormsAnnouncementFormAnnouncementFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementFormComponent", function () {
      return AnnouncementFormComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_announcements_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/announcements.service */
    "./src/app/forms/services/announcements.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var AnnouncementFormComponent =
    /*#__PURE__*/
    function () {
      function AnnouncementFormComponent(announcementsService, notifier, fb, route, router) {
        _classCallCheck(this, AnnouncementFormComponent);

        this.announcementsService = announcementsService;
        this.notifier = notifier;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.defaultImage = '../../assets/images/unkItem.svg';
        this.localImageUrl = null;
        this.localImage = null;
        this.announcementsFormGroup = fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
          desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(300), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          image: [''],
          price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(AnnouncementFormComponent, [{
        key: "previewImg",
        value: function previewImg(e) {
          var _this2 = this;

          if (e.target.files[0]) {
            this.localImage = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.localImage);

            reader.onload = function () {
              _this2.localImageUrl = reader.result;
            };
          }
        }
      }, {
        key: "createAnnouncement",
        value: function createAnnouncement() {
          var image = this.localImage || this.defaultImage;
          var announcement = {
            name: this.name.value,
            desc: this.desc.value,
            image: image,
            price: this.price.value,
            category: this.category.value
          };

          if (this.currentData) {
            announcement.id = this.currentData.id;
          }

          return announcement;
        }
      }, {
        key: "setAnnouncement",
        value: function setAnnouncement() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var announcement;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!this.announcementsFormGroup.valid) {
                      _context2.next = 7;
                      break;
                    }

                    announcement = this.createAnnouncement();
                    _context2.next = 4;
                    return this.announcementsService.setAnnouncement(announcement);

                  case 4:
                    this.close();
                    _context2.next = 8;
                    break;

                  case 7:
                    this.notifier.notify('warning', 'Form data is incorrect!');

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "loadData",
        value: function loadData(data) {
          this.currentData = data;

          if (data) {
            this.defaultImage = data.image;
            this.announcementsFormGroup.patchValue({
              name: data.name,
              desc: data.desc,
              price: data.price,
              category: data.category
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params.id;

          if (id) {
            this.announcementsService.loadCurrItem(id);
            this.item.forEach(this.loadData.bind(this));
          }
        }
      }, {
        key: "item",
        get: function get() {
          return this.announcementsService.item;
        }
      }, {
        key: "name",
        get: function get() {
          return this.announcementsFormGroup.get('name');
        }
      }, {
        key: "desc",
        get: function get() {
          return this.announcementsFormGroup.get('desc');
        }
      }, {
        key: "image",
        get: function get() {
          return this.announcementsFormGroup.get('image');
        }
      }, {
        key: "price",
        get: function get() {
          return this.announcementsFormGroup.get('price');
        }
      }, {
        key: "category",
        get: function get() {
          return this.announcementsFormGroup.get('category');
        }
      }]);

      return AnnouncementFormComponent;
    }();

    AnnouncementFormComponent.ctorParameters = function () {
      return [{
        type: _services_announcements_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementsService"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AnnouncementFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-announcement-form',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./announcement-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/announcement-form/announcement-form.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_6__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./announcement-form.component.css */
      "./src/app/forms/announcement-form/announcement-form.component.css")).default]
    })], AnnouncementFormComponent);
    /***/
  },

  /***/
  "./src/app/forms/forms-card.module.ts":
  /*!********************************************!*\
    !*** ./src/app/forms/forms-card.module.ts ***!
    \********************************************/

  /*! exports provided: FormsCardModule */

  /***/
  function srcAppFormsFormsCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsCardModule", function () {
      return FormsCardModule;
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


    var _announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./announcement-form/announcement-form.component */
    "./src/app/forms/announcement-form/announcement-form.component.ts");
    /* harmony import */


    var _services_announcements_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/announcements.service */
    "./src/app/forms/services/announcements.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-details/item-details.component */
    "./src/app/forms/item-details/item-details.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _services_item_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/item-details.service */
    "./src/app/forms/services/item-details.service.ts");
    /* harmony import */


    var _shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shipment-details/shipment-details.component */
    "./src/app/forms/shipment-details/shipment-details.component.ts");
    /* harmony import */


    var _services_shipment_details_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/shipment-details.service */
    "./src/app/forms/services/shipment-details.service.ts");
    /* harmony import */


    var _services_user_data_edit_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/user-data-edit.service */
    "./src/app/forms/services/user-data-edit.service.ts");
    /* harmony import */


    var _user_data_edit_user_data_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./user-data-edit/user-data-edit.component */
    "./src/app/forms/user-data-edit/user-data-edit.component.ts");
    /* harmony import */


    var _services_user_details_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/user-details.service */
    "./src/app/forms/services/user-details.service.ts");
    /* harmony import */


    var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./user-details/user-details.component */
    "./src/app/forms/user-details/user-details.component.ts");
    /* harmony import */


    var _user_details_list_navigation_user_details_list_navigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./user-details-list-navigation/user-details-list-navigation.component */
    "./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.ts");
    /* harmony import */


    var _shopping_card_shopping_card_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./shopping-card/shopping-card.module */
    "./src/app/forms/shopping-card/shopping-card.module.ts");

    var FormsCardModule = function FormsCardModule() {
      _classCallCheck(this, FormsCardModule);
    };

    FormsCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementFormComponent"], _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsComponent"], _shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentDetailsComponent"], _user_data_edit_user_data_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserDataEditComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"], _user_details_list_navigation_user_details_list_navigation_component__WEBPACK_IMPORTED_MODULE_16__["UserDetailsListNavigationComponent"]],
      providers: [_services_announcements_service__WEBPACK_IMPORTED_MODULE_4__["AnnouncementsService"], _services_item_details_service__WEBPACK_IMPORTED_MODULE_9__["DetailsFormService"], _services_shipment_details_service__WEBPACK_IMPORTED_MODULE_11__["ShipmentDetailsService"], _services_user_data_edit_service__WEBPACK_IMPORTED_MODULE_12__["UserDataEditService"], _services_user_details_service__WEBPACK_IMPORTED_MODULE_14__["UserDetailsService"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _shopping_card_shopping_card_module__WEBPACK_IMPORTED_MODULE_17__["ShoppingCardModule"]],
      exports: [_announcement_form_announcement_form_component__WEBPACK_IMPORTED_MODULE_3__["AnnouncementFormComponent"], _item_details_item_details_component__WEBPACK_IMPORTED_MODULE_7__["ItemDetailsComponent"], _shipment_details_shipment_details_component__WEBPACK_IMPORTED_MODULE_10__["ShipmentDetailsComponent"], _user_data_edit_user_data_edit_component__WEBPACK_IMPORTED_MODULE_13__["UserDataEditComponent"], _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_15__["UserDetailsComponent"]]
    })], FormsCardModule);
    /***/
  },

  /***/
  "./src/app/forms/item-details/item-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/forms/item-details/item-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsItemDetailsItemDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n  position: fixed;\r\n  overflow: scroll;\r\n  z-index: 8;\r\n}\r\n\r\n  .itemImg{\r\n      width: 100%;\r\n      height: auto;\r\n  }\r\n\r\n  .close{\r\n    margin: 3%;\r\n  }\r\n\r\n  .closeDiv{\r\n    height: 3%;\r\n  }\r\n\r\n  .title{\r\n    padding: 5%;\r\n    font-weight: 500;\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .detailsButtons{\r\n    margin: 2%;\r\n    width: 23%;\r\n  }\r\n\r\n  .desc{\r\n    height: 70%;\r\n  }\r\n\r\n  .info{\r\n    height: 30%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvaXRlbS1kZXRhaWxzL2l0ZW0tZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0VBRUU7TUFDSSxXQUFXO01BQ1gsWUFBWTtFQUNoQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9pdGVtLWRldGFpbHMvaXRlbS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mb3Jte1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHotaW5kZXg6IDg7XHJcbn1cclxuXHJcbiAgLml0ZW1JbWd7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZXtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgfVxyXG4gIFxyXG4gIC5jbG9zZURpdntcclxuICAgIGhlaWdodDogMyU7XHJcbiAgfVxyXG5cclxuICAudGl0bGV7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuZGV0YWlsc0J1dHRvbnN7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgd2lkdGg6IDIzJTtcclxuICB9XHJcblxyXG4gIC5kZXNje1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgfVxyXG5cclxuICAuaW5mb3tcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/forms/item-details/item-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forms/item-details/item-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: ItemDetailsComponent */

  /***/
  function srcAppFormsItemDetailsItemDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function () {
      return ItemDetailsComponent;
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


    var _services_item_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/item-details.service */
    "./src/app/forms/services/item-details.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_forms_services_announcements_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/forms/services/announcements.service */
    "./src/app/forms/services/announcements.service.ts");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var ItemDetailsComponent =
    /*#__PURE__*/
    function () {
      function ItemDetailsComponent(detailsFormService, userService, announcementsService, route, router) {
        _classCallCheck(this, ItemDetailsComponent);

        this.detailsFormService = detailsFormService;
        this.userService = userService;
        this.announcementsService = announcementsService;
        this.route = route;
        this.router = router;
      }

      _createClass(ItemDetailsComponent, [{
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "edit",
        value: function edit(item) {
          this.router.navigate([{
            outlets: {
              formsOutlet: ['create_announcement', item.id]
            }
          }]);
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          this.announcementsService.delete(item);
          this.close();
        }
      }, {
        key: "isCreator",
        value: function isCreator() {
          return this.uid === this.creatorUid;
        }
      }, {
        key: "addToShoppingCard",
        value: function addToShoppingCard(item) {
          this.announcementsService.addItemToShoppingCard(item);
          this.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params.id;
          this.creatorUid = this.route.snapshot.params.creatorUid;
          this.detailsFormService.loadDetailsData(id, this.creatorUid);
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }, {
        key: "isHere",
        get: function get() {
          return this.userService.isHere;
        }
      }, {
        key: "profile",
        get: function get() {
          return this.detailsFormService.profile;
        }
      }, {
        key: "item",
        get: function get() {
          return this.detailsFormService.item;
        }
      }]);

      return ItemDetailsComponent;
    }();

    ItemDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_item_details_service__WEBPACK_IMPORTED_MODULE_2__["DetailsFormService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_forms_services_announcements_service__WEBPACK_IMPORTED_MODULE_5__["AnnouncementsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    ItemDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/item-details/item-details.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_6__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-details.component.css */
      "./src/app/forms/item-details/item-details.component.css")).default]
    })], ItemDetailsComponent);
    /***/
  },

  /***/
  "./src/app/forms/services/announcements.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/forms/services/announcements.service.ts ***!
    \*********************************************************/

  /*! exports provided: AnnouncementsService */

  /***/
  function srcAppFormsServicesAnnouncementsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsService", function () {
      return AnnouncementsService;
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


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");

    var AnnouncementsService =
    /*#__PURE__*/
    function () {
      function AnnouncementsService(notifier, firebaseStorage, fireStore, userService) {
        _classCallCheck(this, AnnouncementsService);

        this.notifier = notifier;
        this.firebaseStorage = firebaseStorage;
        this.fireStore = fireStore;
        this.userService = userService;
        this.collection = this.fireStore.collection('allItems');
      }

      _createClass(AnnouncementsService, [{
        key: "uploadImage",
        value: function uploadImage(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var id, storageRef;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    id = this.fireStore.createId();
                    storageRef = this.firebaseStorage.ref("items/".concat(id));
                    _context3.next = 4;
                    return storageRef.put(image).then(this.getUrl).catch(function (err) {
                      return _this3.notifier.notify('warning', err.message);
                    });

                  case 4:
                    return _context3.abrupt("return", _context3.sent);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "getUrl",
        value: function getUrl(snapshot) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return snapshot.ref.getDownloadURL().catch(function (err) {
                      return _this4.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }, {
        key: "setAnnouncement",
        value: function setAnnouncement(announcement) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this5 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!this.uid) {
                      _context5.next = 13;
                      break;
                    }

                    announcement.name = announcement.name.toLocaleLowerCase();

                    if (!(typeof announcement.image === 'object')) {
                      _context5.next = 6;
                      break;
                    }

                    _context5.next = 5;
                    return this.uploadImage(announcement.image);

                  case 5:
                    announcement.image = _context5.sent;

                  case 6:
                    if (!announcement.id) {
                      announcement.id = this.fireStore.createId();
                    }

                    announcement.creatorUid = this.uid;
                    _context5.next = 10;
                    return this.collection.doc(announcement.id).set(announcement).then(function (_) {
                      _this5.notifier.notify('success', 'Successful operation!');
                    }).catch(function (err) {
                      return _this5.notifier.notify('warning', err.message);
                    });

                  case 10:
                    return _context5.abrupt("return", _context5.sent);

                  case 13:
                    this.notifier.notify('warning', 'You must be registered to share announcement!');

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(_ref) {
          var id = _ref.id,
              creatorUid = _ref.creatorUid;
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(creatorUid === this.uid)) {
                      _context6.next = 6;
                      break;
                    }

                    _context6.next = 3;
                    return this.collection.doc(id).delete().then(function (_) {
                      _this6.notifier.notify('success', 'Successful delete your announcement!');
                    }).catch(function (err) {
                      return _this6.notifier.notify('warning', err.message);
                    });

                  case 3:
                    return _context6.abrupt("return", _context6.sent);

                  case 6:
                    this.notifier.notify('warning', 'This is not your announcement! You can not delete it!');

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "addItemToShoppingCard",
        value: function addItemToShoppingCard(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.fireStore.collection('userdata').doc(this.uid).collection('shoppingCard').doc(item.id).set(item).then(function (_) {
                      _this7.notifier.notify('success', 'Successful!');
                    }).catch(function (err) {
                      return _this7.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "loadCurrItem",
        value: function loadCurrItem(id) {
          this.itemDoc = this.fireStore.doc("allItems/".concat(id));
          this.item = this.itemDoc.valueChanges();
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return AnnouncementsService;
    }();

    AnnouncementsService.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }];
    };

    AnnouncementsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AnnouncementsService);
    /***/
  },

  /***/
  "./src/app/forms/services/item-details.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/forms/services/item-details.service.ts ***!
    \********************************************************/

  /*! exports provided: DetailsFormService */

  /***/
  function srcAppFormsServicesItemDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsFormService", function () {
      return DetailsFormService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var DetailsFormService =
    /*#__PURE__*/
    function () {
      function DetailsFormService(afs) {
        _classCallCheck(this, DetailsFormService);

        this.afs = afs;
      }

      _createClass(DetailsFormService, [{
        key: "loadCreatorData",
        value: function loadCreatorData(uid) {
          this.profileDoc = this.afs.doc("userdata/".concat(uid));
          this.profile = this.profileDoc.valueChanges();
        }
      }, {
        key: "loadItemData",
        value: function loadItemData(id) {
          this.itemDoc = this.afs.doc("allItems/".concat(id));
          this.item = this.itemDoc.valueChanges();
        }
      }, {
        key: "loadDetailsData",
        value: function loadDetailsData(id, uid) {
          this.loadItemData(id);
          this.loadCreatorData(uid);
        }
      }]);

      return DetailsFormService;
    }();

    DetailsFormService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    DetailsFormService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], DetailsFormService);
    /***/
  },

  /***/
  "./src/app/forms/services/shipment-details.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/forms/services/shipment-details.service.ts ***!
    \************************************************************/

  /*! exports provided: ShipmentDetailsService */

  /***/
  function srcAppFormsServicesShipmentDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentDetailsService", function () {
      return ShipmentDetailsService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");

    var ShipmentDetailsService =
    /*#__PURE__*/
    function () {
      function ShipmentDetailsService(notifier, afs, userService) {
        _classCallCheck(this, ShipmentDetailsService);

        this.notifier = notifier;
        this.afs = afs;
        this.userService = userService;
      }

      _createClass(ShipmentDetailsService, [{
        key: "loadData",
        value: function loadData(id) {
          var shipmentDoc = this.afs.doc("orders/".concat(id));
          shipmentDoc.valueChanges().subscribe(this.setShipment.bind(this));
        }
      }, {
        key: "setShipment",
        value: function setShipment(data) {
          this.data = data;
          this.loadTitle();
          this.loadRecInfo();
          this.loadStatus(this.data.status);
          this.loadItems();
          this.loadReceiver();
          this.loadSender();
          this.checkUserStatus();
          this.updateBtnStatus();
        }
      }, {
        key: "checkUserStatus",
        value: function checkUserStatus() {
          if (this.uid === this.data.sender) {
            this.isSender = true;
          } else {
            this.isSender = false;
          }
        }
      }, {
        key: "loadTitle",
        value: function loadTitle() {
          this.title = this.data.id;
        }
      }, {
        key: "loadRecInfo",
        value: function loadRecInfo() {
          this.recInfo = this.data.recInfo;
        }
      }, {
        key: "loadStatus",
        value: function loadStatus(status) {
          this.status = status;
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          this.items = this.data.listOfItems;
        }
      }, {
        key: "loadReceiver",
        value: function loadReceiver() {
          var profileDoc = this.afs.doc("userdata/".concat(this.data.receiver));
          this.receiver = profileDoc.valueChanges();
        }
      }, {
        key: "loadSender",
        value: function loadSender() {
          var profileDoc = this.afs.doc("userdata/".concat(this.data.sender));
          this.sender = profileDoc.valueChanges();
        }
      }, {
        key: "setNewStatus",
        value: function setNewStatus(status) {
          this.data.status = status;
        }
      }, {
        key: "updateCollectionsStatus",
        value: function updateCollectionsStatus(status) {
          var _this8 = this;

          this.afs.doc("/orders/".concat(this.data.id)).update({
            status: status
          }).then(function (_) {
            return _this8.notifier.notify('success', 'Successful updated status!');
          }).catch(function (err) {
            return _this8.notifier.notify('warning', err.message);
          });
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(newStatus) {
          this.setNewStatus(newStatus);
          this.updateCollectionsStatus(newStatus);
        }
      }, {
        key: "updateBtnStatus",
        value: function updateBtnStatus() {
          var between = this.status === 'Delivered' || this.status === 'Denied';
          var sendBtn = this.status === 'Sended' || between;
          var deniedBtn = this.status === 'Confirmed' || sendBtn;
          var confirmedBtn = deniedBtn;
          var isSended = this.status !== 'Sended' || between;
          this.btnStatus = {
            sendBtn: sendBtn,
            deniedBtn: deniedBtn,
            confirmedBtn: confirmedBtn,
            isSended: isSended
          };
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return ShipmentDetailsService;
    }();

    ShipmentDetailsService.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_4__["NotifierService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    ShipmentDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ShipmentDetailsService);
    /***/
  },

  /***/
  "./src/app/forms/services/user-data-edit.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/forms/services/user-data-edit.service.ts ***!
    \**********************************************************/

  /*! exports provided: UserDataEditService */

  /***/
  function srcAppFormsServicesUserDataEditServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataEditService", function () {
      return UserDataEditService;
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


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");

    var UserDataEditService =
    /*#__PURE__*/
    function () {
      function UserDataEditService(userService, afs) {
        _classCallCheck(this, UserDataEditService);

        this.userService = userService;
        this.afs = afs;
      }

      _createClass(UserDataEditService, [{
        key: "loadUserdata",
        value: function loadUserdata() {
          this.profileDoc = this.afs.doc("userdata/".concat(this.uid));
          this.userdata = this.profileDoc.valueChanges();
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return UserDataEditService;
    }();

    UserDataEditService.ctorParameters = function () {
      return [{
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }];
    };

    UserDataEditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserDataEditService);
    /***/
  },

  /***/
  "./src/app/forms/services/user-details.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/forms/services/user-details.service.ts ***!
    \********************************************************/

  /*! exports provided: UserDetailsService */

  /***/
  function srcAppFormsServicesUserDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsService", function () {
      return UserDetailsService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");

    var UserDetailsService =
    /*#__PURE__*/
    function () {
      function UserDetailsService(afs, notifier) {
        _classCallCheck(this, UserDetailsService);

        this.afs = afs;
        this.notifier = notifier;
        this.pageLimit = 4;
      }

      _createClass(UserDetailsService, [{
        key: "loadUserdata",
        value: function loadUserdata(uid) {
          this.profileDoc = this.afs.doc("userdata/".concat(uid));
          this.profile = this.profileDoc.valueChanges();
        }
      }, {
        key: "searchByUserUID",
        value: function searchByUserUID(uid) {
          this.setUID(uid);
          var currSearchFn = this.searchFn().firstPage;
          this.itemsCollection = this.afs.collection('allItems', currSearchFn);
          this.items = this.itemsCollection.valueChanges();
        }
      }, {
        key: "searchByPosition",
        value: function searchByPosition(position) {
          this.setPositions(position);
          var currSearchFn = this.searchFn()[this.position];
          this.itemsCollection = this.afs.collection('allItems', currSearchFn);
          this.items = this.itemsCollection.valueChanges();
        }
      }, {
        key: "setPositions",
        value: function setPositions(position) {
          if (position) {
            this.position = position;
          }
        }
      }, {
        key: "setUID",
        value: function setUID(uid) {
          this.uid = uid;
        }
      }, {
        key: "searchFn",
        value: function searchFn() {
          var _this9 = this;

          var startAfter = function startAfter(ref) {
            _this9.currPage = ref.where('creatorUid', '==', _this9.uid).startAfter(_this9.lastItem).limit(_this9.pageLimit);
            return _this9.currPage;
          };

          var endBefore = function endBefore(ref) {
            _this9.currPage = ref.where('creatorUid', '==', _this9.uid).endBefore(_this9.firstItem).limit(_this9.pageLimit);
            return _this9.currPage;
          };

          var firstPage = function firstPage(ref) {
            _this9.currPage = ref.where('creatorUid', '==', _this9.uid).limit(_this9.pageLimit);

            _this9.currPage.get().then(_this9.setFirstItemFromFirstPage.bind(_this9));

            return _this9.currPage;
          };

          return {
            startAfter: startAfter,
            endBefore: endBefore,
            firstPage: firstPage
          };
        }
      }, {
        key: "setFirstItemFromFirstPage",
        value: function setFirstItemFromFirstPage(shot) {
          this.firstItemFromFirstPage = shot.docs[0];
        }
      }, {
        key: "setFirstAndLastItemInCurrPage",
        value: function setFirstAndLastItemInCurrPage(shot) {
          this.firstItem = shot.docs[0];
          this.lastItem = shot.docs[shot.docs.length - 1];
        }
      }, {
        key: "loadNextPage",
        value: function loadNextPage() {
          var _this10 = this;

          this.currPage.get().then(function (shot) {
            if (shot.docs.length === _this10.pageLimit) {
              _this10.setFirstAndLastItemInCurrPage(shot);

              _this10.searchByPosition('startAfter');
            } else {
              _this10.notifier.notify('info', 'Sorry, User do not have more announcements.');
            }
          });
        }
      }, {
        key: "loadBackPage",
        value: function loadBackPage() {
          var _this11 = this;

          this.currPage.get().then(function (shot) {
            if (shot.docs[0]) {
              if (shot.docs[0].id === _this11.firstItemFromFirstPage.id) {
                _this11.notifier.notify('info', 'This is first page!');
              } else {
                _this11.setFirstAndLastItemInCurrPage(shot);

                _this11.searchByPosition('endBefore');
              }
            } else {
              _this11.notifier.notify('info', 'This is first page!');
            }
          });
        }
      }]);

      return UserDetailsService;
    }();

    UserDetailsService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }];
    };

    UserDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserDetailsService);
    /***/
  },

  /***/
  "./src/app/forms/shipment-details/shipment-details.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/forms/shipment-details/shipment-details.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsShipmentDetailsShipmentDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n  position: fixed;\r\n  overflow: scroll;\r\n  z-index: 10;\r\n}\r\n\r\n.itemImg{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.close{\r\n  margin: 3%;\r\n}\r\n\r\n.closeDiv{\r\n  height: 3%;\r\n}\r\n\r\n.title{\r\n  padding: 6%;\r\n  font-size: 1.7rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.detailsButtons{\r\n  margin: 2%;\r\n  width: 23%;\r\n}\r\n\r\n.desc{\r\n  height: 70%;\r\n}\r\n\r\n.info{\r\n  height: 30%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2hpcG1lbnQtZGV0YWlscy9zaGlwbWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvc2hpcG1lbnQtZGV0YWlscy9zaGlwbWVudC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1mb3Jte1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcblxyXG4uaXRlbUltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2xvc2V7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmNsb3NlRGl2e1xyXG4gIGhlaWdodDogMyU7XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICBwYWRkaW5nOiA2JTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uZGV0YWlsc0J1dHRvbnN7XHJcbiAgbWFyZ2luOiAyJTtcclxuICB3aWR0aDogMjMlO1xyXG59XHJcblxyXG4uZGVzY3tcclxuICBoZWlnaHQ6IDcwJTtcclxufVxyXG5cclxuLmluZm97XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/forms/shipment-details/shipment-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/forms/shipment-details/shipment-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ShipmentDetailsComponent */

  /***/
  function srcAppFormsShipmentDetailsShipmentDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentDetailsComponent", function () {
      return ShipmentDetailsComponent;
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


    var _services_shipment_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/shipment-details.service */
    "./src/app/forms/services/shipment-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var ShipmentDetailsComponent =
    /*#__PURE__*/
    function () {
      function ShipmentDetailsComponent(shipmentDetailsService, route, router) {
        _classCallCheck(this, ShipmentDetailsComponent);

        this.shipmentDetailsService = shipmentDetailsService;
        this.route = route;
        this.router = router;
      }

      _createClass(ShipmentDetailsComponent, [{
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(newStatus) {
          this.shipmentDetailsService.changeStatus(newStatus);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params.id;
          this.shipmentDetailsService.loadData(id);
        }
      }, {
        key: "items",
        get: function get() {
          return this.shipmentDetailsService.items;
        }
      }, {
        key: "title",
        get: function get() {
          return this.shipmentDetailsService.title;
        }
      }, {
        key: "recInfo",
        get: function get() {
          return this.shipmentDetailsService.recInfo;
        }
      }, {
        key: "status",
        get: function get() {
          return this.shipmentDetailsService.status;
        }
      }, {
        key: "receiver",
        get: function get() {
          return this.shipmentDetailsService.receiver;
        }
      }, {
        key: "sender",
        get: function get() {
          return this.shipmentDetailsService.sender;
        }
      }, {
        key: "isSender",
        get: function get() {
          return this.shipmentDetailsService.isSender;
        }
      }, {
        key: "btnStatus",
        get: function get() {
          return this.shipmentDetailsService.btnStatus;
        }
      }]);

      return ShipmentDetailsComponent;
    }();

    ShipmentDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_shipment_details_service__WEBPACK_IMPORTED_MODULE_2__["ShipmentDetailsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ShipmentDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipment-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipment-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shipment-details/shipment-details.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipment-details.component.css */
      "./src/app/forms/shipment-details/shipment-details.component.css")).default]
    })], ShipmentDetailsComponent);
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/services/shopping-card.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/forms/shopping-card/services/shopping-card.service.ts ***!
    \***********************************************************************/

  /*! exports provided: ShoppingCardService */

  /***/
  function srcAppFormsShoppingCardServicesShoppingCardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCardService", function () {
      return ShoppingCardService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ShoppingCardService =
    /*#__PURE__*/
    function () {
      function ShoppingCardService(notifier, router, afs, userService) {
        _classCallCheck(this, ShoppingCardService);

        this.notifier = notifier;
        this.router = router;
        this.afs = afs;
        this.userService = userService;
        this.price = 0;
        this.componentState = false;
      }

      _createClass(ShoppingCardService, [{
        key: "changeComponentState",
        value: function changeComponentState() {
          this.componentState = !this.componentState;
        }
      }, {
        key: "deleteDoc",
        value: function deleteDoc(_ref2) {
          var id = _ref2.id;
          this.itemsCollection.doc(id).delete();
        }
      }, {
        key: "deleteAllItems",
        value: function deleteAllItems() {
          this.arrFromItems.map(this.deleteDoc.bind(this));
        }
      }, {
        key: "createListOfOrders",
        value: function createListOfOrders(recInfo) {
          function getCreatorUid(x) {
            return x.creatorUid;
          }

          function filterSenders(senderUid, _ref3) {
            var creatorUid = _ref3.creatorUid;
            return creatorUid === senderUid;
          }

          function reduceRepeatedUid(acc, uid) {
            if (acc.includes(uid)) {
              return acc;
            }

            return acc.concat(uid);
          }

          function createSenderList(sender) {
            var listOfItems = this.arrFromItems.filter(filterSenders.bind(undefined, sender));
            var id = this.afs.createId();
            return {
              id: id,
              recInfo: recInfo,
              sender: sender,
              listOfItems: listOfItems,
              receiver: this.uid,
              status: 'Not Confirmed!'
            };
          }

          return this.arrFromItems.map(getCreatorUid).reduce(function (acc, x) {
            return reduceRepeatedUid(acc, x);
          }, []).map(createSenderList.bind(this));
        }
      }, {
        key: "makeOrder",
        value: function makeOrder(order) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this12 = this;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.afs.collection("orders").doc(order.id).set(order).then(function (_) {
                      return _this12.notifier.notify('success', "You successful make order with number ".concat(order.id));
                    }).catch(function (err) {
                      return _this12.notifier.notify('warning', err.message);
                    });

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "buyAllProducts",
        value: function buyAllProducts(recInfo) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.createListOfOrders(recInfo).forEach(this.makeOrder.bind(this));
                    this.router.navigate([{
                      outlets: {
                        formsOutlet: null
                      }
                    }]);
                    this.changeComponentState();
                    this.deleteAllItems();

                  case 4:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "setArrOfItems",
        value: function setArrOfItems(arr) {
          this.arrFromItems = arr;
          this.price = this.arrFromItems.reduce(function (r, x) {
            return r += Number(x.price);
          }, 0);
        }
      }, {
        key: "loadItems",
        value: function loadItems() {
          this.itemsCollection = this.afs.collection("userdata/".concat(this.uid, "/shoppingCard"));
          this.items = this.itemsCollection.valueChanges();
          this.items.forEach(this.setArrOfItems.bind(this));
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return ShoppingCardService;
    }();

    ShoppingCardService.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    ShoppingCardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ShoppingCardService);
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsShoppingCardShoppingCardDetailsShoppingCardDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-edit .btn {\r\n    font-size: 80%;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2hvcHBpbmctY2FyZC9zaG9wcGluZy1jYXJkLWRldGFpbHMvc2hvcHBpbmctY2FyZC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9zaG9wcGluZy1jYXJkL3Nob3BwaW5nLWNhcmQtZGV0YWlscy9zaG9wcGluZy1jYXJkLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWVkaXQgLmJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: ShoppingCardDetailsComponent */

  /***/
  function srcAppFormsShoppingCardShoppingCardDetailsShoppingCardDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCardDetailsComponent", function () {
      return ShoppingCardDetailsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/shopping-card.service */
    "./src/app/forms/shopping-card/services/shopping-card.service.ts");

    var ShoppingCardDetailsComponent =
    /*#__PURE__*/
    function () {
      function ShoppingCardDetailsComponent(notifier, fb, shoppingCardService) {
        _classCallCheck(this, ShoppingCardDetailsComponent);

        this.notifier = notifier;
        this.fb = fb;
        this.shoppingCardService = shoppingCardService;
        this.orderDataForm = fb.group({
          firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]],
          requirements: [''],
          location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
      }

      _createClass(ShoppingCardDetailsComponent, [{
        key: "backToList",
        value: function backToList() {
          this.shoppingCardService.changeComponentState();
        }
      }, {
        key: "handleSubmit",
        value: function handleSubmit() {
          if (this.orderDataForm.valid) {
            var recInfo = {
              firstName: this.firstName.value,
              lastName: this.lastName.value,
              phoneNumber: this.phoneNumber.value,
              requirements: this.requirements.value,
              location: this.location.value
            };
            this.shoppingCardService.buyAllProducts(recInfo);
          } else {
            this.notifier.notify('warning', 'Please do not play with the developer toolbar.');
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "firstName",
        get: function get() {
          return this.orderDataForm.get('firstName');
        }
      }, {
        key: "lastName",
        get: function get() {
          return this.orderDataForm.get('lastName');
        }
      }, {
        key: "requirements",
        get: function get() {
          return this.orderDataForm.get('requirements');
        }
      }, {
        key: "location",
        get: function get() {
          return this.orderDataForm.get('location');
        }
      }, {
        key: "phoneNumber",
        get: function get() {
          return this.orderDataForm.get('phoneNumber');
        }
      }]);

      return ShoppingCardDetailsComponent;
    }();

    ShoppingCardDetailsComponent.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCardService"]
      }];
    };

    ShoppingCardDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-card-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-card-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-card-details.component.css */
      "./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.css")).default]
    })], ShoppingCardDetailsComponent);
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.css":
  /*!*****************************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.css ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsShoppingCardShoppingCardListShoppingCardListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noItems{\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n  }\r\n  \r\n  .loadingSpinner{\r\n    width: 50%;\r\n    height: auto;\r\n  }\r\n  \r\n  .myBtn {\r\n    font-size: 80%;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2hvcHBpbmctY2FyZC9zaG9wcGluZy1jYXJkLWxpc3Qvc2hvcHBpbmctY2FyZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9mb3Jtcy9zaG9wcGluZy1jYXJkL3Nob3BwaW5nLWNhcmQtbGlzdC9zaG9wcGluZy1jYXJkLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0l0ZW1ze1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmxvYWRpbmdTcGlubmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5teUJ0biB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: ShoppingCardListComponent */

  /***/
  function srcAppFormsShoppingCardShoppingCardListShoppingCardListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCardListComponent", function () {
      return ShoppingCardListComponent;
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


    var _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/shopping-card.service */
    "./src/app/forms/shopping-card/services/shopping-card.service.ts");

    var ShoppingCardListComponent =
    /*#__PURE__*/
    function () {
      function ShoppingCardListComponent(shoppingCardService) {
        _classCallCheck(this, ShoppingCardListComponent);

        this.shoppingCardService = shoppingCardService;
      }

      _createClass(ShoppingCardListComponent, [{
        key: "clearShoppingCard",
        value: function clearShoppingCard() {
          this.shoppingCardService.deleteAllItems();
        }
      }, {
        key: "makeOrder",
        value: function makeOrder() {
          this.shoppingCardService.changeComponentState();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.shoppingCardService.loadItems();
        }
      }, {
        key: "items",
        get: function get() {
          return this.shoppingCardService.items;
        }
      }, {
        key: "price",
        get: function get() {
          return this.shoppingCardService.price;
        }
      }]);

      return ShoppingCardListComponent;
    }();

    ShoppingCardListComponent.ctorParameters = function () {
      return [{
        type: _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_2__["ShoppingCardService"]
      }];
    };

    ShoppingCardListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-card-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-card-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-card-list.component.css */
      "./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.css")).default]
    })], ShoppingCardListComponent);
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card.module.ts ***!
    \*************************************************************/

  /*! exports provided: ShoppingCardModule */

  /***/
  function srcAppFormsShoppingCardShoppingCardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCardModule", function () {
      return ShoppingCardModule;
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


    var _shopping_card_shopping_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shopping-card/shopping-card.component */
    "./src/app/forms/shopping-card/shopping-card/shopping-card.component.ts");
    /* harmony import */


    var _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/shopping-card.service */
    "./src/app/forms/shopping-card/services/shopping-card.service.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shopping_card_list_shopping_card_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shopping-card-list/shopping-card-list.component */
    "./src/app/forms/shopping-card/shopping-card-list/shopping-card-list.component.ts");
    /* harmony import */


    var _shopping_card_details_shopping_card_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shopping-card-details/shopping-card-details.component */
    "./src/app/forms/shopping-card/shopping-card-details/shopping-card-details.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ShoppingCardModule = function ShoppingCardModule() {
      _classCallCheck(this, ShoppingCardModule);
    };

    ShoppingCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_shopping_card_shopping_card_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCardComponent"], _shopping_card_list_shopping_card_list_component__WEBPACK_IMPORTED_MODULE_6__["ShoppingCardListComponent"], _shopping_card_details_shopping_card_details_component__WEBPACK_IMPORTED_MODULE_7__["ShoppingCardDetailsComponent"]],
      providers: [_services_shopping_card_service__WEBPACK_IMPORTED_MODULE_4__["ShoppingCardService"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [_shopping_card_shopping_card_component__WEBPACK_IMPORTED_MODULE_3__["ShoppingCardComponent"]]
    })], ShoppingCardModule);
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card/shopping-card.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card/shopping-card.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsShoppingCardShoppingCardShoppingCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n  position: fixed;\r\n  overflow: scroll;\r\n  z-index: 8;\r\n}\r\n\r\n.listImage{\r\n    width: 3rem;\r\n}\r\n\r\n.closeForm{\r\n  margin: 3%;\r\n}\r\n\r\n.closeDiv{\r\n  height: 3%;\r\n}\r\n\r\n.title{\r\n  padding: 6%;\r\n  font-weight: 500;\r\n  font-size: 2rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvc2hvcHBpbmctY2FyZC9zaG9wcGluZy1jYXJkL3Nob3BwaW5nLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvc2hvcHBpbmctY2FyZC9zaG9wcGluZy1jYXJkL3Nob3BwaW5nLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvcm17XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxuLmxpc3RJbWFnZXtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG59XHJcblxyXG4uY2xvc2VGb3Jte1xyXG4gIG1hcmdpbjogMyU7XHJcbn1cclxuXHJcbi5jbG9zZURpdntcclxuICBoZWlnaHQ6IDMlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgcGFkZGluZzogNiU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/forms/shopping-card/shopping-card/shopping-card.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/forms/shopping-card/shopping-card/shopping-card.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ShoppingCardComponent */

  /***/
  function srcAppFormsShoppingCardShoppingCardShoppingCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShoppingCardComponent", function () {
      return ShoppingCardComponent;
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


    var _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/shopping-card.service */
    "./src/app/forms/shopping-card/services/shopping-card.service.ts");

    var ShoppingCardComponent =
    /*#__PURE__*/
    function () {
      function ShoppingCardComponent(router, shoppingCardService) {
        _classCallCheck(this, ShoppingCardComponent);

        this.router = router;
        this.shoppingCardService = shoppingCardService;
      }

      _createClass(ShoppingCardComponent, [{
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "componentState",
        get: function get() {
          return this.shoppingCardService.componentState;
        }
      }]);

      return ShoppingCardComponent;
    }();

    ShoppingCardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_shopping_card_service__WEBPACK_IMPORTED_MODULE_3__["ShoppingCardService"]
      }];
    };

    ShoppingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shopping-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shopping-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/shopping-card/shopping-card/shopping-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shopping-card.component.css */
      "./src/app/forms/shopping-card/shopping-card/shopping-card.component.css")).default]
    })], ShoppingCardComponent);
    /***/
  },

  /***/
  "./src/app/forms/user-data-edit/user-data-edit.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/forms/user-data-edit/user-data-edit.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsUserDataEditUserDataEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n    position: fixed;\r\n    overflow: scroll;\r\n    z-index: 10;\r\n}\r\n  \r\n.adImage{\r\n    width: 18rem;\r\n    margin: 1rem;\r\n}\r\n  \r\n.close{\r\n  margin: 5%;\r\n}\r\n  \r\n.closeDiv{\r\n  height: 5%;\r\n}\r\n  \r\n.title{\r\n  margin: 10%;\r\n  font-weight: 500;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdXNlci1kYXRhLWVkaXQvdXNlci1kYXRhLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZm9ybXMvdXNlci1kYXRhLWVkaXQvdXNlci1kYXRhLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvcm17XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuICBcclxuLmFkSW1hZ2V7XHJcbiAgICB3aWR0aDogMThyZW07XHJcbiAgICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi5jbG9zZXtcclxuICBtYXJnaW46IDUlO1xyXG59XHJcblxyXG4uY2xvc2VEaXZ7XHJcbiAgaGVpZ2h0OiA1JTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIG1hcmdpbjogMTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/forms/user-data-edit/user-data-edit.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/forms/user-data-edit/user-data-edit.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserDataEditComponent */

  /***/
  function srcAppFormsUserDataEditUserDataEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataEditComponent", function () {
      return UserDataEditComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_data_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user-data-edit.service */
    "./src/app/forms/services/user-data-edit.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var UserDataEditComponent =
    /*#__PURE__*/
    function () {
      function UserDataEditComponent(notifier, userDataEditService, userService, fb, router) {
        _classCallCheck(this, UserDataEditComponent);

        this.notifier = notifier;
        this.userDataEditService = userDataEditService;
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.defaultImage = './../../../assets/images/unkItem.svg';
        this.localImageUrl = null;
        this.localImage = null;
        this.editForm = fb.group({
          username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
          summary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          profileImg: ['']
        });
      }

      _createClass(UserDataEditComponent, [{
        key: "previewImg",
        value: function previewImg(e) {
          var _this13 = this;

          if (e.target.files[0]) {
            this.localImage = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(this.localImage);

            reader.onload = function () {
              _this13.localImageUrl = reader.result;
            };
          }
        }
      }, {
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this14 = this;

            var profileImg;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    if (this.editForm.valid) {
                      profileImg = this.localImage || this.defaultImage;
                      this.userService.updateUserData(this.username.value, this.summary.value, profileImg, this.location.value).then(function (d) {
                        _this14.notifier.notify('success', 'Successful updated account!');

                        _this14.close();
                      });
                    }

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "setInfo",
        value: function setInfo(data) {
          if (data) {
            this.editForm.patchValue({
              username: data.username,
              summary: data.summary,
              location: data.location
            });

            if (data.profileImg) {
              this.defaultImage = data.profileImg;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userDataEditService.loadUserdata();
          this.userdata.forEach(this.setInfo.bind(this));
        }
      }, {
        key: "username",
        get: function get() {
          return this.editForm.get('username');
        }
      }, {
        key: "summary",
        get: function get() {
          return this.editForm.get('summary');
        }
      }, {
        key: "location",
        get: function get() {
          return this.editForm.get('location');
        }
      }, {
        key: "profileImg",
        get: function get() {
          return this.editForm.get('profileImg');
        }
      }, {
        key: "userdata",
        get: function get() {
          return this.userDataEditService.userdata;
        }
      }]);

      return UserDataEditComponent;
    }();

    UserDataEditComponent.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierService"]
      }, {
        type: _services_user_data_edit_service__WEBPACK_IMPORTED_MODULE_3__["UserDataEditService"]
      }, {
        type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    UserDataEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-data-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-data-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-data-edit/user-data-edit.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_7__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-data-edit.component.css */
      "./src/app/forms/user-data-edit/user-data-edit.component.css")).default]
    })], UserDataEditComponent);
    /***/
  },

  /***/
  "./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsUserDetailsListNavigationUserDetailsListNavigationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3VzZXItZGV0YWlscy1saXN0LW5hdmlnYXRpb24vdXNlci1kZXRhaWxzLWxpc3QtbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UserDetailsListNavigationComponent */

  /***/
  function srcAppFormsUserDetailsListNavigationUserDetailsListNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsListNavigationComponent", function () {
      return UserDetailsListNavigationComponent;
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


    var _services_user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user-details.service */
    "./src/app/forms/services/user-details.service.ts");

    var UserDetailsListNavigationComponent =
    /*#__PURE__*/
    function () {
      function UserDetailsListNavigationComponent(userDetailsService) {
        _classCallCheck(this, UserDetailsListNavigationComponent);

        this.userDetailsService = userDetailsService;
      }

      _createClass(UserDetailsListNavigationComponent, [{
        key: "nextPage",
        value: function nextPage() {
          this.userDetailsService.loadNextPage();
        }
      }, {
        key: "backPage",
        value: function backPage() {
          this.userDetailsService.loadBackPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "items",
        get: function get() {
          return this.userDetailsService.items;
        }
      }]);

      return UserDetailsListNavigationComponent;
    }();

    UserDetailsListNavigationComponent.ctorParameters = function () {
      return [{
        type: _services_user_details_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"]
      }];
    };

    UserDetailsListNavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details-list-navigation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details-list-navigation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details-list-navigation.component.css */
      "./src/app/forms/user-details-list-navigation/user-details-list-navigation.component.css")).default]
    })], UserDetailsListNavigationComponent);
    /***/
  },

  /***/
  "./src/app/forms/user-details/user-details.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/forms/user-details/user-details.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFormsUserDetailsUserDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-form{\r\n  position: fixed;\r\n  overflow: scroll;\r\n  z-index: 7;\r\n}\r\n  \r\n.itemImg{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n  \r\n.close{\r\n  margin: 3%;\r\n}\r\n  \r\n.title{\r\n  padding: 5%;\r\n  font-weight: 500;\r\n  font-size: 3rem;\r\n}\r\n  \r\n.list{\r\n  height: 85%;\r\n}\r\n  \r\n.navigation-bar{\r\n  height: 15%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybXMvdXNlci1kZXRhaWxzL3VzZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2Zvcm1zL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvcm17XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgei1pbmRleDogNztcclxufVxyXG4gIFxyXG4uaXRlbUltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2xvc2V7XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLnRpdGxle1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG59XHJcblxyXG4ubGlzdHtcclxuICBoZWlnaHQ6IDg1JTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24tYmFye1xyXG4gIGhlaWdodDogMTUlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/forms/user-details/user-details.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/forms/user-details/user-details.component.ts ***!
    \**************************************************************/

  /*! exports provided: UserDetailsComponent */

  /***/
  function srcAppFormsUserDetailsUserDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function () {
      return UserDetailsComponent;
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


    var _services_user_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user-details.service */
    "./src/app/forms/services/user-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/animations/form.animations */
    "./src/app/shared/animations/form.animations.ts");

    var UserDetailsComponent =
    /*#__PURE__*/
    function () {
      function UserDetailsComponent(userDetailsService, route, router) {
        _classCallCheck(this, UserDetailsComponent);

        this.userDetailsService = userDetailsService;
        this.route = route;
        this.router = router;
      }

      _createClass(UserDetailsComponent, [{
        key: "close",
        value: function close() {
          this.router.navigate([{
            outlets: {
              formsOutlet: null
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var id = this.route.snapshot.params.id;
          this.userDetailsService.loadUserdata(id);
          this.userDetailsService.searchByUserUID(id);
        }
      }, {
        key: "profile",
        get: function get() {
          return this.userDetailsService.profile;
        }
      }, {
        key: "items",
        get: function get() {
          return this.userDetailsService.items;
        }
      }]);

      return UserDetailsComponent;
    }();

    UserDetailsComponent.ctorParameters = function () {
      return [{
        type: _services_user_details_service__WEBPACK_IMPORTED_MODULE_2__["UserDetailsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    UserDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/forms/user-details/user-details.component.html")).default,
      animations: [src_app_shared_animations_form_animations__WEBPACK_IMPORTED_MODULE_4__["formFader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-details.component.css */
      "./src/app/forms/user-details/user-details.component.css")).default]
    })], UserDetailsComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".not-found{\r\n    min-height: 500px;\r\n    background: url('404.gif');\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDBCQUFnRDtJQUNoRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWFnZXMvNDA0LmdpZicpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/services/collections.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/collections.service.ts ***!
    \*************************************************/

  /*! exports provided: CollectionsService */

  /***/
  function srcAppServicesCollectionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionsService", function () {
      return CollectionsService;
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


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _options_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./options-validator */
    "./src/app/services/options-validator.ts");

    var CollectionsService =
    /*#__PURE__*/
    function () {
      function CollectionsService(afs, notifier, userService, optionsValidatior) {
        _classCallCheck(this, CollectionsService);

        this.afs = afs;
        this.notifier = notifier;
        this.userService = userService;
        this.optionsValidatior = optionsValidatior;
        this.state = {
          collection: 'allItems',
          searchName: '',
          category: 'all',
          position: 'firstPage',
          pageLimit: 5,
          sortBy: 'allItems',
          once: false
        };
      }

      _createClass(CollectionsService, [{
        key: "setColl",
        value: function setColl(collection) {
          if (collection) {
            this.state.collection = collection;
          }
        }
      }, {
        key: "setSearchName",
        value: function setSearchName(searchName) {
          this.state.searchName = searchName;
        }
      }, {
        key: "setCategory",
        value: function setCategory(category) {
          if (category) {
            this.state.category = category;
          }
        }
      }, {
        key: "setPosition",
        value: function setPosition(position) {
          if (position) {
            this.state.position = position;
          }
        }
      }, {
        key: "setSortBy",
        value: function setSortBy(sortBy) {
          if (sortBy) {
            this.state.sortBy = sortBy;
          }
        }
      }, {
        key: "setPageLimit",
        value: function setPageLimit(pageLimit) {
          if (pageLimit) {
            this.state.pageLimit = pageLimit;
          }
        }
      }, {
        key: "setOnce",
        value: function setOnce(once) {
          this.state.once = once;
        }
      }, {
        key: "setOptions",
        value: function setOptions(options) {
          if (this.optionsValidatior.searchErrors(options)) {
            return;
          }

          this.setSortBy(options.sortBy);
          this.setPageLimit(options.pageLimit);
          this.setPosition(options.position);
          this.setCategory(options.category);
          this.setSearchName(options.searchName);
          this.setColl(options.collection);
          this.setOnce(options.once);
          this.loadList();
        }
      }, {
        key: "loadList",
        value: function loadList() {
          var currSearchFn;
          currSearchFn = this.searchEngine()[this.state.position];
          var itemsCollection = this.afs.collection(this.state.collection, currSearchFn);

          if (this.state.once) {
            this.items = itemsCollection.valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(3));
          } else {
            this.items = itemsCollection.valueChanges();
          }
        }
      }, {
        key: "getSortRef",
        value: function getSortRef() {
          var _this15 = this;

          var allItems = function allItems(ref) {
            return _this15.state.category === 'all' ? ref.where('name', '>=', _this15.state.searchName) : ref.where('category', '==', _this15.state.category).where('name', '>=', _this15.state.searchName);
          };

          var receiver = function receiver(ref) {
            return ref.where('receiver', '==', _this15.uid);
          };

          var sender = function sender(ref) {
            return ref.where('sender', '==', _this15.uid);
          };

          var userdata = function userdata(ref) {
            return ref.where('username', '>=', _this15.state.searchName);
          };

          var myItems = function myItems(ref) {
            return ref.where('creatorUid', '==', _this15.uid);
          };

          return {
            allItems: allItems,
            receiver: receiver,
            sender: sender,
            userdata: userdata,
            myItems: myItems
          };
        }
      }, {
        key: "searchEngine",
        value: function searchEngine() {
          var _this16 = this;

          var startAfter = function startAfter(ref) {
            _this16.currPage = _this16.getSortRef()[_this16.state.sortBy](ref).startAfter(_this16.lastItem).limit(_this16.state.pageLimit);

            _this16.currPage.get().then(_this16.setFirstAndLastItemInCurrPage.bind(_this16));

            return _this16.currPage;
          };

          var endBefore = function endBefore(ref) {
            _this16.currPage = _this16.getSortRef()[_this16.state.sortBy](ref).endBefore(_this16.firstItem).limit(_this16.state.pageLimit);

            _this16.currPage.get().then(_this16.setFirstAndLastItemInCurrPage.bind(_this16));

            return _this16.currPage;
          };

          var firstPage = function firstPage(ref) {
            _this16.currPage = _this16.getSortRef()[_this16.state.sortBy](ref).limit(_this16.state.pageLimit);

            _this16.currPage.get().then(_this16.setFirstAndLastItemInCurrPage.bind(_this16));

            _this16.currPage.get().then(_this16.setFIFFP.bind(_this16));

            return _this16.currPage;
          };

          var currentPage = function currentPage(ref) {
            _this16.currPage = _this16.getSortRef()[_this16.state.sortBy](ref).startAt(_this16.firstItem).limit(_this16.state.pageLimit);

            _this16.currPage.get().then(_this16.setFirstAndLastItemInCurrPage.bind(_this16));

            return _this16.currPage;
          };

          return {
            startAfter: startAfter,
            endBefore: endBefore,
            firstPage: firstPage,
            currentPage: currentPage
          };
        }
      }, {
        key: "setFIFFP",
        value: function setFIFFP(data) {
          this.fIFFP = data.docs[0];
          this.firstItem = data.docs[0];
        }
      }, {
        key: "setFirstAndLastItemInCurrPage",
        value: function setFirstAndLastItemInCurrPage(shot) {
          this.firstItem = shot.docs[0];
          this.lastItem = shot.docs[shot.docs.length - 1];
        }
      }, {
        key: "loadNextPage",
        value: function loadNextPage() {
          var _this17 = this;

          this.currPage.get().then(function (shot) {
            if (shot.docs.length === _this17.state.pageLimit) {
              _this17.setPosition('startAfter');

              _this17.loadList();
            } else {
              _this17.notifier.notify('info', 'Sorry, We do not have more items.');
            }
          });
        }
      }, {
        key: "loadBackPage",
        value: function loadBackPage() {
          var _this18 = this;

          this.currPage.get().then(function (shot) {
            if (shot.docs[0]) {
              if (shot.docs[0].id === _this18.fIFFP.id) {
                _this18.notifier.notify('info', 'This is first page!');
              } else {
                _this18.setPosition('endBefore');

                _this18.loadList();
              }
            } else {
              _this18.notifier.notify('info', 'This is first page!');
            }
          });
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return CollectionsService;
    }();

    CollectionsService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _options_validator__WEBPACK_IMPORTED_MODULE_6__["OptionsValidatior"]
      }];
    };

    CollectionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], CollectionsService);
    /***/
  },

  /***/
  "./src/app/services/options-validator.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/options-validator.ts ***!
    \***********************************************/

  /*! exports provided: OptionsValidatior */

  /***/
  function srcAppServicesOptionsValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionsValidatior", function () {
      return OptionsValidatior;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _config_collections_restrinctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../config/collections-restrinctions */
    "./src/app/config/collections-restrinctions.ts");

    var OptionsValidatior =
    /*#__PURE__*/
    function () {
      function OptionsValidatior(notifier, userService, optionsRestriction) {
        _classCallCheck(this, OptionsValidatior);

        this.notifier = notifier;
        this.userService = userService;
        this.optionsRestriction = optionsRestriction;
        this.restrictions = optionsRestriction.getRestrictions();
      }

      _createClass(OptionsValidatior, [{
        key: "searchErrors",
        value: function searchErrors(options) {
          if ((options.collection === 'orders' || options.collection === 'userdata') && !this.uid) {
            this.notifier.notify('warning', 'You are not authorized!');
            return true;
          }

          if (this.restrictions[options.collection] === undefined) {
            this.notifier.notify('warning', 'Collection does not exist!');
            return true;
          }

          if (!this.restrictions[options.collection].category.includes(options.category)) {
            this.notifier.notify('warning', 'Category does not exist!');
            return true;
          }

          if (!this.restrictions[options.collection].position.includes(options.position)) {
            this.notifier.notify('warning', 'Position does not exist!');
            return true;
          }

          if (this.restrictions[options.collection].pageLimit.min > options.pageLimit) {
            this.notifier.notify('warning', 'Page limit is under minimum!');
            return true;
          }

          if (this.restrictions[options.collection].pageLimit.max < options.pageLimit) {
            this.notifier.notify('warning', 'Page limit is more than maximum!');
            return true;
          }

          if (!this.restrictions[options.collection].sortBy.includes(options.sortBy)) {
            this.notifier.notify('warning', 'Page can not be sort by choosen option!');
            return true;
          }

          return false;
        }
      }, {
        key: "uid",
        get: function get() {
          return this.userService.uid;
        }
      }]);

      return OptionsValidatior;
    }();

    OptionsValidatior.ctorParameters = function () {
      return [{
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_1__["NotifierService"]
      }, {
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _config_collections_restrinctions__WEBPACK_IMPORTED_MODULE_4__["OptionsRestrinctions"]
      }];
    };

    OptionsValidatior = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], OptionsValidatior);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/storage */
    "./node_modules/@angular/fire/storage/es2015/index.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(fireBaseAuth, notifier, firebaseStorage, fireStore, routerService) {
        var _this19 = this;

        _classCallCheck(this, UserService);

        this.fireBaseAuth = fireBaseAuth;
        this.notifier = notifier;
        this.firebaseStorage = firebaseStorage;
        this.fireStore = fireStore;
        this.routerService = routerService;
        this.fireBaseAuth.auth.onAuthStateChanged(function (user) {
          if (user) {
            _this19.isHere = true;
            _this19.uid = user.uid;
          } else {
            _this19.isHere = false;
            _this19.uid = null;
          }
        });
      }

      _createClass(UserService, [{
        key: "setUid",
        value: function setUid(data) {
          this.uid = data.user.uid;
          this.isHere = true;
        }
      }, {
        key: "logIn",
        value: function logIn(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this20 = this;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.fireBaseAuth.auth.signInWithEmailAndPassword(email, password).then(function (d) {
                      _this20.notifier.notify('success', 'Successful Log In!');

                      _this20.routerService.navigate([{
                        outlets: {
                          formsOutlet: null
                        }
                      }]).then(function () {
                        return _this20.routerService.navigate(['/catalog']);
                      });
                    }).catch(function (err) {
                      return _this20.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context11.abrupt("return", _context11.sent);

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "createUser",
        value: function createUser(email, password) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this21 = this;

            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password).then(function (d) {
                      _this21.setUid(d);

                      _this21.updateUserData('Unknown', 'Unknown', './../../assets/images/unkItem.svg', 'Unknown').then(function () {
                        _this21.notifier.notify('success', 'Successful create new account!');

                        _this21.routerService.navigate([{
                          outlets: {
                            formsOutlet: 'profile_setup'
                          }
                        }]);
                      });
                    }).catch(function (err) {
                      return _this21.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "logOut",
        value: function logOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var _this22 = this;

            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.fireBaseAuth.auth.signOut().then(function (_) {
                      _this22.notifier.notify('success', 'Successful Log Out!');

                      _this22.routerService.navigate(['/']);
                    }).catch(function (err) {
                      return _this22.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context13.abrupt("return", _context13.sent);

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(username, summary, profileImg, location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this23 = this;

            var info;
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    if (!this.uid) {
                      _context14.next = 10;
                      break;
                    }

                    if (!(typeof profileImg === 'object')) {
                      _context14.next = 5;
                      break;
                    }

                    _context14.next = 4;
                    return this.uploadImage(profileImg);

                  case 4:
                    profileImg = _context14.sent;

                  case 5:
                    username = username.toLocaleLowerCase();
                    info = {
                      id: this.uid,
                      username: username,
                      summary: summary,
                      profileImg: profileImg,
                      location: location
                    };
                    _context14.next = 9;
                    return this.fireStore.doc("userdata/".concat(this.uid)).set(info).catch(function (err) {
                      return _this23.notifier.notify('warning', err.message);
                    });

                  case 9:
                    return _context14.abrupt("return", _context14.sent);

                  case 10:
                    this.notifier.notify('warning', 'You must be registered to edit your data!');
                    return _context14.abrupt("return", null);

                  case 12:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(image) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            var _this24 = this;

            var id, storageRef;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    id = this.fireStore.createId();
                    storageRef = this.firebaseStorage.ref("profileImages/".concat(id));
                    _context15.next = 4;
                    return storageRef.put(image).then(this.getUrl).catch(function (err) {
                      return _this24.notifier.notify('warning', err.message);
                    });

                  case 4:
                    return _context15.abrupt("return", _context15.sent);

                  case 5:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "getUrl",
        value: function getUrl(snapshot) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this25 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return snapshot.ref.getDownloadURL().catch(function (err) {
                      return _this25.notifier.notify('warning', err.message);
                    });

                  case 2:
                    return _context16.abrupt("return", _context16.sent);

                  case 3:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: angular_notifier__WEBPACK_IMPORTED_MODULE_3__["NotifierService"]
      }, {
        type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
    /***/
  },

  /***/
  "./src/app/shared/animations/form.animations.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/animations/form.animations.ts ***!
    \******************************************************/

  /*! exports provided: formFader */

  /***/
  function srcAppSharedAnimationsFormAnimationsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formFader", function () {
      return formFader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var formFader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('formState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateY(0%)',
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-out'))]);
    /***/
  },

  /***/
  "./src/app/shared/animations/item.animation.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/animations/item.animation.ts ***!
    \*****************************************************/

  /*! exports provided: fader */

  /***/
  function srcAppSharedAnimationsItemAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fader", function () {
      return fader;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('itemState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translateX(-25%)',
      opacity: 0
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-out'))]);
    /***/
  },

  /***/
  "./src/app/shared/catalog-list/catalog-list.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/shared/catalog-list/catalog-list.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCatalogListCatalogListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loadingSpinner{\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n\r\n.noAnnouncementsContainer{\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.heightOnMax{\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhdGFsb2ctbGlzdC9jYXRhbG9nLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2F0YWxvZy1saXN0L2NhdGFsb2ctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmdTcGlubmVye1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLm5vQW5ub3VuY2VtZW50c0NvbnRhaW5lcntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmhlaWdodE9uTWF4e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/catalog-list/catalog-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/catalog-list/catalog-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: CatalogListComponent */

  /***/
  function srcAppSharedCatalogListCatalogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CatalogListComponent", function () {
      return CatalogListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CatalogListComponent =
    /*#__PURE__*/
    function () {
      function CatalogListComponent() {
        _classCallCheck(this, CatalogListComponent);
      }

      _createClass(CatalogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CatalogListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CatalogListComponent.prototype, "items", void 0);
    CatalogListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-catalog-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./catalog-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/catalog-list/catalog-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./catalog-list.component.css */
      "./src/app/shared/catalog-list/catalog-list.component.css")).default]
    })], CatalogListComponent);
    /***/
  },

  /***/
  "./src/app/shared/directives/autocomplete.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/directives/autocomplete.directive.ts ***!
    \*************************************************************/

  /*! exports provided: AutocompleteDirective */

  /***/
  function srcAppSharedDirectivesAutocompleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteDirective", function () {
      return AutocompleteDirective;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var AutocompleteDirective =
    /*#__PURE__*/
    function () {
      function AutocompleteDirective(el, mapsAPILoader, control) {
        var _this26 = this;

        _classCallCheck(this, AutocompleteDirective);

        this.el = el;
        this.mapsAPILoader = mapsAPILoader;
        this.control = control;
        this.options = {
          types: ['address'],
          componentRestrictions: {
            country: 'bg'
          }
        };
        mapsAPILoader.load().then(function () {
          _this26.autocomplete = new google.maps.places.Autocomplete(_this26.el.nativeElement, _this26.options);
        });
      }

      _createClass(AutocompleteDirective, [{
        key: "onKeyPress",
        value: function onKeyPress() {
          this.autocomplete.addListener('place_changed', this.setNewPlace.bind(this));
        }
      }, {
        key: "setNewPlace",
        value: function setNewPlace() {
          var place = this.autocomplete.getPlace();
          this.control.control.setValue(place.formatted_address);
        }
      }]);

      return AutocompleteDirective;
    }();

    AutocompleteDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress')], AutocompleteDirective.prototype, "onKeyPress", null);
    AutocompleteDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appAutocomplete]'
    })], AutocompleteDirective);
    /***/
  },

  /***/
  "./src/app/shared/item/item.component.css":
  /*!************************************************!*\
    !*** ./src/app/shared/item/item.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedItemItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".price{\r\n    margin-top: 11%;\r\n}\r\n\r\n.item-img{\r\n    width: 100%;\r\n    min-width: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2l0ZW0vaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByaWNle1xyXG4gICAgbWFyZ2luLXRvcDogMTElO1xyXG59XHJcblxyXG4uaXRlbS1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi13aWR0aDogNTBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/item/item.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/item/item.component.ts ***!
    \***********************************************/

  /*! exports provided: ItemComponent */

  /***/
  function srcAppSharedItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemComponent", function () {
      return ItemComponent;
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


    var _animations_item_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations/item.animation */
    "./src/app/shared/animations/item.animation.ts");

    var ItemComponent =
    /*#__PURE__*/
    function () {
      function ItemComponent(router) {
        _classCallCheck(this, ItemComponent);

        this.router = router;
      }

      _createClass(ItemComponent, [{
        key: "loadDetails",
        value: function loadDetails() {
          this.router.navigate([{
            outlets: {
              formsOutlet: ['item_details', this.item.id, this.item.creatorUid]
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemComponent;
    }();

    ItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemComponent.prototype, "item", void 0);
    ItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/item/item.component.html")).default,
      animations: [_animations_item_animation__WEBPACK_IMPORTED_MODULE_3__["fader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item.component.css */
      "./src/app/shared/item/item.component.css")).default]
    })], ItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/items-counter/items-counter.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/shared/items-counter/items-counter.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedItemsCounterItemsCounterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pdGVtcy1jb3VudGVyL2l0ZW1zLWNvdW50ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/items-counter/items-counter.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/items-counter/items-counter.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ItemsCounterComponent */

  /***/
  function srcAppSharedItemsCounterItemsCounterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemsCounterComponent", function () {
      return ItemsCounterComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var ItemsCounterComponent =
    /*#__PURE__*/
    function () {
      function ItemsCounterComponent(collService, fb) {
        _classCallCheck(this, ItemsCounterComponent);

        this.collService = collService;
        this.fb = fb;
        this.pageLimitForm = fb.group({
          pageLimit: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(ItemsCounterComponent, [{
        key: "handleChange",
        value: function handleChange() {
          var pageLimit = Number(this.pageLimitForm.get('pageLimit').value);
          this.collService.setPageLimit(pageLimit);
          this.collService.setPosition('currentPage');
          this.collService.loadList();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ItemsCounterComponent;
    }();

    ItemsCounterComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_3__["CollectionsService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    ItemsCounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-items-counter',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./items-counter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/items-counter/items-counter.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./items-counter.component.css */
      "./src/app/shared/items-counter/items-counter.component.css")).default]
    })], ItemsCounterComponent);
    /***/
  },

  /***/
  "./src/app/shared/orders-list/orders-list.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/orders-list/orders-list.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedOrdersListOrdersListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loadingSpinner{\r\n    width: 50%;\r\n    height: 100%;\r\n  }\r\n  \r\n  .no-data{\r\n    font-weight: 300;\r\n    font-size: 2rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL29yZGVycy1saXN0L29yZGVycy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvb3JkZXJzLWxpc3Qvb3JkZXJzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nU3Bpbm5lcntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1kYXRhe1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/orders-list/orders-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/orders-list/orders-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: OrdersListComponent */

  /***/
  function srcAppSharedOrdersListOrdersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersListComponent", function () {
      return OrdersListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrdersListComponent =
    /*#__PURE__*/
    function () {
      function OrdersListComponent() {
        _classCallCheck(this, OrdersListComponent);
      }

      _createClass(OrdersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrdersListComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OrdersListComponent.prototype, "orders", void 0);
    OrdersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/orders-list/orders-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders-list.component.css */
      "./src/app/shared/orders-list/orders-list.component.css")).default]
    })], OrdersListComponent);
    /***/
  },

  /***/
  "./src/app/shared/page-controller/page-controller.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/page-controller/page-controller.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedPageControllerPageControllerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wYWdlLWNvbnRyb2xsZXIvcGFnZS1jb250cm9sbGVyLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shared/page-controller/page-controller.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/page-controller/page-controller.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PageControllerComponent */

  /***/
  function srcAppSharedPageControllerPageControllerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageControllerComponent", function () {
      return PageControllerComponent;
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


    var src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/collections.service */
    "./src/app/services/collections.service.ts");

    var PageControllerComponent =
    /*#__PURE__*/
    function () {
      function PageControllerComponent(collService) {
        _classCallCheck(this, PageControllerComponent);

        this.collService = collService;
      }

      _createClass(PageControllerComponent, [{
        key: "nextPage",
        value: function nextPage() {
          this.collService.loadNextPage();
        }
      }, {
        key: "backPage",
        value: function backPage() {
          this.collService.loadBackPage();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageControllerComponent;
    }();

    PageControllerComponent.ctorParameters = function () {
      return [{
        type: src_app_services_collections_service__WEBPACK_IMPORTED_MODULE_2__["CollectionsService"]
      }];
    };

    PageControllerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-controller',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page-controller.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page-controller/page-controller.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./page-controller.component.css */
      "./src/app/shared/page-controller/page-controller.component.css")).default]
    })], PageControllerComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/shared/item/item.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-item/user-item.component */
    "./src/app/shared/user-item/user-item.component.ts");
    /* harmony import */


    var _shipment_item_shipment_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shipment-item/shipment-item.component */
    "./src/app/shared/shipment-item/shipment-item.component.ts");
    /* harmony import */


    var _directives_autocomplete_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directives/autocomplete.directive */
    "./src/app/shared/directives/autocomplete.directive.ts");
    /* harmony import */


    var _catalog_list_catalog_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./catalog-list/catalog-list.component */
    "./src/app/shared/catalog-list/catalog-list.component.ts");
    /* harmony import */


    var _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./orders-list/orders-list.component */
    "./src/app/shared/orders-list/orders-list.component.ts");
    /* harmony import */


    var _page_controller_page_controller_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./page-controller/page-controller.component */
    "./src/app/shared/page-controller/page-controller.component.ts");
    /* harmony import */


    var _items_counter_items_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./items-counter/items-counter.component */
    "./src/app/shared/items-counter/items-counter.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_6__["UserItemComponent"], _shipment_item_shipment_item_component__WEBPACK_IMPORTED_MODULE_7__["ShipmentItemComponent"], _directives_autocomplete_directive__WEBPACK_IMPORTED_MODULE_8__["AutocompleteDirective"], _catalog_list_catalog_list_component__WEBPACK_IMPORTED_MODULE_9__["CatalogListComponent"], _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_10__["OrdersListComponent"], _page_controller_page_controller_component__WEBPACK_IMPORTED_MODULE_11__["PageControllerComponent"], _items_counter_items_counter_component__WEBPACK_IMPORTED_MODULE_12__["ItemsCounterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
      exports: [_item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_6__["UserItemComponent"], _shipment_item_shipment_item_component__WEBPACK_IMPORTED_MODULE_7__["ShipmentItemComponent"], _directives_autocomplete_directive__WEBPACK_IMPORTED_MODULE_8__["AutocompleteDirective"], _catalog_list_catalog_list_component__WEBPACK_IMPORTED_MODULE_9__["CatalogListComponent"], _orders_list_orders_list_component__WEBPACK_IMPORTED_MODULE_10__["OrdersListComponent"], _page_controller_page_controller_component__WEBPACK_IMPORTED_MODULE_11__["PageControllerComponent"], _items_counter_items_counter_component__WEBPACK_IMPORTED_MODULE_12__["ItemsCounterComponent"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/shipment-item/shipment-item.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/shared/shipment-item/shipment-item.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedShipmentItemShipmentItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaGlwbWVudC1pdGVtL3NoaXBtZW50LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/shipment-item/shipment-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/shipment-item/shipment-item.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ShipmentItemComponent */

  /***/
  function srcAppSharedShipmentItemShipmentItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShipmentItemComponent", function () {
      return ShipmentItemComponent;
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


    var _animations_item_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations/item.animation */
    "./src/app/shared/animations/item.animation.ts");

    var ShipmentItemComponent =
    /*#__PURE__*/
    function () {
      function ShipmentItemComponent(router) {
        _classCallCheck(this, ShipmentItemComponent);

        this.router = router;
      }

      _createClass(ShipmentItemComponent, [{
        key: "openShipmentDetails",
        value: function openShipmentDetails() {
          this.router.navigate([{
            outlets: {
              formsOutlet: ['shipments_details', this.shipment.id]
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShipmentItemComponent;
    }();

    ShipmentItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ShipmentItemComponent.prototype, "shipment", void 0);
    ShipmentItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shipment-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shipment-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/shipment-item/shipment-item.component.html")).default,
      animations: [_animations_item_animation__WEBPACK_IMPORTED_MODULE_3__["fader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shipment-item.component.css */
      "./src/app/shared/shipment-item/shipment-item.component.css")).default]
    })], ShipmentItemComponent);
    /***/
  },

  /***/
  "./src/app/shared/user-item/user-item.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/user-item/user-item.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedUserItemUserItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item-img{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3VzZXItaXRlbS91c2VyLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91c2VyLWl0ZW0vdXNlci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/user-item/user-item.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/user-item/user-item.component.ts ***!
    \*********************************************************/

  /*! exports provided: UserItemComponent */

  /***/
  function srcAppSharedUserItemUserItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserItemComponent", function () {
      return UserItemComponent;
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


    var _animations_item_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations/item.animation */
    "./src/app/shared/animations/item.animation.ts");

    var UserItemComponent =
    /*#__PURE__*/
    function () {
      function UserItemComponent(router) {
        _classCallCheck(this, UserItemComponent);

        this.router = router;
      }

      _createClass(UserItemComponent, [{
        key: "openUserDetails",
        value: function openUserDetails() {
          this.router.navigate([{
            outlets: {
              formsOutlet: ['user_details', this.profile.id]
            }
          }]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserItemComponent;
    }();

    UserItemComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UserItemComponent.prototype, "profile", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/user-item/user-item.component.html")).default,
      animations: [_animations_item_animation__WEBPACK_IMPORTED_MODULE_3__["fader"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-item.component.css */
      "./src/app/shared/user-item/user-item.component.css")).default]
    })], UserItemComponent);
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
      production: false,
      firebase: {
        apiKey: 'AIzaSyB_f9BeIed-SFjz6PetHpXbTZNRFBc3caQ',
        authDomain: 'experience-shop.firebaseapp.com',
        databaseURL: 'https://experience-shop.firebaseio.com',
        projectId: 'experience-shop',
        storageBucket: 'experience-shop.appspot.com',
        messagingSenderId: '832283039558',
        appId: '1:832283039558:web:ce0f7eff6059f8b9783747',
        measurementId: 'G-LEHXWG3VY1'
      },
      agm: {
        apiKey: 'AIzaSyAWSZSCMxTRonYQe3L94wvCEd-gJCbrVkk',
        libraries: ['places']
      }
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\Alexandar\Desktop\experience-shop\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map