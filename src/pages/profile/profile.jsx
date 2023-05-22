import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import CustomInput from "../../components/input/input";
import "./profile.css"
const Profile = () => {
  const params = useParams();
  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [userId,setUserId]=useState()
  const [hide,setHide]=useState(false)
  const {user}=params
  const getUserData=()=>{
    fetch("http://localhost:8080/user/profile",{
      headers:{
        token:user
      }
    })
    .then(res=>res.json())
    .then(data=>{
      const {user_id,firstname,lastname,email,contact,password}=data.data
      setFirstname(firstname)
      setLastname(lastname)
      setPhone(contact)
      setEmail(email)
      setUserId(user_id)
      setPassword(password)
    })
    .catch(err=>console.log(err))
  }
  const updateData=(e)=>{
    e.preventDefault()
    fetch(`http://localhost:8080/users/${userId}`,{
      method:"PUT",
      headers:{
        "content-type":"application/json",
        "token":window.localStorage.getItem("token")
      },
      body:JSON.stringify(
        {
          firstname: firstname=="" ? undefined : firstname,
          lastname:lastname=="" ? undefined : lastname,
          contact:phone=="" ? undefined : phone,
          email:email=="" ? undefined:email,
          password: password=="" ? undefined :password
        }
      )
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getUserData()
  },[])
  return <>
  <div className="profile lg:py-10">
    <div className="container">
      <h2 className="profile__title text-dark font-serif font-semibold">
      Личный кабинет
      </h2>
    <div className="deliver-right p-9 lg:mt-10">
            <h3 className="deliver-right__title lg:text-title text-dark font-serif font-semibold">
            Личная информация
            </h3>
            <form action="" className="deliver__user__form mt-6" onSubmit={updateData}>
            <div className="deliver__user__form__inner grid gap-4 lg:grid-cols-2">
            <label htmlFor="name" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
            Имя
                <CustomInput className="w-full deliver__user__input mt-2" id={"name"} type={"text"} onChange={(e)=>setFirstname(e.target.value)} value={firstname} placeholder={"Mirsidiq"}/>
              </label>
              <label htmlFor="lastname" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Фамилия
                <CustomInput className="w-full deliver__user__input mt-2" id={"lastname"} type={"text"} onChange={(e)=>setLastname(e.target.value)} value={lastname} placeholder={"lastname"}/>
              </label>
              <label htmlFor="phone" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Телефон
                <CustomInput className="w-full deliver__user__input mt-2" id={"phone"} type={"text"}  onChange={(e)=>setPhone(e.target.value)} value={phone} placeholder={"+998901234567"}/>
              </label>
              <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Email
                <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"}  onChange={(e)=>setEmail(e.target.value)} value={email} placeholder={"example@gmail.com"}/>
              </label>
              <label htmlFor="password" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Новый пароль
                <CustomInput className="w-full deliver__user__input mt-2" id={"password"} type={hide? "text":"password"}  placeholder={"jock$1323"}  onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <span className="text-dark font-serif font-medium text-normal mt-2 inline-block" onClick={()=>setHide(!hide)}>{hide ? "hide password":"show password"}</span>
              </label>
            </div>
          <Button className="mt-6" type="submit">Сохранить</Button>
            </form>
        </div>
      </div>
    </div>
  </>;
}
 
export default Profile;