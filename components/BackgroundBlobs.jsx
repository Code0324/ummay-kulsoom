export default function BackgroundBlobs() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
    }}>
      {/* Peach-orange blob — top left */}
      <div style={{
        position: 'absolute',
        width: '600px', height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,160,60,0.28) 0%, transparent 70%)',
        top: '-120px', left: '-120px',
        animation: 'blobMove1 20s ease-in-out infinite',
      }}/>
      {/* Lavender blob — top right */}
      <div style={{
        position: 'absolute',
        width: '500px', height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(180,120,255,0.22) 0%, transparent 70%)',
        top: '5%', right: '-100px',
        animation: 'blobMove2 25s ease-in-out infinite',
      }}/>
      {/* Mint-teal blob — bottom left */}
      <div style={{
        position: 'absolute',
        width: '450px', height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(60,200,180,0.2) 0%, transparent 70%)',
        bottom: '8%', left: '15%',
        animation: 'blobMove3 18s ease-in-out infinite',
      }}/>
      {/* Warm yellow blob — bottom right */}
      <div style={{
        position: 'absolute',
        width: '380px', height: '380px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,210,80,0.22) 0%, transparent 70%)',
        bottom: '-60px', right: '18%',
        animation: 'blobMove1 22s ease-in-out infinite reverse',
      }}/>
      {/* Pink blob — center */}
      <div style={{
        position: 'absolute',
        width: '320px', height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,150,180,0.16) 0%, transparent 70%)',
        top: '42%', left: '45%',
        animation: 'blobMove2 30s ease-in-out infinite reverse',
      }}/>
    </div>
  )
}
