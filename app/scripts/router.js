import $ from 'jquery';
import Backbone from 'backbone';
import logins from './views/loginview';
import signUps from './views/signup';
import contactForm from './views/newContactForm';
import Session from './model/session';
import Contacts from './collections/contacts';
import contactList from './views/contacts';
import store from './store';
import singleContact from './views/contact';

// let logins = new Logins();
// let contacts = new Contacts();
let session = new Session();
let contacts = new Contacts();

const Router = Backbone.Router.extend({
    routes: {
        '': 'userLogin',
        'newContacts': 'newContactForm',
        'contacts': 'contacts'
    },
    userLogin: () => {
        $('.container').empty();
        $('.container').append(logins(session), signUps(session));
    },

    newContactForm: () => {
        $('.container').empty();
        if(localStorage.getItem('user-token')){
          console.log('hi');
          $('.container').append(contactForm(contacts))

        } else {
          location.hash = '';
        }


    },

    contacts: () => {
        if(localStorage.getItem('user-token'));
        console.log(session.get('user-token'));
        contacts.fetch({
            headers: {
                'application-id': '9181EAE8-99E5-1413-FF8F-D416829DB400',
                'secret-key': 'E6286515-2F36-0307-FF15-C42A57B78100',
                'application-type': 'REST',
                'Content-Type': 'application/json',
                'user-token': store.sessionModel.get('user-token')
            },
            success(collection, response) {
                console.log('Contacts recieved');
                console.log(collection, response);
            },
            error(response) {
                console.log('Contacts not recieved');
            }
        })

        $('.container').empty();
        $('.container').append(contactList(contacts, session));


    }

});
const router = new Router();
export default router;
