(function () {
    ButtonsController.$inject = [];

    function ButtonsController() {

    }
    var buttons = {
        bindings: {},
        controller: ButtonsController,
        controllerAs: 'buttons',
        templateUrl: 'app/components/biz-component/buttons/buttons.html'
    };
    angular.module('hbcManager')
        .component('buttons', buttons);
})();
