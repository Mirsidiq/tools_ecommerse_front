import {json, useNavigate, useParams} from "react-router-dom"
import "./singleProduct.css"
import singleProductImg from "../../assets/img/single-product.png"
import Button from "../../components/button/button";
import productImg from "../../assets/img/popular-product__mobile.png"
import { useEffect, useState } from "react";
import Modal from "../../components/modal/modal";
import Counter from "../../components/counter/counter.";
const SingleProduct = (props) => {
  const { basket, setBasket } = props;
  const [singleProductCounter,setSingleProductCounter]=useState(1)
  const [product,setProduct]=useState({})
  const tempProduct={}
  const [open,setOpen]=useState(false)
  const navigate=useNavigate()
  const params=useParams()
  const {id}=params
  const addBasket = () => {
    if (!basket.find((e) => e.product_id == product.product_id)) {
      const newProduct=Object.assign(tempProduct,product)
      newProduct.count=singleProductCounter
      setBasket([...basket, newProduct]);
    }
}
  useEffect(()=>{
    fetch(`http://localhost:8080/product/${id}/`)
    .then(res=>res.json())
    .then(data=>setProduct(data.data))
  },[])
  useEffect(() => {
    window.localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  return <>
    <div className="single-product py-10">
      <div className="container">
        {
          product.name ?<>
          <div className="single-product__top flex justify-between items-center">
            <div className="single-product__top__left">
              <img src={product.thumbnail} alt="single product" className="single-product__img"/>
            </div>
            <div className="single-product__top__right p-6">
              <h3 className="single-product__name font-serif font-semibold text-extra-dark lg:text-title">
             {product.name}
              </h3>
              <span className="single-product__price mt-3 font-serif font-semibold text-extra-dark">
              {product.price}
              </span>
              <div className="single-product__btns flex items-center mt-6">
                <Button className="single-product__add me-4" onClick={()=>{
                  addBasket()
                  setOpen(true)
                  }}>В корзину</Button>
                <Counter  singleProductCounter={setSingleProductCounter}/>
              </div>
            </div>
        </div>
        <div className="single-product__bottom">
            <h3 className="single-product__desc__title font-serif font-semibold text-extra-dark lg:text-title">
            Описание
            </h3>
            <p className="single-product__desc text-dark font-serif font-normal text-normal mt-5">
            {product.description}
            </p>
</div>
          </> 
          :<p className="text-dark text-center font-serif font-bold text-title">Product not found</p>
        }
        
      </div> 
      <Modal open={open} setOpen={setOpen}>
        <div className="single-product__modal">
          <h3 className="single-product__modal__title lg:text-title text-dark font-serif font-semibold">Товар добавлен в корзину</h3>
          <div className="single-product__modal__body lg:mt-6 flex">
            < img src={product.thumbnail} className="single-product__modal__img"/>
            <div className="single-product__modal__inner__info p-4">
              <p className="single-product__modal__txt text-dark font-serif font-medium text-normal">{product.name}</p>
              <p className="single-product__modal__price mt-3">{product.price} ₽</p>
              <p className="single-product__modal__count mt-3 text-dark font-serif font-medium text-normal">{singleProductCounter} шт</p>
            </div>
          </div>
        </div>
        <div className="single-product__modal__btns flex justify-center mt-6">
          <Button onClick={()=>navigate("/basket")}>Перейти в корзину</Button>
          <Button onClick={()=>setOpen(!open)} className="single-product__modal__btn__continue">Продолжить покупки</Button>
        </div>
      </Modal>
    </div>
  </>;
}
 
export default SingleProduct;