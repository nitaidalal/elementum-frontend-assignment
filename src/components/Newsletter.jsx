import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        innerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-green-hl/70  py-20 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] pointer-events-none">
        <svg
          viewBox="0 0 120 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 30 10 C 25 30, 15 45, 25 62"
            stroke="var(--color-red-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 25 62 L 18 54 M 25 62 L 33 56"
            stroke="var(--color-red-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 70 5 C 68 25, 60 42, 68 60"
            stroke="var(--color-red-accent)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 68 60 L 60 52 M 68 60 L 76 54"
            stroke="var(--color-red-accent)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        className="absolute right-40 top-[30%] -translate-y-1/2 pointer-events-none"
        style={{
          width: "100px",
          height: "180px",
          overflow: "hidden",
          rotate: "30deg",
        }}
      >
        <div
          style={{
            width: "180px",
            height: "180px",
            borderRadius: "50%",
            backgroundColor: "var(--color-purple-accent)",
            position: "absolute",
            right: "-90px",
          }}
        />
      </div>

      <div
        ref={innerRef}
        className="max-w-site mx-auto px-[var(--section-px)] text-center"
      >
        <h2
          className="font-display font-black
          text-[clamp(2.8rem,6vw,5rem)]
          leading-[1.1] text-black tracking-[-0.02em] mb-4"
        >
          Subscribe to
          <br />
          our newsletter
        </h2>

        <p className="text-sm text-gray-600 mb-10">
          To make your stay special and even more memorable
        </p>

        <div className="flex justify-center">
          {sent ? (
            <p className="text-sm font-medium text-green-700 bg-green-100 px-6 py-3 rounded-full">
              ✓ You're subscribed! Thank you.
            </p>
          ) : (
            <button
              onClick={() => setSent(true)}
              className="bg-black text-white text-sm font-medium px-10 py-3.5 rounded-full
                hover:bg-[var(--color-red-accent)] transition-colors duration-300 hover:scale-105
                active:scale-95 transform"
            >
              Subscribe Now
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
