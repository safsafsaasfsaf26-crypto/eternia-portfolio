export default function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: 'rgba(10,15,19,0.98)',
      borderTop: '2px solid #00d0ff',
      boxShadow: '0 0 12px #39ff1455',
      color: '#39ff14',
      padding: '1.2rem 0 0.6rem 0',
      marginTop: '3rem',
      fontFamily: 'Fira Mono, monospace',
      fontSize: '1rem',
      textAlign: 'center',
      letterSpacing: '1.2px',
      zIndex: 99
    }}>
      <div style={{marginBottom:'0.7rem'}}>
        <a href="https://wa.me/201110855379" target="_blank" rel="noopener noreferrer" style={{color:'#39ff14',margin:'0 1.2rem',fontWeight:'bold'}}>WhatsApp</a>
        <a href="https://discord.com/users/dev.ciro" target="_blank" rel="noopener noreferrer" style={{color:'#00d0ff',margin:'0 1.2rem',fontWeight:'bold'}}>Discord</a>
        <a href="mailto:example@email.com" style={{color:'#39ff14',margin:'0 1.2rem',fontWeight:'bold'}}>Email</a>
      </div>
      <div style={{color:'#00d0ff',fontWeight:'bold',fontSize:'1.1rem'}}>© {new Date().getFullYear()} CyperCiro | All Rights Reserved</div>
    </footer>
  );
}
