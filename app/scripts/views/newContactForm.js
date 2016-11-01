import $ from 'jquery';
import Backbone from 'backbone';

function contactInfo (fullname,nickname,email,phone) {

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
        const fullname = ContactData.find('#fullname').val();
        const nickname = ContactData.find('#nickname').val();
        const email = ContactData.find('#email').val();
        const phone = ContactData.find('#phone').val();
        console.log(contactForm);
      });
    return contactForm;


}
export default contactInfo;
