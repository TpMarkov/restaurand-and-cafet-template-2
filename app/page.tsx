"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations with parallax
      gsap.to(".hero-main-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Hero title stagger animation
      gsap.to(".hero-title-char", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: {
          amount: 0.5,
          from: "start",
        },
        delay: 0.2,
      });

      // Hero subtitle with delay
      gsap.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.8,
      });

      // Feature cards reveal with scroll trigger
      gsap.to(".feature-card", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Menu items reveal
      gsap.utils.toArray(".menu-category").forEach((item: any) => {
        gsap.from(item, {
          x: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Gallery advanced reveal with parallax
      gsap.utils.toArray(".gallery-item").forEach((item: any, i) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: i * 0.12,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Add parallax to each item
        gsap.to(item, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: ".gallery-section",
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        });
      });

      // Section dividers animate on scroll
      gsap.utils.toArray(".luxury-divider").forEach((divider: any) => {
        gsap.from(divider, {
          width: "0%",
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: divider,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="min-h-screen bg-flor-light">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Different approach */}
      <HeroSection />

      {/* Features Section - New */}
      <FeaturesSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Experience Section - New */}
      <ExperienceSection />

      {/* Reservations Section */}
      <ReservationsSection />

      {/* Contact/Footer Section */}
      <ContactSection />
    </main>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-flor-primary/95 backdrop-blur-2xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Luxury minimalist */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className={`text-2xl font-serif font-bold tracking-widest transition-colors duration-500 ${
                isScrolled ? "text-flor-accent" : "text-flor-accent"
              }`}
            >
              FLOR
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {["Features", "Menu", "Gallery", "Experience", "Reservations"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-xs tracking-[0.15em] uppercase font-bold transition-all duration-300 relative group ${
                    isScrolled
                      ? "text-white hover:text-flor-accent"
                      : "text-white/80 hover:text-flor-accent"
                  }`}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flor-accent group-hover:w-full transition-all duration-500" />
                </a>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-flor-accent hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-flor-primary/98 border-t border-flor-accent/20">
            <div className="px-8 py-8 space-y-6">
              {[
                "Features",
                "Menu",
                "Gallery",
                "Experience",
                "Reservations",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-xs tracking-[0.15em] uppercase font-bold text-white hover:text-flor-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  // Split the title into characters for stagger animation
  const titleText = "CULINARY ELEGANCE";
  const chars = titleText.split("");

  return (
    <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden bg-flor-primary">
      {/* Background image with parallax - IMPORTANT: REPLACE WITH MOODY RESTAURANT INTERIOR IMAGE */}
      <div className="hero-main-image absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1768697358700-44e616a8df8a?w=1080&q=80"
          alt="Luxury restaurant ambiance - Replace with your moody, sophisticated dining atmosphere photo"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-flor-primary/60 via-flor-primary/40 to-flor-primary/80" />
      </div>

      {/* Geometric accent elements */}
      <div className="absolute top-20 right-20 w-96 h-96 border-2 border-flor-accent/10 rounded-full opacity-50 z-0" />
      <div className="absolute bottom-40 left-10 w-72 h-72 border-2 border-flor-accent/10 rounded-full opacity-30 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <p
          className="hero-subtitle text-flor-accent text-xs tracking-[0.25em] uppercase font-bold mb-8"
          style={{ transform: "translateY(20px)", opacity: 0 }}
        >
          Refined Dining Experience
        </p>

        {/* Staggered Character Animation */}
        <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 tracking-tight">
          {chars.map((char, i) => (
            <span
              key={i}
              className="hero-title-char inline-block"
              style={{ transform: "translateY(40px)", opacity: 0 }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light mb-10">
          Where tradition meets innovation. Experience gastronomy reimagined
          with precision, passion, and artistry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#reservations" className="btn-primary">
            RESERVE A TABLE
          </a>
          <a href="#menu" className="btn-secondary">
            EXPLORE MENU
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-5 h-5 text-flor-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: "Curated Menu",
      description: "Seasonally inspired dishes crafted by award-winning chefs",
    },
    {
      title: "Wine Selection",
      description: "Carefully selected vintages from around the world",
    },
    {
      title: "Atmosphere",
      description: "Luxury ambiance designed for memorable moments",
    },
    {
      title: "Expertise",
      description: "20+ years of culinary excellence and refinement",
    },
  ];

  return (
    <section
      id="features"
      className="features-section py-32 bg-flor-light relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <p className="section-subtitle text-flor-accent">
            WHAT SETS US APART
          </p>
          <h2 className="section-title text-flor-primary">
            Premium Experience
          </h2>
          <div className="luxury-divider w-32 mx-auto mt-8" />
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card bg-white p-10 border-l-4 border-flor-accent opacity-0 translate-y-12"
              style={{
                transitionProperty: "all",
                transitionDuration: "0.8s",
              }}
            >
              <h3 className="text-xl font-serif font-bold text-flor-primary mb-4">
                {feature.title}
              </h3>
              <p className="text-flor-gray leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const menuCategories = [
    {
      name: "SIGNATURE",
      items: [
        {
          name: "Pan-Seared Foie Gras",
          description: "With brioche and fig reduction",
          price: "42",
        },
        {
          name: "Maine Lobster",
          description: "Drawn butter and seasonal vegetables",
          price: "68",
        },
        {
          name: "Wagyu A5",
          description: "Japanese premium beef with truffle jus",
          price: "85",
        },
      ],
    },
    {
      name: "SEASONAL",
      items: [
        {
          name: "Heirloom Tomato",
          description: "Burrata, basil oil, and aged balsamic",
          price: "24",
        },
        {
          name: "Wild Mushroom Risotto",
          description: "Parmesan cream and black truffle",
          price: "38",
        },
        {
          name: "Dover Sole",
          description: "Lemon brown butter and fingerling potatoes",
          price: "58",
        },
      ],
    },
    {
      name: "DESSERTS",
      items: [
        {
          name: "Chocolate Decadence",
          description: "70% cacao with gold leaf and berries",
          price: "16",
        },
        {
          name: "Crème Brûlée",
          description: "Madagascar vanilla and caramelized sugar",
          price: "14",
        },
        {
          name: "Lemon Tart",
          description: "Mercier champagne sabayon and candied zest",
          price: "15",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24">
          <p className="section-subtitle text-flor-accent">
            SEASONAL OFFERINGS
          </p>
          <h2 className="section-title text-flor-primary">Our Menu</h2>
          <div className="luxury-divider w-32 mt-8" />
        </div>

        {/* Menu Grid - 3 Columns */}
        <div className="grid lg:grid-cols-3 gap-12">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="menu-category bg-flor-light p-12 border-t-4 border-flor-accent relative"
            >
              {/* Category title with accent */}
              <h3 className="text-2xl font-serif font-bold text-flor-primary mb-12 tracking-widest">
                {category.name}
              </h3>

              {/* Menu items */}
              <div className="space-y-8">
                {category.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className={`${idx < category.items.length - 1 ? "pb-8 border-b border-flor-accent/20" : ""}`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="text-lg font-serif text-flor-primary font-bold flex-1">
                        {item.name}
                      </h4>
                      <span className="text-flor-accent font-bold text-lg">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm text-flor-gray italic">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  // Different gallery layout - masonry-inspired with parallax
  // IMPORTANT: Replace these image paths with your own restaurant photography
  const images = [
    {
      src: "https://images.unsplash.com/photo-1750943082012-efe6d2fd9e45?w=1080&q=80",
      alt: "Signature dish presentation - Replace with high-end plating photo",
      cols: "col-span-1 md:col-span-2 md:row-span-2",
      height: "h-96 md:h-full",
    },
    {
      src: "https://images.unsplash.com/photo-1768697358705-c1b60333da35?w=1080&q=80",
      alt: "Intimate dining ambiance - Replace with cozy interior lighting",
      cols: "col-span-1",
      height: "h-64",
    },
    {
      src: "https://images.unsplash.com/photo-1769955821416-9273532bb148?w=1080&q=80",
      alt: "Chef in action - Replace with open kitchen or chef photo",
      cols: "col-span-1",
      height: "h-64",
    },
    {
      src: "https://images.unsplash.com/photo-1750943081248-833d71a2ab8e?w=1080&q=80",
      alt: "Wine and dessert pairing - Replace with tableware/service detail",
      cols: "col-span-1 md:col-span-2",
      height: "h-64",
    },
  ];

  return (
    <section
      id="gallery"
      className="gallery-section py-32 bg-flor-primary relative"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24">
          <p className="section-subtitle text-flor-accent">
            VISUAL STORYTELLING
          </p>
          <h2 className="section-title text-white">Gallery Moments</h2>
          <div className="luxury-divider w-32 mt-8" />
        </div>

        {/* Masonry Gallery with Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`gallery-item ${image.cols} ${image.height} relative overflow-hidden group bg-flor-primary/50 border border-flor-accent/20`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-75"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-flor-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-sm font-serif italic">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-flor-accent/5 to-transparent pointer-events-none" />
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 bg-flor-light relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 geometric-grid" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24 text-center">
          <p className="section-subtitle text-flor-accent">BEYOND THE PLATE</p>
          <h2 className="section-title text-flor-primary">
            The Flor Experience
          </h2>
          <div className="luxury-divider w-32 mx-auto mt-8" />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - IMPORTANT: REPLACE WITH WINE SERVICE OR FINE DINING DETAIL IMAGE */}
          <div className="relative h-96 lg:h-[500px] bg-flor-primary rounded-none overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1755706181418-24ff8e977558?w=1080&q=80"
              alt="Premium wine service and luxury dining experience - Replace with your service detail photo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-flor-primary/40 to-transparent" />
          </div>

          {/* Content */}
          <div>
            <p className="text-flor-accent font-bold tracking-widest uppercase text-sm mb-6">
              Exceptional Service
            </p>
            <h3 className="text-4xl font-serif font-bold text-flor-primary mb-8">
              Personalized Moments
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-serif font-bold text-flor-primary mb-3">
                  Expert Sommelier Guidance
                </h4>
                <p className="text-flor-gray leading-relaxed">
                  Our wine specialists craft perfect pairings for each course,
                  elevating your gastronomic journey.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-flor-primary mb-3">
                  Bespoke Tasting Menus
                </h4>
                <p className="text-flor-gray leading-relaxed">
                  Customized dining experiences tailored to your preferences,
                  dietary needs, and gastronomy interests.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-serif font-bold text-flor-primary mb-3">
                  Private Dining Available
                </h4>
                <p className="text-flor-gray leading-relaxed">
                  Exclusive spaces designed for intimate gatherings,
                  celebrations, and corporate events.
                </p>
              </div>

              <a href="#reservations" className="btn-primary inline-block mt-6">
                PLAN YOUR VISIT
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Accent shapes */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 border-2 border-flor-accent/10 rounded-full opacity-30 pointer-events-none" />
    </section>
  );
}

function ReservationsSection() {
  return (
    <section
      id="reservations"
      className="py-32 bg-flor-primary relative overflow-hidden"
    >
      {/* Background geometric */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 border-2 border-flor-accent/20 rounded-full opacity-50" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] border-2 border-flor-accent/10 rounded-full opacity-20" />

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle text-flor-accent">SECURE YOUR TABLE</p>
          <h2 className="section-title text-white">Make a Reservation</h2>
          <div className="luxury-divider w-32 mx-auto mt-8" />
        </div>

        {/* Luxury Form */}
        <form className="bg-flor-light rounded-none p-12 md:p-16 border border-flor-accent/30">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Date, Time, Guests */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
                Date
              </label>
              <input
                type="date"
                className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
                Time
              </label>
              <select className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none">
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
                <option>10:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
                Party Size
              </label>
              <select className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6 Guests</option>
                <option>6+ Guests</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label className="block text-xs text-flor-primary font-bold tracking-widest mb-4 uppercase">
              Special Requests
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-4 bg-white border-2 border-flor-accent/30 text-flor-primary font-medium transition-all duration-300 focus:border-flor-accent focus:outline-none resize-none"
              placeholder="Dietary preferences, special occasions, wine preferences..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button type="submit" className="btn-primary">
              COMPLETE RESERVATION
            </button>
            <p className="text-flor-gray text-xs mt-6">
              We will confirm your reservation within 2 hours
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-flor-primary text-white py-24 border-t-2 border-flor-accent"
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-16">
          {/* Brand Statement */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-flor-accent mb-6 tracking-widest">
              FLOR
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Culinary excellence meets refined ambiance. An experience designed
              for those who appreciate the art of gastronomy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-flor-accent uppercase tracking-[0.15em] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="#menu"
                  className="text-white/70 hover:text-flor-accent transition-colors duration-300"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/70 hover:text-flor-accent transition-colors duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#reservations"
                  className="text-white/70 hover:text-flor-accent transition-colors duration-300"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-white/70 hover:text-flor-accent transition-colors duration-300"
                >
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xs font-bold text-flor-accent uppercase tracking-[0.15em] mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="text-white/70">
                <span className="font-bold">Address</span>
                <br />
                123 Gastronomic Lane
                <br />
                New York, NY 10001
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="text-white/70 hover:text-flor-accent transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@florestaurant.com"
                  className="text-white/70 hover:text-flor-accent transition-colors"
                >
                  hello@florestaurant.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs font-bold text-flor-accent uppercase tracking-[0.15em] mb-6">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-flor-accent">5PM - 11PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-flor-accent">5PM - 12AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-flor-accent">4PM - 10PM</span>
              </li>
              <li className="pt-2 border-t border-white/10 mt-3">
                <span className="text-xs italic">
                  Closed on select holidays
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="luxury-divider w-full my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Flor Restaurant. All rights
            reserved.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-flor-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-flor-accent transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-flor-accent transition-colors">
              Careers
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
