import '../styles/globals.css'
import React, { useState, useEffect } from 'react';
import '../styles/home.css'
import '../styles/testimonial.css'
import '../styles/bootsnipps.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import Head from "next/head"
import AOS from "aos"
import 'aos/dist/aos.css'
import NProgress from "nprogress"
import { Router } from 'next/router';

function MyApp({ Component, pageProps }) {

  NProgress.configure({showSpinner:"false"})

  Router.events.on('routeChangeStart', () => {
    NProgress.start()
  })
  Router.events.on('routeChangeComplete', () => {
    NProgress.done()
  })

  useEffect(() => {
AOS.init(
 
)
  }, [])
  return <>
  {/* <Head> <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' /></Head> */}
  <Component {...pageProps} /></> 
}

export default MyApp
