import '../styles/globals.css';
import '../styles/hacker.css';

import Navbar from '../components/Navbar';

import Footer from '../components/Footer';

import AnimatedGridOverlay from '../components/AnimatedGridOverlay';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div style={{position:'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex:0, overflow:'hidden'}}>
        <img src="/Pink Glitching GIF.gif" alt="animated background" style={{width:'100vw', height:'100vh', objectFit:'cover', opacity:0.28, position:'absolute', top:0, left:0}} />
      </div>
      <AnimatedGridOverlay />
      <Navbar />
      <div style={{paddingTop:'4.2rem', minHeight:'80vh', position:'relative', zIndex:2}}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
