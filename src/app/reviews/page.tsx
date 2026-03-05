"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import TestimonialCardSix from "@/components/sections/testimonial/TestimonialCardSix";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

const ReviewsPage = () => {
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

      <div id="testimonials" data-section="testimonials">
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
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-young-handsome-successful-man_1163-5475.jpg",
              imageAlt: "Ahmed Al Mansouri",
            },
            {
              id: "2",
              name: "Fatima Hassan",
              handle: "HR Manager",
              testimonial:
                "Aajel solved our complex visa documentation issues quickly. Their expertise with government processes saved us so much time and stress.",
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-business-woman-office_1398-6.jpg",
              imageAlt: "Fatima Hassan",
            },
            {
              id: "3",
              name: "Mohammed Al Zahra",
              handle: "Entrepreneur",
              testimonial:
                "Fast service, competitive prices, and helpful staff. They made the entire process simple and transparent. Best business service provider in Al Twar.",
              imageSrc: "http://img.b2bpic.net/free-photo/low-angle-man-working-laptop_23-2148479521.jpg",
              imageAlt: "Mohammed Al Zahra",
            },
            {
              id: "4",
              name: "Sarah Johnson",
              handle: "Expatriate Professional",
              testimonial:
                "I was confused with all the paperwork, but Aajel guided me through everything. Professional, friendly, and they really care about solving your problems.",
              imageSrc: "http://img.b2bpic.net/free-photo/afro-american-woman-smiling-close-up_23-2148336947.jpg",
              imageAlt: "Sarah Johnson",
            },
            {
              id: "5",
              name: "Raj Patel",
              handle: "Company Manager",
              testimonial:
                "Excellent service for document processing. Their team knows the UAE system inside out. Worth every dirham spent.",
              imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-happy-expression_1194-3797.jpg",
              imageAlt: "Raj Patel",
            },
            {
              id: "6",
              name: "Layla Al Mansoori",
              handle: "Business Consultant",
              testimonial:
                "Aajel demonstrates genuine hospitality alongside professional expertise. They handle difficult cases that others can't. Highly trusted partner.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-positive-businesswoman_1098-3531.jpg",
              imageAlt: "Layla Al Mansoori",
            },
          ]}
        />
      </div>

      <div id="contact-info" data-section="contact-info">
        <FeatureCardMedia
          tag="Contact Information"
          title="Let's Talk Business"
          description="Multiple ways to reach Aajel Business Services. Choose what works best for you."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "phone",
              title: "Call Us",
              description:
                "Phone: 04 234 4002. Available during business hours for immediate assistance.",
              tag: "Phone",
              imageSrc: "http://img.b2bpic.net/free-photo/customer-service-operator-talking-phone-office_1301-7543.jpg",
            },
            {
              id: "whatsapp",
              title: "WhatsApp Chat",
              description:
                "Message us on WhatsApp for quick responses and convenient service requests.",
              tag: "WhatsApp",
              imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-smartphone_1150-19377.jpg",
            },
            {
              id: "visit",
              title: "Visit Our Office",
              description:
                "163 Al Nahda St, Al Twar 5, Dubai. Located in ZAHRAT AL MADAN.",
              tag: "Location",
              imageSrc: "http://img.b2bpic.net/free-vector/flat-hotel-booking-concept_23-2148152374.jpg",
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

export default ReviewsPage;