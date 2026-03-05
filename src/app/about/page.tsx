"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FaqSplitText from "@/components/sections/faq/FaqSplitText";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

const AboutPage = () => {
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

      <div id="why-choose-us" data-section="why-choose-us">
        <FeatureCardMedia
          tag="Why Choose Us"
          title="Why Aajel Business Services Stands Out"
          description="Trusted by hundreds of Dubai clients for professional, fast, and reliable business support services."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "experienced",
              title: "Experienced & Professional Staff",
              description:
                "Highly trained professionals with years of expertise in Dubai business services and government processes.",
              tag: "Experience",
              imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149346656.jpg",
            },
            {
              id: "helpful",
              title: "Helpful Guidance & Support",
              description:
                "Friendly team dedicated to solving complex business problems with practical, actionable solutions.",
              tag: "Support",
              imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-female-support-phone-operator-speaking-consulting-office_176420-957.jpg",
            },
            {
              id: "competitive",
              title: "Competitive Transparent Pricing",
              description:
                "Fair, competitive rates with no hidden charges. Clear pricing for all services with professional value.",
              tag: "Pricing",
              imageSrc: "http://img.b2bpic.net/free-photo/physician-recommending-vitamins-painkillers-healthcare-insurance_482257-116451.jpg",
            },
            {
              id: "problem-solving",
              title: "Problem-Solving Excellence",
              description:
                "Known for handling difficult cases with creative solutions and persistent follow-through.",
              tag: "Solutions",
              imageSrc: "http://img.b2bpic.net/free-photo/team-multiracial-bookkeepers-comparing-data-statistics-after-business-audit_482257-123566.jpg",
            },
            {
              id: "location",
              title: "Convenient Dubai Location",
              description:
                "Easy-to-reach office in Al Twar, Dubai with flexible hours for your convenience.",
              tag: "Accessibility",
              imageSrc: "http://img.b2bpic.net/free-photo/modern-indian-man-goes-business-meeting-him-modern-building_496169-2898.jpg",
            },
            {
              id: "customer-care",
              title: "Friendly & Efficient Customer Care",
              description:
                "Responsive support via phone, WhatsApp, and in-person service with genuine hospitality.",
              tag: "Service",
              imageSrc: "http://img.b2bpic.net/free-photo/friendly-customer-support-workers-respond-customers-inquiries_482257-126788.jpg",
            },
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Quick answers to common questions about Aajel Business Services."
          textPosition="left"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            {
              id: "1",
              title: "What services do you provide?",
              content:
                "We offer professional typing, visa support, business documentation, legal paperwork, PRO services, and government form assistance for individuals and businesses in Dubai and the UAE.",
            },
            {
              id: "2",
              title: "Can I contact you on WhatsApp?",
              content:
                "Yes! WhatsApp is one of our preferred contact methods. Message us with your requirements for quick responses and convenient service handling.",
            },
            {
              id: "3",
              title: "Do you help with business and document services in Dubai?",
              content:
                "Absolutely. We specialize in helping Dubai residents and businesses with comprehensive typing, documentation, visa, legal, and administrative support tailored to UAE requirements.",
            },
            {
              id: "4",
              title: "Where are you located?",
              content:
                "We're located at 163 Al Nahda St, Al Twar 5, Dubai in ZAHRAT AL MADAN. Easy access and convenient hours for all our clients.",
            },
            {
              id: "5",
              title: "How can I request assistance?",
              content:
                "Contact us via phone (04 234 4002), WhatsApp, or submit a form on our website. Tell us your needs and we'll provide expert guidance and support.",
            },
            {
              id: "6",
              title: "Can I call before visiting?",
              content:
                "Yes, we recommend calling ahead at 04 234 4002 to discuss your requirements or confirm availability before visiting our office.",
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

export default AboutPage;