import React from 'react';
import { motion } from 'framer-motion';
import { Send, Database, Hammer, Bot, Shield, XCircle, CheckCircle2 } from 'lucide-react';

const messages = [
  {
    role: 'user',
    content: 'Find the top 5 products by revenue last quarter and show a short summary.'
  },
  {
    role: 'assistant',
    content: 'Understood. Forging your request into a precise query…',
    typing: true
  },
  {
    role: 'assistant',
    content: (
      <div>
        <div className="text-text-secondary text-xs mb-2 uppercase tracking-wide">Generated SQL</div>
        <pre className="codeblock">
SELECT product_name,
       SUM(total_amount) AS revenue
FROM orders
WHERE order_date BETWEEN '2024-01-01' AND '2024-03-31'
GROUP BY product_name
ORDER BY revenue DESC
LIMIT 5;
        </pre>
        <div className="text-text-secondary text-xs mt-4 mb-2 uppercase tracking-wide">Preview</div>
        <div className="table-preview">
          <div className="table-row table-header">
            <div>Product</div>
            <div>Revenue</div>
          </div>
          <div className="table-row">
            <div>Atlas Pro</div>
            <div>$1,245,320</div>
          </div>
          <div className="table-row">
            <div>Nova Edge</div>
            <div>$1,118,940</div>
          </div>
          <div className="table-row">
            <div>Quantum Lite</div>
            <div>$1,087,410</div>
          </div>
          <div className="table-row">
            <div>Vertex Air</div>
            <div>$1,025,880</div>
          </div>
          <div className="table-row">
            <div>Pulse Max</div>
            <div>$1,002,230</div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3 text-xs">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 className="w-3 h-3" /> Verified
          </span>
          <span className="text-text-secondary">Evidence: 5/5 rows matched database</span>
        </div>
      </div>
    )
  }
];

const ChatPreview = () => {
  return (
    <div className="card relative overflow-hidden" style={{ padding: '14px' }}>
      <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.4), transparent 60%)' }} />
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-accent-color rounded-lg flex items-center justify-center shadow-md">
            <Hammer className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold">Data Forge Chat</div>
            <div className="text-text-secondary text-xs uppercase tracking-wide">Talk to your database</div>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-text-secondary text-xs">
          <div className="flex items-center space-x-1 uppercase tracking-wide">
            <Database className="w-4 h-4" />
            <span>Connected</span>
          </div>
          <div className="flex items-center space-x-1">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="uppercase tracking-wide text-green-500">Validation On</span>
          </div>
        </div>
      </div>

      <div className="space-y-4 mb-6">
        {messages.map((m, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}>
            {m.role === 'user' ? (
              <div className="flex justify-end">
                <div className="px-4 py-3 rounded-xl bg-accent-color text-white max-w-[80%] shadow-md">
                  {m.content}
                </div>
              </div>
            ) : (
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-forge flex items-center justify-center">
                  <Bot className="w-4 h-4 text-accent-color" />
                </div>
                <div className="px-4 py-3 rounded-xl forge max-w-[85%]">
                  {m.typing ? (
                    <div className="flex items-center space-x-2">
                      <span className="w-2 h-2 rounded-full bg-accent-color animate-pulse" />
                      <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse" style={{ animationDelay: '0.15s' }} />
                      <span className="w-2 h-2 rounded-full bg-success-color animate-pulse" style={{ animationDelay: '0.3s' }} />
                      <span className="text-text-secondary text-sm">Forging…</span>
                    </div>
                  ) : (
                    m.content
                  )}
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center space-x-3 mt-4">
        <div className="flex-1 forge rounded-xl px-3 py-2 text-text-secondary text-sm">Ask anything about your data…</div>
        <button className="btn-primary px-4 py-3 flex items-center space-x-2">
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default ChatPreview;
