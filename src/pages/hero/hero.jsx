import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";
import mainBg from "../../assets/img/main-bg.png";
import nextArrow from "../../assets/img/next-arrow.svg";
import prevArrow from "../../assets/img/prev-arrow.svg";
import chevronRight from "../../assets/img/chevron-right.svg";
import discountMobile from "../../assets/img/discount-img__mobile.png";
import discountTablet from "../../assets/img/discount-img__tablet.png";
import discountLaptop from "../../assets/img/discount-img__laptop.png";
import discountDesktop from "../../assets/img/discount-img.png";
import popularMobile from "../../assets/img/popular-product__mobile.png";
import popularDesktop from "../../assets/img/popular-product.png";
import categoryImg from "../../assets/img/category-img.png";
import clientAvatar from "../../assets/img/client-avatar.svg";
import doubleQuote from "../../assets/img/quote.svg";
import { useRef, useState } from "react";
import Button from "../../components/button/button";
const Hero = () => {
  const swiperRef = useRef();
  const swiperRefClient=useRef();
  const [getWindow, setWindow] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindow(window.innerWidth);
  });
  const discountSlider = {
    1024: {
      spaceBetween: 16,
    },
    768: {
      spaceBetween: 16,
    },
    576: {
      spaceBetween: 20,
    },
  };
  const clientsSlider = {
    1024: {
      spaceBetween: 16,
      slidesPerView:"auto"
    },
    768: {
      spaceBetween: 16,
      slidesPerView:"auto"
    },
    576:{
      spaceBetween: 16,
      slidesPerView:"auto"
    },
    360: {
      spaceBetween: 20,
      slidesPerView:1
    },
  };
  return (
    <>
      <section className="hero pt-3">
        <div className="container">
          <div className="hero__slider relative">
            <Swiper
              modules={[Navigation, Pagination]}
              pagination={575 >= getWindow ? { clickable: true } : false}
              onBeforeInit={(swiper) => (swiperRef.current = swiper)}
              style={{
                "--swiper-pagination-color": "#FCEC41",
                "--swiper-pagination-bullet-inactive-color": "#8B8D92",
                "--swiper-pagination-bullet-inactive-opacity": "1",
              }}
            >
              <SwiperSlide className="hero__slide">
                <div className="hero__slide__info">
                  <h2 className="hero__slide__title font-serif font-bold">
                    Специальные предложения
                  </h2>
                  <p className="hero__slide__txt font-serif font-normal text-black">
                    на строительные материалы и товары для ремонта
                  </p>
                  <Button id="hero__slide__info__btn">Подробнее</Button>
                </div>
                <img src={mainBg} alt="an image" className="hero__slide__img" />
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
            </Swiper>
            <div
              className={`hero__slider__btns absolute flex items-center ${
                575 >= getWindow ? "hidden" : ""
              }`}
            >
              <button
                className="hero__slider__btn inline-flex justify-center items-center"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={prevArrow} alt="arrow logo" />
              </button>
              <button
                className="hero__slider__btn inline-flex justify-center items-center ms-3"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={nextArrow} alt="arrow logo" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="discount mt-6 md:mt-16 lg:mt-20">
        <div className="container">
          <div className="discount-top flex justify-between items-center">
            <h3 className="discount-top__title lg:text-title text-dark font-semibold font-serif">
              Акции
            </h3>
            <span className="discount__see__more  items-center  md:inline-flex">
              <span className="discount__see__more__txt  me-2 text-extra-dark text-inner font-medium font-serif">
                Все акции
              </span>
              <img
                src={chevronRight}
                alt="chevron right"
                className="discount__see__more__img"
              />
            </span>
          </div>
          <div className="discount-cards mt-4">
            <div className="discount-card__desktop grid grid-cols-2 gap-4">
              <div className="discount-card flex justify-between ">
                <div className="discount-card__header relative">
                  <img
                    src={discountDesktop}
                    alt="product img"
                    className="discount-card__header__img"
                  />
                  <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                    −25%
                  </span>
                </div>
                <div className="discount-card__body">
                  <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </p>
                  <div className="discount__price__wrapper flex mt-3 mb-4">
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </div>
              <div className="discount-card flex justify-between ">
                <div className="discount-card__header relative">
                  <img
                    src={discountDesktop}
                    alt="product img"
                    className="discount-card__header__img"
                  />
                  <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                    −25%
                  </span>
                </div>
                <div className="discount-card__body">
                  <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </p>
                  <div className="discount__price__wrapper flex mt-3 mb-4">
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </div>
              <div className="discount-card flex justify-between ">
                <div className="discount-card__header relative">
                  <img
                    src={discountDesktop}
                    alt="product img"
                    className="discount-card__header__img"
                  />
                  <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                    −25%
                  </span>
                </div>
                <div className="discount-card__body">
                  <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </p>
                  <div className="discount__price__wrapper flex mt-3 mb-4">
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </div>
              <div className="discount-card flex justify-between ">
                <div className="discount-card__header relative">
                  <img
                    src={discountDesktop}
                    alt="product img"
                    className="discount-card__header__img"
                  />
                  <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                    −25%
                  </span>
                </div>
                <div className="discount-card__body">
                  <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </p>
                  <div className="discount__price__wrapper flex mt-3 mb-4">
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="discount-cards__mobile grid grid-cols-2 gap-4">
              <div className="discount-card pb-4">
                <div className="discount-card__header text-center relative">
                  <img
                    src={discountMobile}
                    alt="product img"
                    className="discount-card__header__img"
                  />
                  <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                    −25%
                  </span>
                </div>
                <div className="discount-card__body">
                  <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                    Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                    рулон)
                  </p>
                  <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                    449 ₽
                  </span>
                  <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                    499 ₽
                  </span>
                </div>
                <div className="discount-card__footer mt-2 flex justify-center">
                  <Button>В корзину</Button>
                </div>
              </div>
            </div>
            <span className="discount__see__more discount__see__more__bottom mt-4">
              <span className="discount__see__more__txt  me-2 text-extra-dark text-inner font-medium font-serif">
                Все акции
              </span>
              <img
                src={chevronRight}
                alt="chevron right"
                className="discount__see__more__img"
              />
            </span>
            <Swiper
              className="discount__slider"
              slidesPerView={"auto"}
              breakpoints={discountSlider}
            >
              <SwiperSlide>
                {" "}
                <div className="discount-card">
                  <div className="discount-card__header flex justify-center relative">
                    <picture>
                      <source
                        media="(min-width:1024px)"
                        srcSet={discountLaptop}
                      />
                      <source
                        media="(min-width:768px)"
                        srcSet={discountTablet}
                      />
                      <source
                        media="(min-width:576px)"
                        srcSet={discountMobile}
                      />
                      <img
                        src={discountDesktop}
                        alt="product img"
                        className="discount-card__header__img"
                      />
                    </picture>
                    <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                      −25%
                    </span>
                  </div>
                  <div className="discount-card__body">
                    <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                      Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                      рулон)
                    </p>
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="discount-card">
                  <div className="discount-card__header flex justify-center relative">
                    <picture>
                      <source
                        media="(min-width:1024px)"
                        srcSet={discountLaptop}
                      />
                      <source
                        media="(min-width:768px)"
                        srcSet={discountTablet}
                      />
                      <source
                        media="(min-width:576px)"
                        srcSet={discountMobile}
                      />
                      <img
                        src={discountDesktop}
                        alt="product img"
                        className="discount-card__header__img"
                      />
                    </picture>
                    <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                      −25%
                    </span>
                  </div>
                  <div className="discount-card__body">
                    <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                      Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                      рулон)
                    </p>
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="discount-card">
                  <div className="discount-card__header flex justify-center relative">
                    <picture>
                      <source
                        media="(min-width:1024px)"
                        srcSet={discountLaptop}
                      />
                      <source
                        media="(min-width:768px)"
                        srcSet={discountTablet}
                      />
                      <source
                        media="(min-width:576px)"
                        srcSet={discountMobile}
                      />
                      <img
                        src={discountDesktop}
                        alt="product img"
                        className="discount-card__header__img"
                      />
                    </picture>
                    <span className="discount__number text-center text-normal text-extra-dark font-serif font-medium">
                      −25%
                    </span>
                  </div>
                  <div className="discount-card__body">
                    <p className="discount-card__body__txt text-normal text-extra-dark font-serif font-medium">
                      Рубероид РКП-350 ТУ, размер материала 1 х 10 м (10м2, 1
                      рулон)
                    </p>
                    <span className="discount-card__body__price text-extra-dark font-bold font-serif">
                      449 ₽
                    </span>
                    <span className="discount-card__body__old__price ms-2 font-serif text-normal font-medium">
                      499 ₽
                    </span>
                  </div>
                  <div className="discount-card__footer mt-2">
                    <Button className="discount-card__btn">В корзину</Button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="popular-categories sm:mt-10 md:mt-12 lg:mt-14 xl:mt-20">
        <div className="container">
          <div className="discount-top sm:mb-5 md:mb-4 flex justify-between items-center">
            <h3 className="discount-top__title lg:text-title text-dark font-semibold font-serif">
              Популярные категории
            </h3>
            <span className="discount__see__more  items-center  md:inline-flex">
              <span className="discount__see__more__txt  me-2 text-extra-dark text-inner font-medium font-serif">
                Все категории
              </span>
              <img
                src={chevronRight}
                alt="chevron right"
                className="discount__see__more__img"
              />
            </span>
          </div>
          <div className="popular-categories__wrapper grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-6">
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
            <div className="popular-category relative flex flex-col items-center">
              <span className="popular-category__name text-inner text-dark font-serif font-medium mt-3">
                Душевые
              </span>
              <img
                src={categoryImg}
                alt="category img"
                className="popular-category__img mt-4"
              />
            </div>
          </div>
          <span className="discount__see__more discount__see__more__bottom mt-4">
            <span className="discount__see__more__txt  me-2 text-extra-dark text-inner font-medium font-serif">
              Все категории
            </span>
            <img
              src={chevronRight}
              alt="chevron right"
              className="discount__see__more__img"
            />
          </span>
        </div>
      </section>
      <section className="popular-products sm:py-10 md:py-12 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-20">
        <div className="container">
        <div className="discount-top sm:mb-5 md:mb-4 flex justify-between items-center">
            <h3 className="discount-top__title lg:text-title text-dark font-semibold font-serif">
            Популярные товары
            </h3>
          </div>
          <div className="popular-products__wrapper grid grid-cols-2 gap-5 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
            <div className="popular-product">
              <div className="popular-product__header flex justify-center">
                <picture className="popular-product__img">
                  <source media="(min-width:576px)" srcSet={popularDesktop} />
                  <source media="(min-width:360px)" srcSet={popularMobile} />
                  <img src={popularDesktop} alt="product img" />
                </picture>
              </div>
              <div className="popular-product__body md:p-4 sm:p-2">
                <p className="popular-product__txt  text-normal text-extra-dark font-serif font-medium">
                  Керамогранит Yasmin 598х185 коричневый C-YA4M112D
                </p>
                <span className="popular-product__price text-extra-dark font-bold font-serif mt-3 inline-block">
                  899 ₽
                </span>
              </div>
              <div className="popular-product__footer mt-2 px-2 pb-4 md:px-4">
                <Button className="popular-product__btn">В корзину</Button>
              </div>
            </div>
            <div className="popular-product">
              <div className="popular-product__header flex justify-center">
                <picture className="popular-product__img">
                  <source media="(min-width:576px)" srcSet={popularDesktop} />
                  <source media="(min-width:360px)" srcSet={popularMobile} />
                  <img src={popularDesktop} alt="product img" />
                </picture>
              </div>
              <div className="popular-product__body md:p-4 sm:p-2">
                <p className="popular-product__txt  text-normal text-extra-dark font-serif font-medium">
                  Керамогранит Yasmin 598х185 коричневый C-YA4M112D
                </p>
                <span className="popular-product__price text-extra-dark font-bold font-serif mt-3 inline-block">
                  899 ₽
                </span>
              </div>
              <div className="popular-product__footer mt-2 px-2 pb-4 md:px-4">
                <Button className="popular-product__btn">В корзину</Button>
              </div>
            </div>
            <div className="popular-product">
              <div className="popular-product__header flex justify-center">
                <picture className="popular-product__img">
                  <source media="(min-width:576px)" srcSet={popularDesktop} />
                  <source media="(min-width:360px)" srcSet={popularMobile} />
                  <img src={popularDesktop} alt="product img" />
                </picture>
              </div>
              <div className="popular-product__body md:p-4 sm:p-2">
                <p className="popular-product__txt  text-normal text-extra-dark font-serif font-medium">
                  Керамогранит Yasmin 598х185 коричневый C-YA4M112D
                </p>
                <span className="popular-product__price text-extra-dark font-bold font-serif mt-3 inline-block">
                  899 ₽
                </span>
              </div>
              <div className="popular-product__footer mt-2 px-2 pb-4 md:px-4">
                <Button className="popular-product__btn">В корзину</Button>
              </div>
            </div>
            <div className="popular-product">
              <div className="popular-product__header flex justify-center">
                <picture className="popular-product__img">
                  <source media="(min-width:576px)" srcSet={popularDesktop} />
                  <source media="(min-width:360px)" srcSet={popularMobile} />
                  <img src={popularDesktop} alt="product img" />
                </picture>
              </div>
              <div className="popular-product__body md:p-4 sm:p-2">
                <p className="popular-product__txt  text-normal text-extra-dark font-serif font-medium">
                  Керамогранит Yasmin 598х185 коричневый C-YA4M112D
                </p>
                <span className="popular-product__price text-extra-dark font-bold font-serif mt-3 inline-block">
                  899 ₽
                </span>
              </div>
              <div className="popular-product__footer mt-2 px-2 pb-4 md:px-4">
                <Button className="popular-product__btn">В корзину</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <div className="container">
        <div className="discount-top sm:mb-5 md:mb-4 flex justify-between items-center">
            <h3 className="discount-top__title lg:text-title text-dark font-semibold font-serif">
            Отзывы
            </h3>
            <div
            className="clients-card__slider__btns"
            >
              <button
                className="hero__slider__btn inline-flex justify-center items-center"
                onClick={() => swiperRefClient.current?.slidePrev()}
              >
                <img src={prevArrow} alt="arrow logo" />
              </button>
              <button
                className="hero__slider__btn inline-flex justify-center items-center ms-3"
                onClick={() => swiperRefClient.current?.slideNext()}
              >
                <img src={nextArrow} alt="arrow logo" />
              </button>
            </div>
          </div>
        <Swiper
              className="clients__slider"
              breakpoints={clientsSlider}
              onBeforeInit={(swiper) => (swiperRefClient.current = swiper)}
            >
              <SwiperSlide>
                {" "}
                <div className="client-card mt-4 p-6">
                  <div className="client-card__header flex items-center relative">
                        <img src={clientAvatar} alt="avatar" className="client-card__img" />
                        <p className="client-card__username text-inner font-serif font-bold ms-3 text-dark">Пётр</p>
                        <img src={doubleQuote} alt="double quota" className="client-card__quota__img absolute top-0 right-0" />
                  </div>
                  <div className="client-card__body mt-3">
                        <p className="client-card__txt text-normal font-serif font-normal text-dark">
                        Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽
                        </p>
                  </div>
                  <div className="client-card__footer mt-4">
                        <span className="client-card__date text-normal font-serif">
                        21 марта 2022 г.
                        </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="client-card mt-4 p-6">
                  <div className="client-card__header flex items-center relative">
                        <img src={clientAvatar} alt="avatar" className="client-card__img" />
                        <p className="client-card__username text-inner font-serif font-bold ms-3 text-dark">Пётр</p>
                        <img src={doubleQuote} alt="double quota" className="client-card__quota__img absolute top-0 right-0" />
                  </div>
                  <div className="client-card__body mt-3">
                        <p className="client-card__txt text-normal font-serif font-normal text-dark">
                        Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽
                        </p>
                  </div>
                  <div className="client-card__footer mt-4">
                        <span className="client-card__date text-normal font-serif">
                        21 марта 2022 г.
                        </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="client-card mt-4 p-6">
                  <div className="client-card__header flex items-center relative">
                        <img src={clientAvatar} alt="avatar" className="client-card__img" />
                        <p className="client-card__username text-inner font-serif font-bold ms-3 text-dark">Пётр</p>
                        <img src={doubleQuote} alt="double quota" className="client-card__quota__img absolute top-0 right-0" />
                  </div>
                  <div className="client-card__body mt-3">
                        <p className="client-card__txt text-normal font-serif font-normal text-dark">
                        Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽
                        </p>
                  </div>
                  <div className="client-card__footer mt-4">
                        <span className="client-card__date text-normal font-serif">
                        21 марта 2022 г.
                        </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="client-card mt-4 p-6">
                  <div className="client-card__header flex items-center relative">
                        <img src={clientAvatar} alt="avatar" className="client-card__img" />
                        <p className="client-card__username text-inner font-serif font-bold ms-3 text-dark">Пётр</p>
                        <img src={doubleQuote} alt="double quota" className="client-card__quota__img absolute top-0 right-0" />
                  </div>
                  <div className="client-card__body mt-3">
                        <p className="client-card__txt text-normal font-serif font-normal text-dark">
                        Сегодня 10.03.2022 года, брал перфоратор в аренду в магазине по улице Дорожная. Продавец всё хорошо объяснил, показал и плюс остался бонус в ящике перфоратора это бур нужного мне диаметра, оставленным прежним арендатором. В общем повесил телевизор, где надо было просверлить 4 отверстия, всего за 100 ₽
                        </p>
                  </div>
                  <div className="client-card__footer mt-4">
                        <span className="client-card__date text-normal font-serif">
                        21 марта 2022 г.
                        </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <div
            className="clients-card__slider__btns__bottom mt-4"
            >
              <button
                className="hero__slider__btn inline-flex justify-center items-center"
                onClick={() => swiperRefClient.current?.slidePrev()}
              >
                <img src={prevArrow} alt="arrow logo" />
              </button>
              <button
                className="hero__slider__btn inline-flex justify-center items-center ms-3"
                onClick={() => swiperRefClient.current?.slideNext()}
              >
                <img src={nextArrow} alt="arrow logo" />
              </button>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
