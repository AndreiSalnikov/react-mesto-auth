import React from 'react';

const Login = () => {
  return (
    <div className={"authentication"}>
      <h2 className={"authentication__title"}>Вход</h2>
      <form className={"authentication__form"}>
        <input type={"email"} className={"authentication__input"} placeholder="Email"/>
        <input type={"password"} className={"authentication__input"} placeholder="Пароль"/>
        <button className={"authentication__button"}>Войти</button>
      </form>
    </div>
  );
};

export default Login;