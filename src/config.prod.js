(function (window, angular, undefined) {

    'use strict';

    /**
     * Create a configuration object shared between all modules.
     *
     * @namespace Constant
     * @class config
     */
    angular
        .module('erusurvey.config', [])
        .constant('config', {

            namespace: 'erusurvey',
            analytics: false,
            debug: true,
            appUrlRoot: '/members/secure/account/erusurvey/',
            servicesTimeout: 120000,
            services: {
                dataCapture: '/members/services/sec/touchpoints'
            },
            partials: {
                viewHome: '/assets/members/secure/apps/erusurvey/components/home/view.home.htm',
                partsDir: '/assets/members/secure/apps/erusurvey/components/home/partials/'
            }
        });

})(this, window.angular);