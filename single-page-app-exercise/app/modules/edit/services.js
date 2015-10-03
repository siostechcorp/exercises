'use strict';

angular.module('singlePageAppExerciseApp')

.factory('$edit', function(){

    // API of factory
    var factory = {

        // Form
        form: {
            template: [
                {
                    type: 'text',
                    model: 'name',
                    label: 'Name',
                    required: true
                },
                {
                    type: 'textarea',
                    model: 'description',
                    label: 'Description',
                    required: true
                },
                {
                    type: 'button',
                    label: 'Reset',
                    class: 'warning',
                    callback: 'edit.form.onReset()',
                    disabled: 'edit.form.name.$pristine'
                },
                {
                    type: 'submit',
                    label: 'OK',
                    class: 'success',
                    disabled: 'edit.form.name.$pristine || edit.form.name.$invalid'
                }
            ]
        }

    };

    return factory;

});