import { useEffect, useState } from "react";
import "./contact.css"
const Contact = () => {
  return <>
  <div className="contact py-8">
    <div className="container">
    <h2 className="contact-title">
    Контакты
    </h2>
    <div className="contact-info">
      <p className="text-normal md:text-inner text-dark font-serif address mt-4">Tashkent xadra</p>
      <p className="text-normal md:text-inner text-dark font-serif bus mt-4">Avtobuslar:103,144,13</p>
      <p className="text-normal md:text-inner text-dark font-serif email mt-4">Email:info@stroykastore.ru</p>
    </div>
    </div>
  </div>
  </>
}
 
export default Contact;