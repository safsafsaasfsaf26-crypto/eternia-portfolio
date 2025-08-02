import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | CyperCiro</title>
        <meta name="description" content="Contact page for CyperCiro" />
      </Head>
      <main style={{position:'relative', zIndex:2}}>
        <section style={{padding: '4rem 0 2rem 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.7rem', letterSpacing:'1.5px', color:'#39ff14', marginBottom: '2.5rem', textShadow:'0 0 12px #00d0ff'}}>Contact Me</h2>
          <form className="card" style={{maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.3rem', background:'rgba(10,15,19,0.97)'}}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message" rows={5} />
            <button type="submit" className="btn">Send</button>
          </form>
          <div style={{marginTop: '2.5rem'}}>
            <a href="https://wa.me/201110855379" target="_blank" rel="noopener noreferrer" style={{color: '#39ff14', marginRight: '1.5rem', fontWeight:'bold'}}>WhatsApp: 01110855379</a>
            <span style={{color: '#00d0ff', marginRight: '1.5rem', fontWeight:'bold'}}>Discord: dev.ciro</span>
            <a href="mailto:example@email.com" style={{color: '#39ff14', fontWeight:'bold'}}>Email</a>
          </div>
          <Link href="/">
            <button className="btn" style={{marginTop: '2.5rem'}}>Back to Home</button>
          </Link>
        </section>
      </main>
    </>
  );
}
