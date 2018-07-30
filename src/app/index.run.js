(function () {
    'use strict';

    angular
        .module('hbcManager')
        .run(runBlock);

    /** @ngInject */
    function runBlock($log, $rootScope, $translate, $transitions, $http) {
        $translate.use('ko');
        // $http.defaults.withCredentials = true;
        $http.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        $http.defaults.headers.common.Accept = 'application/json, text/html';

        $transitions.onStart({}, onStart);
        $transitions.onSuccess({}, onSuccess);

        /** @ngInject */
        function onStart(trans) {
            var $state = trans.router.stateService;
            $log.info("[onStart name]::", $state.current.name);
        }

        /** @ngInject */
        function onSuccess(trans) {
            var $state = trans.router.stateService;
            $state.getCurrentPath().forEach(function (element) {
                $log.info("[onSuccess name]::", element.state.name);
            });

        }
    }

})();
// ui-router login example
// $transitions.onStart( { to: 'auth.**' }, function(trans) {
//     var $state = trans.router.stateService;
//     var MyAuthService = trans.injector().get('MyAuthService');
//     // If the user is not authenticated
//     if (!MyAuthService.isAuthenticated()) {
//       // Then return a promise for a successful login.
//       // The transition will wait for this promise to settle
//       return MyAuthService.authenticate().catch(function() {
//         // If the authenticate() method failed for whatever reason,
//         // redirect to a 'guest' state which doesn't require auth.
//         return $state.target("guest");
//       });
//     }
//   });
