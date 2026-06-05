const columns = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'License', 'Accessibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-green-hl/70    pb-8">
      <div className="h-[1px] w-[80%] mx-auto bg-black "></div>
      <div className="max-w-site mt-10 mx-auto px-[var(--section-px)]">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">

          {/* Link columns */}
          {columns.map(col => (
            <div key={col.heading}>
              <h4 className="font-body font-semibold text-sm text-black mb-5 tracking-wide">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-500 hover:text-black transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="font-body font-semibold text-sm text-black mb-5 tracking-wide">
              Terms &amp; Policies
            </h4>
            <address className="not-italic space-y-2">
              <p className="text-xs text-gray-500 leading-relaxed">
                1698a Flutie int. STE<br/>
                20 Drigo, IL 63867
              </p>
              <p className="text-xs text-gray-500 mt-3">
                (123) 456 789 000
              </p>
              <p className="text-xs text-gray-500">
                Info@elementum.com
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className=" pt-6 text-center">
          <p className="text-[0.7rem] text-gray-600">
            ©2023 Elementum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}