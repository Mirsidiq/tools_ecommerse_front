import mainBg from "../../assets/img/category-main-bg.jpg"
import categoryImg from "../../assets/img/category-img.png"
import "./categories.css"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
const Categories = () => {
  const navigate=useNavigate()
  const [categories,setCategories]=useState([])
  useEffect(()=>{
    const allCategories=fetch("http://localhost:8080/categories")
    .then(res=>res.json())
    .then(data=>setCategories(data.data))
  },[])
  return <>
  <div className="categories py-5 md:py-8">
    <div className="container">
      <div className="category__bg relative">
        <img src={mainBg} alt="main image" className="category__bg__main"/>
      <h2 className="category__title">Каталог</h2>
      </div>
      <div className="category__cards mt-5 md:mt-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {
        categories.map(item=>(
          <div className="category__card">
          <div className="category__card__header relative flex  flex-col items-center">
            <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">{item.name}</p>
            <img src={item.thumbnail} alt="category card img" className="category__card__img mt-4"  />
          </div>
          <ul className="category__card__body mt-5">
          {
            item.subcategories.map(subcategory =>(
              <li  className="category__card__item"  onClick={()=>navigate(`/products/${subcategory.subcategory_id}`)}>{subcategory.name} {subcategory.subcategory_id}</li>
            ))
          }
          </ul>
      </div>
        ))
      }
        {/* <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div>
        <div className="category__card">
            <div className="category__card__header relative flex  flex-col items-center">
              <p className="category__card__name text-inner mt-3 text-dark font-serif font-medium text-center">Сантехника</p>
              <img src={categoryImg} alt="category card img" className="category__card__img mt-4"  />
            </div>
            <ul className="category__card__body mt-5">
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            <li className="category__card__item">Ванны</li>
            </ul>
        </div> */}
      </div>
    </div>
  </div>
  </>
}
 
export default Categories;