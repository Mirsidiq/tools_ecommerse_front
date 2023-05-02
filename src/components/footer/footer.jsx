import "./footer.css"
import footerLogo from "../../assets/img/footer-logo__mobile.png";
import footerLocation from "../../assets/img/footer-location.svg";
import footerEmail from "../../assets/img/footer-email.svg";
import visa from "../../assets/img/visa.svg"
import mastercard from "../../assets/img/mastercard.svg"
import mirLogo from "../../assets/img/mir-logo.svg"
import maestro from "../../assets/img/maestro.svg"
const Footer = () => {
  return <>
    <footer className="footer bg-dark py-8">
      <div className="footer__inner lg:grid lg:grid-cols-2">
      <div className="footer-top  md:flex justify-between items-center lg:block">
            <div className="container">
            <img src={footerLogo} alt="footer logo" className="footer-top__logo" width={180} height={46}/>
          <div className="footer-top__info mt-5">
            <div className="footer-top__info__inner flex">
              <img src={footerEmail} alt="" />
            <p className="footer-top__email text-light text-normal font-serif font-medium ms-2">info@stroykastore.ru</p>
            </div>
            <div className="footer-top__info__inner flex mt-2">
              <img src={footerLocation} alt="" />
            <p className="footer-top__email text-light text-normal font-serif font-medium ms-2">Москва, ул. Камушкина 10</p>
            </div>
          </div>
            </div>
        </div>
        <div className="footer-line mt-5 lg:hidden"></div>
        <div className="footer-middle mt-5 lg:mt-0">
          <div className="container">
            <div className="footer-middle__wrapper grid grid-cols-2  gap-2 md:grid-cols-3 md:gap-3 ">
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Личный кабинет</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Заказы</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Избранное</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Корзина</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Каталог</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Акции</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Бренды</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Контакты</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Стать продавцом</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Доставка</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Возврат</a>
              <a href="#" className="footer-middle__link text-normal font-serif font-medium text-light">Документация</a>
            </div>
          </div>
        </div>
        <div className="footer-line mt-5 lg:hidden"></div>
        <div className="footer-bottom md:hidden mt-5">
          <div className="container">
            <div className="footer-bottom__wrapper flex flex-col md:flex-row md:mt-5 md:justify-between">
              <p className="footer__bottom__txt text-light text-normal font-serif font-medium">© СтройкаСтор</p>
              <div className="footer__bottom__images inline-flex items-center my-3">
                <img src={visa} alt="" className="footer__bottom__img" />
                <img src={mastercard} alt="" className="footer__bottom__img ms-4" />
                <img src={maestro} alt="" className="footer__bottom__img ms-4" />
                <img src={mirLogo} alt="" className="footer__bottom__img ms-4" />
              </div>
              <p className="footer__bottom__txt text-light text-normal font-serif font-medium">Cделано в KRUGLOV STUDIO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom hidden md:flex md:flex-row mt-5">
          <div className="container">
            <div className="footer-bottom__wrapper flex flex-col md:flex-row md:mt-5 md:justify-between">
              <p className="footer__bottom__txt text-light text-normal font-serif font-medium">© СтройкаСтор</p>
              <div className="footer__bottom__images inline-flex items-center">
                <img src={visa} alt="" className="footer__bottom__img" />
                <img src={mastercard} alt="" className="footer__bottom__img ms-4" />
                <img src={maestro} alt="" className="footer__bottom__img ms-4" />
                <img src={mirLogo} alt="" className="footer__bottom__img ms-4" />
              </div>
              <p className="footer__bottom__txt text-light text-normal font-serif font-medium">Cделано в KRUGLOV STUDIO</p>
            </div>
          </div>
        </div>
    </footer>
  </>;
}
 
export default Footer;