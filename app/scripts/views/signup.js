import $ from 'jquery';
import Backbone from 'backbone';


function userSignUp (session) {

    const signUpForm = $(`
      <form class="signup" >
        <input id="email" type="email" placeholder="email">
        <input id="password" type="password" placeholder="password">
        <input type="submit" value="SignUp">
      </form>`);

signUpForm.on('submit', (e) => {
  e.preventDefault();
//signup notify me if email or password are invalid otherwise save email and password
//login notify me if email or password are invalid otherwise save email/password and log me in
// console.log(userSignUp);
  const email = signUpForm.find('#email').val();
  const password = signUpForm.find('#password').val();
  console.log(password);
  if(session.validateEmail(email) && session.validatePassword(password)){
    session.userSignUp(email,password);
  } else {
    alert('email or password invalid');
  }

  //make sure password works

});
    return signUpForm;
  }

export default userSignUp;
