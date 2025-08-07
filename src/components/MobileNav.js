import React from 'react';
import { Hammer, MessageSquare, Layers, Code2 } from 'lucide-react';
import { hapticTick } from '../utils/haptics';

const items = [
  { href: '#home', label: 'Home', icon: Hammer },
  { href: '#how', label: 'Process', icon: Layers },
  { href: '#demo', label: 'Demo', icon: MessageSquare },
  { href: '#cta', label: 'Get', icon: Code2 },
];

const MobileNav = () => {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    hapticTick(10);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="mobile-tabbar">
      {items.map(({ href, label, icon: Icon }) => (
        <a key={href} href={href} onClick={(e) => handleClick(e, href)} className="tab">
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;


