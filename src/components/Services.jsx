import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: "Office of multiple interest content",
    title: "Colaborative & partnership",
  },
  {
    tag: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    tag: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const rowRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 80%" },
        },
      );
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28  overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[45vw] pointer-events-none">
        <svg viewBox="0 0 700 220" className="w-full h-auto" fill="none">
          <path
            d="
      M0 180
      C80 220,80 20,180 10
      C320 0,450 120,620 70
      C690 50,730 20,760 -20
      "
            stroke="var(--color-coral-accent)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="max-w-site mx-auto px-[var(--section-px)]">
        <div ref={headRef} className="mb-14">
          <h2
            className="
  font-display
  text-[clamp(3rem,6vw,6rem)]
  font-light
  leading-[0.9]
  tracking-[-0.04em]
  "
          >
            What we{" "}
            <span className="bg-[var(--color-sage-muted)] rounded-full px-5 py-0 inline-block">
              can
            </span>
            <br />
            <span className="relative inline-block italic">
              offer
              <svg
                className="absolute top-full left-0 w-[120%]"
                viewBox="0 0 160 12"
                fill="none"
              >
                <path
                  d="M3 6 C45 4, 90 8, 155 4"
                  stroke="var(--color-gold-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M40 10 C80 7, 120 9, 158 6"
                  stroke="var(--color-gold-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>{"     "}</span>
            you!
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {services.map((s, i) => (
            <div
              key={i}
              ref={(el) => (rowRefs.current[i] = el)}
              className="
            grid
            grid-cols-[180px_1fr_60px]
            items-center
            py-10
            border-t
            border-[var(--color-border-light)]
            group
            "
            >
              <p
                className="
  text-[15px]
  leading-[1.4]
  text-[var(--color-text-dark)]
  max-w-[150px]
  "
              >
                {s.tag}
              </p>

              <h3
                className="
  text-[clamp(2rem,3vw,3.5rem)]
  font-display
  font-light
  tracking-[-0.03em]
  "
              >
                {s.title}
              </h3>


              <div
                className="
  text-4xl
  font-light
  transition-transform
  duration-300
  opacity-70
  group-hover:translate-x-2
  "
              >
                →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
