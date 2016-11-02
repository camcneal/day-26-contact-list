import $ from 'jqueery';
import Contact from '../model/contactData';

export default Backbone.Collection.extend({
  url: 'https://api.backendless.com/v1/data/contacts',
  model: Contact,
});
