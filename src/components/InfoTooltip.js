import Popup from "./Popup";
import successLogo from "../images/success-registration.svg"
import unsuccessLogo from "../images/unsuccess-registration.svg"

const InfoTooltip = ({success, onClose, isOpen}) => {
  return (
    <Popup onClose={onClose} isOpen={isOpen}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-button"
          id="closeButton-popupImg"
          title="Закрыть"
          onClick={onClose}/>
        {success ?
          <>
            <img src={successLogo} alt={"Вы успешно зарегистрировались"} className="popup__img-icon"/>
            <h2 className="popup__registration-text">
              Вы успешно зарегистрировались!
            </h2>
          </>
          :
          <>
            <img src={unsuccessLogo} alt={"Регистрация не удалась"} className="popup__img-icon"/>
            <h2 className="popup__registration-text">
              Что-то пошло не так!
              Попробуйте ещё раз.
            </h2>
          </>}
      </div>
    </Popup>);
};

export default InfoTooltip;