const Button = (props) => {
  return <>
  <button className="text-inner text-extra-dark py-3 px-6 bg-primary" {...props}>{props.children}</button>
  </>;
}
 
export default Button;