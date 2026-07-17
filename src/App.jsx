import React, { useState } from 'react';
import ypcLogo from './assets/ypc-logo.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

// State to track which FAQ index is expanded (null means all are closed)
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  // Core Values Data Array
  const coreValues = [
    { id: "01", name: "Faith", desc: "The foundation of everything we do. Anchoring our professions, careers, and ambitions securely in the Word of God." },
    { id: "02", name: "Leadership", desc: "Influencing our industries with high-stakes corporate ethics, servant hearts, and intentional marketplace vision." },
    { id: "03", name: "Excellence", desc: "Striving for highest-quality delivery in our workspaces. Doing our daily jobs as unto the Lord to stand out among peers." },
    { id: "04", name: "Service", desc: "Giving back practically to our local communities, loving our city, and stewarding our unique skillsets to help others." },
    { id: "05", name: "Community", desc: "Rejecting isolated journeys. Building strong, professional relational capital and intentional peer accountability circles." }
  ];

  // Club Events Data Map
  const events = [
    {
      id: 1,
      title: "Marketplace Ministry Breakfast",
      date: "Saturday, August 1 @ 8:30 AM",
      description: "Network with senior executives and Christian leaders. Learn how to integrate your faith into your daily corporate or business environment.",
      tag: "Networking",
      bgImage: "https://unsplash.com"
    },
    {
      id: 2,
      title: "Career Strategy Workshop",
      date: "Thursday, August 20 @ 7:00 PM",
      description: "An interactive session on resume building, mastering job interviews, and navigating corporate promotions with integrity.",
      tag: "Mentorship",
      bgImage: "https://unsplash.com"
    },
    {
      id: 3,
      title: "Professional Mixer & Social",
      date: "Friday, September 11 @ 6:30 PM",
      description: "Unwind after work. A relaxed evening of good food, speed-networking, and building authentic community with like-minded peers.",
      tag: "Social",
      bgImage: "https://unsplash.com"
    }
  ];

  // Targeted FAQs for Onboarding New Members
  const faqs = [
    {
      question: "Who is eligible to join the Young Professionals Club?",
      answer: "The club is specifically designed for college graduates, early-to-mid career corporate professionals, creators, and entrepreneurs typically aged between 21 and 35 who want to integrate biblical principles into their respective industries."
    },
    {
      question: "Do I have to be a formal member of the church to participate?",
      answer: "No, formal church membership is not required to join the club. While we are an active ministry of our local church body, our networking forums, workshops, and mixers are completely open to any young professional seeking a faith-driven marketplace circle."
    },
    {
      question: "Are there any membership fees or dues?",
      answer: "No, joining the Young Professionals Club directory is entirely free. Our monthly forums and standard networking mixers are funded by the church body. Specialized events like premium executive breakfasts or external weekend retreats may occasionally require basic ticket registrations."
    },
    {
      question: "How can I find a mentor within my specific industry sector?",
      answer: "We intentionally host quarterly 'Mentorship Speed-Matches' linking corporate veterans from our main congregation with club members. By joining our centralized database directory, you can specify your industry sector to receive priority access to executive alignments."
    },
    {
      question: "What is the commitment level expected of club members?",
      answer: "Commitment is flexible. You can choose to join our central directory just to receive job openings and resource briefs, attend our major monthly mixers, or commit deeper by joining our intimate weekly peer accountability circles."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
      TOP NOTIFICATION
      <div className='sticky top-0 z-50 bg-pink-500'>
        <div className="flex items-center justify-center h-8">
          <div className="flex items-center font-semibold text-sm text-white">NOTE: Website is still under development!</div>
        </div>
      </div>

      {/* 1. NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 py-1">
              <img 
                src={ypcLogo} 
                alt="Young Professionals Club Logo" 
                className="h-12 w-auto object-contain flex-shrink-0" 
              />
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
              <a href="#home" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Home</a>
              <a href="#values" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Core Values</a>
              <a href="#events" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Calendar</a>
              <a href="#leadership" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Leadership</a>
              <a href="#jobs" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Jobs</a>
              <a href="#resources" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">Resources</a>
              <a href="#faq" className="text-slate-300 hover:text-amber-500 transition-colors duration-200">FAQ</a>
              <a href="#connect" className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-2.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/10 font-bold hover:scale-[1.02]">
                Join the Club
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="text-slate-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-900 transition-colors"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-slate-900 px-4 pt-2 pb-5 space-y-2 text-base font-semibold">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Home</a>
            <a href="#values" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Core Values</a>
            <a href="#events" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Calendar</a>
            <a href="#leadership" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Leadership</a>
            <a href="#jobs" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Jobs</a>
            <a href="#resources" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">Resources</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2.5 rounded-xl hover:bg-slate-900 px-4 transition-colors">FAQ</a>
            <a href="#connect" onClick={() => setIsMenuOpen(false)} className="block text-center bg-amber-500 text-slate-950 py-3 rounded-xl mt-4 font-bold transition-all">Join the Club</a>
          </div>
        )}
      </nav>

      {/* 2. HERO SECTION */}
      <header id="home" className="relative relative-height min-h-[85vh] flex items-center justify-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.85), rgba(10, 15, 30, 0.98)), url('https://unsplash.com')` }}>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12">
          <span className="inline-flex items-center bg-amber-500/10 text-indigo-500 font-extrabold tracking-widest text-xs uppercase px-4 py-2 rounded-full border border-indigo-600/20 mb-8">
            RCCG OGun 10 Young Professional Club
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-tight">
            Excel in Your Career. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">Anchor Your Purpose.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            A community of ambitious young adults, entrepreneurs, and corporate workers thriving together. We help you build a stellar career without compromising your Christian values.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#events" className="w-full sm:w-auto text-center bg-amber-500 hover:bg-amber-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-xl shadow-amber-500/20 hover:scale-[1.02]">
              Upcoming Mixers & Events
            </a>
            <a href="#about" className="w-full sm:w-auto text-center bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-full transition border border-slate-800 hover:scale-[1.02]">
              Learn Our Core Values
            </a>
          </div>
        </div>
      </header>
      
      {/* 3. CLUB CORE VALUES GRID SECTION */}
      <section id="values" className="py-24 bg-slate-950 border-b border-slate-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">Our Core Values</h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              The driving principles guiding our club interactions, career growth metrics, and community engagement pillars.
            </p>
          </div>

          {/* 5-Column Dynamic Grid Layout for Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val) => (
              <div key={val.id} className="p-6 bg-slate-900/60 rounded-2xl border border-slate-800/60 shadow-xl hover:border-amber-500/30 hover:bg-slate-900 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mb-5 text-xs font-black border border-amber-500/10 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    {val.id}
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 text-white group-hover:text-amber-400 transition-colors duration-200">
                    {val.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EVENT CARDS SECTION */}
      <section id="events" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">Upcoming Club Gatherings</h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Mark your calendar. Don't miss these upcoming opportunities to invest in your personal and spiritual development.
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
                <span className="absolute top-4 left-4 bg-slate-950/90 text-amber-400 font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider border border-slate-800">
                  {event.tag}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-indigo-400 tracking-wide mb-1 uppercase">{event.date}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition">{event.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{event.description}</p>
                <button className="w-full bg-slate-900 hover:bg-amber-500 hover:text-white text-slate-200 font-medium py-2.5 px-4 rounded-xl border border-slate-800 hover:border-amber-500 transition duration-200 text-sm text-center">
                  Count Me In!
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      
      {/* 5. ORGANIZER LEADERSHIP BOARD SECTION */}
      <section id="leadership" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="text-center mb-20">
          <span className="inline-flex items-center bg-blue-500/10 text-blue-400 font-extrabold tracking-widest text-xs uppercase px-3 py-1 rounded-md border border-blue-500/10 mb-4">
            Meet the Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Club Organizers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            The marketplace leaders and core team steering our corporate initiatives, network pillars, and community operations.
          </p>
        </div>

        {/* 4-Column Layout Profile Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ayodele Lawal",
              corporateRole: "DW/BI Developer @ SmatData Ltd",
              ministryRole: "Club President & Tech Strategy Lead",
              image: "https://unsplash.com",
              linkedin: "https://linkedin.com"
            },
            {
              name: "Pst. Jaiyeola Idowu",
              corporateRole: "Management Consultant @ FinGroup",
              ministryRole: "Operations Director & Coordinator",
              image: "https://unsplash.com",
              linkedin: "https://linkedin.com"
            },
            {
              name: "Dr. Timothy Oduola",
              corporateRole: "Founder @ ScaleUp Ventures",
              ministryRole: "Entrepreneurship Cohort Monitor",
              image: "https://unsplash.com",
              linkedin: "https://linkedin.com"
            },
            {
              name: "Pst. Olalekan Alex",
              corporateRole: "VP of Human Resources @ Apex Media",
              ministryRole: "Career Mentorship & Validation Lead",
              image: "https://unsplash.com",
              linkedin: "https://linkedin.com"
            }
          ].map((leader, idx) => (
            <div 
              key={idx} 
              className="bg-slate-900/20 border border-slate-900 rounded-2xl overflow-hidden hover:border-blue-500/20 transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Profile Image with subtle zoom on hover */}
              <div className="h-64 w-full bg-slate-900 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>

              {/* Leader Meta Data Card */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-500 transition-colors duration-200">
                    {leader.name}
                  </h3>
                  <p className="text-blue-500 text-xs font-semibold uppercase tracking-wider mt-1">
                    {leader.ministryRole}
                  </p>
                  <p className="text-slate-400 text-xs mt-3 leading-relaxed font-medium">
                    {leader.corporateRole}
                  </p>
                </div>

                {/* Direct Digital Connect Link anchor */}
                <div className="pt-6 border-t border-slate-900/50 mt-6">
                  <a 
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-slate-400 hover:text-white transition-colors gap-1.5"
                  >
                    <span>Connect Profile</span>
                    <span className="text-[10px] group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5.5 RESOURCE LIBRARY DOWNLOAD GRID */}
      <section id="resources" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="text-center mb-20">
          <span className="inline-flex items-center bg-blue-500/10 text-blue-400 font-extrabold tracking-widest text-xs uppercase px-3 py-1 rounded-md border border-blue-500/10 mb-4">
            Marketplace Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5">
            Resource Library
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Download our curated, high-conversion resume templates engineered to bypass ATS filters and position you for leadership velocity.
          </p>
        </div>

        {/* 4-Column Template Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Corporate Executive Layout",
              format: "DOCX & PDF",
              fileSize: "1.2 MB",
              description: "A refined, conservative structure tailored for banking, management consulting, and traditional corporate tracking tiers.",
              icon: "💼"
            },
            {
              title: "Tech & Developer Blueprint",
              format: "Markdown & DOCX",
              fileSize: "840 KB",
              description: "A compact, highly scannable layout engineered to accurately emphasize repository links, tech stacks, and system implementations.",
              icon: "💻"
            },
            {
              title: "Creative Portfolio Template",
              format: "Figma & PDF",
              fileSize: "4.5 MB",
              description: "A visually balanced framework crafted for UI/UX designs, digital marketing pitches, and premium brand consulting spaces.",
              icon: "🎨"
            },
            {
              title: "Startup & Founder Pitch CV",
              format: "DOCX & Google Docs",
              fileSize: "1.1 MB",
              description: "An action-focused single page design mapped specifically to highlight cross-functional scaling metrics and venture executions.",
              icon: "🚀"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-6 bg-slate-900/40 rounded-2xl border border-slate-900 hover:border-blue-500/20 hover:bg-slate-900/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Visual Icon Badge */}
                <div className="w-12 h-12 bg-slate-950 text-xl rounded-xl flex items-center justify-center mb-5 border border-slate-900 shadow-inner group-hover:bg-blue-600/10 transition-colors">
                  {item.icon}
                </div>
                
                {/* Meta Tags */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-500/5 px-2 py-0.5 rounded border border-blue-500/10">
                    {item.format}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wide">
                    {item.fileSize}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-blue-500 transition-colors duration-200 mb-2">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              {/* Download Action Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-900/50">
                <a 
                  href="#" // ⚠️ Replace with the actual URL to your files (e.g. your GitHub Pages asset path, Google Drive link, etc.)
                  // href="/downloads/executive-resume.docx"
                  download
                  className="w-full inline-flex items-center justify-center bg-slate-950 text-slate-300 group-hover:bg-blue-600 group-hover:text-white font-semibold py-2.5 px-4 rounded-xl border border-slate-900 group-hover:border-blue-600 transition-all duration-200 text-xs shadow-inner"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Asset
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. COMMUNITY JOB BOARD DASHBOARD */}
      <section id="jobs" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900 bg-slate-900/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
              Marketplace Opportunities
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-medium">
              Exclusive open roles curated directly from our alumni network and corporate partners.
            </p>
          </div>
          <a href="#connect" className="inline-flex items-center gap-2 text-blue-500 font-bold hover:text-white transition-colors text-sm uppercase tracking-wider">
            <span>Post a Job</span>
            <span>→</span>
          </a>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid grid-cols-1 gap-4">
          {[
            {
              id: 1,
              role: "Senior Product Designer",
              company: "Creative Inc.",
              location: "New York, NY (Hybrid)",
              type: "Full-Time",
              salary: "$120k - $145k",
              posted: "2 days ago",
              urgent: true,
              logo: "C"
            },
            {
              id: 2,
              role: "Marketing Strategy Lead",
              company: "Global Tech Solutions",
              location: "Remote / US",
              type: "Contract",
              salary: "$90k - $110k",
              posted: "5 days ago",
              urgent: false,
              logo: "G"
            },
            {
              id: 3,
              role: "Junior Financial Analyst",
              company: "Apex Capital Partners",
              location: "Chicago, IL (On-site)",
              type: "Entry Level",
              salary: "$75k - $85k",
              posted: "1 week ago",
              urgent: false,
              logo: "A"
            },
            {
              id: 4,
              role: "Executive Assistant",
              company: "Kingdom Ventures",
              location: "Austin, TX (On-site)",
              type: "Part-Time",
              salary: "$35/hr",
              posted: "Just now",
              urgent: true,
              logo: "K"
            }
          ].map((job) => (
            <div 
              key={job.id} 
              className="group relative bg-slate-900 border border-slate-800 rounded-xl p-5 sm:p-6 hover:border-blue-500/40 transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
            >
              {/* Company Logo Placeholder */}
              <div className="h-14 w-14 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center font-black text-xl border border-slate-700 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                {job.logo}
              </div>

              {/* Job Details Column */}
              <div className="flex-grow min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                    {job.role}
                  </h3>
                  {job.urgent && (
                    <span className="bg-rose-500/10 text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded border border-rose-500/20 uppercase tracking-wide">
                      Urgent Hire
                    </span>
                  )}
                </div>
                <div className="text-sm text-slate-400 font-medium mb-1 flex items-center gap-2">
                  <span className="text-slate-200">{job.company}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                  <span>{job.location}</span>
                </div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="inline-flex items-center text-xs font-semibold text-slate-500 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    {job.type}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold text-emerald-500 bg-emerald-500/5 px-2.5 py-1 rounded border border-emerald-500/10">
                    {job.salary}
                  </span>
                  <span className="inline-flex items-center text-xs font-semibold text-slate-600">
                    Posted {job.posted}
                  </span>
                </div>
              </div>

              {/* Action Button Column */}
              <div className="w-full sm:w-auto flex-shrink-0">
                <button className="w-full sm:w-auto bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white font-semibold py-2.5 px-6 rounded-lg transition-all duration-200 text-sm border border-slate-700 hover:border-transparent">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Link for Board */}
        <div className="mt-10 text-center">
          <a href="#connect" className="text-slate-500 hover:text-blue-400 text-sm font-semibold transition-colors">
            View all 12 open positions in the archive →
          </a>
        </div>
      </section>

      {/* 5. INTERACTIVE FAQ ACCORDION */}
      <section id="faq" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium">Everything you need to know about joining and optimizing your club membership.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div key={index} className="bg-slate-900/30 rounded-2xl border border-slate-900 overflow-hidden transition-all duration-300">
                <button onClick={() => toggleFaq(index)} className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-semibold text-white hover:text-blue-500 transition-colors focus:outline-none">
                  <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  <span className={`w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center text-xs transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`}>▼</span>
                </button>
                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[300px] border-t border-slate-900/50' : 'max-h-0'}`}>
                  <p className="px-6 py-5 text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
      <section id="connect" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">
            Expand Your Professional Inner Circle
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto font-medium">
            Register with our centralized hub to earn early job access metrics, executive notifications, and direct invitations.
          </p>
          
          {/* Formspree submission engine setup */}
          <form 
            action="https://formspree.io/f/mykrebod"
            method="POST"
            className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
          >
            <input 
              type="email" 
              name="email" // ⚠️ Formspree requires the name attribute to process inputs accurately
              placeholder="Enter career or personal email" 
              className="bg-slate-900 text-white placeholder-slate-600 px-5 py-3.5 rounded-full border border-slate-800 focus:outline-none focus:border-blue-500 text-sm font-medium transition-all flex-grow" 
              required 
            />
            
            {/* Hidden field to prevent automatic spambots from corrupting your list submissions */}
            <input type="text" name="_honey" className="hidden" />
            
            <button 
              type="submit" 
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg text-sm whitespace-nowrap hover:scale-[1.02]"
            >
              Secure Invites
            </button>
          </form>
        </div>
      </section>

      {/* 6. CONVERSION SIGNUP FOOTER BLOCK
      <section id="connect" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-5">Expand Your Professional Inner Circle</h2>
          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto font-medium">Register with our centralized hub to earn early job access metrics, executive notifications, and direct invitations.</p>
          <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Enter career or personal email" className="bg-slate-900 text-white placeholder-slate-600 px-5 py-3.5 rounded-full border border-slate-800 focus:outline-none focus:border-blue-500 text-sm font-medium transition-all flex-grow" required />
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full transition shadow-lg text-sm whitespace-nowrap">Secure Invites</button>
          </form>
        </div>
      </section> */}

      {/* 6.0 GLOBAL FOOTER COMPONENT */}
      <footer className="bg-slate-950 border-t border-slate-900/60 mt-32 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Left */}
          <div className="flex items-center gap-3 py-1">
              <img 
                src={ypcLogo} 
                alt="Young Professionals Club Logo" 
                className="h-8 w-auto object-contain flex-shrink-0" 
              />
            </div>

          {/* Social Media Grid Linkages */}
          <div className="flex items-center space-x-4">
            {[
              { 
                name: 'LinkedIn', 
                url: 'https://linkedin.com', 
                iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' 
              },
              { 
                name: 'Instagram', 
                url: 'https://instagram.com', 
                iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' 
              },
              { 
                name: 'YouTube', 
                url: 'https://youtube.com', 
                iconPath: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' 
              }
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.name} page`}
                className="h-9 w-9 rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 group"
              >
                <svg 
                  className="w-4 h-4 fill-current group-hover:scale-105 transition-transform" 
                  viewBox="0 0 24 24"
                >
                  <path d={social.iconPath} />
                </svg>
              </a>
            ))}
          </div>

          {/* Rights Reserved Right */}
          <div className="text-center md:text-right">
            <p className="text-xs font-bold text-slate-500 tracking-wide uppercase">
              &copy; {new Date().getFullYear()} RCCG Og 10 YPC.
            </p>
          </div>

        </div>
      </footer>

      {/* FOOTER
      <footer className="py-8 bg-slate-950 text-center text-xs text-slate-600 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} RCCG Ogun 10 Province Young Professionals Club (YPC). Built for Kingdom Impact.</p>
      </footer> */}

    </div>
  );
}
