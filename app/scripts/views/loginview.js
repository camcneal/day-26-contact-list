import $ from 'jquery';
import Backbone from 'backbone';

function userLogin () {

    const loginForm = $(`
      <form class="login" >
        <input type="text" placeholder="Email Address">
        <input type="text" placeholder="Password">
        <input type="button" value="Login">
      </form>`);
      loginForm.on('submit', (e) => {
        e.preventDefault();
        console.log(loginForm);
      });
    return loginForm;
}



  export default userLogin;
