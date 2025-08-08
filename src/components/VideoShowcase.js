import React from 'react';

const VideoShowcase = ({ title = 'Demo Video', src = '', poster = '', compact = false, windowFrame = false }) => {
  return (
    <div className={`video-shell ${compact ? 'compact' : ''}`}>
      {windowFrame && (
        <div className="window-frame">
          <div className="window-header">
            <span className="window-dot window-dot-red" aria-hidden></span>
            <span className="window-dot window-dot-yellow" aria-hidden></span>
            <span className="window-dot window-dot-green" aria-hidden></span>
          </div>
        </div>
      )}
      <div className={`video-aspect ${windowFrame ? 'video-aspect-window' : ''}`}>
        <video
          controls
          playsInline
          autoPlay
          muted
          loop
          preload="auto"
          poster={poster}
          style={{ width: '100%', height: '100%', display: 'block', borderRadius: windowFrame ? '0 0 12px 12px' : '12px' }}
        >
          {src && <source src={src} type="video/mp4" />}
        </video>
      </div>
      <div className="video-caption">{title}</div>
    </div>
  );
};

export default VideoShowcase;





