import $ from 'jquery';
import Backbone from 'backbone';
import logins from './views/loginview';
import newContactForm from './views/newContactForm';
import signUps from './views/signup';
import contacts from './views/newContactForm';
import Session from './model/session';

// let logins = new Logins();
// let contacts = new Contacts();
let session = new Session();

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
  $('.container').append(contacts());

}

});
const router = new Router();
export default router;
