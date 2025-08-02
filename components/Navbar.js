import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: 'rgba(10,15,19,0.98)',
      borderBottom: '2px solid #39ff14',
      boxShadow: '0 0 12px #00d0ff55',
      padding: '0.7rem 0',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 99
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem'
      }}>
        <Link href="/">
          <span style={{
            fontFamily: 'Fira Mono, monospace',
            color: '#39ff14',
            fontSize: '1.7rem',
            fontWeight: 'bold',
            letterSpacing: '2px',
            textShadow: '0 0 12px #00d0ff',
            cursor: 'pointer'
          }}>Cyper<span style={{color:'#00d0ff'}}>Ciro</span></span>
        </Link>
        <div style={{display: 'flex', gap: '2rem'}}>
          <Link href="/portfolio"><span style={{color:'#00d0ff', fontWeight:'bold', fontSize:'1.1rem', cursor:'pointer'}}>Portfolio</span></Link>
          <Link href="/tibia"><span style={{color:'#00d0ff', fontWeight:'bold', fontSize:'1.1rem', cursor:'pointer'}}>Tibia</span></Link>
          <Link href="/contact"><span style={{color:'#39ff14', fontWeight:'bold', fontSize:'1.1rem', cursor:'pointer'}}>Contact</span></Link>
        </div>
      </div>
    </nav>
  );
}
