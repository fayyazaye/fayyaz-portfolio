import React, { useEffect, useState } from 'react'

const projects = [
  { id: 'p1', title: 'Mobile Banking App', desc: 'Redesign of a banking app to improve onboarding and transfers.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1', behance: 'https://www.behance.net/' },
  { id: 'p2', title: 'Analytics Dashboard', desc: 'Dashboard UI for tracking key product metrics with clear hierarchy.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2', behance: 'https://www.behance.net/' },
  { id: 'p3', title: 'E‑commerce Landing', desc: 'High-conversion landing page and micro-interactions for product discovery.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3', behance: 'https://www.behance.net/' }
]

const skills = ['Figma', 'Adobe XD', 'VS Code', 'Adobe Premier Pro', 'Wireframing', 'Prototyping', 'Usability Testing', 'User Centered Design', 'UX Research','Team Collaboration']

export default function Portfolio(){ 
  const [dark, setDark] = useState(false)
  useEffect(()=>{
    const root = document.documentElement
    if(dark) root.classList.add('dark'); else root.classList.remove('dark')
  },[dark])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="sticky top-0 z-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-warm1 to-warm2 flex items-center justify-center text-white font-bold">FA</div>
            <div>
              <div className="text-sm font-medium">Fayyaz Ahmad</div>
              <div className="text-xs opacity-80">UI / UX Designer</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5 text-sm">
            <button onClick={()=>scrollTo('home')} className="hover:underline">Home</button>
            <button onClick={()=>scrollTo('about')} className="hover:underline">About</button>
            <button onClick={()=>scrollTo('skills')} className="hover:underline">Skills</button>
            <button onClick={()=>scrollTo('projects')} className="hover:underline">Projects</button>
            <button onClick={()=>scrollTo('certificates')} className="hover:underline">Certificates</button>
            <button onClick={()=>scrollTo('contact')} className="hover:underline">Contact</button>
            <a href="/resume.pdf" download className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-sm">Resume</a>
            <button onClick={()=>setDark(!dark)} className="px-2 py-1 rounded">{dark? '🌙' : '☀️'}</button>
          </nav>

          <div className="md:hidden flex items-center gap-3">
            <a href="/resume.pdf" download className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700 text-sm">Resume</a>
            <button onClick={()=>setDark(!dark)}>{dark? '🌙' : '☀️'}</button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">

        {/* HERO */}
        <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="uppercase text-sm tracking-wide text-warm1 font-semibold">UI / UX Designer</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">Hi, I’m Fayyaz!</h1>
            <p className="mt-6 text-lg opacity-90">I design both Web and Mobile Application Designs that are simple, minimal, and easy to interact with. My main focus is understanding what users actually need and turning that into a Minimal and interactive design.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm border border-transparent bg-gradient-to-r from-warm1 to-warm3 text-white">Download Resume</a>
              <button onClick={()=>scrollTo('projects')} className="inline-flex items-center gap-2 px-4 py-2 rounded-md ring-1 ring-gray-200 dark:ring-gray-700">View Projects</button>
              <a href="https://www.behance.net/fayyazahmad15" target="_blank" rel="noreferrer" className="ml-2 text-sm underline">My Behance</a>
            </div>

            <div className="mt-8">
              <h4 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">Quick facts</h4>
              <ul className="mt-3 grid gap-3 text-sm">
                <li>📍 Islamabad, Pakistan</li>
                <li>🎓 BS Software Engineering</li>                
                <li>📧 itsfayyazahmaddkhan@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
              <img src="/Images/pfp.png" alt="Fayyaz Ahmad" className="w-full h-full object-cover" />              
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-card">
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="mt-6 grid md:grid-rows-2">
          <p className="mt-3 text-sm">Hi, I’m a passionate UI/UX designer who loves turning ideas into meaningful digital experiences. I enjoy creating designs that not only look great but also feel effortless to use. My work combines creativity with problem-solving — from researching user needs and building wireframes to prototyping and testing real-world solutions.</p>
          
          <p className="mt-3 text-sm">I’ve designed for both web and mobile platforms and collaborated with teams that challenged me to think beyond visuals. What drives me most is seeing users genuinely connect with something I’ve helped create. I’m always learning, experimenting, and looking for new ways to make digital experiences simpler, smarter, and more enjoyable.</p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
           
            <div>
              <h4 className="font-semibold">Education</h4>
              <p className="mt-2 text-sm">BS Software Engineering - NUML University, Islamabad</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="mt-2 text-sm opacity-90">Tools, techniques and domains I work in.</p>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map(s => (
              <div key={s} className="rounded-lg p-4 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-bold">Projects / Case Studies</h2>
          <p className="mt-2 text-sm opacity-90">Selected case studies — click through to view full writeups on Behance.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(p => (
              <article key={p.id} className="rounded-xl overflow-hidden bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700">
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover"/>
                <div className="p-5">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href={p.behance} target="_blank" rel="noreferrer" className="text-sm underline">View on Behance</a>
                    <button onClick={()=>scrollTo('contact')} className="ml-auto text-sm">Discuss →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CERTIFICATES */}
        <section id="certificates" className="section-card">
          <h2 className="text-2xl font-bold">Certificates</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 dark:bg-gray-900/40 rounded-lg border border-gray-100 dark:border-gray-700">
            <a href="/Images/Bytewise UI UX Internship.pdf" target="_blank" rel="noopener noreferrer">
              <img src="Images\bytewisefellowship.png" alt="certificate" className="w-full h-32 object-cover rounded"/>
              <div className="mt-3 text-sm">Bytewise Fellowship — UI/UX Design</div>
            </a>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-900/40 rounded-lg border border-gray-100 dark:border-gray-700">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6" alt="certificate" className="w-full h-32 object-cover rounded"/>
              <div className="mt-3 text-sm">Relevant course or certificate placeholder</div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-card">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-sm">Want to collaborate or see full case studies? Reach out — I reply fast.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm"><strong>Email:</strong> <a className="underline" href="mailto:itsfayyazahmadkhan@gmail.com">itsfayyazahmadkhan@gmail.com</a></p>
              <p className="mt-2 text-sm"><strong>Behance:</strong> <a className="underline" href="https://www.behance.net/fayyazahmad15">Fayyaz Ahmad</a></p>
              <p className="mt-2 text-sm"><strong>Location:</strong> Pakistan</p>
            </div>

            <form className="space-y-3" onSubmit={(e)=>{e.preventDefault();alert('Form is demo — replace with backend or mailto');}}>
              <input required placeholder="Your name" className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-900/40"/>
              <input required type="email" placeholder="Your email" className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-900/40"/>
              <textarea required placeholder="Message" className="w-full px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-900/40 h-28"></textarea>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-md bg-gradient-to-r from-warm1 to-warm3 text-white">Send message</button>
                <a href="mailto:itsfayyazahmadkhan@gmail.com" className="text-sm underline">Or email me directly</a>
              </div>
            </form>
          </div>
        </section>

        <footer className="text-center py-6 text-sm opacity-80">© {new Date().getFullYear()} Fayyaz Ahmad — UI/UX Designer. Built with React + Tailwind.</footer>
      </main>
    </div>
  )
}
