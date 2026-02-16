"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const WORDS = ["the web.", "apps."];
const TYPING_SPEED = 120;
const DELETING_SPEED = 60;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 400;

function useTypewriter(words: string[]) {
  const [displayText, setDisplayText] = useState("");
  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    function tick() {
      const currentWord = words[wordIndexRef.current];

      if (!isDeletingRef.current) {
        // Typing forward
        charIndexRef.current += 1;
        setDisplayText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current === currentWord.length) {
          // Finished typing, pause then start deleting
          timeoutRef.current = setTimeout(() => {
            isDeletingRef.current = true;
            tick();
          }, PAUSE_AFTER_TYPING);
          return;
        }

        timeoutRef.current = setTimeout(tick, TYPING_SPEED);
      } else {
        // Deleting (backspace)
        charIndexRef.current -= 1;
        setDisplayText(currentWord.slice(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          // Finished deleting, move to next word
          isDeletingRef.current = false;
          wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
          timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETING);
          return;
        }

        timeoutRef.current = setTimeout(tick, DELETING_SPEED);
      }
    }

    tick();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [words]);

  return displayText;
}

export function Hero() {
  const animatedText = useTypewriter(WORDS);

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 py-24 lg:px-0"
    >
      <div className="max-w-2xl">
        <p className="mb-4 font-mono text-sm tracking-wide text-primary">
          {"Hi, my name is"}
        </p>
        <h1 className="mb-4 text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Pratyush Pal
        </h1>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl">
          <span>{"I build things for "}</span>
          <span className="inline-block min-w-[1ch] text-primary">
            {animatedText}
            <span className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.1em] animate-pulse bg-primary" />
          </span>
        </h2>
        <p className="mb-8 max-w-lg text-pretty leading-relaxed text-muted-foreground">
          {
            "Full-stack developer crafting scalable, user-centric digital products with a strong focus on frontend excellence and performance."
          }
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-sm border border-primary px-6 py-3 font-mono text-sm text-primary transition-colors hover:bg-primary/10"
          >
            View my work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PratyushPal29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/pratyushpal29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/pratyushpal29"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
