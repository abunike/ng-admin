export default function httpErrorHandler($rootScope, HttpErrorService) {
    $rootScope.$on("$stateChangeError", function handleError(event, toState, toParams, fromState, fromParams, error) {
    	HttpErrorService.handleError(event, toState, toParams, fromState, fromParams, error);
    });
}

httpErrorHandler.$inject = ['$rootScope','httpErrorService'];
