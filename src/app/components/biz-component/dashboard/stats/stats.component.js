(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name izzyposWebApp.directive:adminPosHeader
     * @description
     * # adminPosHeader
     */
    StatesController.$inject = [];
    /** @ngInject */
    function StatesController() {}


    angular.module('hbcManager')
        .component('stats', {
            templateUrl: 'app/components/biz-component/dashboard/stats/stats.html',
            controller: StatesController,
            controllerAs: 'states',
            bindings: {
                'model': '=',
                'comments': '@',
                'number': '@',
                'name': '@',
                'colour': '@',
                'details': '@',
                'type': '@',
                'goto': '@'
            }

        });

})();
