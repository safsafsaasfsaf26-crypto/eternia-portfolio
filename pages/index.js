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
        <meta
          name="description"
          content="ETERNIA - Modern, Minimalist Portfolio"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          minHeight: '100vh',
          backgroundColor: '#121212',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '3.5rem',
            color: '#FFB347',
            marginBottom: '1rem',
            letterSpacing: '2px',
          }}
        >
          ETERNIA
        </h1>
        <p
          style={{
            fontSize: '1.5rem',
            color: '#ccc',
            marginBottom: '3rem',
          }}
        >
          حيث تُصنع الأساطير | Where Legends Are Forged
        </p>
        <div
          style={{
            background: '#1E1E1E',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0 0 20px rgba(0,0,0,0.5)',
            marginBottom: '2.5rem',
          }}
        >
          <h2
            style={{
              color: '#FFB347',
              fontSize: '1.8rem',
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            خدماتي
          </h2>
          <div
            style={{ color: '#ddd', lineHeight: '1.6', fontSize: '1.1rem' }}
            dangerouslySetInnerHTML={{ __html: servicesHtml }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Link href="/portfolio">
            <button
              style={{
                background: '#FFB347',
                color: '#222',
                fontWeight: 'bold',
                padding: '0.9rem 2.2rem',
                border: 'none',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#e6a23c';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#FFB347';
              }}
            >
              معرض الأعمال
            </button>
          </Link>
          <Link href="/contact">
            <button
              style={{
                background: 'transparent',
                color: '#FFB347',
                border: '2px solid #FFB347',
                padding: '0.9rem 2.2rem',
                borderRadius: '6px',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#FFB347';
                e.currentTarget.style.color = '#222';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#FFB347';
              }}
            >
              تواصل معي
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
