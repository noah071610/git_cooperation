import { AppProps } from 'next/dist/shared/lib/router/router';
import { ISwrState, swrState } from 'util/configSwrState';
import '../styles/globals.css';


declare global {
  export interface Window {
    swrState:ISwrState
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== 'undefined') {
    window.swrState = swrState
  }
  
  return <Component {...pageProps} />
}

export default MyApp
