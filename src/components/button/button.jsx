import "./button.css"
const Button = (props) => {
  console.log(props);
  return <>
  <button className={`main-btn sm:text-inner text-extra-dark py-3 px-6 bg-primary hover:bg-dark hover:text-light font-serif font-medium ${props?.className}`} id={props?.id}>{props.children}</button>
  </>;
}
 
export default Button;