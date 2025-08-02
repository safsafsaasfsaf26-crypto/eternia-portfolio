import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>تواصل معي | ETERNIA</title>
        <meta name="description" content="صفحة التواصل مع ETERNIA" />
      </Head>
      <main>
        <section style={{padding: '3rem 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', color: '#FFB347', marginBottom: '2rem'}}>تواصل معي</h2>
          <form style={{maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            <input type="text" placeholder="اسمك" style={{padding: '0.8rem', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff'}} />
            <input type="email" placeholder="بريدك الإلكتروني" style={{padding: '0.8rem', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff'}} />
            <textarea placeholder="رسالتك" rows={5} style={{padding: '0.8rem', borderRadius: '5px', border: '1px solid #444', background: '#222', color: '#fff'}} />
            <button type="submit" style={{background: '#FFB347', color: '#222', fontWeight: 'bold', padding: '0.8rem', border: 'none', borderRadius: '5px'}}>إرسال</button>
          </form>
          <div style={{marginTop: '2rem'}}>
            <a href="https://wa.me/201110855379" target="_blank" rel="noopener noreferrer" style={{color: '#FFB347', marginRight: '1rem'}}>واتساب: 01110855379</a>
            <span style={{color: '#FFB347', marginRight: '1rem'}}>ديسكورد: dev.ciro</span>
            <a href="mailto:example@email.com" style={{color: '#FFB347'}}>إيميل</a>
          </div>
          <Link href="/">
            <button style={{marginTop: '2rem', background: '#222', color: '#FFB347', border: '2px solid #FFB347', padding: '0.7rem 2rem', borderRadius: '5px'}}>العودة للرئيسية</button>
          </Link>
        </section>
      </main>
    </>
  );
}
