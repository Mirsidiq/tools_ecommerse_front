import "./deliver.css"
import deliverBg from "../../assets/img/deliver-main-bg.png"
import Button from "../../components/button/button";
import CustomInput from "../../components/input/input";
import { useNavigate } from "react-router-dom";
import checkCircle  from "../../assets/img/check-circle.svg";
import { useState,useEffect } from "react";
const Deliver = () => {
  const [basket,setBasket]=useState(JSON.parse(window.localStorage.getItem("basket")) || [])
  const navigate=useNavigate()
  const [message,setMessage]=useState(false)
  const [totalCount,setTotalCount]=useState(1)
  const [totalPrice,setTotalPrice]=useState()
  const [userId,setUserId]=useState()
  const [mail_index,setMail]=useState()
  const [region,setRegion]=useState()
  const [district,setDistrict]=useState()
  const [street,setStreet]=useState()
  const [home,setHome]=useState()
  const [phone,setPhone]=useState()
  const [other_data,setOther]=useState()
  const countTotalOrder=()=>{
    let sum=0
    let totalPrice=0
    for(let item of basket) {
      sum+=item.count
      totalPrice+=item.price*item.count
    }
    setTotalCount(sum)
    setTotalPrice(totalPrice)
} 
const getUserData=()=>{
  fetch("http://localhost:8080/user/profile",{
    headers:{
      token:window.localStorage.getItem("token")
    }
  })
  .then(res=>res.json())
  .then(data=>{
    const {user_id}=data.data
    setUserId(user_id)
  })
  .catch(err=>console.log(err))
}
const getPayment=(e)=>{
  e.preventDefault()
  let loverCasedRegion=region
  loverCasedRegion=loverCasedRegion.toLowerCase()
  fetch("http://localhost:8080/order/address",{
    method:"POST",
    headers:{
      "content-type":"application/json",
      "token":window.localStorage.getItem("token")
    },
    body:JSON.stringify({
      mail_index:mail_index,
      region:loverCasedRegion,
      district:district,
      street:street,
      home:home,
      phone:phone,
      other_data:other_data,
      ref_user:userId
    })
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data)
    if(data.message=="created"){
      return data
    }
  })
  .then(address=>{
    console.log(e.target[0].value)
    const count=totalCount
    const total=totalPrice
    const product=basket.map(item=>[item.product_id,item.count])
    fetch(`http://localhost:8080/order`,{
      method:"POST",
      headers:{
        "content-type":"application/json",
        "token":window.localStorage.getItem("token")
      },
      body:JSON.stringify({
        count,
     total,
     product,
     ref_user:userId,
     ref_address:address.data.address_id,
     isActive:"active"
      })
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  })
  .catch(err=>console.log(err))
}
  useEffect(()=>{
    countTotalOrder()
    window.localStorage.setItem("basket",JSON.stringify(basket))
    getUserData()
  },[basket])
  return <>
  <div className={`deliver ${message ? "hidden" :""} lg:pb-10`}>
    <div className="container">
    <div className="basket-hero relative lg:my-10">
        <img src={deliverBg} alt="basket main img" />
        <h2 className="basket-hero__title">Доставка и оплата</h2>
      </div>
      <div className="deliver__wrapper flex">
        <div className="deliver-left  basket-left">
        <form onSubmit={getPayment}>
            <div className="basket-left__total">
              <h3 className="basket__total__title text-dark text-inner font-serif font-semibold">
              Итого
              </h3>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Количество товара:<span className="basket__total__txt__inner">{totalCount}</span></p>
              <p className="basket__total__txt mt-3 text-dark text-normal font-serif font-medium flex justify-between">Товаров на сумму: <span className="basket__total__txt__inner">{totalPrice} ₽</span></p>
            </div>
            {/* onClick={()=>setMessage(true)} */}
            <div className="basket-left__footer mt-4">
              <Button className="w-full"  type="submit">Оплатить</Button>
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
                <CustomInput className="w-full deliver__user__input mt-2" id={"mail"} type={"number"} placeholder={"123"} value={mail_index} onChange={(e)=>setMail(e.target.value)}/>
              </label>
              <label htmlFor="city" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Город
                <CustomInput className="w-full deliver__user__input mt-2" id={"city"} type={"text"} placeholder={"Tashkent"} value={region} onChange={(e)=>setRegion(e.target.value)} />
              </label>
              <label htmlFor="street" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Округ
                <CustomInput className="w-full deliver__user__input mt-2" id={"street"} type={"text"} placeholder={"mezon"} value={district} onChange={(e)=>setDistrict(e.target.value)}/>
              </label>
              <label htmlFor="home" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              улица
                <CustomInput className="w-full deliver__user__input mt-2" id={"home"} type={"text"} placeholder={"13"} value={street} onChange={(e)=>setStreet(e.target.value)}/>
              </label>
              <label htmlFor="home2" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              дом
                <CustomInput className="w-full deliver__user__input mt-2" id={"home2"} type={"number"} placeholder={"10"} value={home} onChange={(e)=>setHome(e.target.value)}/>
              </label>
              <label htmlFor="phone" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Телефон
                <CustomInput className="w-full deliver__user__input mt-2" id={"phone"} type={"text"} required placeholder={"+998901234567"} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </label>
            </div>
            <label htmlFor="message"className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark mt-4 inline-block">
            Сообщение
            <textarea  id="message" cols="30" style={{"color":"#8B8D92"}} rows="10" className="block w-full border-0 mt-2 outline-0 bg-light py-3 px-4 text-inner font-medium font-serif" placeholder="example:call me at 13.00" value={other_data} onChange={(e)=>setOther(e.target.value)}></textarea>
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