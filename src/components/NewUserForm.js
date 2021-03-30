import React, { useState } from "react";
import '../App.css';
import '../NewUserForm.css';

const NewUserForm = (props) => {
    const formSchema = {
    username: "",
    email: "",
    password: "",
    role: "",
  };

const initialUser = [];
const initialDisabled = true;
    
const [formValues, setFormValues] = useState(formSchema);
const [user, setUser] = useState(initialUser);


const submitForm = (evt) => {
        evt.preventDefault();
        console.log("IT works");
    };

const onChange = (e) => {
        console.log(e.target.name);
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
        console.log(formValues);
      };   

return (
        <div className="form">
            <div className="title">
        <h1>User Sign Up Form</h1>
            </div>
        <div>
        <form>
        <label>
            Username&nbsp;
          <input
            value={formValues.username}
            type="text"
            placeholder="Username"
            name="username"
            onChange={onChange}
          />
        </label>

        <label>
            Email&nbsp;
            <input
                value={formValues.email}
                type="text"
                placeholder="Email"
                name="email"
                onChange={onChange}
            />
        </label>
       
        <label>
            Password&nbsp;
            <input
                value={formValues.password}
                type="text"
                placeholder="Password"
                name="password"
                onChange={onChange}
                />
        </label>
        <h4>Choose One</h4>
        <label className="select">
            Diner&nbsp;
            <input
                value="select"
                type="checkbox"
                name="role"
            />
        </label>

        <label className="select">
            Owner&nbsp;
            <input
                value="select"
                type="checkbox"
                name="role"
            />
        </label>
   
</form>
</div>

    <button className="myButton" type="submit"  onClick={submitForm}>Submit</button>   

</div>  
);
};

export default NewUserForm;