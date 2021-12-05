import { Dispatch, SetStateAction } from "react";
import useSWR from "swr";


export const swrState = {
  popup:true,
  popdown:true,
  is:1
};

export type ISwrState= typeof swrState

export type ESwrStateKeys = keyof typeof swrState

export const useGlobalState = () => {
  const { data,mutate,error } = useSWR("swrState",()=>window.swrState);
  return {data, mutate: (key:ESwrStateKeys,value:(prev?:any)=>any) => {
      const state :any = {
        ...window.swrState,
      };
      if(state[key]  != undefined) {
        state[key] = value(state[key]);
        window.swrState = state;
        return mutate();
      } else {
        throw new Error("잘못된 값입니다.")
      }
  },error}
}

export const useInitiateState = (initiateObj:{
  [key:string]: any;
},setstate:Dispatch<SetStateAction<any>>,mutate:(key: ESwrStateKeys, value: (prev?: any) => any)=>void) => { 
    if (typeof window !== 'undefined') {    
        const state : any =  {
        ...window.swrState,
        };
        const [initiateKey] = Object.keys(initiateObj);
        let value = initiateObj[initiateKey]
        state[initiateKey] = value;
        window.swrState = state;
        mutate && mutate(initiateKey as ESwrStateKeys,()=>value);
        setstate && setstate(value)
    }  
}