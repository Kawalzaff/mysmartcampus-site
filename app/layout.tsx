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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}