import Head from 'next/head';
import Link from 'next/link';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getStaticProps() {
  const portfolioDir = path.join(process.cwd(), 'content/portfolio');
  const files = fs.readdirSync(portfolioDir);
  const projects = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(portfolioDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      return {
        ...data,
        contentHtml: processedContent.toString(),
      };
    })
  );
  return {
    props: {
      projects,
    },
  };
}

import { useState } from 'react';
import ImageModal from '../components/ImageModal';

export default function Portfolio({ projects }) {
  const [modalImg, setModalImg] = useState(null);
  return (
    <>
      <Head>
        <title>Portfolio | CyperCiro</title>
        <meta name="description" content="Portfolio samples - CyperCiro" />
      </Head>
      <main style={{position:'relative', zIndex:2}}>
        <section style={{padding: '4rem 0 2rem 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.7rem', letterSpacing:'1.5px', color:'#39ff14', marginBottom: '2.5rem', textShadow:'0 0 12px #00d0ff'}}>Portfolio</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2.5rem',
            justifyItems: 'center',
            alignItems: 'stretch',
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="card" style={{padding:'1.5rem 1rem', width:'100%', maxWidth:340, background:'rgba(10,15,19,0.97)'}}>
                <img src={proj.image} alt={proj.title} style={{width: '100%', borderRadius: '8px', boxShadow:'0 0 16px #00d0ff44', marginBottom:'1rem', cursor:'zoom-in'}} onClick={() => setModalImg({src: proj.image, alt: proj.title})} />
                <h3 style={{color: '#39ff14', margin: '1rem 0 0.5rem', textShadow:'0 0 8px #00d0ff'}}>{proj.title}</h3>
                <p style={{color: '#00d0ff', fontWeight:'bold', marginBottom:'0.7rem'}}>{proj.description}</p>
                <div style={{color:'#fff', fontSize:'0.97rem'}} dangerouslySetInnerHTML={{ __html: proj.contentHtml }} />
              </div>
            ))}
          </div>
          <Link href="/">
            <button className="btn" style={{marginTop: '2.5rem'}}>Back to Home</button>
          </Link>
        </section>
        {modalImg && (
          <ImageModal src={modalImg.src} alt={modalImg.alt} onClose={() => setModalImg(null)} />
        )}
      </main>
    </>
  );
}
