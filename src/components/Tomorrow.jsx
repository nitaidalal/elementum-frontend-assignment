import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Tomorrow() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-bg-soft)] overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-12 py-32">
        <div
          className="
          absolute
          left-[28%]
          top-[12%]
          w-[420px]
          h-[420px]
          rounded-full
          bg-[var(--color-pink-glow)]
          opacity-40
          blur-[140px]
          pointer-events-none
        "
        />

        <div className="grid lg:grid-cols-2 items-center gap-24">
          <div ref={textRef} className="relative z-10 max-w-[650px] ml-[40px]">
            <h2
              className="
              font-serif
              text-[clamp(5rem,8vw,8rem)]
              leading-[0.86]
              tracking-[-0.04em]
              font-normal
              text-black
            "
            >
              <span className="relative inline-block">
                Tomorrow
                <span
                  className="
                  absolute
                  left-0
                  bottom-4
                  w-full
                  h-[4px]
                  bg-[var(--color-gold-accent)]
                "
                />
              </span>
              <br />
              should
              <br />
              be better than
              <br />
              <span
                className="
                inline-block
                bg-[var(--color-sage-soft)]
                rounded-full
                px-6
                py-1
              "
              >
                today
              </span>
            </h2>

            <p
              className="
              mt-12
              text-[18px]
              leading-[1.8]
              text-[var(--color-text-muted)]
              max-w-[520px]
            "
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe progress only happens when you
              refuse to play things safe.
            </p>

            <a
              href="#"
              className="
              mt-14
              inline-flex
              items-center
              gap-6
              text-[18px]
              text-black
            "
            >
              Read more
              <span className="w-20 h-px bg-black" />
            </a>
          </div>

          {/* RIGHT */}
          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end"
          >
            {/* red square */}
            <div
              className="
              absolute
              top-4
              right-10
              w-[120px]
              h-[120px]
              bg-[var(--color-coral-soft)]
              rotate-12
            "
            />

            <div
              className="
              relative
              w-[460px]
              h-[460px]
              rounded-full
              overflow-hidden
            "
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RED CURVE */}
      <svg
        className="
        absolute
        bottom-[40px]
        left-[50%]
        w-[55%]
        pointer-events-none
      "
        viewBox="0 0 900 260"
        fill="none"
      >
        <path
          d="
          M0 220
          C120 40,
          280 20,
          430 90

          C560 150,
          700 140,
          900 40
          "
          stroke="var(--color-coral-bright)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </section>
  );
}
