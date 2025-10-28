import React, { useEffect, useState } from 'react'
// import ReactMarkdown from "react-markdown";
// import { MarkdownTypewriter } from "react-markdown-typewriter";
// import remarkGfm from "remark-gfm";
// import rehypeHighlight from 'rehype-highlight';
import { Typewriter } from '@/components/ui/typewriter';
import "highlight.js/styles/monokai.css";
import { Spinner } from "@/components/ui/spinner";
// import TypingText from "@/components/ui/shadcn-io/typing-text";


function ChatBox({className, messages, isLoading, setIsTyping}) {
  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-[#dbe8e3] font-bold">{children}</h1>
    ),
    h2: ({ children }) => <h2 className="text-[#dbe8e3] font-bold">{children}</h2>,
    h3: ({ children }) => <h3 className="text-[#dbe8e3] font-bold">{children}</h3>,
    h4: ({ children }) => <h4 className="text-[#dbe8e3] font-bold">{children}</h4>,
    h5: ({ children }) => <h5 className="text-[#dbe8e3] font-bold">{children}</h5>,
    h6: ({ children }) => <h6 className="text-[#dbe8e3] font-bold">{children}</h6>,
    strong: ({ children }) => (
      <strong className="text-[#dbe8e3] font-bold">{children}</strong>
    ),
    a: ({ children, href, ...props }) => (
      <a className="text-[#dbe8e3] underline" href={href} {...props}>
        {children}
      </a>
    ),
    code: ({ children, ...props }) => (
      <code className="text-[#dbe8e3] bg-gray-800 px-1 py-0.5 rounded" {...props}>
        {children}
      </code>
    ),
    pre: ({ children, ...props }) => (
      <pre className="text-[#dbe8e3] bg-gray-800 p-2 rounded overflow-x-auto" {...props}>
        {children}
      </pre>
    ),
    p: ({ children, ...props }) => (
      <p className="text-[#dbe8e3]" {...props}>
        {children}
      </p>
    ),
    em: ({ children, ...props }) => (
      <em className="text-[#dbe8e3]" {...props}>
        {children}
      </em>
    ),
  };

  return (
    <>
      <div className={`main ${className}`}>
        {messages.map((msg, index) => (
          <div key={index} className="chat-message text-[#dbe8e3]">
            {msg.sender === "user" ? (
              <div key={index} className="user-message flex justify-end mr-18 mt-10 mb-mt-10">
                <div className="placeholder bg-[#303030] py-2 px-3 rounded-[1.3rem]">
                  <p className="break-words">{msg.text}</p>
                </div>
              </div>
            ) : (
              <div key={index} className="bot-message text-left ml-28 prose dark:prose-invert">
                <Typewriter
                  text={msg.text}
                  typeSpeed={10}
                  renderMarkdown={true}
                  markdownComponents={markdownComponents}
                  onComplete={() => {
                    if (index === messages.length - 1) {
                      setIsTyping(false);
                    }
                  }}
                  className={"text-[#dbe8e3]"}
                />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="spinner text-left ml-28">
            <Spinner />
          </div>
        )}
      </div>
    </>
  );
}

export default ChatBox