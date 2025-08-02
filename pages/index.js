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
        <style>{`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
          }

          .glitch-button:hover {
            animation: glitch 0.3s linear infinite;
          }

          .glitch-loop {
            animation: glitch 0.3s linear infinite alternate;
            animation-delay: 3s;
          }

          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(145deg, #0f0f0f, #1a1a1a);
            color: #fff;
          }

          h1, h2, p {
            transition: all 0.3s ease;
          }

          .card {
            box-shadow: 0 4px 20px rgba(255, 179, 71, 0.2);
            transition: transform 0.4s ease;
          }

          .card:hover {
            transform: scale(1.03);
          }

          .fade-in {
            animation: fadeIn 1s ease-in-out forwards;
            opacity: 0;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
            }
          }

          .typing {
            display: inline-block;
            border-right: 2px solid #FFB347;
            white-space: nowrap;
            overflow: hidden;
            animation: typing 4s steps(40, end), blink 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #FFB347; }
          }
        `}</style>
      </Head>
      <main>
        <section style={{ padding: '4rem 0', textAlign: 'center' }} className="fade-in">
          <h1 style={{ fontSize: '3.5rem', color: '#FFB347', marginBottom: '1rem' }}>ETERNIA</h1>
          <p className="typing" style={{ fontSize: '1.4rem', color: '#ccc', marginBottom: '2rem' }}>
            حيث تُصنع الأساطير | Where Legends Are Forged
          </p>
          <div className="card" style={{ margin: '2rem auto', maxWidth: '600px', background: '#1c1c1c', borderRadius: '12px', padding: '2rem' }}>
            <h2 style={{ color: '#FFB347', marginBottom: '1rem' }}>خدماتي | My Services</h2>
            <div dangerouslySetInnerHTML={{ __html: servicesHtml }} />
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/portfolio">
              <button className="glitch-button glitch-loop" style={{
                background: '#FFB347',
                color: '#111',
                fontWeight: 'bold',
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '8px',
                margin: '0.5rem',
                cursor: 'pointer',
              }}>
                معرض الأعمال | Portfolio
              </button>
            </Link>
            <Link href="/contact">
              <button className="glitch-button glitch-loop" style={{
                background: 'transparent',
                color: '#FFB347',
                border: '2px solid #FFB347',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                margin: '0.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}>
                تواصل معي | Contact Me
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
