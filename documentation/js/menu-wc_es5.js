'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(_this, derived, args) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
      return !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    } catch (e) {
      return false;
    }
  }
  derived = _getPrototypeOf(derived);
  return _possibleConstructorReturn(_this, isNativeReflectConstruct() ? Reflect.construct(derived, args || [], _getPrototypeOf(_this).constructor) : derived.apply(_this, args));
}
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _callSuper(this, _class);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">api-monetization documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/APICatalogueModule.html\" data-type=\"entity-link\" >APICatalogueModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' : 'data-bs-target="#xs-components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' : 'id="xs-components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ApiCatalogueListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApiCatalogueListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ApiDetailComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApiDetailComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/APICatalogueRoutingModule.html\" data-type=\"entity-link\" >APICatalogueRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' : 'data-bs-target="#xs-components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' : 'id="xs-components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationModule.html\" data-type=\"entity-link\" >AuthenticationModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' : 'id="xs-components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginPage</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthenticationRoutingModule.html\" data-type=\"entity-link\" >AuthenticationRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardModule.html\" data-type=\"entity-link\" >DashboardModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' : 'data-bs-target="#xs-components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' : 'id="xs-components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/DashboardComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DashboardComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DashboardRoutingModule.html\" data-type=\"entity-link\" >DashboardRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MaterialModule.html\" data-type=\"entity-link\" >MaterialModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PagesModule.html\" data-type=\"entity-link\" >PagesModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' : 'data-bs-target="#xs-components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' : 'id="xs-components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LandingPage.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LandingPage</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/PagesRoutingModule.html\" data-type=\"entity-link\" >PagesRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' : 'data-bs-target="#xs-components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' : 'id="xs-components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AlertComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AlertComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ApiKeyFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ApiKeyFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ButtonComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ButtonComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FeaturesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FeaturesComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HelpCenterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HelpCenterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeroComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeroComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NavbarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SearchApiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchApiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SidebarComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SidebarComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TableSubscribedApiCostComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TableSubscribedApiCostComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/TableSubscribedApisComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TableSubscribedApisComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserApiUsageComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserApiUsageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserAccountManagementRoutingModule.html\" data-type=\"entity-link\" >UserAccountManagementRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UserModule.html\" data-type=\"entity-link\" >UserModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' : 'data-bs-target="#xs-components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' : 'id="xs-components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BillingComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BillingComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SubscribedApisComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SubscribedApisComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/UserApiKeysComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UserApiKeysComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links"' : 'data-bs-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/AlertComponent.html\" data-type=\"entity-link\" >AlertComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/ApiKeyModalComponent.html\" data-type=\"entity-link\" >ApiKeyModalComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/DocumentationPage.html\" data-type=\"entity-link\" >DocumentationPage</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/InputComponent.html\" data-type=\"entity-link\" >InputComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/PricingPage.html\" data-type=\"entity-link\" >PricingPage</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/Alert.html\" data-type=\"entity-link\" >Alert</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AccountService.html\" data-type=\"entity-link\" >AccountService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AlertService.html\" data-type=\"entity-link\" >AlertService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApiKeyService.html\" data-type=\"entity-link\" >ApiKeyService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApiService.html\" data-type=\"entity-link\" >ApiService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/CacheService.html\" data-type=\"entity-link\" >CacheService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ModalService.html\" data-type=\"entity-link\" >ModalService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RedocService.html\" data-type=\"entity-link\" >RedocService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SidebarService.html\" data-type=\"entity-link\" >SidebarService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SubscriptionService.html\" data-type=\"entity-link\" >SubscriptionService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interceptors-links"' : 'data-bs-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/ErrorInterceptor.html\" data-type=\"entity-link\" >ErrorInterceptor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interceptors/FakeBackendInterceptor.html\" data-type=\"entity-link\" >FakeBackendInterceptor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interceptors/JwtInterceptor.html\" data-type=\"entity-link\" >JwtInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#guards-links"' : 'data-bs-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthGuard.html\" data-type=\"entity-link\" >AuthGuard</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Api.html\" data-type=\"entity-link\" >Api</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ApiKey.html\" data-type=\"entity-link\" >ApiKey</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/LoginForm.html\" data-type=\"entity-link\" >LoginForm</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));