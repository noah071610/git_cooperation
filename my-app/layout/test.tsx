import { useGlobalState } from "../pages";


export default function Test() {
  const {data , mutate} = useGlobalState();
  return (
    <div>
      Testing <br/>
      <h1 style={{color:'green'}}>{String(data)}</h1>
    </div>
  )
}
