import $ from 'jquery';
import Backbone from 'backbone';

var ContactData = Backbone.Model.extend ({

  newContact: function(fullname,nickname,email,phone){
      $.ajax({
            type: 'POST',
            url: 'https://api.backendless.com/v1/users/register',
            contentType: 'application/json',
            headers: {
              'application-id' : '9181EAE8-99E5-1413-FF8F-D416829DB400',
              'secret-key' : 'E6286515-2F36-0307-FF15-C42A57B78100',
              'application-type' : 'REST'
            },
            data: JSON.stringify({
              email: email,
              password: password
            }),
            success(response) {

            }

      });
    }
  });
  export default ContactData;
