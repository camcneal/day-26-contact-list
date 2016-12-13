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
      </form>
       <a class="contactNav" href="#contacts">Contact List</a> `);

       let contactNav = contactForm.find('a');

      contactNav.on('click', (e) => {
        e.preventDefault();
        location.hash = 'contacts';
      });

    contactForm.on('submit', (e) => {
      console.log(store.sessionModel);
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
                'user-token': localStorage.getItem('user-token')
            },
            success(response) {
              this.set(response)
              location.hash = 'newContacts';
              localStorage.setItem('user-token', response['user-token'])
                console.log(response);                alert('Contact added!');
            }
        })
        location.hash = 'contacts';

    })
    return contactForm;



}
export default contactInfo;
