import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Progress() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        {
          opacity: 0,
          x: -80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        textRef.current,
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
      relative
      bg-[var(--color-bg-soft)]
      py-24
      -mt-12
      overflow-hidden
    "
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <div ref={imgRef} className="relative flex justify-center">
            <div
              className="
              absolute
              left-2
              top-8
              w-0
              h-0
              border-l-[40px]
              border-r-[40px]
              border-b-[70px]
              border-l-transparent
              border-r-transparent
              border-b-[var(--color-coral-soft)]
            "
            />

            <div
              className="
              absolute
              right-10
              bottom-4
              w-0
              h-0
              border-l-[35px]
              border-r-[35px]
              border-b-[60px]
              border-l-transparent
              border-r-transparent
              border-b-[var(--color-coral-soft)]
            "
            />

            <div
              className="
              w-[320px]
              h-[320px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              overflow-hidden
            "
            >
              <img
                src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=200&h=200&fit=crop&crop=face"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div ref={textRef}>
            <h2
              className="
              font-display
              text-[clamp(3rem,5vw,5rem)]
              font-light
              leading-[0.95]
              tracking-[-0.04em]
            "
            >
              <span className="bg-[var(--color-sage-muted)] px-3 rounded-full">See</span> how we
              can
              <br />
              help you{" "}
              <span className="relative inline-block">
                progress
                <span className="absolute left-0 bottom-2 w-full h-[3px] bg-[var(--color-gold-accent)]" />
              </span>
            </h2>

            <p className="mt-8 max-w-[420px] text-sm text-[var(--color-text-muted)] leading-relaxed">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand,
              design, digital, communications and social research.
            </p>

            <a href="#" className="mt-8 inline-flex items-center gap-4 text-sm">
              Read more
              <span className="w-14 h-px bg-black" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
