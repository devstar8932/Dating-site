(function () {
    'use strict';

    angular
        .module('app.confirm_email')
        .controller('ConfirmEmailController', ConfirmEmailController);

    ConfirmEmailController.$inject = ['$q', '$stateParams', 'dataservice',
    'logger'];
    /* @ngInject */
    function ConfirmEmailController($q, $stateParams, dataservice, logger) {
        var vm = this;
        vm.title = 'Confirm Email';
        vm.is_confirm_email = false;
        vm.status = false;
        activate();

        function activate() {
            if ($stateParams['confirmed'] && $stateParams['confirmed'] ==
            'yes') {
                vm.is_confirm_email = true;
            } else if($stateParams['confirmed'] && $stateParams['confirmed'] ==
            'no') {
                vm.is_confirm_email = false;
            }
            else {
                vm.status = true;
            }
//            logger.info('Activated Confirm Email View');
        }

    }
})();
