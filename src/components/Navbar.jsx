import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs']

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
    )
  }, [])

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-site mx-auto px-[var(--section-px)] flex items-center justify-between py-5">

        <a href="#" className="font-display text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity">
          Elementum
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <li key={link}>
              <a
                href="#"
                className="text-sm font-body text-black relative
                  after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                  after:bg-black after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-50"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center
            ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-black transition-all duration-300
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-black transition-all duration-300 origin-center
            ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden fixed top-0 right-0 h-screen w-[75%] max-w-xs bg-white shadow-2xl
        flex flex-col justify-center items-start gap-8 px-10 transition-transform duration-400 ease-in-out z-40
        ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {links.map(link => (
          <a
            key={link}
            href="#"
            className="text-2xl font-display font-semibold text-black hover:text-red-accent transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}