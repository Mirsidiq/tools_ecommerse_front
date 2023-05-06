import "./basket.css"
import Button from "../../components/button/button"
import basketImg from "../../assets/img/basket-main-bg.png"
import basketProduct from "../../assets/img/discount-img__tablet.png"
import { useState } from "react"
const Basket = () => {
  const [count,setCount]=useState(1)
  const inc=()=>setCount(count+1)
  const dec=()=>count>1 ?setCount(count-1):setCount(1)
  return <>
  <div className="basket lg:pb-20">
    <div className="container">
      <div className="basket-hero relative lg:my-10">
        <img src={basketImg} alt="basket main img" />
        <h2 className="basket-hero__title">Корзина</h2>
      </div>
      <div className="basket__wrapper flex">
      <div className="basket-left">
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
              <Button className="w-full">Оформить заказ</Button>
            </div>
      </div>
      <div className="basket-right ms-4">
          <div className="basket-card flex">
            <div className="basket-card__img__wrapper ">
              <img className="basket-card__img" src={basketProduct}/>
            </div>
            <div className="basket-card__left flex p-4">
              <div className="basket-card__content relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</p>
                <p className="basket-card__price mt-3">449 ₽</p>
                <div className="single-product__btn__actions inline-flex bottom-0 absolute">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__increment" onClick={inc}>+</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__count">{count}</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__decrement" onClick={dec}>-</div>
                </div>
              </div>
              <div className="basket-card__content ms-4 relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Код товара: <br /> <span className="basket-card__code">34078988-0047</span></p>
                <div className="single-product__btn__actions inline-flex mt-3">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__delete__btn absolute bottom-0">Удалить товар</div>
                </div>
              </div>
            </div>
          </div>
          <div className="basket-card flex">
            <div className="basket-card__img__wrapper ">
              <img className="basket-card__img" src={basketProduct}/>
            </div>
            <div className="basket-card__left flex p-4">
              <div className="basket-card__content relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</p>
                <p className="basket-card__price mt-3">449 ₽</p>
                <div className="single-product__btn__actions inline-flex bottom-0 absolute">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__increment" onClick={inc}>+</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__count">{count}</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__decrement" onClick={dec}>-</div>
                </div>
              </div>
              <div className="basket-card__content ms-4 relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Код товара: <br /> <span className="basket-card__code">34078988-0047</span></p>
                <div className="single-product__btn__actions inline-flex mt-3">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__delete__btn absolute bottom-0">Удалить товар</div>
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>
    </div>
  </div>
  </>;
}
 
export default Basket;