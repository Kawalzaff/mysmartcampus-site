import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mysmartcampus.in"),

  title: {
    default: "MySmartCampus | School ERP Software | School Management System",
    template: "%s | MySmartCampus",
  },

  description:
    "MySmartCampus is a complete School ERP Software for schools across India. Manage Admissions, Fees, Attendance, Exams, Transport, Payroll, Library, Parent App and complete School Management from one platform.",

  keywords: [
    "School ERP",
    "School ERP Software",
    "School Management Software",
    "School Management System",
    "School ERP Punjab",
    "School ERP India",
    "School Management App",
    "School Mobile App",
    "Student Management System",
    "Fee Management Software",
    "Attendance Management",
    "Transport Management",
    "Online School ERP",
    "Best School ERP",
    "MySmartCampus",
  ],

  authors: [{ name: "MySmartCampus" }],

  creator: "MySmartCampus",

  publisher: "MySmartCampus",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "MySmartCampus | School ERP Software",
    description:
      "Modern School ERP Software with Admissions, Fees, Attendance, Transport, Results, Payroll and Parent Mobile App.",
    url: "https://mysmartcampus.in",
    siteName: "MySmartCampus",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/logo1.png",
        width: 512,
        height: 512,
        alt: "MySmartCampus School ERP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MySmartCampus | School ERP Software",
    description:
      "Complete School Management Software for modern schools.",
    images: ["/logo1.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MySmartCampus",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://mysmartcampus.in",
  image: "https://mysmartcampus.in/logo1.png",
  description:
    "MySmartCampus is a complete School ERP Software for Admissions, Fee Management, Attendance, Exams, Transport, Payroll, Library and Parent Mobile App.",
  brand: {
    "@type": "Brand",
    name: "MySmartCampus",
  },
  publisher: {
    "@type": "Organization",
    name: "MySmartCampus",
    url: "https://mysmartcampus.in",
    logo: {
      "@type": "ImageObject",
      url: "https://mysmartcampus.in/logo1.png",
    },
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

           {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L10L7ZC7LE"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L10L7ZC7LE');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "xk5m7gohez");
          `}
        </Script>

        {/* Schema.org Structured Data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}