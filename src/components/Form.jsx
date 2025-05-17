import "./Form.css";

function Form() {
  return (
    <div className="main-page-form">
      <h2 className="sign">Sign in</h2>
      <form className="form-1">
        <input type="text" className="username" placeholder="Username" />
        <input type="password" className="password" placeholder="Password" />
        <button type="submit">Sign in</button>
        <div className="forget">
          <span href="#" id="forget-message">Forget Password?</span>
        </div>
      </form>
    </div>
  );
}

export default Form;
