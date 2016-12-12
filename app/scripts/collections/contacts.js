import $ from 'jquery';
import Contact from '../model/contactData';
import Backbone from 'backbone';

export default Backbone.Collection.extend({
  url: 'https://api.backendless.com/v1/data/contacts',
  model: Contact,
  parse(data) {
    console.log(data.data);
    return data.data
  }

});
