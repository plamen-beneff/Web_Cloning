"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Menu, X, Star, Trophy, Users, GamepadIcon, DollarSign, ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const brands = [
    {
      name: "N1 Casino",
      logo: "https://ext.same-assets.com/2949464398/439271825.svg",
      description: "Feel the adrenaline rush as you enter the world of N1 Casino! Playing here feels a lot like racing – same luxurious, state-of-the-art accommodation, same heart-pounding emotions.",
      license: "MGA",
      preview: "https://ext.same-assets.com/2949464398/3477486284.webp",
    },
    {
      name: "N1 Bet",
      logo: "https://ext.same-assets.com/2949464398/1719355002.svg",
      description: "Unlock the full potential of online sports betting! As a licensed Curaçao operator, N1Bet offers seamless withdrawal options in both fiat and crypto currencies.",
      license: "Curaçao",
      preview: "https://ext.same-assets.com/2949464398/3719315238.webp",
    },
    {
      name: "Slot Hunter",
      logo: "https://ext.same-assets.com/2949464398/3637740016.svg",
      description: "Embark on an exciting quest for prizes at Slot Hunter, the ultimate destination for treasure Hunters with diverse selection of games.",
      license: "MGA",
      preview: "https://ext.same-assets.com/2949464398/1771323914.webp",
    },
    {
      name: "Joo Casino",
      logo: "https://ext.same-assets.com/2949464398/602603702.svg",
      description: "The beach is always sunny, the sea is always warm and the world is full of adventures at Joo Casino with unique bonuses and rewards.",
      license: "Curaçao",
      preview: "https://ext.same-assets.com/2949464398/938529399.webp",
    },
    {
      name: "Lucky Hunter",
      logo: "https://ext.same-assets.com/2949464398/704327969.svg",
      description: "At Lucky Hunter, it's all about the thrill of the hunt and emerging as the top predator with both fiat and cryptocurrency deposits.",
      license: "Curaçao",
      preview: "https://ext.same-assets.com/2949464398/1686205810.webp",
    },
    {
      name: "Slots Mines",
      logo: "https://ext.same-assets.com/2949464398/732064447.svg",
      description: "Don your hard hat, check the sharpness of your pickaxe, and descend into Slots Mines to mine your way to riches!",
      license: "Kahnawake",
      preview: "https://ext.same-assets.com/2949464398/2117238272.webp",
    },
  ];

  const handleTabChange = (newTab: number) => {
    if (newTab === activeTab || isTransitioning) return;

    setIsTransitioning(true);

    // Short delay to allow fade out animation
    setTimeout(() => {
      setActiveTab(newTab);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  };

  const testimonials = [
    {
      site: "askgamblers.com",
      text: "Collaborating with N1 Partners works like a charm. The ease of our communication and the quality of each agreement we put together is something we would wish upon everyone.",
    },
    {
      site: "howtocasino.com",
      text: "We are glad to be working with N1 Partners. The team has been swift and professional, helping us with anything necessary. These guys take their job seriously.",
    },
    {
      site: "hltv.org",
      text: "Our partnership with N1 BET is excellent. N1 BET is a very reliable partner with quick response times, payment always on time.",
    },
    {
      site: "neuecasinos24.com",
      text: "We couldn't ask for more when working with N1. Their brand has a very good conversion rate as well as great player retention.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-n1-gray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="https://ext.same-assets.com/2949464398/2330446341.svg" alt="N1 Partners" className="h-8" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="#commissions" className="hover:text-n1-red transition-colors">Commissions</Link>
              <Link href="#brands" className="hover:text-n1-red transition-colors">Brands</Link>
              <Link href="#testimonials" className="hover:text-n1-red transition-colors">Testimonials</Link>
              <Link href="#news" className="hover:text-n1-red transition-colors">News</Link>
              <Link href="#faq" className="hover:text-n1-red transition-colors">FAQ</Link>
              <Link href="#about" className="hover:text-n1-red transition-colors">About us</Link>
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="btn-secondary">Log in</button>
              <button className="btn-primary">Sign Up</button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 lg:hidden pt-20">
          <nav className="flex flex-col space-y-4 p-8">
            <Link href="#commissions" className="text-xl hover:text-n1-red">Commissions</Link>
            <Link href="#brands" className="text-xl hover:text-n1-red">Brands</Link>
            <Link href="#testimonials" className="text-xl hover:text-n1-red">Testimonials</Link>
            <Link href="#news" className="text-xl hover:text-n1-red">News</Link>
            <Link href="#faq" className="text-xl hover:text-n1-red">FAQ</Link>
            <Link href="#about" className="text-xl hover:text-n1-red">About us</Link>
            <div className="flex flex-col space-y-4 mt-8">
              <button className="btn-secondary">Log in</button>
              <button className="btn-primary">Sign Up</button>
            </div>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-n1-red/20 via-transparent to-transparent"></div>

        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 text-n1-red/20 animate-spin-slow">
          <Star size={40} />
        </div>
        <div className="absolute top-40 right-20 text-n1-red/20 animate-float">
          <Star size={30} />
        </div>
        <div className="absolute bottom-20 left-1/4 text-n1-red/20 animate-pulse">
          <Star size={25} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-7xl font-druk font-black leading-tight">
                <span className="text-n1-red">BE</span><br />
                <span className="text-n1-red">NUMBER</span><br />
                <span className="text-white">ONE </span>
                <span className="text-white">WITH</span><br />
                <span className="text-white">N1</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                N1 Partners is a multi-brand affiliate program that comprises several high converting online casinos and betting brands.
              </p>
              <button className="btn-primary text-lg px-8 py-4 glow-hover">
                Become our Partner
              </button>
              <p className="text-sm text-gray-500">
                We use cookies to give you the best experience. <span className="text-white cursor-pointer">Privacy Policy</span>
              </p>
            </div>
            <div className="relative h-[500px] flex items-center justify-center">
              <div className="absolute w-96 h-96 bg-n1-red rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://ext.same-assets.com/2949464398/3120375636.jpeg"
                alt="Casino Characters"
                className="relative z-10 max-w-full h-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-n1-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12">
            OUR<br />
            <span className="text-white">ACHIEVEMENTS</span>
            <span className="text-n1-red">.</span>
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "4K+", label: "AFFILIATE PARTNERS", icon: Users },
              { number: "5M+", label: "PRIZES", icon: Trophy },
              { number: "2M+", label: "REGISTERED PLAYERS", icon: Users },
              { number: "10K+", label: "GAMES", icon: GamepadIcon },
            ].map((stat, index) => (
              <div key={index} className="bg-n1-gray rounded-lg p-6 text-center hover:bg-n1-red/10 transition-colors group">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-n1-red group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold text-n1-red mb-2">{stat.number}</h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12">
            OUR BRANDS<span className="text-n1-red">.</span>
          </h2>

          {/* Brand Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {brands.map((brand, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                disabled={isTransitioning}
                className={`p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeTab === index
                    ? 'bg-n1-red shadow-lg shadow-n1-red/25 scale-105'
                    : 'bg-n1-gray hover:bg-n1-gray/70 hover:shadow-md'
                } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className={`h-8 transition-all duration-300 ${
                    activeTab === index ? 'brightness-110' : 'brightness-75 hover:brightness-100'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Brand Content */}
          <div className="bg-n1-gray rounded-lg p-8 lg:p-12 relative overflow-hidden">
            {/* Background transition overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r from-n1-red/5 to-transparent transition-opacity duration-300 ${
              isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}></div>

            <div className={`grid lg:grid-cols-2 gap-8 items-center transition-all duration-300 ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              <div className="space-y-6">
                <div className="transform transition-all duration-500 delay-100">
                  <img
                    src={brands[activeTab].logo}
                    alt={brands[activeTab].name}
                    className="h-12 mb-6 transition-all duration-300"
                  />
                </div>

                <div className="transform transition-all duration-500 delay-200">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {brands[activeTab].description}
                  </p>
                </div>

                <div className="flex items-center gap-4 mb-6 transform transition-all duration-500 delay-300">
                  <span className="bg-n1-red/20 text-n1-red px-4 py-2 rounded-full border border-n1-red/30 transition-all duration-300 hover:bg-n1-red/30">
                    <span className="font-semibold">License:</span> {brands[activeTab].license}
                  </span>
                </div>

                <div className="flex gap-4 transform transition-all duration-500 delay-400">
                  <button className="btn-primary hover:scale-105 transition-transform duration-300">
                    Start promoting
                  </button>
                  <button className="btn-secondary hover:scale-105 transition-transform duration-300">
                    See Details
                  </button>
                </div>
              </div>

              <div className="bg-black rounded-lg p-4 transform transition-all duration-500 delay-300">
                <div className="aspect-video bg-gradient-to-br from-n1-red/20 to-transparent rounded-lg overflow-hidden relative group">
                  {brands[activeTab].preview ? (
                    <img
                      src={brands[activeTab].preview}
                      alt={`${brands[activeTab].name} Preview`}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-4xl font-druk opacity-20">PREVIEW</span>
                    </div>
                  )}

                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commissions Section */}
      <section id="commissions" className="py-20 bg-n1-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12">
            COMMISSIONS<br />
            & PAYMENTS<span className="text-n1-red">.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Rev Share", value: "up to 45%", features: ["Lifetime Revenue", "No Hidden Fees"] },
              { title: "CPA", value: "€150+", features: ["No Hidden Fees"] },
              { title: "Hybrid", value: "€100+ & 40% RS", features: ["Lifetime Revenue", "No Hidden Fees"] },
              { title: "Sub-Affiliate", value: "5%+", features: ["Lifetime Revenue", "No Hidden Fees"] },
            ].map((commission, index) => (
              <div key={index} className="bg-white text-black rounded-lg p-6 hover:scale-105 transition-transform">
                <h3 className="text-2xl font-bold mb-2">{commission.title}</h3>
                <p className="text-3xl font-druk text-n1-red mb-4">{commission.value}</p>
                <ul className="space-y-2">
                  {commission.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-n1-red">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button className="btn-primary mx-auto block">Start earning</button>

          {/* Payment Methods */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Payment methods for partner's withdrawals</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "https://ext.same-assets.com/2949464398/1079866415.svg",
                "https://ext.same-assets.com/2949464398/3896712567.svg",
                "https://ext.same-assets.com/2949464398/4026703213.svg",
                "https://ext.same-assets.com/2949464398/3670765138.svg",
                "https://ext.same-assets.com/2949464398/1836827750.svg",
              ].map((logo, index) => (
                <img key={index} src={logo} alt="Payment method" className="h-8" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why N1 Partners Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12">
            WHY<br />
            N1 PARTNERS<span className="text-n1-red">.</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Fast & Guaranteed payouts",
                description: "Affiliate payments are almost always processed in the first week of the month.",
              },
              {
                icon: DollarSign,
                title: "Payment methods",
                description: "Various payment methods for withdrawals in fiat or crypto currencies.",
              },
              {
                icon: Users,
                title: "Personal manager",
                description: "Every partner is assigned a personal manager to help with anything that might come up.",
              },
              {
                icon: GamepadIcon,
                title: "Player retention",
                description: "High conversion rates. Loyalty system & multiple bonus programs. 24/7 Support.",
              },
              {
                icon: Trophy,
                title: "True partnership",
                description: "No negative carry over, no hidden fees, no withdrawal commissions, no bundling between brands.",
              },
              {
                icon: Star,
                title: "Affiliate Platform",
                description: "Detailed and flexible reporting, various access Levels, data Exports in csv, json, xml formats.",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-n1-gray rounded-lg p-6 hover:bg-n1-red/10 transition-all">
                  <feature.icon className="w-12 h-12 text-n1-red mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn-primary mx-auto block mt-12">Become our Partner</button>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-n1-darkGray">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl lg:text-6xl font-druk font-black">
              NEWS AND<br />
              EVENTS<span className="text-n1-red">.</span>
            </h2>
            <button className="btn-primary hidden lg:block">All news</button>
          </div>

          <div className="bg-n1-gray rounded-lg p-8">
            <img
              src="https://ext.same-assets.com/2949464398/1497859574.webp"
              alt="SBC Summit"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-gray-400 mb-2">SEPTEMBER 22, 2025</p>
            <h3 className="text-2xl font-bold mb-4">
              N1 Partners Made Waves at SBC Summit 2025 with new Award, Surf Trip Giveaway and Partner Highlights
            </h3>
            <p className="text-gray-300 mb-6">
              N1 Partners once again proved its strength in the industry at the SBC Summit 2025 in Lisbon, held from September 16 to 18.
              With our Surf on the Wave to Success concept, we brought a surf-inspired atmosphere to the event and came back home with a prestigious recognition.
            </p>
            <button className="btn-secondary">
              See Details <ArrowRight className="inline ml-2" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12 text-center">
            TESTIMONIALS<span className="text-n1-red">.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-n1-gray rounded-lg p-8 hover:bg-n1-red/10 transition-colors">
                <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="text-n1-red font-bold">{testimonial.site}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-n1-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl lg:text-6xl font-druk font-black mb-12">
            CONTACT US<span className="text-n1-red">.</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-n1-gray rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4">Let's get partnered!</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-n1-red" />
                    <span>affiliates@n1.partners</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-n1-red" />
                    <span>+356 2778 0000</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-n1-red" />
                    <span>Malta, Sliema</span>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white text-black rounded-lg p-8">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded focus:border-n1-red outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border border-gray-300 rounded focus:border-n1-red outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded focus:border-n1-red outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded focus:border-n1-red outline-none resize-none"
                />
                <button className="btn-primary w-full">
                  Send <Send className="inline ml-2" size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-n1-gray">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="https://ext.same-assets.com/2949464398/2330446341.svg" alt="N1 Partners" className="h-8 mb-4" />
              <p className="text-gray-400 text-sm">
                N1 partners - a team of respected professionals by nature who appreciates and relies on such principles as
                reliability, trust and safety in their work.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Home</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#commissions" className="hover:text-n1-red">Commissions</Link></li>
                <li><Link href="#brands" className="hover:text-n1-red">Brands</Link></li>
                <li><Link href="#testimonials" className="hover:text-n1-red">Testimonials</Link></li>
                <li><Link href="#news" className="hover:text-n1-red">News</Link></li>
                <li><Link href="#faq" className="hover:text-n1-red">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Brands</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-n1-red">N1 Casino</Link></li>
                <li><Link href="#" className="hover:text-n1-red">Slot Hunter</Link></li>
                <li><Link href="#" className="hover:text-n1-red">Joo Casino</Link></li>
                <li><Link href="#" className="hover:text-n1-red">N1 Bet</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-n1-red">Terms and Conditions</Link></li>
                <li><Link href="#" className="hover:text-n1-red">Privacy policy</Link></li>
                <li><Link href="#" className="hover:text-n1-red">About us</Link></li>
                <li><Link href="#" className="hover:text-n1-red">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-n1-gray pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 N1 Partners. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-n1-red">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-n1-red">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-n1-red">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
