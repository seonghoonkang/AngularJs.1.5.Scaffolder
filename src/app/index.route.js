(function () {
    'use strict';

    angular
        .module('hbcManager')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/main/home');
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('login', {
                url: '/',
                component: 'login'
            })
            .state('main', {
                url: '/main',
                component: 'main'
            });
    }
})();
