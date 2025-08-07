import React from 'react';
import { Hammer, MessageSquare, Layers, Bot } from 'lucide-react';
import { hapticTick } from '../utils/haptics';

const items = [
  { href: '#home', label: 'Home', icon: Hammer },
  { href: '#demo', label: 'Demo', icon: MessageSquare },
  { href: '#data-flow', label: 'Flow', icon: Layers },
  { href: '#ai-agents', label: 'Agents', icon: Bot },
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
    <nav className="mobile-tabbar" role="navigation" aria-label="Primary">
      {items.map(({ href, label, icon: Icon }) => (
        <a key={href} href={href} onClick={(e) => handleClick(e, href)} className="tab" aria-label={label}>
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;


