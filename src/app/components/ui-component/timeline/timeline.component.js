(function () {
    'use strict';

    /**
     * @ngdoc directive
     * @name izzyposWebApp.directive:adminPosHeader
     * @description
     * # adminPosHeader
     */

    TimeLine.$inject = ['$log'];

    /** @ngInject */
    function TimeLine($log) {
        $log.info('TimeLine Controller');
    }

    angular.module('hbcManager')
        .component('timeline', {
            templateUrl: 'app/components/ui-component/timeline/timeline.html',
            controller: TimeLine
        });

})();
