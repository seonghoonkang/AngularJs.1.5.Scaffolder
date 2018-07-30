(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name izzyposWebApp.directive:adminPosHeader
     * @description
     * # adminPosHeader
     */
    function SidebarController() {
        var vm = this;
        vm.selectedMenu = 'dashboard';
        vm.collapseVar = 0;
        vm.multiCollapseVar = 0;

        vm.check = function (x) {

            if (x == vm.collapseVar)
                vm.collapseVar = 0;
            else
                vm.collapseVar = x;
        };

        vm.multiCheck = function (y) {

            if (y == vm.multiCollapseVar)
                vm.multiCollapseVar = 0;
            else
                vm.multiCollapseVar = y;
        };
    }

    angular.module('hbcManager')
        .component('sidebar', {
            templateUrl: 'app/components/ui-component/layout/sidebar/sidebar.html',
            controller: SidebarController,
            controllerAs: 'sidebar'
        });

})();
