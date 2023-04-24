import "./header.css"
import location from "../../assets/img/location.svg";
import toggleLogo from "../../assets/img/header-toggle.png";
import mobileLogo from "../../assets/img/mobile-logo.png"
import tabletLogo from "../../assets/img/tablet-logo.png"
import mobileBasket from "../../assets/img/basket-mobile.svg"
import searchMobile from "../../assets/img/search-logo.svg"
import basketLogo from "../../assets/img/basket.svg"
import userLogo from "../../assets/img/user.svg"
import cubeLogo from "../../assets/img/cube.svg"
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top py-2">
          <div className="container">
            <div className="header-top__mobile flex justify-between items-center md:hidden">
            <div className="header-top__mobile__toggle">
              <img src={toggleLogo} alt="header top toggle logo" />
            </div>
            <div className="header-top__mobile__logo mx-3">
              <img src={mobileLogo} alt="header top toggle logo" />
            </div>
            <div className="header-top__mobile__basket">
              <img src={mobileBasket} alt="header top toggle logo" />
            </div>
            </div>
            <div className="header-top__tablet hidden md:flex justify-between items-center">
             <div className="header-top__tablet__location flex items-center">
              <img src={location} alt="a location" />
              <span className="text-normal ms-4 font-serif">Москва</span>
            </div>
            <nav className="header-top__nav">
          <ul className=" header-top__list flex justify-between">
          <li className="header-top__nav__item"><a href="#" className="header-top__nav__link text-normal font-serif">Бренды</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Доставка</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Возврат</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Документация</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Контакты</a></li>
          </ul>
          </nav>
            </div>
            {/* <div className="header-top__location hidden md:visible md:flex">
        <img src={location} alt="a location" />
        <span className="text-normal ms-4 font-serif">Москва</span>
      </div>
      <nav className="header-top__nav flex justify-between">
          <li className="header-top__nav__item"><a href="#" className="header-top__nav__link text-normal font-serif">Бренды</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Доставка</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Возврат</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Документация</a></li>
          <li className="header-top__nav__item ms-6"><a href="#" className="header-top__nav__link text-normal font-serif">Контакты</a></li>
</nav>*/}
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="header-middle__tablet my-3 lg:my-4 hidden  md:flex justify-between items-center lg:justify-start">
                <img src={tabletLogo} alt="header logo tablet" />
                <div className="header__catalog__btn bg-primary flex items-center justify-center lg:ms-auto">
                  <div className="toggle__lines relative">
                    <span className="toggle__line w-4/12"></span>
                    <span className="toggle__line w-10/12"></span>
                    <span className="toggle__line w-8/12"></span>
                  </div>
                  <span className="header__catalog__txt font-serif text-normal ms-2 font-medium">
                  Каталог
                  </span>
                </div>
                <form action="#" className="header-form ms-4 w-4/12 md:hidden lg:block lg:me-auto">
                <label htmlFor="search" className="header-search-label">
                <input id="search" type="text" className="header__input w-11/12 font-serif font-normal" placeholder="search"/>
                <img src={searchMobile} alt="search logo" />
                </label>
            </form>
                <div className="header-user__actions inline-flex justify-between items-center">
                  <div className="header-user__action inline-flex items-center flex-col">
                    <img src={userLogo} alt="user avatar" />
                    <span className="header-user__action__txt text-black font-medium">Профиль</span>
                  </div>
                  <div className="header-user__action inline-flex items-center flex-col">
                    <img src={cubeLogo} alt="order logo" />
                    <span className="header-user__action__txt text-black font-medium">Заказы</span>
                  </div>
                  <div className="header-user__action inline-flex items-center flex-col">
                    <img src={basketLogo} alt="basket logo" />
                    <span className="header-user__action__txt text-black font-medium">Корзина</span>
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
                <input id="search" type="text" className="header__input w-11/12 font-serif font-normal" placeholder="search"/>
                <img src={searchMobile} alt="search logo" />
                </label>
            </form>
          </div>
       </div>
        <div className="header-bottom-actions py-3">
          <div className="container">
              <ul className="header-bottom__list hidden w-full h-6 lg:flex overflow-x-auto">
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Акции</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Строительные материалы</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Керамическая плитка</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Краски</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Сантехника</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Напольные покрытия</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Инструменты</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Обои</a></li>
                <li className="header-bottom__item"><a href="#" className="header-bottom__link text-normal font-serif text-black font-medium">Окна</a></li>
              </ul>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
