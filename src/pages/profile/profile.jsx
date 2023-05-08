import Button from "../../components/button/button";
import CustomInput from "../../components/input/input";
import "./profile.css"
const Profile = () => {
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
            <form action="" className="deliver__user__form mt-6">
            <div className="deliver__user__form__inner grid gap-4 lg:grid-cols-2">
            <label htmlFor="name" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
            Имя
                <CustomInput className="w-full deliver__user__input mt-2" id={"name"} type={"text"} placeholder={"Mirsidiq"}/>
              </label>
              <label htmlFor="lastname" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Фамилия
                <CustomInput className="w-full deliver__user__input mt-2" id={"lastname"} type={"text"} placeholder={"Mirzokirov"}/>
              </label>
              <label htmlFor="birthday" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Дата рождения
                <CustomInput className="w-full deliver__user__input mt-2" id={"birthday"} type={"date"} placeholder={"24.05.1989"}/>
              </label>
              <label htmlFor="phone" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Телефон
                <CustomInput className="w-full deliver__user__input mt-2" id={"phone"} type={"text"}  placeholder={"+998901234567"}/>
              </label>
              <label htmlFor="email" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Email
                <CustomInput className="w-full deliver__user__input mt-2" id={"email"} type={"email"}  placeholder={"example@gmail.com"}/>
              </label>
              <label htmlFor="password" className="w-full deliver__user__form__info text-normal font-serif font-medium text-dark">
              Новый пароль
                <CustomInput className="w-full deliver__user__input mt-2" id={"password"} type={"password"}  placeholder={"jock$1323"}/>
              </label>
            </div>
          <Button className="mt-6">Сохранить</Button>
            </form>
        </div>
      </div>
    </div>
  </>;
}
 
export default Profile;