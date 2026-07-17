import React, { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock Data for Events - easily update these anytime!
  const events = [
    {
      id: 1,
      title: "Friday Night Youth Live",
      date: "Every Friday @ 7:00 PM",
      description: "High-energy worship, relevant message, and free food. Bring a friend!",
      tag: "Weekly",
      bgImage: "https://unsplash.com"
    },
    {
      id: 2,
      title: "Young Adults Hangout",
      date: "Saturday, July 25 @ 6:30 PM",
      description: "A relaxed space for ages 18-30 to connect, discuss life, and build community.",
      tag: "YA Social",
      bgImage: "https://unsplash.com"
    },
    {
      id: 3,
      title: "Summer Outreach Day",
      date: "August 12 @ 9:00 AM",
      description: "Heading out into our city to love, serve, and make a practical difference.",
      tag: "Serve",
      bgImage: "https://unsplash.com"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased">
      
      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-black tracking-wider text-indigo-400">ELEVATE <span className="text-white">YTH & YA</span></span>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
              <a href="#home" className="hover:text-indigo-400 transition">Home</a>
              <a href="#events" className="hover:text-indigo-400 transition">Events</a>
              <a href="#media" className="hover:text-indigo-400 transition">Media</a>
              <a href="#connect" className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition shadow-lg shadow-indigo-600/20">Get Connected</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-400 hover:text-white focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-2 text-base font-medium">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-2 rounded-md hover:bg-slate-900 px-3">Home</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className="block py-2 rounded-md hover:bg-slate-900 px-3">Events</a>
            <a href="#media" onClick={() => setIsMenuOpen(false)} className="block py-2 rounded-md hover:bg-slate-900 px-3">Media</a>
            <a href="#connect" onClick={() => setIsMenuOpen(false)} className="block text-center bg-indigo-600 text-white py-2 rounded-full mt-4 font-semibold">Get Connected</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header id="home" className="relative relative-height min-h-[85vh] flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.95)), url('https://unsplash.com')` }}>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 font-bold tracking-widest text-xs uppercase px-3 py-1.5 rounded-full border border-indigo-500/20 mb-6">
            Welcome to the Next Generation
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            This is where <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Faith Meets Community</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
            A vibrant family of youth and young adults pursuing Jesus together. No matter your background, doubts, or story—there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#events" className="w-full sm:w-auto text-center bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-xl shadow-indigo-600/20 hover:scale-[1.02]">
              See Upcoming Events
            </a>
            <a href="#connect" className="w-full sm:w-auto text-center bg-slate-800/80 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-full transition border border-slate-700 hover:scale-[1.02]">
              Join a Small Group
            </a>
          </div>
        </div>
      </header>

      {/* 3. EVENT CARDS SECTION */}
      <section id="events" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">What's Happening Next</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Grab a friend and clear your schedule. Check out the latest events happening this month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <article key={event.id} className="group bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-700 transition duration-300 flex flex-col shadow-2xl">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={event.bgImage} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                />
                <span className="absolute top-4 left-4 bg-slate-950/90 text-indigo-400 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider border border-slate-800">
                  {event.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-indigo-400 tracking-wide mb-1 uppercase">{event.date}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">{event.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>
                <button className="w-full bg-slate-900 hover:bg-indigo-600 hover:text-white text-slate-200 font-medium py-2.5 px-4 rounded-xl border border-slate-800 hover:border-indigo-600 transition duration-200 text-sm text-center">
                  Count Me In!
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. CALL TO ACTION / CONNECT SECTION */}
      <section id="connect" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">Don't Do Life Alone</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto">
            Sign up below to receive weekly text alerts about gatherings, hangouts, and community services. 
          </p>
          
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-slate-900 text-white placeholder-slate-500 px-5 py-3 rounded-full flex-grow border border-slate-700 focus:outline-none focus:border-indigo-500 text-sm"
              required 
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg shadow-indigo-600/20 text-sm whitespace-nowrap">
              Stay Updated
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 text-center text-xs text-slate-600 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Elevate Youth & Young Adults Ministry. All rights reserved.</p>
      </footer>

    </div>
  );
}
