(function () {
    'use strict';
    LoginController.$inject = ['$log', '$state', '$filter', 'MAIN'];

    /** @ngInject */
    function LoginController($log, $state, $filter, MAIN) {
        var vm = this;
        var translate = $filter('translate');
        vm.placeholder = {
            "id": translate('LOGIN.LABEL.ID'),
            "pw": translate('LOGIN.LABEL.PW')
        }
        $log.info('console log info translate::', translate('LOGIN.BTN.LOGIN'));

        vm.loginInfo = {};
        vm.doLogin = doLogin;

        function doLogin() {
            vm.appName = MAIN.APP_NAME;
            $log.info('account::', vm.loginInfo.account);
            $log.info('secureCode::', vm.loginInfo.secureCode);
            $state.go('main.dashboard');
        }
    }

    angular.module('hbcManager')
        .component('login', {
            transclude: true,
            bindings: {},
            controller: LoginController,
            controllerAs: 'login',
            templateUrl: 'app/components/login/login.html'
        });


})();
