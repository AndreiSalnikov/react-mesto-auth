import React from 'react';
import {Link} from "react-router-dom";

const Register = () => {
  return (
    <div className={"authentication"}>
      <h2 className={"authentication__title"}>Регистрация</h2>
      <form className={"authentication__form"}>
        <input type={"email"} className={"authentication__input"} placeholder="Email"/>
        <input type={"password"} className={"authentication__input"} placeholder="Пароль"/>
        <button className={"authentication__button"}>Зарегистрироваться</button>
      </form>
      <p className={"authentication__text"}> Уже зарегистрированы?
         <Link to="sign-in" className={"authentication__signup-link"}>
          ㅤВойти
        </Link>
      </p>
    </div>
  );
};

export default Register;