(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name izzyposWebApp.directive:adminPosHeader
     * @description
     * # adminPosHeader
     */
    angular.module('hbcManager')
        .component('header', {
            transclude: true,
            controller: function () {},
            bindings: {},
            templateUrl: 'app/components/ui-component/layout/header/header.html'
        });


})();
