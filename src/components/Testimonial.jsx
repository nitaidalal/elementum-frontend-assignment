import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const leftAvatars = [
  {
    src: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=200&h=200&fit=crop&crop=face",
    size: 72,
    top: "4%",
    left: "2%",
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=face",
    size: 54,
    top: "35%",
    left: "-6%",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
    size: 140,
    top: "40%",
    left: "3%",
  },
  {
    src: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&h=200&fit=crop&crop=face",
    size: 62,
    top: "82%",
    left: "-6%",
  },
];

const rightAvatars = [
  {
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
    size: 80,
    top: "15%",
    right: "2%",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face",
    size: 58,
    top: "30%",
    right: "15%",
  },
  {
    src: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&h=200&fit=crop&crop=face",
    size: 52,
    top: "56%",
    right: "12%",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    size: 148,
    top: "68%",
    right: "-5%",
  },
];

export default function Testimonial() {
  const sectionRef = useRef(null);
  const headRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        },
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-white"
    >
      <div className="max-w-site mx-auto px-[var(--section-px)] relative">
        {leftAvatars.map((a, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-md hidden lg:block"
            style={{
              width: a.size,
              height: a.size,
              top: a.top,
              left: a.left,
            }}
          >
            <img src={a.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        {rightAvatars.map((a, i) => (
          <div
            key={i}
            className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-md hidden lg:block"
            style={{
              width: a.size,
              height: a.size,
              top: a.top,
              right: a.right,
            }}
          >
            <img src={a.src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}

        <div className="text-center max-w-[500px] mx-auto relative z-10">
          <div ref={headRef} className="mb-10">
            <h2 className="font-display font-bold text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.2] text-black">
              <span className="inline-block bg-green-hl  px-2 py-0.5 mr-1 rounded-full">
                What
              </span>
              our customer
              <br />
              says
              <span className="italic relative inline-block">
                About Us
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 140 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 C25 1, 55 7, 80 3 C105 -1, 125 6, 138 4"
                    stroke="var(--color-gold-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* Quote card */}
          <div
            ref={cardRef}
            className="relative  rounded-3xl px-10 py-10 mb-10 text-center bg-green-hl/30"
            
          >
            {/* Open quote mark — large, outside top-left */}
            <span
              className="absolute top-6 left-2 font-display text-[4.5rem] leading-none text-gray-500/30 select-none"
              style={{ lineHeight: 1 }}
            >
              ❝
            </span>

            <p className="font-body text-[0.9rem] text-gray-700 leading-relaxed text-center">
              
              Elementum delivered the site with inthe timeline as they
              requested. Inthe end, the client found a 50% increase in traffic
              with in days since its launch. They also had an impressive ability
              to use technologies that the company hasnt used, which have also
              proved to be easy to use and reliable
            </p>

            {/* Close quote mark — large, outside bottom-right */}
            <span
              className="absolute bottom-0 right-7 font-display text-[4.5rem] leading-none text-gray-500/30 select-none"
              style={{ lineHeight: 1 }}
            >
              ❞
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
