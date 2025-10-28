"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import Markdown from "react-markdown";

export const Typewriter = ({
  text = "",
  typeSpeed = 33,
  onComplete,
  className,
  renderMarkdown,
  markdownComponents,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef(null);
  const onCompleteRef = useRef(onComplete);

  // Keep onComplete callback reference up-to-date
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = displayedText.length;
      intervalRef.current = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            onCompleteRef.current?.();
          }
        }
      }, typeSpeed);
    };

    if (text.length > displayedText.length) {
      startTyping();
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [text, typeSpeed]);

  if (renderMarkdown) {
    return (
      <div className={className}>
        <Markdown components={markdownComponents}>{displayedText}</Markdown>
      </div>
    );
  }

  return (
    <span
      className={cn("whitespace-pre-wrap leading-7", className)}
      dangerouslySetInnerHTML={{ __html: displayedText }}
    />
  );
};
