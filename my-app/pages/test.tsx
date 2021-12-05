import { useEffect, useState } from "react";
import { useInitiateState } from "util/configSwrState";

export default function Test() {
  const [state, setstate] = useState("");
  useEffect(() => {
    useInitiateState({is:5},setstate);
  }, [])
  return (
    <div>
      Hello Test<br/>
      <h1>{state}</h1><br/>
    </div>
  )
}
