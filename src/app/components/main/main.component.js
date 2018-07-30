(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name izzyposWebApp.directive:adminPosHeader
     * @description
     * # adminPosHeader
     */

    /** @ngInject */
    var MainController = function ($log) {
        var vm = this;
        vm.awesomeThings = [];
        vm.classAnimation = '';
        vm.creationDate = 1532423437608;
        $log.log(vm.creationDate);
    };

    var main = {
        templateUrl: 'app/components/main/main.html',
        controller: MainController
    };

    angular.module('hbcManager')
        .component('main', main);
})();
