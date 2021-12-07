import Loading from "layout/loading";
import { useGlobalState } from "util/configSwrState";


export default function Home() {
  const {data , mutate} = useGlobalState({is:7,popup:'string'});
  const onClickPopup = () => {
    mutate('popup',()=>'go to bed');
    mutate('is',(prev)=>prev+1);
  }
  console.log(data);
  return (
    <div>
      Hello World <br/>
      <button onClick={onClickPopup} style={{background:'black',color:'white', width:'250px',height:'100px',fontSize:'52px'}}>클릭 미</button>
      <h1>{data?.popup}</h1>
      <Loading/>
    </div>
  )
}
