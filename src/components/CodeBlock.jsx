import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

const CodeBlock = ({ code, language = 'javascript' }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

  return (
    <pre className="code-block-container">
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
      <style jsx="true">{`
        .code-block-container {
          margin: 0;
          padding: 20px;
          background-color: #1e1e1e;
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.9rem;
          line-height: 1.6;
          overflow-x: auto;
        }
        
        code {
          background: none !important;
          padding: 0 !important;
        }
      `}</style>
    </pre>
  );
};

export default CodeBlock;
