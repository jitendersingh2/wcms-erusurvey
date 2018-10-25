(function(window, angular, undefined) {

    'use strict';

    angular
        .module('erusurvey.services.userInfoService', [

        ])
        .service('userInfoService', [
            '$window',
            '$http',
            '$q',
            'config',
            function($window, $http, $q, config) {

                var serviceUrl = config.services.userInfo;

                this.getUserInfo = function() {

                    var url = serviceUrl;

                    return $http({
                            url: url,
                            method: 'GET',
                            withCredentials: (($window.document.location.hostname||'').indexOf('localhost') < 0)
                        })
                        .then(function(response) {

                            return response.data;

                        }, function(error) {

                            return $q.reject({});
                        });
                };

            }]);

})(this, window.angular);