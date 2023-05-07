import { useState } from "react";
import "./header.css";
import location from "../../assets/img/location.svg";
import toggleLogo from "../../assets/img/header-toggle.png";
import mobileLogo from "../../assets/img/mobile-logo.png";
import tabletLogo from "../../assets/img/tablet-logo.png";
import mobileBasket from "../../assets/img/basket-mobile.svg";
import searchMobile from "../../assets/img/search-logo.svg";
import basketLogo from "../../assets/img/basket.svg";
import userLogo from "../../assets/img/user.svg";
import cubeLogo from "../../assets/img/cube.svg";
import xmark from "../../assets/img/xmark.png";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "../modal/modal";
import CustomInput from "../input/input";
import Button from "../button/button"
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [checkPassword,setCheckPassword]=useState("")
  const navigate=useNavigate()
  return (
    <>
      <header className="header">
        <div className="header-top py-2">
          <div className="container">
            <div className="header-top__mobile flex justify-between items-center relative md:hidden">
              <div
                className="header-top__mobile__toggle"
                onClick={() => setToggle(!toggle)}
              >
                <img
                  src={toggle ? xmark : toggleLogo}
                  alt="header top toggle logo"
                />
              </div>
              <div className="header-top__mobile__logo mx-3" onClick={()=>navigate("/")}>
                <img src={mobileLogo} alt="header top toggle logo" />
              </div>
              <div className="header-top__mobile__basket">
                <img src={mobileBasket} alt="header top toggle logo" />
              </div>
              <div
                className={`header-top__mobile__menu ${
                  toggle ? "header-top__mobile__menu-active" : ""
                } py-11 absolute w-full overflow-auto`}
              >
                <div className="mobile-line w-full bg-light"></div>
                <div onClick={()=>navigate("/categories")} className="header__catalog__btn bg-primary flex items-center justify-center mt-3 w-full lg:ms-auto">
                  <div className="toggle__lines relative">
                    <span className="toggle__line w-4/12"></span>
                    <span className="toggle__line w-10/12"></span>
                    <span className="toggle__line w-8/12"></span>
                  </div>
                  <span className="header__catalog__txt font-serif text-normal ms-2 font-medium">
                    Каталог
                  </span>
                </div>
                <div className="header-user__action w-full flex items-center justify-center my-3" onClick={()=>setLogin(true)}>
                  <img src={userLogo} alt="user avatar" />
                  <span className="header-user__action__txt text-black font-medium">
                    Профиль
                  </span>
                </div>
                <div className="header-user__action w-full flex items-center justify-center">
                  <img src={cubeLogo} alt="order logo" />
                  <span className="header-user__action__txt text-black font-medium">
                    Заказы
                  </span>
                </div>
                <div className="mobile-line w-full bg-light my-3"></div>
                <ul className="header-bottom__list block py-3 w-full">
                  <li className="header-bottom__item">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Акции
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Строительные материалы
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Керамическая плитка
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Краски
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Сантехника
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Напольные покрытия
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Инструменты
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Обои
                    </a>
                  </li>
                  <li className="header-bottom__item my-3">
                    <a
                      href="#"
                      className="header-bottom__link text-normal font-serif text-black font-medium"
                    >
                      Окна
                    </a>
                  </li>
                </ul>
                <div className="mobile-line w-full bg-light my-3"></div>
                <ul className="header-top__list">
                  <li className="header-top__nav__item">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Бренды
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-0 mt-3">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Доставка
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-0 mt-3">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Возврат
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-0 mt-3">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Документация
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-0 mt-3">
                    <NavLink
                      to={"/contact"}
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-top__tablet hidden md:flex justify-between items-center">
              <div className="header-top__tablet__location flex items-center">
                <img src={location} alt="a location" />
                <span className="text-normal ms-4 font-serif">Москва</span>
              </div>
              <nav className="header-top__nav">
                <ul className=" header-top__list flex justify-between">
                  <li className="header-top__nav__item">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Бренды
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-6">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Доставка
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-6">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Возврат
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-6">
                    <a
                      href="#"
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Документация
                    </a>
                  </li>
                  <li className="header-top__nav__item ms-6">
                    <NavLink
                      to={"/contact"}
                      className="header-top__nav__link text-normal font-serif"
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="header-middle__tablet my-3 lg:my-4 hidden  md:flex justify-between items-center lg:justify-start">
              <img src={tabletLogo} alt="header logo tablet" onClick={()=>navigate("/")} />
              <div onClick={()=>navigate("/categories")} className="header__catalog__btn bg-primary flex items-center justify-center lg:ms-auto">
                <div className="toggle__lines relative">
                  <span className="toggle__line w-4/12"></span>
                  <span className="toggle__line w-10/12"></span>
                  <span className="toggle__line w-8/12"></span>
                </div>
                <span className="header__catalog__txt font-serif text-normal ms-2 font-medium">
                  Каталог
                </span>
              </div>
              <form
                action="#"
                className="header-form ms-4 w-4/12 md:hidden lg:block lg:me-auto"
              >
                <label htmlFor="search" className="header-search-label">
                  <input
                    id="search"
                    type="text"
                    className="header__input w-11/12 font-serif font-normal"
                    placeholder="search"
                  />
                  <img src={searchMobile} alt="search logo" />
                </label>
              </form>
              <div className="header-user__actions inline-flex justify-between items-center">
                <div className="header-user__action inline-flex items-center flex-col" onClick={()=>setLogin(true)}>
                  <img src={userLogo} alt="user avatar" />
                  <span className="header-user__action__txt text-black font-medium">
                    Профиль
                  </span>
                </div>
                <div className="header-user__action inline-flex items-center flex-col">
                  <img src={cubeLogo} alt="order logo" />
                  <span className="header-user__action__txt text-black font-medium">
                    Заказы
                  </span>
                </div>
                <div className="header-user__action inline-flex items-center flex-col">
                  <img src={basketLogo} alt="basket logo" />
                  <span className="header-user__action__txt text-black font-medium">
                    Корзина
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container lg:hidden">
            <div className="header-bottom__mobile">
              <form action="#" className="header-form">
                <label htmlFor="search" className="header-search-label">
                  <input
                    id="search"
                    type="text"
                    className="header__input w-11/12 font-serif font-normal"
                    placeholder="search"
                  />
                  <img src={searchMobile} alt="search logo" />
                </label>
              </form>
            </div>
          </div>
          <div className="header-bottom-actions">
            <div className="container">
              <ul className="header-bottom__list py-3 w-full">
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Акции
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Строительные материалы
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Керамическая плитка
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Краски
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Сантехника
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Напольные покрытия
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Инструменты
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Обои
                  </a>
                </li>
                <li className="header-bottom__item">
                  <a
                    href="#"
                    className="header-bottom__link text-normal font-serif text-black font-medium"
                  >
                    Окна
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {
          setLogin ? <Modal open={login} className={register ? "register":"login"} setOpen={setLogin}>
            {
              register ?<div className="register-inner">
              <h3 className="register__title lg:text-title text-dark font-serif font-semibold text-center">Регистрация</h3>
            <form className="register__form">
          <div className="grid lg:grid-cols-2 gap-4">
              <label htmlFor="username" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
            Имя
                <CustomInput className="w-full deliver__user__input mt-2" id={"username"} type={"text"} placeholder={"example@gmail.com"} required={true}/>
              </label>
            <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
            E-mail
                <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"} placeholder={"example@gmail.com"} required={true}/>
              </label>
              <label htmlFor="password" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
              Новый пароль
                <CustomInput  className="w-full deliver__user__input mt-2" id={"password"} type={"password"} placeholder={"jock1323"} required={true} value={checkPassword}/>
              </label>
              <label htmlFor="password2" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
              Подтверждение пароля
                <CustomInput className="w-full deliver__user__input mt-2" id={"password2"} type={"password"} placeholder={"jock1323"} required={true}/>
              </label>
          </div>
              <Button className="w-full mt-9">Зарегистрироваться</Button>
            </form>
            </div>:<div className="login-inner">
              <h3 className="login__title lg:text-title text-dark font-serif font-semibold text-center">Вход</h3>
            <form className="login__form">
            <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
            E-mail
                <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"} placeholder={"example@gmail.com"} required={true}/>
              </label>
              <label htmlFor="password" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-6 block">
              Пароль
                <CustomInput className="w-full deliver__user__input mt-2" id={"password"} type={"password"} placeholder={"jock1323"} required={true}/>
              </label>
              <Button className="w-full mt-9">Войти</Button>
            </form>
              <Button className="w-full mt-3 create-profile" onClick={()=>setRegister(!register)}>Создать учетную запись</Button>
            </div>
            }
          </Modal>:""
        }
      </header>
    </>
  );
};

export default Header;
