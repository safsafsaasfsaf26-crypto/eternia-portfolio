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

export default function Home({ servicesHtml }) {
  return (
    <>
      <Head>
        <title>ETERNIA | Portfolio</title>
        <meta name="description" content="ETERNIA - Modern, Minimalist Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <section style={{padding: '4rem 0', textAlign: 'center'}}>
          <h1 style={{fontSize: '3rem', color: '#FFB347', marginBottom: '1rem'}}>ETERNIA</h1>
          <p style={{fontSize: '1.3rem', color: '#fff', marginBottom: '2rem'}}>حيث تُصنع الأساطير | Where Legends Are Forged</p>
          <div style={{margin: '2rem auto', maxWidth: '400px', background: '#222', borderRadius: '10px', padding: '1.5rem'}}>
            <h2 style={{color: '#FFB347', marginBottom: '1rem'}}>خدماتي</h2>
            <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
          </div>
          <Link href="/portfolio" style={{marginRight: '1rem'}}>
            <button style={{background: '#FFB347', color: '#222', fontWeight: 'bold', padding: '0.8rem 2rem', border: 'none', borderRadius: '5px'}}>معرض الأعمال</button>
          </Link>
          <Link href="/contact">
            <button style={{background: 'transparent', color: '#FFB347', border: '2px solid #FFB347', padding: '0.8rem 2rem', borderRadius: '5px'}}>تواصل معي</button>
          </Link>
        </section>
      </main>
    </>
  );
}
