import "./products.css"
import Button from "../../components/button/button"
import filterLogo from "../../assets/img/filter.svg"
import product from "../../assets/img/product.png"
import productMobile from "../../assets/img/product-mobile.png"
import { useEffect } from "react"
const Products = () => {
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
  return <>
  <div className="products py-5 md:py-8">
    <div className="container">
      <h2 className="products__title">Сухие смеси</h2>
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
          <div className="product__card">
              <div className="product__card__header">
                <picture className="product__card__img">
                  <source media="(min-width:576px)" srcSet={product}/>
                  <source media="(min-width:360px)" srcSet={productMobile}/>
                  <img src={product} alt="product image" />
                </picture>
              </div>
              <div className="product__card__body">
                <p className="product__card__txt text-normal font-serif font-medium text-dark">Шпатлевка масляно-клеевая 3кг Л-С</p>
                <span className="product__card__price text-extra-dark">212 ₽</span>
              </div>
              <div className="product__card__footer">
                  <Button className="product__card__add">В корзину</Button>
              </div>
          </div>
          <div className="product__card">
              <div className="product__card__header">
                <picture className="product__card__img">
                  <source media="(min-width:576px)" srcSet={product}/>
                  <source media="(min-width:360px)" srcSet={productMobile}/>
                  <img src={product} alt="product image" />
                </picture>
              </div>
              <div className="product__card__body">
                <p className="product__card__txt text-normal font-serif font-medium text-dark">Шпатлевка масляно-клеевая 3кг Л-С</p>
                <span className="product__card__price text-extra-dark">212 ₽</span>
              </div>
              <div className="product__card__footer">
                  <Button className="product__card__add">В корзину</Button>
              </div>
          </div>
          <div className="product__card">
              <div className="product__card__header">
                <picture className="product__card__img">
                  <source media="(min-width:576px)" srcSet={product}/>
                  <source media="(min-width:360px)" srcSet={productMobile}/>
                  <img src={product} alt="product image" />
                </picture>
              </div>
              <div className="product__card__body">
                <p className="product__card__txt text-normal font-serif font-medium text-dark">Шпатлевка масляно-клеевая 3кг Л-С</p>
                <span className="product__card__price text-extra-dark">212 ₽</span>
              </div>
              <div className="product__card__footer">
                  <Button className="product__card__add">В корзину</Button>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>;
}
 
export default Products;