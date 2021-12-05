import { useEffect, useState } from "react";
import { useGlobalState, useInitiateState } from "util/configSwrState";

export default function Test() {
  const [state, setstate] = useState("");
  const {data , mutate} = useGlobalState();  

  useEffect(() => {
    useInitiateState({is:5},setstate,mutate);
  }, [])
  return (
    <div>
      Hello Test<br/>
      <h1>{state}</h1><br/>
      <h2>{data?.is}</h2>
    </div>
  )
}
