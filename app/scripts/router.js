import $ from 'jquery';
import Backbone from 'backbone';
import logins from './views/loginview';
import newContactForm from './views/newContactForm';
import signUps from './views/signup';
import contactForm from './views/newContactForm';
import Session from './model/session';
import Contact from './collections/contacts';
// let logins = new Logins();
// let contacts = new Contacts();
let session = new Session();
let contacts = new Contacts();

const Router = Backbone.Router.extend({
  routes: {
    '': 'userLogin',
    'newContacts': 'newContactForm',
  },
  userLogin: () => {
    $('.container').empty();
  $('.container').append(logins(session), signUps(session));
},

newContactForm: () => {
  $('.container').empty();
  $('.container').append(contactForm(contact));

}

});
const router = new Router();
export default router;
