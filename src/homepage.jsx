import React, { useState } from 'react';
import logo from '../public/logo.png'
import { Sparkles, Mic, ArrowRight, Rocket, Scissors, Film, FileText, Image, Upload, Headphones, ChevronLeft, ChevronRight, ChevronDown, Star, DollarSign, Check, ZapIcon, Brain, Search, EarthIcon, Linkedin, Instagram, Mail } from 'lucide-react';

export default function TalkousMedia() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showCalendly, setShowCalendly] = useState(false);

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
    window.open(
      "https://calendly.com/talkousmedia/talkous-media",
      "_blank"
    );
  };

  const handleContactUs = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdQYpzPuvcTwM9f1grZ85W9ICp-vP285myzFx-DG03gZEg1lw/viewform",
      "_blank"
    );
  };
  const founders = [
    {
      name: "Yash Chaprana",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      description: "is a content-driven entrepreneur specializing in AI-powered systems, creator guidance, and strategic content development. He works with businesses and creators to build authority through podcasting and social media, focusing on clarity, positioning, and execution that drive long-term growth.",
      linkedin: "#",
      instagram: "#",
      email: "mailto:yash@talkousmedia.com"
    },
    {
      name: "Mitesh Patil",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      description: "is a TEDx speaker and entrepreneur who works closely with founders and creators on content ideation and online authority. His focus is simple: turning clear thinking into content that builds trust, credibility, and real influence over time.",
      linkedin: "#",
      instagram: "#",
      email: "mailto:mitesh@talkousmedia.com"
    }
  ];

  const slides = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Monetization-Ready Growth Strategy",
      subtitle: "Views don't pay bills. Strategy does.",
      points: [
        "Authority positioning",
        "Funnel planning",
        "Execution roadmap"
      ],
      footer: "👉 Audience → Influence → Income."
    }, {
      icon: <ZapIcon className="w-8 h-8 text-yellow-400" />,
      title: "Viral Short-Form Clips",
      subtitle: "Shorts aren't highlights. They're hooks.",
      points: [
        "Scroll-stopping openings",
        "Native multi-platform formats",
        "Punchy captions"
      ],
      footer: "👉 Daily discovery without ads."
    }, {
      icon: <Brain className="w-8 h-8 text-yellow-400" />,
      title: "A/B Tested Thumbnails",
      subtitle: "One thumbnail = lazy. Multiple = intelligent.",
      points: [
        "Emotion-driven faces",
        "Curiosity gaps",
        "Data-backed testing"
      ],
      footer: "👉 Higher CTR = free growth."
    }, {
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      title: "SEO-First Content Packaging",
      subtitle: "If you're not searchable, you're invisible.",
      points: [
        "Keyword-optimized titles",
        "Binge-friendly chapters",
        "Algorithm-friendly metadata"
      ],
      footer: "👉 Long-term organic traffic."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-400" />,
      title: "Monetization-Ready Growth Strategy",
      subtitle: "Views don't pay bills. Strategy does.",
      points: [
        "Authority positioning",
        "Funnel planning",
        "Execution roadmap"
      ],
      footer: "👉 Audience → Influence → Income."
    },
    {
      icon: <EarthIcon className="w-8 h-8 text-yellow-400" />,
      title: "Uploading & Distribution",
      subtitle: "You record. We handle the chaos.",
      points: [
        "Multi-platform scheduling",
        "Format perfection",
        "Consistent rhythm"
      ],
      footer: "👉 Zero stress. Maximum reach."
    },
    {
      icon: <Headphones className="w-8 h-8 text-yellow-400" />,
      title: "Audio Platform Management",
      subtitle: "Serious podcasts live everywhere.",
      points: [
        "Episode formatting",
        "Show notes & descriptions",
        "Platform optimization"
      ],
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
    },
    {
      name: "Erica H.",
      role: "Podcast Producer",
      text: "Our podcast was small but growing, and Talkous Media helped us think long-term. They set up systems for content distribution, improved our visibility, and helped us plan for monetization. Choosing to work with them was one of our best decisions.",
      initial: "E"
    },
    {
      name: "Jordan G.",
      role: "Podcast Host",
      text: "Launching and growing a podcast can be overwhelming, but Talkous Media made the process simple. They handled the backend execution while guiding us with a clear growth plan. It felt like having a dedicated team focused on our success.",
      initial: "J"
    },
    {
      name: "Alex R.",
      role: "Business Podcaster",
      text: "Talkous Media turned my raw recordings into polished, high-performing content across YouTube and audio platforms. The clips, SEO, and publishing were handled consistently, which finally gave my podcast momentum.",
      initial: "A"
    },
    {
      name: "Sarah M.",
      role: "Founder & Podcaster",
      text: "What impressed me most was the system. Talkous Media didn't just do tasks, they built a process that keeps my podcast growing month after month. Everything runs smoothly now without constant oversight from me.",
      initial: "S"
    },
    {
      name: "Olivia P.",
      role: "Consultant & Podcast Host",
      text: "Talkous Media helped transform my podcast into a real brand asset. From editing and short-form clips to publishing and strategy, everything is handled end to end. I finally feel confident that my podcast is working for me.",
      initial: "O"
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
    },
    {
      question: "What if my podcast doesn't grow?",
      answer: "We back our results. If your podcast doesn't grow in 90 days, we'll work for free until it does. No fluff, no excuses, just results."
    },
    {
      question: "What do you need from me each month?",
      answer: "Just your recordings. We handle everything else including editing, posting, strategy, and reporting. You stay focused on your message while we grow your audience."
    },
    {
      question: "Can you manage my existing podcast or rebrand it?",
      answer: "Yes. Whether you're relaunching, rebranding, or scaling, we'll plug into your current setup and rebuild it for growth. We can refresh your titles, visuals, SEO, and clips for a stronger relaunch."
    },
    {
      question: "Do I need to be on video?",
      answer: "No, but video performs better for growth. We can still create powerful content from audio-only shows. If you decide to switch to video, we'll help you transition smoothly."
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/60 backdrop-blur-xl border-1 border-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

          <div className="flex items-center gap-12">
            <div className="hidden md:flex items-center gap-8 font-mono text-base">
              <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
              <a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a>
              <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>

          {/* Center Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <img src={logo} alt="logo" className="w-22 h-22" />
          </div>

          <a
            href='https://calendly.com/talkousmedia/talkous-media?month=2026-01'
            className="bg-gradient-to-r from-purple-200 via-purple-500 to-pink-400 text-black px-6 py-2.5 font-semibold text-base cursor-pointer
      transition-all duration-300
      hover:shadow-[0_0_0_4px_rgba(168,85,247,0.35)]
      hover:opacity-95 active:scale-[0.98]"
          >
            Get Started
          </a>
        </div>
      </nav>


      {/* Hero Section */}
      <section className="pt-30 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-400 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-gray-200 text-sm">800M+ Organic Views Generated</span>
          </div>


          <h1 className="text-4xl md:text-[3.4rem] font-semibold mb-6 font-sans leading-tight">
            Turn Your <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Podcast</span> Into a{' '}
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Growth</span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">Machine</span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-400 mb-6 italic">Without Lifting a Finger.</p>

          <p className="text-gray-400 font-semibold text-lg mb-8 max-w-3xl mx-auto">
            From editing to SEO to monetization, we handle it all and turn your podcast into a growth engine that builds your authority and attracts opportunity on autopilot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href='https://calendly.com/talkousmedia/talkous-media?month=2026-01' target='_blank' className="bg-gradient-to-r from-purple-200 via-purple-500 to-pink-400 text-black px-8 py-4  font-semibold text-lg hover:opacity-90 transition-opacity flex items-center gap-2">
              Get a FREE Strategy Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#results" className="border border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-black transition-colors">
              View Our Results
            </a>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl max-w-4xl mx-auto border-2 border-white/40">
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
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-2">
                800M+
              </div>
              <div className="text-gray-400">Views Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-2">
                7+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-2">
                10+
              </div>
              <div className="text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent mb-2">
                25+
              </div>
              <div className="text-gray-400">Happy Clients</div>
            </div>
          </div>
        </section>

      </section>


      {/* Process Section */}
      <section id='services' className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[2.5rem] md:text-[2.7rem] font-bold font-serif text-center mb-12">
            Your Entire <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent ">Podcast Growth System</span> Done for You.
          </h2>

          <div className="flex items-center justify-center gap-4 mb-16 flex-wrap">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border font-semibold border-gray-700">
              <Mic className="w-5 h-5" />
              <span>You record</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-600" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border font-semibold border-gray-700 bg-purple-500/10">
              <span className="bg-gradient-to-r from-purple-500 to-pink-400  bg-clip-text text-transparent">We handle everything</span>
            </div>
            <ArrowRight className="w-6 h-6 text-gray-600" />
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border font-semibold border-gray-700">
              <Rocket className="w-5 h-5" />
              <span>You grow</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-black border border-white rounded-2xl p-8">
              <h3 className="text-xl font-bold font-mono mb-8 pb-6 border-b border-white">You Do This</h3>
              <div className="flex items-start gap-5 mt-8">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <Mic className="w-5 h-5" />
                </div>
                <span className="text-base pt-2">Record your podcast</span>
              </div>
            </div>

            <div className="bg-black border border-white/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold font-mono mb-4 pb-4 border-b border-white/20">
                <span className="text-purple-400">We Do Everything Else</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">High-quality podcast video editing</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Film className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Creation of engaging clips from the most interesting podcast moments</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Write SEO titles & descriptions</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Image className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Design + A/B test thumbnails</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Build your 90-day growth roadmap</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Upload & distribute across all platforms</span>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-5 h-5" />
                  </div>
                  <span className="text-base pt-2">Manage Spotify, Apple, & audio platforms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Features Carousel */}
      <section id='results' className="py-16 px-6 bg-[#131313]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            One Podcast System. Every Platform. <span className="text-purple-400">Real Growth.</span>
          </h2>
          <p className="text-center text-gray-400 text-lg mb-4">We Don't Just Edit Podcasts.</p>
          <p className="text-center text-purple-400 text-xl mb-12">We Engineer Reach, Retention & Revenue.</p>

          <div className="relative">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-2xl mx-auto overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, idx) => (
                  <div key={idx} className="min-w-full px-2">
                    <div className="bg-[#1d1d1d] border-2 border-white/20 p-6 rounded-xl">
                      <div className="flex items-center gap-4 mb-6">
                        {slide.icon}
                        <h3 className="text-2xl font-bold">{slide.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-6">{slide.subtitle}</p>
                      <div className="space-y-3 mb-6">
                        {slide.points.map((point, pointIdx) => (
                          <div key={pointIdx} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{point}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xl">{slide.footer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
              disabled={currentSlide === slides.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-white w-8' : 'bg-gray-600 w-2'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Client Testimonials</h2>

            <div className="relative">
              <div className="max-w-4xl mx-auto overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, idx) => (
                    <div key={idx} className="min-w-full px-2">
                      <div className="bg-[#1d1d1d] border-2 border-white/20 p-6 rounded-xl">
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-white text-white" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-xl">
                            {testimonial.initial}
                          </div>
                          <div>
                            <div className="font-bold">{testimonial.name}</div>
                            <div className="text-gray-400 text-sm">{testimonial.role}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentTestimonial ? 'bg-white w-8' : 'bg-gray-600 w-2'
                    }`}
                />
              ))}
            </div>
          </div>
        </section>
      </section>

      {/*Founders Section*/}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-mono mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Founders
            </h2>
            <p className="text-2xl font-semibold text-white mb-4">
              Leadership with Execution Experience
            </p>
            <p className="text-gray-400 max-w-4xl font-sans mx-auto leading-relaxed">
              <span className="font-semibold text-white">Talkous Media</span> was founded by two partners who work directly with creators, founders, and brands to build visibility through social media and podcast content. The agency operates with a hands-on approach, focusing on consistency, quality, and systems that scale content without losing authenticity.
            </p>
          </div>

          {/* Founders Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div key={index} className="relative group cursor-pointer">
                {/* Background box that appears on hover - bottom and right only */}
                <div className="absolute inset-0 bg-white rounded-3xl translate-x-0 translate-y-0 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-400 ease-out"></div>



                {/* Main card - Horizontal layout */}
                <div className="relative bg-zinc-900 rounded-2xl p-6 border border-zinc-800 h-full flex flex-col">
                  <div className="flex items-start gap-6">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-zinc-800"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Name */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {founder.name}
                      </h3>

                      {/* Social Icons */}
                      <div className="flex gap-2 mb-4">
                        <a
                          href={founder.linkedin}
                          className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                          <Linkedin size={16} className="text-gray-300" />
                        </a>
                        <a
                          href={founder.instagram}
                          className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                          <Instagram size={16} className="text-gray-300" />
                        </a>
                        <a
                          href={founder.email}
                          className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                        >
                          <Mail size={16} className="text-gray-300" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Description - Full width below */}
                  <p className="text-gray-400 text-sm leading-relaxed mt-4">
                    {founder.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-400 font-bold mb-2">FAQS</p>
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-center mb-6">
            Questions? <span className="text-purple-400">We've Got Answers</span>
          </h2>
          <p className="text-center font-semibold font-sans text-gray-400 mb-12">Everything you need to know about building your digital authority.</p>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-white/20 rounded-2xl overflow-hidden transition-all duration-500">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-semibold font-mano text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 flex-shrink-0 transition-transform duration-500 ease-out ${openFaq === idx ? 'rotate-180' : 'rotate-0'
                      }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className={`px-8 pb-6 transition-all duration-500 ${openFaq === idx ? 'translate-y-0' : '-translate-y-4'
                    }`}>
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#131313]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4">
            Ready to Build Your <span className="text-purple-400">Digital Authority</span>?
          </h2>
          <p className="text-gray-400 text-base font-semibold font-sans mb-8">
            Join 25+ entrepreneurs, coaches, and personal brands who've transformed their digital presence with us.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={handleBookCall} className="bg-gradient-to-r from-purple-100 via-purple-400 to-pink-500 text-black px-8 py-4 font-semibold text-lg hover:opacity-90 transition-opacity flex items-center font-mono gap-2">
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={handleContactUs} className="border border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-black transition-colors rounded">
              Contact Us
            </button>
          </div>
        </div>

        <section id="calendly-section" className="py-12 px-6">
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
      <footer className="border-t border-white bg-[#131313] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 rounded-full border-2 border-white/20 bg-black flex items-center justify-center">
              <div className="flex items-center gap-1">
                <img src={logo} alt="logo" className="w-24 h-24 object-contain" />
              </div>
            </div>
          </div>


          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <a href="mailto:info@talkousmedia.com" className="hover:text-white font-serif transition-colors">
              info@talkousmedia.com
            </a>
            <a href="#" className="hover:text-white transition-colors font-serif">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors font-serif">Terms of Service</a>
          </div>

          <div className="text-sm text-gray-400 font-serif">
            © 2026 Talkous Media. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}