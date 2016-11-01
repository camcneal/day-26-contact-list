import $ from 'jquery';
import Backbone from 'backbone';

function contactInfo (fullname,nickname,email,phone) {

  let contactForm = $(`
      <form class="contacts" >
        <input type="text" placeholder="Full Name">
        <input type="text" placeholder="Nickname">
        <input type="text" placeholder="email">
        <input type="text" placeholder="phone">
        <input type="button" value="phone">
      </form>`);
      contactForm.on('submit', (e) => {
        e.preventDefault();
        console.log(contactForm);
      });
    return contactForm;


}
export default contactInfo;
