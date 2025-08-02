import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Image from 'next/image';

export async function getStaticProps() {
  const tibiaDir = path.join(process.cwd(), 'content', 'tibia');
  const files = fs.readdirSync(tibiaDir);
  const projects = files.map(filename => {
    const filePath = path.join(tibiaDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      ...data,
      content,
      slug: filename.replace(/\.md$/, '')
    };
  });
  return { props: { projects } };
}

export default function Tibia({ projects }) {
  return (
    <>
      <Head>
        <title>Tibia Projects | CyperCiro</title>
        <meta name="description" content="Tibia-related projects: systems, bots, and tools for Tibia servers." />
      </Head>
      <main style={{padding: '4rem 0 2rem 0', minHeight: '80vh'}}>
        <h1 className="main-title" style={{textAlign:'center', fontSize:'2.7rem', color:'#39ff14', marginBottom:'2.2rem'}}>Tibia Projects</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(340px, 1fr))', gap:'2.5rem', maxWidth:'1200px', margin:'0 auto'}}>
          {projects.map(project => (
            <div key={project.slug} className="card glass" style={{padding:'1.6rem', border:'2px solid #00d0ff', borderRadius:'14px', background:'rgba(10,20,30,0.45)', boxShadow:'0 0 24px #00d0ff44'}}>
              {project.image && (
                <img src={`/${project.image}`} alt={project.title} style={{width:'100%', maxHeight:'220px', objectFit:'cover', marginBottom:'1.2rem', borderRadius:'8px', background:'#111'}} />
              )}
              <h2 style={{color:'#39ff14', fontSize:'1.5rem', marginBottom:'0.7rem'}}>{project.title}</h2>
              <p style={{color:'#00d0ff', fontWeight:'bold', marginBottom:'0.7rem'}}>{project.description}</p>
              <div style={{color:'#fff', fontSize:'1rem'}}>{project.content.split('\n').map((line, i) => <div key={i}>{line}</div>)}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
