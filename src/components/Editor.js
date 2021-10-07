
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Editor() {
  const [markdown, setMarkdown] = useState('');

  return (

    <div className="container">
      <textarea id="input" placeholder="INPUT:(Enter markdown code or you can scroll down to know more about basic syntax)" value={markdown} onChange={(e) => { setMarkdown(e.target.value) }}></textarea>
      <div id="output">
        <div style={{ "display": "inline-block", margin: "10px" }}>

          <ReactMarkdown
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={materialLight}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      </div>
    </div>


  );
}