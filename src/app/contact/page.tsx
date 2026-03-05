"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FooterBaseCard from "@/components/sections/footer/FooterBaseCard";

const ContactPage = () => {
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

      <div id="contact-form" data-section="contact-form">
        <ContactSplitForm
          title="Get in Touch Today"
          description="Need professional typing, business support, or document assistance? Contact  Business Services now via phone, WhatsApp, or the form below."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "service", type: "text", placeholder: "Service Needed", required: true },
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your requirements...",
            rows: 4,
            required: true,
          }}
          useInvertedBackground={false}
          imageSrc="http://img.b2bpic.net/free-photo/people-meeting-seminar-office-concept_53876-94.jpg"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Submit Request"
          onSubmit={(data) => {
            console.log("Form submitted:", data);
          }}
        />
      </div>

      <div id="quick-contact" data-section="quick-contact">
        <FeatureCardMedia
          tag="Other Contact Methods"
          title="Reach Us Your Way"
          description="Choose the most convenient method to get in touch with our team."
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              id: "phone",
              title: "Call Us Directly",
              description:
                "Phone: 04 234 4002. Our team is available during business hours for immediate assistance and consultations.",
              tag: "Phone",
              imageSrc: "http://img.b2bpic.net/free-photo/customer-service-operator-talking-phone-office_1301-7543.jpg?_wi=2",
            },
            {
              id: "whatsapp",
              title: "WhatsApp Us",
              description:
                "Message us on WhatsApp for quick responses and convenient service requests. We reply promptly to all inquiries.",
              tag: "WhatsApp",
              imageSrc: "http://img.b2bpic.net/free-photo/woman-standing-smartphone_1150-19377.jpg?_wi=2",
            },
            {
              id: "office",
              title: "Visit Our Office",
              description:
                "163 Al Nahda St, Al Twar 5, Dubai, UAE. Located in ZAHRAT AL MADAN. Visit us in person for detailed consultations.",
              tag: "Location",
              imageSrc: "http://img.b2bpic.net/free-vector/flat-hotel-booking-concept_23-2148152374.jpg?_wi=2",
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

export default ContactPage;