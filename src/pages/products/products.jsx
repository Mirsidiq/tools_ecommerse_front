import "./products.css"
const Products = () => {
  return <>
  <div className="products py-5 md:py-8">
    <div className="container flex justify-between">
        <div className="products__filter p-4">
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
          </form>
        </div>
        <div className="products__cards">
          <div className="products__cards__filter">
                dsfgh
          </div>
          <div className="product__card">
sadsfghjkl;
          </div>
        </div>
    </div>
  </div>
  </>;
}
 
export default Products;