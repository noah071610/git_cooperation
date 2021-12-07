import useSWR from "swr";


export const swrState = {
  popup:true,
  popdown:true,
  is:1,
  obj:{a:1,b:2}
} as const;

export type ISwrState= typeof swrState

export type ESwrStateKeys = keyof typeof swrState;

export const useGlobalState = (initialValue?:{
  [key in any]: any;
}) => {
  const { data,mutate,error } = useSWR("swrState",()=>window.swrState);
  if(typeof window !== 'undefined' && initialValue) {
    const swrGlobalState :any = {
      ...window.swrState,
    };
    const initiateKeyList = Object.keys(initialValue);
    for (const key of initiateKeyList) {
      let value :any = initialValue[key];
      swrGlobalState[key] = value;
    }
    window.swrState = swrGlobalState;
  }
  return {data, mutate: (key:ESwrStateKeys,value:(prev?:any)=>any) => {
      const state :any = {
        ...window.swrState,
      };
      if(data && state[key]  != undefined) {
        state[key] = value(data[key]);
        window.swrState = state;
        return mutate();
      } else {
        throw new Error("잘못된 값입니다.")
      }
  },error}
}
// ,mutate:(key: ESwrStateKeys, value: (prev?: any) => any)=>void) 
