import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StorySection() {
  const sectionRef = useRef(null);
  const topTextRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);
  const bottomTextRef = useRef(null);
  const curveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(topTextRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: topTextRef.current, start: "top 80%" },
      });

      gsap.from(topImgRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: topImgRef.current, start: "top 80%" },
      });

      const path = curveRef.current;
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: "power2.inOut",
          scrollTrigger: { trigger: path, start: "top 80%" },
        });
      }

      gsap.from(bottomImgRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: bottomImgRef.current, start: "top 85%" },
      });

      gsap.from(bottomTextRef.current, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: bottomTextRef.current, start: "top 85%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative  overflow-visible py-20 mb-20"
    >
      <div
        className="absolute right-[45%] top-[0%]
        w-[280px] h-[380px] rounded-full bg-[var(--color-hot-pink)]
        opacity-30 blur-[110px] pointer-events-none"
      />

      <div className="max-w-site mx-auto px-[var(--section-px)] relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center relative z-20">
          <div ref={topTextRef} className="max-w-[600px]">
            <h2
              className="font-display font-semibold
              text-[clamp(3.0rem,2.4vw,2.2rem)]
              leading-[1.25] tracking-[-0.01em] text-black mb-5"
            >
              <span className="relative inline-block">
                Tomorrow
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 160 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 C20 2, 40 11, 60 5 C80 -1, 100 10, 120 5 C135 2, 148 8, 158 6"
                      stroke="var(--color-gold-accent)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              should
              <br />
              be better than today
            </h2>

            <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-6 max-w-[280px]">
              We are a team of strategists, designers communicators,
              researchers. Togsather, we belive that progress only happens when
              you refuse to play things safe.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[0.82rem] text-black
                hover:gap-4 transition-all duration-300 group"
            >
              Read more
              <span className="text-base  leading-none">→</span>
            </a>
          </div>

          <div
            ref={topImgRef}
            className="relative flex justify-end items-center"
          >
            <div className="absolute top-0 right-0 w-[110px] h-[110px] bg-[var(--color-red-accent)] z-0" />

            <div
              className="relative z-10 w-[290px] h-[290px] md:w-[350px] md:h-[350px]
              rounded-full overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=700&fit=crop"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div
          className="relative w-full pointer-events-none z-10"
          style={{ height: "160px", marginTop: "-20px" }}
        >
          <svg
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 1100 160"
            style={{ width: "115%" }}
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              ref={curveRef}
              d="m 1190 30 c -164 -142 -335 -105 -405 77 c -52 141 -322 -60 -510 92"
              stroke="var(--color-red-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 relative z-20">
          <div
            ref={bottomImgRef}
            className="relative flex justify-start items-center"
          >
            <div
              className="absolute top-0 left-3 z-0"
              style={{
                width: 0,
                height: 0,
                borderLeft: "68px solid transparent",
                borderRight: "68px solid transparent",
                borderBottom: "88px solid var(--color-red-accent)",
              }}
            />

            <div
              className="relative z-10 w-[290px] h-[290px] md:w-[350px] md:h-[350px]
              rounded-full overflow-hidden ml-6"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&h=700&fit=crop"
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Big triangle — bottom-right of circle, fully visible */}
            <div
              className="absolute -bottom-7 right-28 z-20"
              style={{
                width: 0,
                height: 0,
                borderLeft: "95px solid transparent",
                borderRight: "95px solid transparent",
                borderBottom: "145px solid var(--color-red-accent)",
              }}
            />
          </div>

          <div ref={bottomTextRef} className="max-w-[500px] mt-2 ">
            <h2
              className="font-display font-medium
              text-[clamp(3.6rem,2.4vw,2.2rem)]
              leading-[1.25] tracking-[-0.01em] text-black mb-5"
            >
              <span className="bg-[var(--color-green-highlight)] px-3 py-0.5 rounded-full mr-1">
                See
              </span>
              how we can
              <br />
              help you
              <span className="relative inline-block">
                progress
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 160 8"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5 C30 1, 60 8, 90 4 C118 0, 140 7, 158 4"
                    stroke="var(--color-gold-accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <p className="text-[0.82rem] text-gray-500 leading-relaxed mb-6 max-w-[320px]">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            {/* Read more with arrow */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-[0.82rem] text-black
                hover:gap-4 transition-all duration-300 group"
            >
              Read more
              <span className="text-base leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
