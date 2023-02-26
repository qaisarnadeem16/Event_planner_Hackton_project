import Head from 'next/head'
import { Inter } from 'next/font/google'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import EventSlider from './Components/EventSlider'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Gallery from './Components/Gallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     
      
      <Banner/>
      <EventSlider/>
      <AboutUs/>
      <Gallery/>
      <ContactUs/>

      <Footer/>
      
    </>
  )
}
