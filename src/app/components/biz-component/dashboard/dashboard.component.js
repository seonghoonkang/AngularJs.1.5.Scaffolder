(function () {
    'use strict';
    DashboardController.$inject = ['$log'];

    /** @ngInject */
    function DashboardController($log) {
        $log.info('Hello HomeController!!');
    }

    var dashboard = {
        transclude: true,
        controller: DashboardController,
        bindings: {},
        templateUrl: 'app/components/biz-component/dashboard/dashboard.html'
    };

    angular.module('hbcManager')
        .component('dashboard', dashboard);

})();
