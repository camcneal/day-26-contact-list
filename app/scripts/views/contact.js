import $ from 'jquery';
import store from '../store';


export default function(addressBook) {
console.log(addressBook);
  let singleContact = $(`
    <li>
      Name: ${addressBook.get('fullName')}
      <br>Nickname: ${addressBook.get('nickname')}
      <br>Email: ${addressBook.get('email')}
      <br>Phone: ${addressBook.get('phone')}
    </li>
    `);


  return singleContact;
}
