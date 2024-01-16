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
                                            'data-bs-target="#components-links-module-APICatalogueModule-f1029af24b2580a716b016412baa599c2cd0966997103cd5f31936399b305af6252bf8c118417f87f7fadac90fcfa3462b27f56a91800ec499df347a8196c78a"' : 'data-bs-target="#xs-components-links-module-APICatalogueModule-f1029af24b2580a716b016412baa599c2cd0966997103cd5f31936399b305af6252bf8c118417f87f7fadac90fcfa3462b27f56a91800ec499df347a8196c78a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-APICatalogueModule-f1029af24b2580a716b016412baa599c2cd0966997103cd5f31936399b305af6252bf8c118417f87f7fadac90fcfa3462b27f56a91800ec499df347a8196c78a"' :
                                            'id="xs-components-links-module-APICatalogueModule-f1029af24b2580a716b016412baa599c2cd0966997103cd5f31936399b305af6252bf8c118417f87f7fadac90fcfa3462b27f56a91800ec499df347a8196c78a"' }>
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
                                            'data-bs-target="#components-links-module-AppModule-af9512b3bc63fa18ab6be19cd7260aa4e13511db8947aedd81089bf86b72d9bae39303af2b9e9fa74707870a652f9744b108e91bd9a47be5eb016c1b7d608604"' : 'data-bs-target="#xs-components-links-module-AppModule-af9512b3bc63fa18ab6be19cd7260aa4e13511db8947aedd81089bf86b72d9bae39303af2b9e9fa74707870a652f9744b108e91bd9a47be5eb016c1b7d608604"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-af9512b3bc63fa18ab6be19cd7260aa4e13511db8947aedd81089bf86b72d9bae39303af2b9e9fa74707870a652f9744b108e91bd9a47be5eb016c1b7d608604"' :
                                            'id="xs-components-links-module-AppModule-af9512b3bc63fa18ab6be19cd7260aa4e13511db8947aedd81089bf86b72d9bae39303af2b9e9fa74707870a652f9744b108e91bd9a47be5eb016c1b7d608604"' }>
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
                                            'data-bs-target="#components-links-module-AuthenticationModule-58e4ca5efa9714671ff73289e744dc1189aab5d576d401d466c0615233b30b35c19c7ac333b49624d27d71b6ddd9e694cd3d05380dd9908508874586e7ed9683"' : 'data-bs-target="#xs-components-links-module-AuthenticationModule-58e4ca5efa9714671ff73289e744dc1189aab5d576d401d466c0615233b30b35c19c7ac333b49624d27d71b6ddd9e694cd3d05380dd9908508874586e7ed9683"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthenticationModule-58e4ca5efa9714671ff73289e744dc1189aab5d576d401d466c0615233b30b35c19c7ac333b49624d27d71b6ddd9e694cd3d05380dd9908508874586e7ed9683"' :
                                            'id="xs-components-links-module-AuthenticationModule-58e4ca5efa9714671ff73289e744dc1189aab5d576d401d466c0615233b30b35c19c7ac333b49624d27d71b6ddd9e694cd3d05380dd9908508874586e7ed9683"' }>
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
                                            'data-bs-target="#components-links-module-DashboardModule-646168cfb931ed2c29ef816d98dadf277313a670855ab1c37fb320404ff3c2b37d5cd8da44c517f40a407887ab48585fb3a2597734e8a9aeb4f05ca0b12b8a41"' : 'data-bs-target="#xs-components-links-module-DashboardModule-646168cfb931ed2c29ef816d98dadf277313a670855ab1c37fb320404ff3c2b37d5cd8da44c517f40a407887ab48585fb3a2597734e8a9aeb4f05ca0b12b8a41"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-646168cfb931ed2c29ef816d98dadf277313a670855ab1c37fb320404ff3c2b37d5cd8da44c517f40a407887ab48585fb3a2597734e8a9aeb4f05ca0b12b8a41"' :
                                            'id="xs-components-links-module-DashboardModule-646168cfb931ed2c29ef816d98dadf277313a670855ab1c37fb320404ff3c2b37d5cd8da44c517f40a407887ab48585fb3a2597734e8a9aeb4f05ca0b12b8a41"' }>
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
                                            'data-bs-target="#components-links-module-PagesModule-a70e27cfa8c27320c92921097a9dc83e73c15abc713d80c164e4f8a172bd2a1b0aa12fbc4afc7d8b6aff60a98a3925d23cef05f4ddd5d71b3164833a96d8c94f"' : 'data-bs-target="#xs-components-links-module-PagesModule-a70e27cfa8c27320c92921097a9dc83e73c15abc713d80c164e4f8a172bd2a1b0aa12fbc4afc7d8b6aff60a98a3925d23cef05f4ddd5d71b3164833a96d8c94f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-a70e27cfa8c27320c92921097a9dc83e73c15abc713d80c164e4f8a172bd2a1b0aa12fbc4afc7d8b6aff60a98a3925d23cef05f4ddd5d71b3164833a96d8c94f"' :
                                            'id="xs-components-links-module-PagesModule-a70e27cfa8c27320c92921097a9dc83e73c15abc713d80c164e4f8a172bd2a1b0aa12fbc4afc7d8b6aff60a98a3925d23cef05f4ddd5d71b3164833a96d8c94f"' }>
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
                                            'data-bs-target="#components-links-module-SharedModule-551a3e839f6e15fc06bc766f026906d1113f57cbcdd6a52f90336a842b8bc8ac6754ea4e8ea27bcde74bab42e62db557f21052e7bd6779d02284f6954665851d"' : 'data-bs-target="#xs-components-links-module-SharedModule-551a3e839f6e15fc06bc766f026906d1113f57cbcdd6a52f90336a842b8bc8ac6754ea4e8ea27bcde74bab42e62db557f21052e7bd6779d02284f6954665851d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-551a3e839f6e15fc06bc766f026906d1113f57cbcdd6a52f90336a842b8bc8ac6754ea4e8ea27bcde74bab42e62db557f21052e7bd6779d02284f6954665851d"' :
                                            'id="xs-components-links-module-SharedModule-551a3e839f6e15fc06bc766f026906d1113f57cbcdd6a52f90336a842b8bc8ac6754ea4e8ea27bcde74bab42e62db557f21052e7bd6779d02284f6954665851d"' }>
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
                                            'data-bs-target="#components-links-module-UserModule-43cd39923199c5c4f26fc9820bf05dc77f7484233250f25b9ab3410814faf15081ea16fef6dd7e8453a6ffc6f0e3553edd1e6303e88862c2085ced382de3bdb2"' : 'data-bs-target="#xs-components-links-module-UserModule-43cd39923199c5c4f26fc9820bf05dc77f7484233250f25b9ab3410814faf15081ea16fef6dd7e8453a6ffc6f0e3553edd1e6303e88862c2085ced382de3bdb2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserModule-43cd39923199c5c4f26fc9820bf05dc77f7484233250f25b9ab3410814faf15081ea16fef6dd7e8453a6ffc6f0e3553edd1e6303e88862c2085ced382de3bdb2"' :
                                            'id="xs-components-links-module-UserModule-43cd39923199c5c4f26fc9820bf05dc77f7484233250f25b9ab3410814faf15081ea16fef6dd7e8453a6ffc6f0e3553edd1e6303e88862c2085ced382de3bdb2"' }>
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