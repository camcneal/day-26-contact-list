import $ from 'jquery';
import Backbone from 'backbone';
import logins from './views/loginview';
import NewContact from './views/newContactView';
import signUps from './views/signup';
import contacts from './views/newContactView';

// let logins = new Logins();
// let contacts = new Contacts();

const Router = Backbone.Router.extend({
  routes: {
    '': 'userLogin',
    'newContacts': 'newContactForm',
  },
  userLogin: () => {
    $('.container').empty();
  $('.container').append(logins(), signUps());
},

// userLogin: () => {
//   $('.container').empty();
//   $('.container').append(signUps());
// },

// ,userSignUp(fullname,nickname,email,phone)
newContactView: () => {
  $('.container').empty();
  $('.container').append(contacts());
}

});
const router = new Router();
export default router;
