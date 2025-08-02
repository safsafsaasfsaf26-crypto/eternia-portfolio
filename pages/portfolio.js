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

      // If image is not provided, use default demo1.png
      const image = data.image ? data.image : "/demo1.png";

      return {
        ...data,
        image,
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

export default function Portfolio({ projects }) {
  return (
    <>
      <Head>
        <title>معرض الأعمال | ETERNIA</title>
        <meta name="description" content="نماذج من أعمالي - ETERNIA Portfolio" />
      </Head>
      <main>
        <section style={{padding: '3rem 0', textAlign: 'center'}}>
          <h2 style={{fontSize: '2.5rem', color: '#FFB347', marginBottom: '2rem'}}>معرض الأعمال</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem'}}>
            {projects.map((proj, idx) => (
              <div key={idx} style={{background: '#222', borderRadius: '10px', padding: '1.5rem', width: '280px'}}>
                <img src={proj.image} alt={proj.title} style={{width: '100%', borderRadius: '8px'}} />
                <h3 style={{color: '#fff', margin: '1rem 0 0.5rem'}}>{proj.title}</h3>
                <p style={{color: '#ccc'}}>{proj.description}</p>
                <div dangerouslySetInnerHTML={{ __html: proj.contentHtml }} />
              </div>
            ))}
          </div>
          <Link href="/">
            <button style={{marginTop: '2rem', background: '#FFB347', color: '#222', fontWeight: 'bold', padding: '0.7rem 2rem', border: 'none', borderRadius: '5px'}}>
              العودة للرئيسية
            </button>
          </Link>
        </section>
      </main>
    </>
  );
}
