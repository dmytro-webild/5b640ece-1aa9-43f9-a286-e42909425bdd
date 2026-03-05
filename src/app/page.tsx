"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroBillboardDashboard from "@/components/sections/hero/HeroBillboardDashboard";
import TextAbout from "@/components/sections/about/TextAbout";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";
import { Shield, Zap, FileText, Briefcase, Phone, FileCheck, DollarSign, CheckCircle, Building2 } from "lucide-react";

const HomePage = () => {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  const footerColumns = [
    {
      title: "Services",
      items: [
        { label: "Typing Services", href: "services" },
        { label: "Visa Support", href: "services" },
        { label: "Business Setup", href: "services" },
        { label: "Legal Documents", href: "services" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/about" },
        { label: "Reviews", href: "/reviews" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Phone: 04 234 4002", href: "tel:042344002" },
        { label: "WhatsApp Support", href: "https://wa.me/971" },
        { label: "163 Al Nahda St, Al Twar 5", href: "#" },
        { label: "Dubai, UAE", href: "#" },
      ],
    },
    {
      title: "Information",
      items: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
        { label: "Sitemap", href: "#" },
        { label: "aajelbusiness.com", href: "https://aajelbusiness.com" },
      ],
    },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="mediumSmall"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="inset"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="glass"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple brandName="Aajel" navItems={navItems} />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardDashboard
          tag="Trusted Local Service"
          tagIcon={Shield}
          title="Fast, Reliable Business Support for Dubai"
          description="Aajel Business Services provides professional typing, visa assistance, legal documentation, and government form support. Call now or WhatsApp for immediate help with your UAE business and document needs."
          buttons={[
            { text: "Call Now: 04 234 4002", href: "tel:042344002" },
            { text: "WhatsApp Now", href: "https://wa.me/971" },
          ]}
          background={{ variant: "circleGradient" }}
          dashboard={{
            title: "Service Excellence Dashboard",
            logoIcon: Zap,
            imageSrc: "http://img.b2bpic.net/free-photo/multi-ethnic-business-team-sitting-table-office-center-speaking-about-project-meeting-broadroom_482257-5077.jpg",
            searchPlaceholder: "What service do you need?",
            sidebarItems: [
              { icon: FileText, active: true },
              { icon: Briefcase },
              { icon: Phone },
            ],
            buttons: [
              { text: "Request Service", href: "/contact" },
              { text: "Learn More", href: "/services" },
            ],
            stats: [
              {
                title: "Clients Served",
                values: [1200, 1450, 1680],
                valueSuffix: "+",
                description: "Satisfied customers yearly",
              },
              {
                title: "Services",
                values: [7, 9, 12],
                description: "Professional service categories",
              },
              {
                title: "Success Rate",
                values: [98, 99, 99],
                valueSuffix: "%",
                description: "Customer satisfaction guarantee",
              },
            ],
            chartTitle: "Service Request Volume",
            chartData: [
              { value: 85 },
              { value: 70 },
              { value: 90 },
              { value: 75 },
              { value: 95 },
            ],
            listTitle: "Recent Requests",
            listItems: [
              { icon: FileCheck, title: "Visa Documentation", status: "Completed" },
              { icon: DollarSign, title: "Business Setup Support", status: "In Progress" },
              { icon: CheckCircle, title: "Government Form Filing", status: "Completed" },
            ],
          }}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About Our Company"
          tagIcon={Building2}
          title="Aajel Business Services: Your Trusted Partner for Professional Business Support in Dubai. Helping individuals, entrepreneurs, and businesses navigate typing, documentation, visa, and legal processes with expertise, professionalism, and reliable service since our establishment in Al Twar."
          useInvertedBackground={false}
          buttons={[
            { text: "Our Services", href: "/services" },
            { text: "Get Started", href: "/contact" },
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Organizations"
          description="Serving businesses, government entities, and professionals throughout Dubai and the UAE."
          tag="Our Partners"
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "UAE Visa Authority",
            "Dubai Business Services",
            "Pro Services Networks",
            "Corporate Legal Support",
            "Government Services Hub",
            "Business Registration Authority",
            "Document Processing Centers",
            "Professional Consultants",
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardSix
          tag="Customer Reviews"
          title="What Our Clients Say"
          description="Real feedback from Dubai customers who trust Aajel Business Services for their business needs."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Ahmed Al Mansouri",
              handle: "Business Owner",
              testimonial:
                "Professional and experienced team. They handled my business registration paperwork flawlessly. Highly recommended for anyone starting a business in Dubai.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg?_wi=1",
              imageAlt: "Ahmed Al Mansouri",
            },
            {
              id: "2",
              name: "Fatima Hassan",
              handle: "HR Manager",
              testimonial:
                "Aajel solved our complex visa documentation issues quickly. Their expertise with government processes saved us so much time and stress.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg?_wi=1",
              imageAlt: "Fatima Hassan",
            },
            {
              id: "3",
              name: "Mohammed Al Zahra",
              handle: "Entrepreneur",
              testimonial:
                "Fast service, competitive prices, and helpful staff. They made the entire process simple and transparent. Best business service provider in Al Twar.",
              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-man-working-laptop_23-2148479521.jpg?_wi=1",
              imageAlt: "Mohammed Al Zahra",
            },
            {
              id: "4",
              name: "Sarah Johnson",
              handle: "Expatriate Professional",
              testimonial:
                "I was confused with all the paperwork, but Aajel guided me through everything. Professional, friendly, and they really care about solving your problems.",
              imageSrc: "http://img.b2bpic.net/free-photo/afro-american-woman-smiling-close-up_23-2148336947.jpg?_wi=1",
              imageAlt: "Sarah Johnson",
            },
            {
              id: "5",
              name: "Raj Patel",
              handle: "Company Manager",
              testimonial:
                "Excellent service for document processing. Their team knows the UAE system inside out. Worth every dirham spent.",
              imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3797.jpg?_wi=1",
              imageAlt: "Raj Patel",
            },
            {
              id: "6",
              name: "Layla Al Mansoori",
              handle: "Business Consultant",
              testimonial:
                "Aajel demonstrates genuine hospitality alongside professional expertise. They handle difficult cases that others can't. Highly trusted partner.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg?_wi=1",
              imageAlt: "Layla Al Mansoori",
            },
          ]}
        />
      </div>

      <div id="cta" data-section="cta">
        <FeatureCardMedia
          tag="Ready to Get Started"
          title="Transform Your Business with Aajel Services"
          description="Stop worrying about paperwork and documentation. Let our expert team handle your typing, visa, and business support needs while you focus on growing your business."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "quick-start",
              title: "Quick Start",
              description: "Get professional assistance within 24 hours of your request",
              tag: "Fast",
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-mobile-phone_107420-84785.jpg?_wi=1",
              buttons: [{ text: "Contact Us", href: "/contact" }],
            },
            {
              id: "consultation",
              title: "Free Consultation",
              description: "Discuss your needs with our experts at no initial cost",
              tag: "Free",
              imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-cafe_53876-15162.jpg?_wi=1",
              buttons: [{ text: "Schedule Now", href: "/contact" }],
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Aajel Business Services"
          columns={footerColumns}
          copyrightText="© 2025 Aajel Business Services. All rights reserved. Professional Typing & Business Support in Dubai."
        />
      </div>
    </ThemeProvider>
  );
};

export default HomePage;