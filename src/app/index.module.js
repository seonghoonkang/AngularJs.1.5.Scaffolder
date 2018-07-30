(function () {
    'use strict';
    angular.module('ngModules', ['ngCookies', 'ngSanitize', 'ngMessages', 'ngResource']);
    angular.module('uiLibrary', ['ui.router', 'ui.bootstrap', 'angular-loading-bar']);
    angular.module('toolsLibrary', ['toastr', 'pascalprecht.translate']);
    angular.module('hbcManager', ['ngModules', 'uiLibrary', 'toolsLibrary']);

})();
