import $ from 'jquery';
import Backbone from 'backbone';

function contactInfo (contacts) {

  let contactForm = $(`
      <form class="contacts" >
        <input id="fullname" type="text" placeholder="Full Name">
        <input id="nickname" type="text" placeholder="Nickname">
        <input id="email" type="text" placeholder="email">
        <input id="phone" type="text" placeholder="phone">
        <input type="submit" value="ADD Contact">
      </form>`);
      contactForm.on('submit', (e) => {
        e.preventDefault();
        const fullname = contactForm.find('#fullname').val();
        const nickname = contactForm.find('#nickname').val();
        const email = contactForm.find('#email').val();
        const phone = contactForm.find('#phone').val();
        contacts.create({fullname,nickname,email,phone},{

        });
        console.log(contactForm);
      });
    return contactForm;


}
export default contactInfo;
