import { useGlobalState } from "util/configSwrState";


export default function Home() {
  const {data , mutate} = useGlobalState();
  const onClickPopup = () => {
    mutate('popup',(prev)=> !prev);
  }
  return (
    <div>
      Hello World <br/>
      <button onClick={onClickPopup} style={{background:'black',color:'white', width:'250px',height:'100px',fontSize:'52px'}}>클릭 미</button>
      <h1>{String(data?.popup)}</h1>
    </div>
  )
}
