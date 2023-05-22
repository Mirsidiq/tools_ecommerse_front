import "./basket.css"
import Button from "../../components/button/button"
import basketImg from "../../assets/img/basket-main-bg.png"
import basketProduct from "../../assets/img/discount-img__tablet.png"
import { useEffect, useState } from "react"
import Counter from "../../components/counter/counter."
import { useNavigate } from "react-router-dom"
const Basket = (props) => {
  const navigate=useNavigate()
  const {basket,setBasket}=props
  const [totalCount,setTotalCount]=useState(1)
  const [totalPrice,setTotalPrice]=useState()
  const countTotalOrder=()=>{
    let sum=0
    let totalPrice=0
    for(let item of basket) {
      sum+=item.count
      totalPrice+=item.price
    }
    setTotalCount(sum)
    setTotalPrice(totalPrice)
}
const deleteFromBasket=(productId)=>{
  setBasket(basket.filter(item=>item.product_id!=productId))
}
  useEffect(()=>{
    countTotalOrder()
  },[totalCount])
  console.log(totalCount);
  return <>
  <div className="basket lg:pb-20">
    <div className="container">
      <div className="basket-hero relative lg:my-10">
        <img src={basketImg} alt="basket main img" />
        <h2 className="basket-hero__title">Корзина</h2>
      </div>
      <div className="basket__wrapper flex">
      <div className="basket-left">
            <form >
            <div className="basket-left__total">
              <h3 className="basket__total__title text-dark text-inner font-serif font-semibold">
              Итого
              </h3>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Количество товара:<span className="basket__total__txt__inner">{totalCount}</span></p>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Товаров на сумму: <span className="basket__total__txt__inner">{totalPrice} ₽</span></p>
            </div>
            {/* <div className="basket-left__payment mt-4 py-4">
              <h3 className="basket__total__title text-dark text-inner font-serif font-semibold">
              Способ оплаты
              </h3>
              <p className="basket__payment__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Картой <input type="checkbox" className="basket__payment__check" /></p>
              <p className="basket__payment__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Наличными <input type="checkbox" className="basket__payment__check" /></p>
            </div> */}
            <div className="basket-left__footer mt-4">
              <Button className="w-full" onClick={()=>navigate("/deliver")}>Оформить заказ</Button>
            </div>
            </form>
      </div>
      <div className="basket-right ms-4">
          {
            basket.length>0 ?
            basket.map(item=>(
              <div key={item.product_id} className="basket-card flex">
              <div className="basket-card__img__wrapper ">
                <img className="basket-card__img" src={item.thumbnail}/>
              </div>
              <div className="basket-card__left flex p-4">
                <div className="basket-card__content relative">
                  <p className="basket-card__desc text-normal font-serif font-medium text-dark">{item.name}</p>
                  <p className="basket-card__price mt-3">{item.price} ₽</p>
                  <div className="single-product__btn__actions inline-flex bottom-0 absolute">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__delete__btn absolute bottom-0">{item.count} шт</div>
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
            ))
             :
              <p className="text-title text-dark text-center font-serif font-bold">Basket empty</p>
          }
          {/* <div className="basket-card flex">
            <div className="basket-card__img__wrapper ">
              <img className="basket-card__img" src={basketProduct}/>
            </div>
            <div className="basket-card__left flex p-4">
              <div className="basket-card__content relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1 рулон)</p>
                <p className="basket-card__price mt-3">449 ₽</p>
                <div className="single-product__btn__actions inline-flex bottom-0 absolute">
                <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__delete__btn absolute bottom-0">3 шт</div>
                </div>
              </div>
              <div className="basket-card__content ms-4 relative">
                <p className="basket-card__desc text-normal font-serif font-medium text-dark">Код товара: <br /> <span className="basket-card__code">34078988-0047</span></p>
                <div className="single-product__btn__actions inline-flex mt-3">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count basket-card__delete__btn absolute bottom-0">Удалить товар</div>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      </div>
    </div>
  </div>
  </>;
}
 
export default Basket;