import logo from '../images/logo.svg';
import {Link, Route, Switch} from "react-router-dom";

function Header() {
  return (
    <header className="header">
    <img src={logo} className="header__logo" alt="логотип страницы"/>
      <Switch>
        <Route exact path="/sign-in">
          <Link to="/sign-up" className="header__link">
            Регистрация
          </Link>
        </Route>
        <Route exact path="/sign-up">
          <Link to="/sign-in" className="header__link">
            Войти
          </Link>
        </Route>
        {/*<Route exact path="/">*/}
        {/*  <div className="header__user-info">*/}
        {/*   <p className="header__email">{props.email}</p>*/}
        {/*  <Link to='/sign-in' className="header__link" onClick={props.onSignOut}>Выйти</Link>*/}
        {/*  </div>          */}
        {/*</Route>*/}
      </Switch>
  </header>)
}

export default Header;