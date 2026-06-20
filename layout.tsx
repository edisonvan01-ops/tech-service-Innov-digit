import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { company, seoKeywords, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Agence digitale à Kpalimé`,
    template: `%s | ${company.name}`
  },
  description:
    "Agence digitale à Kpalimé au Togo spécialisée en création de contenu, marketing digital, sites web, photographie, design graphique et accompagnement entrepreneurial.",
  keywords: seoKeywords,
  authors: [{ name: company.founder }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_TG",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Agence digitale premium au Togo`,
    description:
      "Développez votre visibilité et votre croissance avec une agence digitale moderne à Kpalimé.",
    images: [
      {
        url: "/images/hero-digital-agency.png",
        width: 1536,
        height: 1024,
        alt: "Univers digital premium Tech-Innov Digit Service"
      }
    ]
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0B1F4D",
  width: "device-width",
  initialScale: 1
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: company.name,
  slogan: company.slogan,
  founder: {
    "@type": "Person",
    name: company.founder
  },
  url: siteUrl,
  logo: `${siteUrl}${company.logo}`,
  image: `${siteUrl}${company.heroImage}`,
  telephone: company.phones,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kpalimé",
    addressCountry: "TG"
  },
  areaServed: ["Togo", "Kpalimé"],
  knowsAbout: seoKeywords
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
