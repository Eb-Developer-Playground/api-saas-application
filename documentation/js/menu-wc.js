'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">api-monetization documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/APICatalogueModule.html" data-type="entity-link" >APICatalogueModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' : 'data-bs-target="#xs-components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' :
                                            'id="xs-components-links-module-APICatalogueModule-f0ceabb3c38650e81a678acec9b44c7d325101bb605466723d4daa03ba64ee1f842c3774187332969942603c787e7717a8f140e808d9cdbca701fa93cc01ee3b"' }>
                                            <li class="link">
                                                <a href="components/ApiCatalogueListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiCatalogueListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiDetailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/APICatalogueRoutingModule.html" data-type="entity-link" >APICatalogueRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' : 'data-bs-target="#xs-components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' :
                                            'id="xs-components-links-module-AppModule-9da0e71cd95df9cf6ca99271b42330a698116089ded2ac6a34bb295ea179831a2e8a68d86ddc46a2c8059159d44b0c40c83b2c996b31b7e26637c5103245eb23"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link" >AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' :
                                            'id="xs-components-links-module-AuthenticationModule-42f23d2a9c2e16b4ccaaa30a3eb342055f001bfd853e0dc4403075a508790c1b976e8f99ad0627b269aa1623971ac14e9ce9ffa745ac8ad0836d2520c0bd4d0b"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationRoutingModule.html" data-type="entity-link" >AuthenticationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' : 'data-bs-target="#xs-components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' :
                                            'id="xs-components-links-module-DashboardModule-ab73571cab4a09e3c90ae922ba7c11c77fab16ca110cc279c2a6c910b08694a0695d644160276abb0d9870c99fcd20f297c0ce3b0b58a4bf646b38d4e0075685"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' : 'data-bs-target="#xs-components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' :
                                            'id="xs-components-links-module-PagesModule-99b960c6a3c0cc0c6d451042fbe2844edd4eedd03d63ab83937a9ea2574398d77ebef409231c8e3a13248bc3814d2001a201086cc339106832a889e274caddfe"' }>
                                            <li class="link">
                                                <a href="components/LandingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' : 'data-bs-target="#xs-components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' :
                                            'id="xs-components-links-module-SharedModule-681d29acc5ae4e619b2ae51d2574cb21ad5b8674c731b5c92b7b047ea3b4a35e60bda2b5a16c3162e8547fd56ab1f3035d9b018d54140024f942fec37b281a1e"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiKeyFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiKeyFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeaturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeaturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpCenterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpCenterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchApiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchApiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableSubscribedApiCostComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableSubscribedApiCostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableSubscribedApisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableSubscribedApisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserApiUsageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserApiUsageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserAccountManagementRoutingModule.html" data-type="entity-link" >UserAccountManagementRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' : 'data-bs-target="#xs-components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' :
                                            'id="xs-components-links-module-UserModule-5b18ad0cfb1d91858d7b08e22974211d9a8de4c0df570be5166a33cc726ce965954f725a3fc8fb1b6a23203d2cf98e8413056c2e64cbd53e882e0aa06841de69"' }>
                                            <li class="link">
                                                <a href="components/BillingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BillingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubscribedApisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribedApisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserApiKeysComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserApiKeysComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AlertComponent.html" data-type="entity-link" >AlertComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ApiKeyModalComponent.html" data-type="entity-link" >ApiKeyModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DocumentationPage.html" data-type="entity-link" >DocumentationPage</a>
                            </li>
                            <li class="link">
                                <a href="components/InputComponent.html" data-type="entity-link" >InputComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PricingPage.html" data-type="entity-link" >PricingPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Alert.html" data-type="entity-link" >Alert</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AccountService.html" data-type="entity-link" >AccountService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link" >AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiKeyService.html" data-type="entity-link" >ApiKeyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CacheService.html" data-type="entity-link" >CacheService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ModalService.html" data-type="entity-link" >ModalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RedocService.html" data-type="entity-link" >RedocService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarService.html" data-type="entity-link" >SidebarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscriptionService.html" data-type="entity-link" >SubscriptionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link" >ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/FakeBackendInterceptor.html" data-type="entity-link" >FakeBackendInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Api.html" data-type="entity-link" >Api</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ApiKey.html" data-type="entity-link" >ApiKey</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LoginForm.html" data-type="entity-link" >LoginForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});