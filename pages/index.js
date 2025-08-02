import Head from 'next/head';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'content/services.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const servicesHtml = processedContent.toString();
  return {
    props: {
      servicesHtml,
    },
  };
}

import { useEffect } from 'react';

export default function Home({ servicesHtml }) {


  return (
    <>
      <Head>
        <title>Portfolio | CyperCiro</title>
        <meta name="description" content="CyperCiro - Hacker Style Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{position:'fixed', top:0, left:0, width:'100vw', height:'100vh', zIndex:0, overflow:'hidden'}}>
        <img src="/Pink Glitching GIF.gif" alt="animated background" className="bg-animated" style={{width:'100vw', height:'100vh', objectFit:'cover', opacity:0.28, position:'absolute', top:0, left:0}} />
      </div>
      <main style={{position:'relative', zIndex:2}}>
        <section style={{padding: '4rem 0 2rem 0', textAlign: 'center'}}>
          <h1 className="glitch main-title" style={{fontSize: '3.5rem', letterSpacing:'2px', marginBottom: '1.2rem', textShadow:'0 0 16px #39ff14,0 0 4px #00d0ff'}}>CYPER<span style={{color:'#00d0ff'}}>CIRO</span></h1>
          <p style={{fontSize: '1.4rem', color: '#39ff14', marginBottom: '2.5rem', textShadow:'0 0 8px #00d0ff'}}>Hacker & Creative Web Developer</p>
          <div style={{margin: '2rem auto', maxWidth: '420px'}} className="card">
            <h2 style={{color: '#00d0ff', marginBottom: '1rem', textShadow:'0 0 8px #39ff14'}}>My Services</h2>
            <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
          </div>
          <div style={{marginTop:'2.5rem'}}>
            <Link href="/portfolio">
              <button className="btn" style={{marginRight: '1rem'}}>Portfolio</button>
              <button className="btn" style={{marginRight: '1rem'}}>معرض الأعمال</button>
            </Link>
            <Link href="/contact">
              <button className="btn" style={{background:'#101820',color:'#39ff14',border:'1.5px solid #39ff14'}}>تواصل معي</button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
