import $ from 'jquery';
import Backbone from 'backbone';

var ContactData = Backbone.Model.extend ({
      url: 'https://api.backendless.com/v1/data/posts',
      model:post
  });
  export default ContactData;
      
