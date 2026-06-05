import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const teamPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '15%', left: '3%',
    delay: 0.1,
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '-10%', left: '11%',
    delay: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '40%', left: '35%',
    delay: 0.3,
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '-30%', left: '30%',
    delay: 0.15,
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '0%', left: '49%',
    delay: 0.25,
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '32%', left: '55%',
    delay: 0.35,
  },
  {
    src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '-15%', left: '72%',
    delay: 0.2,
  },
  {
    src: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=160&h=160&fit=crop&crop=face',
    width: 160, height: 160,
    top: '42%', left: '82%',
    delay: 0.3,
  }
]

export default function Hero() {
  const headlineRef = useRef(null)
  const subtextRef  = useRef(null)
  const photosRef   = useRef([])
  const purpleRef   = useRef(null)
  const squiggleRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(headlineRef.current,
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(subtextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(purpleRef.current,
        { opacity: 0, scale: 0.5, rotation: -30 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8 },
        '-=0.6'
      )
      .fromTo(squiggleRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.8 },
        '-=0.6'
      )

    photosRef.current.forEach((el, i) => {
      if (!el) return
      gsap.fromTo(el,
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.7, ease: 'back.out(1.4)',
          delay: 0.6 + teamPhotos[i].delay,
        }
      )
    })
  }, [])

  return (
    <section className="relative min-h-screen bg-white pt-20 pb-20  overflow-hidden">

      <div className="max-w-site mx-auto mt-20 px-[var(--section-px)] text-center relative z-10">
        <h1
          ref={headlineRef}
          className="font-display font-black text-black leading-[1.1] tracking-[-0.02em]
            text-[clamp(2.2rem,4.8vw,7.2rem)] mb-4"
        >
          The{" "}
          <span className="italic relative inline-block">
            thinkers
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
          and
          <br />
          doers were ch
          <span
            className="inline-block px-3 py-0.5 rounded-full"
            style={{ backgroundColor: "var(--color-pink-highlight)" }}
          >
            anging
          </span>
          <br />
          the{" "}
          <span
            className="inline-block px-3 py-0.5 rounded-full"
            style={{ backgroundColor: "var(--color-green-highlight)" }}
          >
            status
          </span>{" "}
          Quo with
        </h1>

        <p
          ref={subtextRef}
          className="text-[0.82rem] text-[var(--color-text-subtle)] leading-relaxed max-w-sm mx-auto mt-5"
        >
          We are a team of strategists, designers communicators, researchers.
          Togsather, we belive that progress only hgppens when you refuse to
          play things safe.
        </p>
      </div>

      {/* Floating team photos — desktop */}
      <div className="relative w-full mt-20 hidden md:block h-64">
        {teamPhotos.map((p, i) => (
          <div
            key={i}
            ref={(el) => (photosRef.current[i] = el)}
            className="absolute rounded-full overflow-hidden border-[3px] border-white shadow-xl
              cursor-pointer transition-transform duration-300 hover:scale-110 hover:-translate-y-2"
            style={{
              width: p.width,
              height: p.height,
              top: p.top,
              left: p.left,
            }}
          >
            <img
              src={p.src}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile photos */}
      <div className="md:hidden flex flex-wrap justify-center gap-3 mt-8 px-4">
        {teamPhotos.map((p, i) => (
          <div
            key={i}
            className="w-16 h-16 rounded-full overflow-hidden border-[3px] border-white shadow-lg"
          >
            <img
              src={p.src}
              alt="Team member"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}