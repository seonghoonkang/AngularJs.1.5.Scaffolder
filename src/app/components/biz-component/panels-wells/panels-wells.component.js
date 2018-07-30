(function () {
    'use strict';
    PanelsWellsController.$inject = [];
    /** @ngInject */
    function PanelsWellsController() {

    }
    var panelsWells = {
        transclude: true,
        bindings: {},
        templateUrl: 'app/components/biz-component/panels-wells/panels-wells.html',
        controller: PanelsWellsController,
        controllerAs: 'panelsWells'
    };
    angular.module('hbcManager').component(
        'panelsWells', panelsWells);
})();
