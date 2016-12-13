import $ from 'jquery';
import Backbone from 'backbone';

var Session = Backbone.Model.extend({

    userLogin: function(email, password) {
        $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/login',
            contentType: 'application/json',
            headers: {
                'application-id': '9181EAE8-99E5-1413-FF8F-D416829DB400',
                'secret-key': 'E6286515-2F36-0307-FF15-C42A57B78100',
                'application-type': 'REST'
            },
            data: JSON.stringify({
                login: email,
                password: password
            }),
            success: (response) => {
              this.set(response)
              location.hash = 'newContacts';
              localStorage.setItem('user-token', response['user-token'])
                console.log(response);
            }

        });
    },
    userSignUp: function(email, password) {
        $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/register',
            contentType: 'application/json',
            headers: {
                'application-id': '9181EAE8-99E5-1413-FF8F-D416829DB400',
                'secret-key': 'E6286515-2F36-0307-FF15-C42A57B78100',
                'application-type': 'REST'
            },
            data: JSON.stringify({
                email: email,
                password: password
            }),
            success(response) {
              
            }

        });
    },
    validateEmail: function(email) {
        if(email === '') return false; return true;
    },

    validatePassword: function(password) {
      if(password === '') return false; return true;
    }
});
export default Session;
