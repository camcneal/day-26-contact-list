import $ from 'jquery';
import Backbone from 'backbone';

function userLogin (session) {

    const loginForm = $(`
      <form class="login" >
        <input id="email" type="email" placeholder="Email Address">
        <input id="password" type="password" placeholder="Password">
        <input type="submit" value="Login">
      </form>`);

        loginForm.on('submit', (e) => {
        e.preventDefault();
        const email = loginForm.find('#email').val();
        const password = loginForm.find('#password').val();
        if(session.validateEmail(email) && session.validatePassword(password)){
          session.userLogin(email,password);
        } else {
          alert('email or password invalid');
        }
        location.hash = 'newContacts';
      });
    return loginForm;
}



  export default userLogin;
