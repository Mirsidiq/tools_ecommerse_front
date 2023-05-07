import "./input.css"
const CustomInput = (props) => {
  return <>
  <input {...props} className={`text-inner font-serif font-medium py-3 px-4 custom__input block ${props?.className}`}/>
  </>;
}
 
export default CustomInput;