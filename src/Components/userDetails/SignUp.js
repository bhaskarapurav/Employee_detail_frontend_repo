import React from "react";
import styles from "./styles/loginStyles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import userAction, { createUser } from "../../actions/userAction";

const SignUP = () => {
  const classes = styles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {createUser} = userAction();
  const [inputs, setInputs] = useState({
    email_id: "",
    password: "",
  });
  const { email_id, password } = inputs;
  const handleChange = (event) => {
    let { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(createUser(inputs));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formStyle}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          name="email_id"
          value={email_id}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={password}
          className="form-control"
          id="exampleInputPassword1"
          required
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success" onChange={handleChange}>
        SignUp!
      </button>
    </form>
  );
};

export default SignUP;
