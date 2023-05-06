const Counter = () => {
  const [count,setCount]=useState(1)
  const inc=()=>setCount(count+1)
  const dec=()=>count>1 ?setCount(count-1):setCount(1)
  return <>
  </>;
}
 
export default Counter;