import $ from 'jquery';
import Backbone from 'backbone';
import store from '../store';

function contactInfo(contacts) {

    const contactForm = $(`
      <form class="contacts" >
        <input id="fullName" type="text" placeholder="Full Name">
        <input id="nickName" type="text" placeholder="Nickname">
        <input id="email" type="text" placeholder="email">
        <input id="phone" type="text" placeholder="phone">
        <input type="submit" value="Add Contact">
      </form>`);
    contactForm.on('submit', (e) => {
            e.preventDefault();
            let contact = {
              fullName: contactForm.find('#fullName').val(),
              nickname: contactForm.find('#nickName').val(),
              email: contactForm.find('#email').val(),
              phone: contactForm.find('#phone').val(),
            };
            contacts.create(contact, {
                headers: {
                    'application-id': '9181EAE8-99E5-1413-FF8F-D416829DB400',
                    'secret-key': 'E6286515-2F36-0307-FF15-C42A57B78100',
                    'application-type': 'REST',
                    'user-token': store.sessionModel.get('user-token')
                },
                success(response) {
                  console.log();
                    alert('Contact added!');
                }
              })
              location.hash = 'contacts';

            })
        return contactForm;



    }
    export default contactInfo;
