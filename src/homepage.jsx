import React, { useState } from 'react';
import logo from '../public/logo.png';
import mitesh from "./assets/Mitesh.JPG";
import yash from "./assets/Yash.png";

import { Sparkles, Mic, ArrowRight, Rocket, Scissors, Film, FileText, Image, Upload, Headphones, ChevronLeft, ChevronRight, ChevronDown, Star, DollarSign, Check, ZapIcon, Brain, Search, EarthIcon, Linkedin, Instagram, Mail, Menu, X } from 'lucide-react';

export default function TalkousMedia() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, []);

  React.useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(testimonialInterval);
  }, []);

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleBookCall = () => {
    window.open("https://calendly.com/talkousmedia/talkous-media", "_blank");
  };

  const handleContactUs = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSdQYpzPuvcTwM9f1grZ85W9ICp-vP285myzFx-DG03gZEg1lw/viewform", "_blank");
  };

  const founders = [
    {
      name: "Yash Chaprana",
      image: yash,
      description: "is a content-driven entrepreneur specializing in AI-powered systems, creator guidance, and strategic content development. He works with businesses and creators to build authority through podcasting and social media, focusing on clarity, positioning, and execution that drive long-term growth.",
      linkedin: "https://www.linkedin.com/in/yashchaprana/",
      instagram: "https://www.instagram.com/yashchapranaa/reels/",
      email: "mailto:yash@talkousmedia.com"
    },
    {
      name: "Mitesh Patil",
      image: mitesh,
      description: "is a TEDx speaker and entrepreneur who works closely with founders and creators on content ideation and online authority. His focus is simple: turning clear thinking into content that builds trust, credibility, and real influence over time.",
      linkedin: "https://www.linkedin.com/in/mitesh-patil-25a214390/",
      instagram: "https://www.instagram.com/mitesh_9207/",
      email: "mailto:mitesh@talkousmedia.com"
    }
  ];

  const slides = [
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "Monetization-Ready Growth Strategy",
      subtitle: "Views don't pay bills. Strategy does.",
      points: ["Authority positioning", "Funnel planning", "Execution roadmap"],
      footer: "👉 Audience → Influence → Income."
    },
    {
      icon: <ZapIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "Viral Short-Form Clips",
      subtitle: "Shorts aren't highlights. They're hooks.",
      points: ["Scroll-stopping openings", "Native multi-platform formats", "Punchy captions"],
      footer: "👉 Daily discovery without ads."
    },
    {
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "A/B Tested Thumbnails",
      subtitle: "One thumbnail = lazy. Multiple = intelligent.",
      points: ["Emotion-driven faces", "Curiosity gaps", "Data-backed testing"],
      footer: "👉 Higher CTR = free growth."
    },
    {
      icon: <Search className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "SEO-First Content Packaging",
      subtitle: "If you're not searchable, you're invisible.",
      points: ["Keyword-optimized titles", "Binge-friendly chapters", "Algorithm-friendly metadata"],
      footer: "👉 Long-term organic traffic."
    },
    {
      icon: <EarthIcon className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "Uploading & Distribution",
      subtitle: "You record. We handle the chaos.",
      points: ["Multi-platform scheduling", "Format perfection", "Consistent rhythm"],
      footer: "👉 Zero stress. Maximum reach."
    },
    {
      icon: <Headphones className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />,
      title: "Audio Platform Management",
      subtitle: "Serious podcasts live everywhere.",
      points: ["Episode formatting", "Show notes & descriptions", "Platform optimization"],
      footer: "👉 Professional audio presence."
    }
  ];

  const testimonials = [
    {
      name: "Matthew Z.",
      role: "Podcaster Host",
      text: "Talkous Media gets it. They don't just edit podcasts, they build real growth systems. They challenged how I was thinking about my show and rebuilt it into something that actually drives reach and opportunities. From content packaging to distribution, everything finally made sense. If you want your podcast to be more than just episodes, Talkous Media delivers.",
      initial: "M"
    },
    {
      name: "Kimi C.",
      role: "Podcast Creator",
      text: "Within a few months, my podcast reach increased significantly. Talkous Media handled everything from clips to publishing, which freed me up to focus on creating better content. The consistency and strategy made a noticeable difference in audience growth",
      initial: "K"
    },
    {
      name: "Erin K.",
      role: "Podcast Host",
      text: "Working with Talkous Media helped grow my podcast in a meaningful, sustainable way. They were communicative, organized, and extremely thorough. I've already recommended them to other podcasters who want to expand their reach without extra workload.",
      initial: "E"
    },
    {
      name: "Sarah M.",
      role: "Founder & Podcaster",
      text: "What impressed me most was the system. Talkous Media didn't just do tasks, they built a process that keeps my podcast growing month after month. Everything runs smoothly now without constant oversight from me.",
      initial: "S"
    },
    {
      name: "Bill B.",
      role: "Content Creator",
      text: "The Talkous Media team is the rare mix of creative and structured. They took care of editing, clips, thumbnails, and uploads while keeping everything aligned with growth goals. Communication was always clear and on time, which made working together easy.",
      initial: "B"
    }
  ];

  const faqs = [
    {
      question: "What exactly do you do for me?",
      answer: "You record your podcast. We handle everything else. That includes editing, YouTube optimization, short-form clips, SEO, thumbnails, uploading, distribution, and a 90-day growth and monetization strategy. You focus on your message while we turn it into content that grows your brand and audience automatically."
    },
    {
      question: "Who is this service best for?",
      answer: "We work with founders, coaches, creators, and experts who use content to grow their brand or business but don't have time to manage all the editing, posting, and optimization. If you've got something worth saying, we'll make sure it gets heard."
    },
    {
      question: "What if I'm just starting my podcast?",
      answer: "Perfect. Starting with a system is ten times smarter than figuring it out alone. We'll help you launch with professional branding, a clear strategy, and content that's ready to grow from day one."
    },
    {
      question: "How fast will I see results?",
      answer: "Most clients see noticeable growth within the first 30 to 60 days with better reach, engagement, and audience consistency. We also build a 90-day roadmap for measurable growth so you always know what's next."
    },
    {
      question: "Do I have to sign a long-term contract?",
      answer: "No. We don't lock clients in. Our plans are month-to-month because we believe results should earn retention, not contracts."
    },
    {
      question: "How does the process work?",
      answer: "You record your podcast. Upload the raw files to our shared drive. Our team handles editing, clips, SEO, thumbnails, and uploads. You get finished content and a monthly report showing your growth. It's plug and play. Record, upload, done."
    },
    {
      question: "Can you help me grow on YouTube and social media too?",
      answer: "Absolutely. That's one of our main goals. We create and optimize content for YouTube, Shorts, Reels, and TikTok so your podcast drives growth across every major platform."
    },
    {
      question: "What makes you different from regular editors or freelancers?",
      answer: "We're not just editors. We're a podcast growth system. Editors make things look good. We make them perform. Our focus is on audience growth, visibility, and monetization, not just video quality."
    },
    {
      question: "Can you help me monetize my podcast?",
      answer: "Yes. We build a 90-day monetization roadmap tailored to your goals. Whether that means sponsorships, product sales, or brand partnerships, we help you turn listeners into leads, not just views."
    },
    {
      question: "How much does it cost?",
      answer: "Packages start around $1,500 per month depending on your goals and deliverables. Full growth packages with long-form editing, clips, SEO, and strategy range between $2,500 and $4,000 per month. We'll give you a custom quote on a free strategy call so you know exactly what fits your goals."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Modern Mesh Grid & Gradient Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black"></div>
        
        {/* Animated mesh grid */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0 animate-mesh-move"
            style={{
              backgroundImage: `
                linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(236, 72, 153, 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 72, 153, 0.08) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
              backgroundPosition: '0 0, 0 0, 0 0, 0 0'
            }}
          ></div>
        </div>
        
        {/* Gradient orbs with mesh intersection effect */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px]">
          <div className="w-full h-full bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-float-mesh"></div>
        </div>
        
        <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px]">
          <div className="w-full h-full bg-gradient-to-tl from-pink-600/20 via-pink-500/10 to-transparent rounded-full blur-3xl animate-float-mesh-reverse"></div>
        </div>
        
        <div className="absolute top-[50%] left-[45%] w-[350px] h-[350px]">
          <div className="w-full h-full bg-gradient-to-br from-fuchsia-600/15 via-fuchsia-500/8 to-transparent rounded-full blur-3xl animate-float-mesh-slow"></div>
        </div>
        
        {/* Diagonal gradient beams */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-[-50%] left-[20%] w-[400px] h-[200%] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent rotate-45 animate-beam-slide"></div>
          <div className="absolute top-[-50%] right-[20%] w-[350px] h-[200%] bg-gradient-to-b from-transparent via-pink-500/15 to-transparent -rotate-45 animate-beam-slide-reverse"></div>
        </div>
        
        {/* Hexagon pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <path d="M50 0L93.3 25L93.3 62L50 87L6.7 62L6.7 25z" fill="none" stroke="rgba(168, 85, 247, 0.3)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" className="animate-hex-drift"/>
          </svg>
        </div>
        
        {/* Floating light particles */}
        <div className="absolute top-[20%] left-[30%] w-2 h-2 bg-purple-400/60 rounded-full animate-float-up blur-sm"></div>
        <div className="absolute top-[60%] right-[35%] w-3 h-3 bg-pink-400/60 rounded-full animate-float-up blur-sm" style={{ animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-[40%] left-[50%] w-2 h-2 bg-fuchsia-400/60 rounded-full animate-float-up blur-sm" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute top-[75%] right-[20%] w-3 h-3 bg-purple-300/60 rounded-full animate-float-up blur-sm" style={{ animationDelay: '1s', animationDuration: '9s' }}></div>
        
        {/* Radial gradient spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)] animate-pulse-subtle"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.15),transparent_50%)] animate-pulse-subtle" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <style jsx>{`
        @keyframes mesh-move {
          0% {
            background-position: 0 0, 0 0, 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
          }
        }
        
        @keyframes float-mesh {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        
        @keyframes float-mesh-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(1.05);
          }
          66% {
            transform: translate(20px, -20px) scale(0.95);
          }
        }
        
        @keyframes float-mesh-slow {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(15px, 15px) rotate(5deg) scale(1.1);
          }
        }
        
        @keyframes beam-slide {
          0%, 100% {
            transform: translateX(-100px) rotate(45deg);
            opacity: 0.15;
          }
          50% {
            transform: translateX(100px) rotate(45deg);
            opacity: 0.25;
          }
        }
        
        @keyframes beam-slide-reverse {
          0%, 100% {
            transform: translateX(100px) rotate(-45deg);
            opacity: 0.15;
          }
          50% {
            transform: translateX(-100px) rotate(-45deg);
            opacity: 0.25;
          }
        }
        
        @keyframes hex-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 43.5px);
          }
        }
        
        @keyframes float-up {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes pulse-subtle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-mesh-move {
          animation: mesh-move 30s linear infinite;
        }
        
        .animate-float-mesh {
          animation: float-mesh 20s ease-in-out infinite;
        }
        
        .animate-float-mesh-reverse {
          animation: float-mesh-reverse 25s ease-in-out infinite;
        }
        
        .animate-float-mesh-slow {
          animation: float-mesh-slow 30s ease-in-out infinite;
        }
        
        .animate-beam-slide {
          animation: beam-slide 15s ease-in-out infinite;
        }
        
        .animate-beam-slide-reverse {
          animation: beam-slide-reverse 18s ease-in-out infinite;
        }
        
        .animate-hex-drift {
          animation: hex-drift 20s linear infinite;
        }
        
        .animate-float-up {
          animation: float-up 12s ease-out infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 8s ease-in-out infinite;
        }
      `}</style>

      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl border-1 border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-8 font-mono text-base">
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </div>

              {/* Center Logo */}
              <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                <img src={logo} alt="logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
              </div>

              {/* CTA Button */}
              <a
                href='https://calendly.com/talkousmedia/talkous-media?month=2026-01'
                className="bg-gradient-to-r from-purple-200 via-purple-500 to-pink-400 text-black px-4 py-2 md:px-6 md:py-2.5 font-semibold text-sm md:text-base cursor-pointer transition-all duration-300 hover:shadow-[0_0_0_4px_rgba(168,85,247,0.35)] hover:opacity-95 active:scale-[0.98] rounded"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 space-y-3 font-mono">
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors py-2">Services</a>
                <a href="#results" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors py-2">Results</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-gray-400 hover:text-white transition-colors py-2">FAQ</a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-full border border-gray-400 mb-4 md:mb-6">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-gray-200 text-xs md:text-sm">800M+ Organic Views Generated</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[3.4rem] font-semibold mb-4 md:mb-6 font-sans leading-tight px-2">
              Turn Your <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Podcast</span> Into a{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Growth</span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Machine</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-4 md:mb-6 italic px-2">Without Lifting a Finger.</p>

            <p className="text-gray-400 font-semibold text-base md:text-lg mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              From editing to SEO to monetization, we handle it all and turn your podcast into a growth engine that builds your authority and attracts opportunity on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-4">
              <a href='https://calendly.com/talkousmedia/talkous-media?month=2026-01' target='_blank' className="w-full sm:w-auto bg-gradient-to-r from-purple-200 via-purple-500 to-pink-400 text-black px-6 py-3 md:px-8 md:py-4 font-semibold text-base md:text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 rounded">
                Get a FREE Strategy Call
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a href="#results" className="w-full sm:w-auto border border-white text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-colors rounded">
                View Our Results
              </a>
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border-2 border-white/40 hover:border-purple-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
              <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/BraLEKR4k_8?start=2"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <section className="py-8 md:py-12 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  800M+
                </div>
                <div className="text-gray-400 text-xs md:text-base">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  7+
                </div>
                <div className="text-gray-400 text-xs md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  10+
                </div>
                <div className="text-gray-400 text-xs md:text-base">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-1 md:mb-2">
                  25+
                </div>
                <div className="text-gray-400 text-xs md:text-base">Happy Clients</div>
              </div>
            </div>
          </section>
        </section>

        {/* Process Section */}
        <section id='services' className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-[2.5rem] md:text-[2.7rem] font-bold font-serif text-center mb-8 md:mb-12 px-2 leading-tight">
              Your Entire <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Podcast Growth System</span> Done for You.
            </h2>

            <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 md:mb-16 flex-wrap px-2">
              <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-4 rounded-2xl border font-semibold border-gray-700 text-sm md:text-base">
                <Mic className="w-4 h-4 md:w-5 md:h-5" />
                <span>You record</span>
              </div>
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-4 rounded-2xl border font-semibold border-gray-700 bg-purple-500/10 text-sm md:text-base">
                <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">We handle everything</span>
              </div>
              <ArrowRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              <div className="flex items-center gap-2 md:gap-3 px-3 py-2 md:px-6 md:py-4 rounded-2xl border font-semibold border-gray-700 text-sm md:text-base">
                <Rocket className="w-4 h-4 md:w-5 md:h-5" />
                <span>You grow</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-black border border-white rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold font-mono mb-6 md:mb-8 pb-4 md:pb-6 border-b border-white">You Do This</h3>
                <div className="flex items-start gap-4 md:gap-5 mt-6 md:mt-8">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Mic className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-base pt-1 md:pt-2">Record your podcast</span>
                </div>
              </div>

              <div className="bg-black border border-white/20 rounded-2xl p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-bold font-mono mb-3 md:mb-4 pb-3 md:pb-4 border-b border-white/20">
                  <span className="text-purple-400">We Do Everything Else</span>
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    { icon: Scissors, text: "High-quality podcast video editing" },
                    { icon: Film, text: "Creation of engaging clips from the most interesting podcast moments" },
                    { icon: FileText, text: "Write SEO titles & descriptions" },
                    { icon: Image, text: "Design + A/B test thumbnails" },
                    { icon: Rocket, text: "Build your 90-day growth roadmap" },
                    { icon: Upload, text: "Upload & distribute across all platforms" },
                    { icon: Headphones, text: "Manage Spotify, Apple, & audio platforms" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 md:gap-5">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-sm md:text-base pt-1 md:pt-2">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Carousel */}
        <section id='results' className="py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-900/40 via-gray-900/30 to-transparent backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 md:mb-4 px-2">
              One Podcast System. Every Platform. <span className="text-purple-400">Real Growth.</span>
            </h2>
            <p className="text-center text-gray-400 text-base md:text-lg mb-3 md:mb-4">We Don't Just Edit Podcasts.</p>
            <p className="text-center text-purple-400 text-lg md:text-xl mb-8 md:mb-12">We Engineer Reach, Retention & Revenue.</p>

            <div className="relative px-8 md:px-12">
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 hover:scale-110"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              </button>

              <div className="max-w-2xl mx-auto overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, idx) => (
                    <div key={idx} className="min-w-full px-1 md:px-2">
                      <div className="bg-[#1d1d1d] border-2 border-white/20 p-4 md:p-6 rounded-xl transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                        <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                          <div className="transition-transform duration-500 hover:scale-110 hover:rotate-12">
                            {slide.icon}
                          </div>
                          <h3 className="text-lg md:text-2xl font-bold">{slide.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">{slide.subtitle}</p>
                        <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          {slide.points.map((point, pointIdx) => (
                            <div key={pointIdx} className="flex items-center gap-2 md:gap-3 transition-all duration-300 hover:translate-x-2">
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm md:text-base">{point}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-base md:text-xl">{slide.footer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
                disabled={currentSlide === slides.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed z-10 hover:scale-110"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
              </button>
            </div>

            <div className="flex justify-center gap-2 mt-6 md:mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'bg-white w-6 md:w-8' : 'bg-gray-600 w-1.5 md:w-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <section className="py-12 md:py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Client Testimonials</h2>

              <div className="relative px-8 md:px-0">
                <div className="max-w-4xl mx-auto overflow-hidden">
                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                  >
                    {testimonials.map((testimonial, idx) => (
                      <div key={idx} className="min-w-full px-1 md:px-2">
                        <div className="bg-[#1d1d1d] border-2 border-white/20 p-4 md:p-6 rounded-xl transition-all duration-500 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                          <div className="flex gap-1 mb-4 md:mb-6">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-white text-white transition-transform duration-300 hover:scale-125" />
                            ))}
                          </div>
                          <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                            {testimonial.text}
                          </p>
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-lg md:text-xl transition-transform duration-300 hover:scale-110">
                              {testimonial.initial}
                            </div>
                            <div>
                              <div className="font-bold text-sm md:text-base">{testimonial.name}</div>
                              <div className="text-gray-400 text-xs md:text-sm">{testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6 md:mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                      idx === currentTestimonial ? 'bg-white w-6 md:w-8' : 'bg-gray-600 w-1.5 md:w-2 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* Founders Section */}
        <section className="bg-gradient-to-b from-transparent via-gray-900/20 to-transparent backdrop-blur-sm text-white py-12 md:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Founders
              </h2>
              <p className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
                Leadership with Execution Experience
              </p>
              <p className="text-gray-400 text-sm md:text-base max-w-4xl font-sans mx-auto leading-relaxed px-2">
                <span className="font-semibold text-white">Talkous Media</span> was founded by two partners who work directly with creators, founders, and brands to build visibility through social media and podcast content. The agency operates with a hands-on approach, focusing on consistency, quality, and systems that scale content without losing authenticity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-white rounded-3xl translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2 md:group-hover:translate-x-3 md:group-hover:translate-y-3 transition-all duration-400 ease-out"></div>

                  <div className="relative bg-zinc-900 rounded-2xl p-4 md:p-6 border border-zinc-800 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                      <div className="flex-shrink-0 mx-auto sm:mx-0">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border-4 border-zinc-800 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">
                          {founder.name}
                        </h3>

                        <div className="flex gap-2 mb-3 md:mb-4 justify-center sm:justify-start">
                          <a
                            href={founder.linkedin}
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all duration-300 hover:scale-110"
                          >
                            <Linkedin size={14} className="md:w-4 md:h-4 text-gray-300" />
                          </a>
                          <a
                            href={founder.instagram}
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all duration-300 hover:scale-110"
                          >
                            <Instagram size={14} className="md:w-4 md:h-4 text-gray-300" />
                          </a>
                          <a
                            href={founder.email}
                            className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-all duration-300 hover:scale-110"
                          >
                            <Mail size={14} className="md:w-4 md:h-4 text-gray-300" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed mt-3 md:mt-4 text-center sm:text-left">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-400 font-bold mb-2 text-sm md:text-base">FAQS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-center mb-4 md:mb-6 px-2 leading-tight">
              Questions? <span className="text-purple-400">We've Got Answers</span>
            </h2>
            <p className="text-center font-semibold font-sans text-gray-400 mb-8 md:mb-12 text-sm md:text-base">Everything you need to know about building your digital authority.</p>

            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-white/20 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full px-4 py-4 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                  >
                    <span className="font-semibold font-mono text-sm md:text-lg pr-3 md:pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-500 ease-out ${
                        openFaq === idx ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className={`px-4 pb-4 md:px-8 md:pb-6 transition-all duration-500 ${
                      openFaq === idx ? 'translate-y-0' : '-translate-y-4'
                    }`}>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-900/30 via-gray-900/40 to-transparent backdrop-blur-md border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono mb-3 md:mb-4 px-2 leading-tight">
              Ready to Build Your <span className="text-purple-400">Digital Authority</span>?
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-semibold font-sans mb-6 md:mb-8 px-2">
              Join 25+ entrepreneurs, coaches, and personal brands who've transformed their digital presence with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4">
              <button onClick={handleBookCall} className="w-full sm:w-auto bg-gradient-to-r from-purple-100 via-purple-400 to-pink-500 text-black px-6 py-3 md:px-8 md:py-4 font-semibold text-base md:text-lg hover:opacity-90 transition-opacity flex items-center justify-center font-mono gap-2 rounded">
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button onClick={handleContactUs} className="w-full sm:w-auto border border-white text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-colors rounded">
                Contact Us
              </button>
            </div>
          </div>

          <section id="calendly-section" className="py-8 md:py-12 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-2xl overflow-hidden">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/talkousmedia/talkous-media"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
              </div>
            </div>
          </section>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-gradient-to-b from-gray-900/30 to-black backdrop-blur-sm py-4 md:py-4 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex items-center justify-center md:justify-start">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/20 bg-black flex items-center justify-center hover:border-purple-500 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]">
                  <img src={logo} alt="logo" className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-full" />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400">
                <a href="mailto:info@talkousmedia.com" className="hover:text-white font-serif transition-colors">
                  info@talkousmedia.com
                </a>
                <a href="#" className="hover:text-white transition-colors font-serif">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors font-serif">Terms of Service</a>
              </div>

              <div className="text-xs md:text-sm text-gray-400 font-serif text-center md:text-right">
                © 2026 Talkous Media. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}