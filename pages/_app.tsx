import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './Components/Navbar'



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "react-multi-carousel/lib/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Navbar/>
        <ToastContainer/>
    
    <Component {...pageProps} />

    </>
  )
}
