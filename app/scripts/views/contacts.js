import $ from 'jquery';
import Backbone from 'backbone';

import singleContact from './contact';

export default function(contacts, session) {

  let contactsList = $(`<ul class="contact"</ul>`);
  console.log(contacts);
  contacts.on('update', () => {
    console.log('hi');

    contacts.forEach( function(contact, i, arr) {
      console.log(contacts);
      contactsList.append(singleContact(contact));
    });
  });

  return contactsList;
}
