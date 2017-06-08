var AuthHttpResponseInterceptor = function ($q, $location, $injector) {
    return {
        response: function (response) {
            if (response.status === 401) {
                console.log("Response 401");
            }
            return response || $q.when(response);
        },
        //Used with ngview not states 
      //  responseError: function (rejection) {
       //     if (rejection.status === 401) {
              
             //   console.log("Response Error 401", rejection);
                //   $location.path('/login').search('returnUrl', $location.path());
                //Have to add $injector to use this response
                responseError: function (rejection) {
                    if (rejection.status === 401) {
                        $injector.get('$state').go('loginRegister', { returnUrl: $location.path() });
                    }
            return $q.reject(rejection);
        }
    }
}

AuthHttpResponseInterceptor.$inject = ['$q', '$location'];