import "./deliver.css"
import deliverBg from "../../assets/img/deliver-main-bg.png"
import Button from "../../components/button/button";
import CustomInput from "../../components/input/input";
import { useNavigate } from "react-router-dom";
import checkCircle  from "../../assets/img/check-circle.svg";
import { useState } from "react";
const Deliver = () => {
  const navigate=useNavigate()
  const [message,setMessage]=useState(false)
  return <>
  <div className={`deliver ${message ? "hidden" :""} lg:pb-10`}>
    <div className="container">
    <div className="basket-hero relative lg:my-10">
        <img src={deliverBg} alt="basket main img" />
        <h2 className="basket-hero__title">Доставка и оплата</h2>
      </div>
      <div className="deliver__wrapper flex">
        <div className="deliver-left  basket-left">
        <form>
            <div className="basket-left__total">
              <h3 className="basket__total__title text-dark text-inner font-serif font-semibold">
              Итого
              </h3>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Количество товара:<span className="basket__total__txt__inner">2</span></p>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Товаров на сумму: <span className="basket__total__txt__inner">3 160 ₽</span></p>
            </div>
            <div className="basket-left__payment mt-4 py-4">
              <h3 className="basket__total__title text-dark text-inner font-serif font-semibold">
              Способ оплаты
              </h3>
              <p className="basket__payment__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Картой <input type="checkbox" className="basket__payment__check" /></p>
              <p className="basket__payment__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Наличными <input type="checkbox" className="basket__payment__check" /></p>
            </div>
            <div className="basket-left__footer mt-4">
              <Button className="w-full" onClick={()=>setMessage(true)}>Оплатить</Button>
            </div>
            </form>
        </div>
        <div className="deliver-right p-9 lg:ms-4">
            <h3 className="deliver-right__title lg:text-title text-dark font-serif font-semibold">
            Адрес 
            </h3>
            <form action="" className="deliver__user__form mt-6">
            <div className="deliver__user__form__inner grid lg:grid-cols-2 lg:gap-4">
            <label htmlFor="mail" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Почтовый индекс
                <CustomInput className="w-full deliver__user__input mt-2" id={"mail"} type={"number"} placeholder={"123"}/>
              </label>
              <label htmlFor="city" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Город
                <CustomInput className="w-full deliver__user__input mt-2" id={"city"} type={"text"} placeholder={"Tashkent"}/>
              </label>
              <label htmlFor="street" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Улица
                <CustomInput className="w-full deliver__user__input mt-2" id={"street"} type={"text"} placeholder={"mezon"}/>
              </label>
              <label htmlFor="home" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Дом
                <CustomInput className="w-full deliver__user__input mt-2" id={"home"} type={"number"} placeholder={"13"}/>
              </label>
              <label htmlFor="home2" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Подъезд
                <CustomInput className="w-full deliver__user__input mt-2" id={"home2"} type={"number"} placeholder={"10"}/>
              </label>
              <div className="w-full flex justify-between">
              <label htmlFor="floor" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Этаж
                <CustomInput className="w-full deliver__user__input mt-2" id={"floor"} type={"number"} placeholder={"3"}/>
              </label>
              <label htmlFor="room" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark lg:ms-4">
              Квартира
                <CustomInput className="w-full deliver__user__input mt-2" id={"room"} type={"number"} placeholder={"23"}/>
              </label>
              </div>
              <label htmlFor="phone" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Телефон
                <CustomInput className="w-full deliver__user__input mt-2" id={"phone"} type={"text"} required placeholder={"+998901234567"}/>
              </label>
              <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Email
                <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"} required placeholder={"example@gmail.com"}/>
              </label>
            </div>
            <label htmlFor="message"className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-4 inline-block">
            Сообщение
            <textarea  id="message" cols="30" style={{"color":"#8B8D92"}} rows="10" className="block w-full border-0 mt-2 outline-0 bg-light py-3 px-4 text-inner font-medium font-serif" placeholder="example:call me at 13.00"></textarea>
            </label>
            </form>
        </div>
      </div>
    </div>
    <div className={`deliver-success ${message ? "deliver-success-active":""}`}>
        <div className="deliver-success__info text-center">
          <div className="deliver-success__img__wrapper flex justify-center">
          <img src={checkCircle} alt="check image"/>
          </div>
          <h3 className="deliver-success__message text-title text-dark font-serif font-bold mt-1">Спасибо!</h3>
          <p className="deliver-success__desc text-dark text-normal font-serif font-medium mt-2">Ваша заявка принята. Мы свяжемся с вами в ближайшее время</p>
          <Button className="mt-6" onClick={()=>navigate("/")}>Перейти на главную</Button>
        </div>
      </div>
  </div>
  </>;
}
 
export default Deliver;