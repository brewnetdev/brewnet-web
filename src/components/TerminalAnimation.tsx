"use client";

import { useEffect, useRef } from "react";
import { terminalCommands } from "@/data/terminal-commands";

export default function TerminalAnimation() {
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const isVisibleRef = useRef(false);
  const isRunningRef = useRef(false);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  const safeTimeout = (fn: () => void, ms: number) => {
    const id = setTimeout(() => {
      if (isVisibleRef.current) fn();
    }, ms);
    timeoutsRef.current.push(id);
    return id;
  };

  useEffect(() => {
    let currentCmd = 0;

    function typeCommand(text: string, callback: () => void) {
      let i = 0;
      if (typewriterRef.current) typewriterRef.current.textContent = "";
      if (cursorRef.current) cursorRef.current.style.display = "inline";

      function typeChar() {
        if (!isVisibleRef.current) return;
        if (i < text.length && typewriterRef.current) {
          typewriterRef.current.textContent += text[i];
          i++;
          safeTimeout(typeChar, 40 + Math.random() * 40);
        } else {
          if (cursorRef.current) cursorRef.current.style.display = "none";
          safeTimeout(callback, 300);
        }
      }
      typeChar();
    }

    function showOutput(lines: string[], callback: () => void) {
      if (outputRef.current) outputRef.current.innerHTML = "";
      let i = 0;
      function showLine() {
        if (!isVisibleRef.current) return;
        if (i < lines.length && outputRef.current) {
          const div = document.createElement("div");
          div.innerHTML = lines[i];
          div.style.opacity = "0";
          div.style.transform = "translateY(4px)";
          div.style.transition = "opacity 0.25s, transform 0.25s";
          outputRef.current.appendChild(div);
          requestAnimationFrame(() => {
            div.style.opacity = "1";
            div.style.transform = "translateY(0)";
          });
          i++;
          safeTimeout(showLine, 80);
        } else {
          safeTimeout(callback, 3000);
        }
      }
      showLine();
    }

    function runSequence() {
      if (!isVisibleRef.current) {
        isRunningRef.current = false;
        return;
      }
      isRunningRef.current = true;
      const cmd = terminalCommands[currentCmd];
      typeCommand(cmd.cmd, () => {
        showOutput(cmd.output, () => {
          currentCmd = (currentCmd + 1) % terminalCommands.length;
          runSequence();
        });
      });
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting && !isRunningRef.current) {
          runSequence();
        } else if (!entry.isIntersecting) {
          clearAllTimeouts();
          isRunningRef.current = false;
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      clearAllTimeouts();
    };
  }, []);

  return (
    <div className="hero-terminal" ref={containerRef}>
      <div className="terminal-bar">
        <span className="dot red" aria-hidden="true" />
        <span className="dot yellow" aria-hidden="true" />
        <span className="dot green" aria-hidden="true" />
        <span className="terminal-title">brewnet ~ terminal</span>
      </div>
      <div className="terminal-body">
        <div className="term-line">
          <span className="term-prompt">$</span>
          <span className="term-cmd" ref={typewriterRef} />
          <span className="term-cursor" ref={cursorRef}>|</span>
        </div>
        <div className="term-output" ref={outputRef} />
      </div>
    </div>
  );
}
