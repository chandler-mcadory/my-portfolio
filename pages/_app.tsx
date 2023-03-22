import '../styles/globals.css'
import Head from "next/head";
import Navbar from '../components/Menu';
import { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function MyApp({ Component, pageProps }) {

  return <>
      {/* <Navbar /> */}
      {/* <Loader show /> */}
      <Sidebar />
      <Component {...pageProps} />
      <Toaster position='bottom-left'/>
    </>
}

export default MyApp
