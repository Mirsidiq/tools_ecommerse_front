import "./products.css"
import Button from "../../components/button/button"
import filterLogo from "../../assets/img/filter.svg"
import product from "../../assets/img/product.png"
import productMobile from "../../assets/img/product-mobile.png"
import nextArrow from "../../assets/img/next-arrow.svg"
import prevArrow from "../../assets/img/prev-arrow.svg"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const Products = (props) => {
  const{basket,setBasket}=props
  const addBasket=(productId)=>{
    fetch(`http://localhost:8080/product/${productId}`)
    .then((res)=>res.json())
    .then(data=>{
      if(data.data.product_id){
        if(!basket.find(e=>e.product_id==data.data.product_id)){
          setBasket([...basket,data.data])
        }
      }
    })
  }
  useEffect(() =>{
  window.localStorage.setItem("basket",JSON.stringify(basket))
  },[basket]);
  const navigate=useNavigate()
  const params=useParams()
  const {id}=params
  const [subcategory,setSubcategory]=useState({})
useEffect(()=>{
  const productsFilters=document.querySelectorAll('.product__cards__filter__item')
  const addActive=()=>{
    for(let item=0;item<productsFilters.length;item++){
      productsFilters[item].addEventListener('click',()=>{
        removeActive()
        let j=item
        productsFilters[j].classList.add('text-dark')
      })
    }
  }
  const removeActive=()=>{
    for(let item=0;item<productsFilters.length;item++){
      productsFilters[item].classList.remove('text-dark')
    }
  }
  addActive()
},[])
useEffect(()=>{
  fetch(`http://localhost:8080/subcategory/${id}`)
  .then(res=>res.json())
  .then(data=>setSubcategory(data.data))
},[])
  return <>
  <div className="products py-5 md:py-8">
    <div className="container">
      {
        subcategory.name ? 
        <>
         <h2 className="products__title">{subcategory && subcategory.name}</h2>
        <div className="products__filter__toggle w-full py-3 mt-8">
          <img src={filterLogo} alt="filter logo" />
          <span className="products__filter__toggle__txt ms-2 font-serif font-medium text-inner text-dark">Фильтры</span>
        </div>
      <div className="products__inner flex justify-between mt-4 lg:mt-10">
        <div className="products__filter p-4 me-4">
          <form className="product__filter__form" >
            <div className="product__filter__price">
              <h2 className="product__filter__title text-inner text-extra-dark font-serif font-bold">Цена</h2>
              <div className="product__filter__inputs flex justify-between mt-3">
              <input type="number" className="product__filter__input text-inner font-serif font-medium py-3 px-4" placeholder="1000"  />
              <input type="number" className="product__filter__input text-inner font-serif font-medium py-3 px-4 ms-auto" placeholder="1000"  />
              </div>
            </div>
            <div className="product__filter__brand mt-8">
              <h2 className="product__filter__title text-inner text-extra-dark font-serif font-bold">Бренд</h2>
              <input type="text" className=" my-3 product__filter__search w-full text-inner font-serif font-medium py-3 px-4 ms-auto" placeholder="Поиск"  />
              <div className="products__brands">
                <div className="product__brand inline-flex justify-between">
                <input type="checkbox" name="" id="" className="products__brands__check" />
                <span className="products__brands__name ms-2 text-normal font-serif font-medium">Braer</span>
                </div>
              </div>
            </div>
            <div className="product-line"></div>
            <Button className="product__filter__btn my-3">Применить</Button>
            <Button className="product__filter__btn product__filter__reset__btn my-3">Сбросить</Button>
          </form>
        </div>
        <div className="products__cards">
          <ul className="products__cards__filter flex flex-wrap">
            <li className="product__cards__filter__item font-serif font-medium  text-normal">Популярные</li>   
            <li className="product__cards__filter__item font-serif font-medium  text-normal">Дешевле</li>   
            <li className="product__cards__filter__item font-serif font-medium  text-normal">Дороже</li>   
            <li className="product__cards__filter__item font-serif font-medium  text-normal">По алфавиту</li>    
          </ul>
          <div className=" mt-4 product__cards__wrapper grid grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-5">
        {
          subcategory.products?.length ? 
          subcategory.products.map(item =>(
            <div key={item.product_id} className="product__card">
            <div className="product__card__header">
              <picture className="product__card__img">
                <source media="(min-width:576px)" srcSet={item.thumbnail}/>
                <source media="(min-width:360px)" srcSet={productMobile}/>
                <img src={item.thumbnail} alt="product image" />
              </picture>
            </div>
            <div className="product__card__body">
              <p className="product__card__txt text-normal font-serif font-medium text-dark" onClick={()=>navigate(`/single-product/${item.product_id}`)}>{item.name}</p>
              <span className="product__card__price text-extra-dark">{item.price}</span>
            </div>
            <div className="product__card__footer">
                <Button className="product__card__add" onClick={()=>addBasket(item.product_id)}>В корзину</Button>
            </div>
        </div>
          ))
          :<p className="text-extra-dark text-title font-serif font-bold">Products not found</p>
        }
          </div>
        </div>
      </div>
      <div className="product__card__pagination flex justify-center mt-4">
        <div className="product__pagination__btn inline-flex justify-center items-center"><img src={prevArrow} alt="arrow prev"  /></div>
        <ul className="product__pagination__list flex">
  <li className="product__pagination__item product__pagination__btn text-inner font-serif font-medium text-dark inline-flex justify-center items-center ms-1">1</li>
  <li className="product__pagination__item product__pagination__btn text-inner font-serif font-medium text-dark inline-flex justify-center items-center ms-1">1</li>
  <li className="product__pagination__item product__pagination__btn text-inner font-serif font-medium text-dark inline-flex justify-center items-center ms-1">1</li>
  <li className="product__pagination__item product__pagination__btn text-inner font-serif font-medium text-dark inline-flex justify-center items-center ms-1">1</li>
  <li className="product__pagination__item product__pagination__btn text-inner font-serif font-medium text-dark inline-flex justify-center items-center ms-1">1</li>
        </ul>
        <div className="product__pagination__btn inline-flex justify-center items-center ms-1"><img src={nextArrow} alt="arrow next"  /></div>
      </div>
        </>
        :<p className="text-center text-title font-serif font-bold text-dark">Subcategory not found</p>
      }
     
    </div>
  </div>
  </>;
}
 
export default Products;