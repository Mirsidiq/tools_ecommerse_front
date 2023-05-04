import "./singleProduct.css"
import singleProductImg from "../../assets/img/single-product.png"
import Button from "../../components/button/button";
import { useState } from "react";
const SingleProduct = () => {
  let [count,setCount]=useState(1)
  const inc=()=>setCount(count+1)
  const dec=()=>count>1 ?setCount(count-1):setCount(1)
  return <>
    <div className="single-product py-10">
      <div className="container">
        <div className="single-product__top flex justify-between items-center">
            <div className="single-product__top__left">
              <img src={singleProductImg} alt="single product" className="single-product__img"/>
            </div>
            <div className="single-product__top__right p-6">
              <h3 className="single-product__name font-serif font-semibold text-extra-dark lg:text-title">
              Шпатлевка масляно-клеевая 3кг Л-С
              </h3>
              <span className="single-product__price mt-3 font-serif font-semibold text-extra-dark">
              212 ₽
              </span>
              <div className="single-product__btns flex items-center mt-6">
                <Button className="single-product__add">В корзину</Button>
                <div className="single-product__btn__actions ms-3 inline-flex">
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__increment" onClick={inc}>+</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__count">{count}</div>
                  <div className="text-inner text-extra-dark font-serif font-medium inline-flex items-center justify-center single-product__decrement" onClick={dec}>-</div>
                </div>
              </div>
            </div>
        </div>
        <div className="single-product__bottom">
            <h3 className="single-product__desc__title font-serif font-semibold text-extra-dark lg:text-title">
            Описание
            </h3>
            <p className="single-product__desc text-dark font-serif font-normal text-normal mt-5">
            Штукатурка Волма Слой, 30кг
Штукатурка на гипсовой основе для ручного нанесения.

НАЗНАЧЕНИЕ:
Выравнивание оснований в помещениях нормальной влажности перед нанесением декоративного слоя;
Создание ровной поверхности на цементных, цементно-известковых, бетонных, кирпичных, гипсовых и гипсокартонных плоскостях.
ПРЕИМУЩЕСТВА:
Экономичная (расход продукта 8-9 кг на 1 кв.м, не требует покрытия шпаклевкой);
Пластичная;
Слой нанесения от 5 до 60мм;
Можно использовать для создания декоративных поверхностей.

ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ:
Подготовка основания:
Поверхность нужно очистить и просушить. Вещества, ослабляющие сцепление с поверхностью, такие как жир,
пыль и т.п. должны быть удалены.
Температурный режим в помещении должен быть не ниже +5 градусов.
Основания, хорошо впитывающие влагу, предварительно обработать составом «ВОЛМА-Универсал» или
«ВОЛМА-Интерьер». Гладкие (например, бетон) обработать составом «Волма-Контакт», просушить.
Приготовление смеси:
Емкость, в которой будут производить замес, и рабочий инструмент должны быть чистыми и сухими.
В воду комнатной температуры постепенно всыпать смесь из расчета на 1 кг смеси – 0,6-0,65 л воды.
Замешивать строительным миксером или дрелью с насадкой. Смесь должна стать однородной.
Дать отстояться в течение нескольких минут и снова замешать. Раствор можно наносить в течение 20 минут.
Нанесение:
Смесь наносить ручным способом, используя железный шпатель. Разровнять h-образным правилом.
Если состав наносится в два слоя, то на первый до высыхания наносятся насечки, после полного высыхания наносится
второй слой. После схватывания последнего слоя (примерно через 60 минут) правилом трапецией подрезать неровности.
Если в работе использовались маячки, рекомендуется их удалить и заделать оставшиеся углубления.
Для того чтобы загладить поверхность нужно через 10-20 минут после подрезки смочить водой, используя губчатую терку,
и затереть круговыми движениями.
Далее загладить металлическим шпателем.
Для того чтобы поверхность стала глянцевой нужно в течение суток, но не ранее трех часов, повторно смочить поверхность
водой и загладить шпателем.

РЕКОМЕНДАЦИИ:
После окончания штукатурных работ основание рекомендуется прогрунтовать;
Поверхности, которые не будут штукатуриться (пол, окна, мебель и т.п.) необходимо закрывать;
Использованные инструмент и емкости необходимо вымыть водой после завершения работ.

МЕРЫ ПРЕДОСТОРОЖНОСТИ:
При работе защищать кожу, глаза и дыхательные пути.
            </p>
        </div>
      </div>
    </div>
  </>;
}
 
export default SingleProduct;