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
      // Hero animations
      gsap.to(".hero-title", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });

      gsap.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.6,
      });

      // Section title animations
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => {
        const title = section.querySelector(".section-title");
        const subtitle = section.querySelector(".section-subtitle");

        gsap.to(title, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(subtitle, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // About section animations
      gsap.from(".about-image", {
        x: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".about-content", {
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Menu items animation
      gsap.utils.toArray(".menu-item").forEach((item: any) => {
        gsap.from(item, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Gallery images animation
      gsap.utils.toArray(".gallery-item").forEach((item: any, i) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
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

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Menu Section */}
      <MenuSection />

      {/* Gallery Section */}
      <GallerySection />

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Modern style */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-flor-primary tracking-tight"
            >
              FLOR<span className="text-flor-accent">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["About", "Menu", "Gallery", "Reservations", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-600 text-flor-charcoal hover:text-flor-accent transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-flor-accent group-hover:w-full transition-all duration-300" />
                </a>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-flor-primary hover:text-flor-accent transition-colors"
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
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-6 space-y-4">
              {["About", "Menu", "Gallery", "Reservations", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm font-600 text-flor-charcoal hover:text-flor-accent transition-colors duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/interior.jpg"
          alt="Restaurant Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-flor-dark/60 via-flor-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-left px-6 md:px-12">
        {/* Accent line */}
        <div className="h-1 w-16 bg-flor-accent rounded-full mb-8" />
        
        <h1
          className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
          style={{ transform: "translateY(40px)", opacity: 0 }}
        >
          Modern Dining<br />
          <span className="text-flor-accent">Reimagined</span>
        </h1>
        <p
          className="hero-subtitle text-base md:text-lg text-white/90 max-w-2xl leading-relaxed font-light"
          style={{ transform: "translateY(30px)", opacity: 0 }}
        >
          Experience contemporary cuisine crafted with precision and served with passion. Where tradition meets innovation on every plate.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-10"
          style={{ transform: "translateY(30px)", opacity: 0 }}
        >
          <a
            href="#reservations"
            className="btn-primary inline-flex items-center justify-center"
          >
            Reserve Now
          </a>
          <a
            href="#menu"
            className="btn-secondary inline-flex items-center justify-center"
          >
            See Menu
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="about-section py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image - on the right, with modern card styling */}
          <div className="about-image order-2 lg:order-1 relative">
            <div className="relative">
              {/* Decorative corner accent */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-flor-accent/10 rounded-lg z-0" />
              <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/abut.jpg"
                  alt="About Flor Porto"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Bottom accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-flor-secondary/10 rounded-lg z-0" />
            </div>
          </div>

          {/* Content - on the left */}
          <div className="about-content order-1 lg:order-2">
            <p className="section-subtitle text-xs uppercase tracking-widest text-flor-accent font-bold mb-4">
              Who We Are
            </p>
            <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-flor-primary mb-8 leading-tight">
              A New Kind of Restaurant
            </h2>
            
            {/* Accent line */}
            <div className="h-1 w-16 bg-gradient-to-r from-flor-accent to-flor-accent-alt rounded-full mb-8" />
            
            <p className="text-lg text-flor-charcoal leading-relaxed mb-6 font-light">
              Flor Porto is where culinary innovation meets contemporary elegance. We've reimagined fine dining for the modern palate—bold flavors, precise technique, and unforgettable moments.
            </p>
            <p className="text-lg text-flor-charcoal leading-relaxed mb-8 font-light">
              Every dish is a statement. Every meal is an experience. Join us for food that challenges, delights, and surprises.
            </p>
            <a
              href="#reservations"
              className="inline-block btn-primary"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const menuCategories = [
    {
      name: "Starters",
      items: [
        {
          name: "Truffle Arancini",
          description: "Crispy risotto balls with black truffle and mozzarella",
          price: "16",
        },
        {
          name: "Burrata Salad",
          description: "Fresh burrata with heirloom tomatoes and basil",
          price: "18",
        },
        {
          name: "Carpaccio",
          description: "Thinly sliced beef with arugula and parmesan",
          price: "20",
        },
      ],
    },
    {
      name: "Mains",
      items: [
        {
          name: "Pan-Seared Salmon",
          description: "Atlantic salmon with lemon butter sauce",
          price: "32",
        },
        {
          name: "Filet Mignon",
          description: "Prime beef tenderloin with red wine reduction",
          price: "48",
        },
        {
          name: "Lobster Risotto",
          description: "Creamy arborio rice with fresh lobster",
          price: "45",
        },
      ],
    },
    {
      name: "Desserts",
      items: [
        {
          name: "Tiramisu",
          description: "Classic Italian coffee-flavored dessert",
          price: "12",
        },
        {
          name: "Crème Brûlée",
          description: "Rich vanilla custard with caramelized sugar",
          price: "14",
        },
        {
          name: "Chocolate Lava Cake",
          description: "Warm chocolate cake with molten center",
          price: "15",
        },
      ],
    },
  ];

  return (
    <section id="menu" className="animate-section py-24 lg:py-32 bg-flor-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 bg-flor-accent rounded-full" />
            <p className="section-subtitle text-xs uppercase tracking-widest text-flor-accent font-bold">
              Culinary Delights
            </p>
          </div>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-flor-primary">
            Our Menu
          </h2>
        </div>

        {/* Menu Grid - Modern card layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <div
              key={category.name}
              className="menu-item bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category title with color accent */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-flor-accent rounded-full" />
                <h3 className="text-2xl font-serif font-bold text-flor-primary">
                  {category.name}
                </h3>
              </div>

              {/* Menu items */}
              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={
                      index < category.items.length - 1
                        ? "pb-6 border-b border-gray-200"
                        : ""
                    }
                  >
                    <div className="flex justify-between items-baseline gap-2 mb-2">
                      <h4 className="text-base font-bold text-flor-charcoal">
                        {item.name}
                      </h4>
                      <span className="text-base font-bold text-flor-accent">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#" className="btn-primary">
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const images = [
    {
      src: "/interior.jpg",
      title: "Interior",
      alt: "Restaurant Interior",
      cols: "col-span-1 md:col-span-2",
    },
    { src: "/dish1.jpg", title: "", alt: "Signature Dish", cols: "col-span-1" },
    { src: "/dish2.jpg", title: "", alt: "Gourmet Dish", cols: "col-span-1" },
    {
      src: "/chef.jpg",
      title: "",
      alt: "Head Chef",
      cols: "col-span-1 md:col-span-2",
    },
  ];

  return (
    <section
      id="gallery"
      className="animate-section py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-1 w-16 bg-flor-accent rounded-full" />
            <p className="section-subtitle text-xs uppercase tracking-widest text-flor-accent font-bold">
              Visual Journey
            </p>
          </div>
          <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-flor-primary">
            Gallery
          </h2>
        </div>

        {/* Modern Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${image.cols} aspect-square rounded-xl overflow-hidden group relative shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Modern overlay */}
              {image.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-flor-dark/80 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white text-base font-bold uppercase tracking-widest">
                    {image.title}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReservationsSection() {
  return (
    <section
      id="reservations"
      className="animate-section py-24 lg:py-32 bg-gradient-to-br from-flor-primary via-flor-primary/95 to-flor-dark relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-flor-accent/10 rounded-full -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-flor-secondary/10 rounded-full -ml-40 -mb-40" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-flor-accent font-bold mb-4 flex items-center justify-center gap-3">
            <span className="h-1 w-8 bg-flor-accent rounded-full" />
            Book Your Experience
            <span className="h-1 w-8 bg-flor-accent rounded-full" />
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Reservations
          </h2>
          <p className="text-white/70 text-lg">
            Join us for an unforgettable dining experience
          </p>
        </div>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Name and Email Row */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Date, Time, Guests Row */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium"
              />
            </div>
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
              >
                Time
              </label>
              <select
                id="time"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium"
              >
                <option>5:00 PM</option>
                <option>6:00 PM</option>
                <option>7:00 PM</option>
                <option>8:00 PM</option>
                <option>9:00 PM</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
              >
                Guests
              </label>
              <select
                id="guests"
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium"
              >
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6+ Guests</option>
              </select>
            </div>
          </div>

          {/* Special Requests */}
          <div className="mb-8">
            <label
              htmlFor="special-requests"
              className="block text-sm font-bold text-flor-charcoal mb-3 uppercase tracking-widest"
            >
              Special Requests
            </label>
            <textarea
              id="special-requests"
              rows={4}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:border-flor-accent focus:bg-white focus:outline-none transition-all text-flor-charcoal font-medium resize-none"
              placeholder="Any dietary requirements or special occasions?"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-gradient-to-r from-flor-accent to-flor-accent-alt text-white font-bold text-base uppercase tracking-widest rounded-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Complete Reservation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer id="contact" className="bg-flor-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold mb-4">
              FLOR<span className="text-flor-accent">.</span>
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Contemporary dining redefined. Where innovation meets culinary excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-flor-accent mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li>
                <a href="#menu" className="hover:text-flor-accent transition-colors">
                  Our Menu
                </a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-flor-accent transition-colors">
                  Make a Reservation
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-flor-accent transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-flor-accent transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-flor-accent mb-6">
              Contact
            </h4>
            <div className="space-y-4 text-white/60 text-sm">
              <p>123 Gourmet Avenue</p>
              <p>New York, NY 10001</p>
              <p className="pt-2">
                <a href="tel:+15551234567" className="hover:text-flor-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <a href="mailto:info@florporto.com" className="hover:text-flor-accent transition-colors">
                  info@florporto.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-flor-accent mb-6">
              Hours
            </h4>
            <div className="space-y-3 text-white/60 text-sm">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span className="text-white font-semibold">5PM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span className="text-white font-semibold">5PM - 11PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-white font-semibold">4PM - 9PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-white/50 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Flor Porto. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-flor-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-flor-accent transition-colors">
              Terms of Service
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
