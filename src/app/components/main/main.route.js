(function () {
    'use strict';

    angular
        .module('hbcManager')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/main/home');
        // $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('main.dashboard', {
                url: '/dashboard',
                component: 'dashboard'
            })
            .state('main.panelsWells', {
                url: '/panels-wells',
                component: 'panelsWells'
            }).state('main.buttons', {
                url: '/buttons',
                component: 'buttons'
            });
    }
})();
