import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../actions";
import "./CreateUser.css";

export const CreateUser = () => {
  const [name, setName] = useState("");
  const [profileName, setprofileName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createUser({
        name: name,
        profileName: profileName,
        email: email,
        city: city,
        mobile: mobile,
      })
    );
    handleReset();
  };
  const handleReset = () => {
    setName("");
    setprofileName("");
    setEmail("");
    setCity("");
    setMobile("");
  };

  return (
    <div className="login">
      <form
        className="login__form"
        onSubmit={(e) => handleSubmit(e)}
        onReset={(e) => handleReset(e)}
      >
        <input
          type="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="profileName"
          placeholder="Profile Name"
          value={profileName}
          onChange={(e) => setprofileName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="mobile"
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="submit"
          className="submit__btn"
          disabled={!name || !email || !city || !profileName || !mobile}
        />
        <input type="reset" className="reset__btn" />
      </form>
    </div>
  );
};
