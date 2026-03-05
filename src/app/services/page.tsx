"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

const ServicesPage = () => {
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
        <NavbarStyleApple brandName="" navItems={navItems} />
      </div>

      <div id="services" data-section="services">
        <FeatureCardMedia
          tag="Our Services"
          title="Core Services We Provide"
          description="Comprehensive business support solutions designed for Dubai residents and entrepreneurs seeking fast, reliable assistance."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "typing",
              title: "Professional Typing Services",
              description:
                "Expert document typing, application forms, and written documentation with accuracy and speed.",
              tag: "Typing",
              imageSrc: "http://img.b2bpic.net/free-photo/concentrated-businesswoman-finishing-her-report_1098-655.jpg",
            },
            {
              id: "visa",
              title: "Visa & Immigration Support",
              description:
                "Professional guidance and documentation assistance for visa applications and immigration requirements.",
              tag: "Visa Support",
              imageSrc: "http://img.b2bpic.net/free-photo/scenery-designers-work_23-2149741794.jpg",
            },
            {
              id: "business",
              title: "Business Setup & Documentation",
              description:
                "Complete business registration support, legal documentation, and administrative assistance for startups and companies.",
              tag: "Business",
              imageSrc: "http://img.b2bpic.net/free-photo/person-using-tablet_53876-13420.jpg",
            },
            {
              id: "legal",
              title: "Legal & Government Forms",
              description:
                "Assistance with UAE legal documents, government forms, and official paperwork processing.",
              tag: "Legal",
              imageSrc: "http://img.b2bpic.net/free-photo/business-partners-sitting-cafe_1157-16978.jpg",
            },
            {
              id: "pro",
              title: "PRO & Administrative Services",
              description:
                "Professional representative services and administrative support for government-related processes.",
              tag: "PRO Services",
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-men-discussing-work_52683-101636.jpg",
            },
            {
              id: "renewal",
              title: "Applications & Renewals",
              description:
                "Fast-track assistance with permit renewals, license applications, and compliance documentation.",
              tag: "Renewals",
              imageSrc: "http://img.b2bpic.net/free-photo/pensioner-filling-out-aform_53876-165297.jpg",
            },
          ]}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardMedia
          tag="Our Process"
          title="How It Works"
          description="Simple, straightforward process to get the business support you need quickly."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "step-1",
              title: "Step 1: Contact Us",
              description:
                "Reach out via phone (04 234 4002), WhatsApp, or submit a form with your service needs.",
              tag: "Contact",
              imageSrc: "http://img.b2bpic.net/free-photo/businessman-using-mobile-phone_107420-84785.jpg?_wi=2",
            },
            {
              id: "step-2",
              title: "Step 2: Explain Your Needs",
              description:
                "Share details about your documentation or business requirement with our professional team.",
              tag: "Consultation",
              imageSrc: "http://img.b2bpic.net/free-photo/business-meeting-cafe_53876-15162.jpg?_wi=2",
            },
            {
              id: "step-3",
              title: "Step 3: Expert Guidance & Processing",
              description:
                "Our team provides expert guidance and handles all document preparation and processing.",
              tag: "Processing",
              imageSrc: "http://img.b2bpic.net/free-photo/working-with-documents_1098-18159.jpg",
            },
            {
              id: "step-4",
              title: "Step 4: Fast Completion",
              description:
                "Receive completed documents quickly. Visit our office or complete remaining steps conveniently.",
              tag: "Delivery",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-client-package-delivery_23-2148890018.jpg",
            },
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText=" Business Services"
          columns={footerColumns}
          copyrightText="© 2025  Business Services. All rights reserved. Professional Typing & Business Support in Dubai."
        />
      </div>
    </ThemeProvider>
  );
};

export default ServicesPage;