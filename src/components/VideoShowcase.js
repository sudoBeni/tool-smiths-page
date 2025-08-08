import React from 'react';

const VideoShowcase = ({ title = 'Demo Video', src = '', poster = '', compact = false }) => {
  return (
    <div className={`video-shell ${compact ? 'compact' : ''}`}>
      <div className="video-aspect">
        <video
          controls
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          poster={poster}
          style={{ width: '100%', height: '100%', display: 'block', borderRadius: '12px' }}
        >
          {src && <source src={src} type="video/mp4" />}
        </video>
      </div>
      <div className="video-caption">{title}</div>
    </div>
  );
};

export default VideoShowcase;





