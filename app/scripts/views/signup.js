import $ from 'jquery';
import Backbone from 'backbone';

function userSignUp (email,password) {
    const signUpForm = $(`
      <form class="signup" >
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <input type="submit" value="New User SignUp">
      </form>`);

signUpForm.on('submit', (e) => {
  e.preventDefault();
  console.log(userSignUp);
});
    return signUpForm;
  }

export default userSignUp;
