(function () {
  'use strict';

  angular
    .module('hbcManager')
    .config(toastrConfig)
    .config(translateConfig);

  /** @ngInject */
  function toastrConfig($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
  }

  /** @ngInject */
  function translateConfig($translateProvider) {
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    $translateProvider.useStaticFilesLoader({
      prefix: '/assets/i18n/lang-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('ko');
  }

})();
