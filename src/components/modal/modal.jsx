import "./modal.css"
import xmark from "../../assets/img/xmark.png"
const Modal = (props) => {
  const {open,setOpen,className}=props
  return <>
 <div className={open ? "modal-active" :"modal"}>
 <img src={xmark} alt="x mark" className="absolute z-10 top-8 right-8" onClick={()=>setOpen(!open)} />
    <div className={`modal__content w-7/12 lg:p-9 ${className}`}>{props.children}</div>
    <div className="modal__overlay fixed w-full h-vh left-0 top-0" onClick={()=>setOpen(!open)}></div>
 </div>
  </>;
}
 
export default Modal;