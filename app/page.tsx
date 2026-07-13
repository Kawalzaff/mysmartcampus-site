"use client";

import Image from "next/image";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
const [loading, setLoading] = useState(false);

const [schoolName, setSchoolName] = useState("");
const [contactPerson, setContactPerson] = useState("");
const [email, setEmail] = useState("");
const [mobile, setMobile] = useState("");
const [city, setCity] = useState("");
const stats = [
  {
    number: "20+",
    title: "ERP Modules",
  },
  {
    number: "100%",
    title: "Cloud Based",
  },
  {
    number: "24/7",
    title: "Support",
  },
  {
    number: "99.9%",
    title: "Secure",
  },
];

const features = [
  {
    icon: "🎓",
    title: "Student Management",
    desc: "Manage admissions, student profiles and complete academic records.",
  },
  {
    icon: "💳",
    title: "Fee Management",
    desc: "Collect fees online, generate receipts and monitor dues.",
  },
  {
    icon: "📊",
    title: "Attendance",
    desc: "Track student and staff attendance with real-time reports.",
  },
  {
    icon: "📝",
    title: "Exam Management",
    desc: "Create exams, enter marks and generate report cards.",
  },
  {
    icon: "🚌",
    title: "GPS Transport",
    desc: "Track school buses live with route management.",
  },
  {
    icon: "📱",
    title: "Parent App",
    desc: "Parents receive instant notifications and updates.",
  },
];
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return;

  if (
    !schoolName.trim() ||
    !contactPerson.trim() ||
    !email.trim() ||
    !mobile.trim() ||
    !city.trim()
  ) {
    alert("Please fill all fields.");
    return;
  }

  const emailRegex =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Please enter a valid 10 digit mobile number.");
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_w6bda5h",
      "template_2ww9mo9",
      {
        school_name: schoolName,
        contact_person: contactPerson,
        email,
        mobile,
        city,
      },
      "ntKYAWUp-m_2lt09M"
    );

    alert("✅ Demo Request Submitted Successfully!");

    setSchoolName("");
    setContactPerson("");
    setEmail("");
    setMobile("");
    setCity("");
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
 return (
  <main className="bg-gradient-to-b from-white to-blue-50 text-gray-900">
    
   {/* Navbar */}
<nav className="sticky top-0 z-50 bg-gradient-to-r from-[#F8FAFC] to-[#DBEAFE] shadow-md">

  <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-3">

    {/* Logo */}
    <a href="#home">
      <Image
        src="/logo1.png"
        alt="MySmartCampus Logo"
        width={170}
        height={70}
        className="w-36 md:w-44 h-auto"
      />
    </a>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">

      <li>
        <a href="#home" className="hover:text-blue-600 transition">
          Home
        </a>
      </li>

      <li>
        <a href="#features" className="hover:text-blue-600 transition">
          Features
        </a>
      </li>

      <li>
        <a href="#modules" className="hover:text-blue-600 transition">
          Modules
        </a>
      </li>

      <li>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-lg transition"
        >
          Contact
        </a>
      </li>

    </ul>

    {/* Mobile Button */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="md:hidden bg-white shadow-lg border-t">

      <a
        href="#home"
        className="block px-6 py-4 border-b hover:bg-blue-50"
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>

      <a
        href="#features"
        className="block px-6 py-4 border-b hover:bg-blue-50"
        onClick={() => setMenuOpen(false)}
      >
        Features
      </a>

      <a
        href="#modules"
        className="block px-6 py-4 border-b hover:bg-blue-50"
        onClick={() => setMenuOpen(false)}
      >
        Modules
      </a>

      <a
        href="#contact"
        className="block px-6 py-4 bg-blue-600 text-white text-center font-semibold"
        onClick={() => setMenuOpen(false)}
      >
        Contact
      </a>

    </div>
  )}

</nav>
    {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-8 ... bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#06B6D4] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-200 font-semibold mb-4">
              Punjab’s No.1 School Web Management ERP
            </p>

           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
  Complete School ERP Software for Modern Schools
</h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
  MySmartCampus helps schools manage admissions, fee collection, attendance, examinations, transport, payroll, parent communication and complete school operations from one secure platform.
</p>

           <div className="flex flex-col sm:flex-row gap-4">
  <a
    href="#demo"
    className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition"
  >
    Book Free Demo
  </a>

  <a
    href="#features"
    className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
  >
    Explore Features
  </a>
</div>
          </div>

          <div>
            <Image
              src="/hero-banner.png"
              alt="Hero Banner"
              width={700}
              height={500}
             className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>
<section className="py-12 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {stats.map((item) => (
        <div
          key={item.title}
          className="bg-white border border-slate-200 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
        >
          <h3 className="text-3xl font-bold text-blue-700">
            {item.number}
          </h3>

          <p className="text-gray-600 mt-2">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>
{/* Features Section */}
<section
  id="features"
  className="py-24 bg-gradient-to-b from-slate-50 to-white"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
        Complete School ERP
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900">
        Everything Your School Needs
      </h2>

      <p className="mt-5 text-gray-600 max-w-3xl mx-auto text-lg">
        MySmartCampus provides a complete School ERP Software to automate
        admissions, attendance, fees, examinations, transport,
        communication and administration.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {features.map((feature) => (

        <div
          key={feature.title}
          className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
        >

          <div className="text-5xl mb-5">
            {feature.icon}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition">
            {feature.title}
          </h3>

          <p className="text-gray-600 leading-7">
            {feature.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
      {/* Why Choose */}
<section className="py-24 bg-gradient-to-r from-blue-50 via-white to-cyan-50">

<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">

<h2 className="text-5xl font-bold text-slate-900">
Why Schools Choose MySmartCampus
</h2>

<p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
Trusted School ERP Software designed to simplify school operations and improve communication between administrators, teachers, students and parents.
</p>

</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
☁️ Cloud Based
</h3>

<p>
Access your school anytime from anywhere.
</p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
🔒 Secure Data
</h3>

<p>
Advanced security with regular backups.
</p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
📱 Parent Mobile App
</h3>

<p>
Parents stay updated with fees, homework, attendance and notices.
</p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
🚌 GPS Transport
</h3>

<p>
Real-time school bus tracking.
</p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
📊 Reports & Analytics
</h3>

<p>
Generate detailed reports instantly.
</p>

</div>

<div className="bg-white rounded-3xl p-8 shadow-lg">

<h3 className="text-2xl font-bold mb-4">
💬 Dedicated Support
</h3>

<p>
Professional onboarding and technical support.
</p>

</div>

</div>

</div>

</section>
{/* Your Data Section */}

<section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white">

  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center">

      <span className="inline-block bg-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-5">
        🔒 Data Security & Privacy
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Your Data. Your Ownership.
      </h2>

      <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-8">
        At <strong>MySmartCampus</strong>, your school's data always belongs to
        your institution. We never claim ownership of your student, staff or
        school records. Our responsibility is to securely host, protect and
        back up your data while ensuring only authorized users can access it.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-8 mt-14">

      <div className="bg-slate-800 rounded-2xl p-7 text-center">
        <div className="text-5xl mb-4">🔒</div>
        <h3 className="text-xl font-bold mb-3">Secure Storage</h3>
        <p className="text-slate-300">
          Encrypted cloud infrastructure with regular security updates.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-7 text-center">
        <div className="text-5xl mb-4">🏫</div>
        <h3 className="text-xl font-bold mb-3">School Owns Data</h3>
        <p className="text-slate-300">
          Every record belongs exclusively to your school.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-7 text-center">
        <div className="text-5xl mb-4">☁️</div>
        <h3 className="text-xl font-bold mb-3">Automatic Backup</h3>
        <p className="text-slate-300">
          Regular backups help protect your valuable information.
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl p-7 text-center">
        <div className="text-5xl mb-4">📤</div>
        <h3 className="text-xl font-bold mb-3">Data Export</h3>
        <p className="text-slate-300">
          Export your school's data whenever required.*
        </p>
      </div>

    </div>

    <div className="mt-10 text-center text-sm text-slate-400">
      *Data export feature is available according to your subscription plan and system capabilities.
    </div>

  </div>

</section>

<div id="book-demo"></div>

<section
  id="demo"
  className="py-24 px-6 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white"
>
  
</section>
     {/* Demo Form */}
<section
  id="demo"
  className="scroll-mt-28 py-24 px-6 bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white"
>
  <div className="max-w-4xl mx-auto text-center mb-12">
    <h2 className="text-5xl font-bold text-slate-900">
      Book Your Free Demo
    </h2>

    <p className="text-lg text-slate-600 mt-4">
      Experience the smartest School ERP for admissions, fees, attendance,
      transport and complete school management.
    </p>
  </div>
 
  {/* CTA Section */}

<section className="py-24 bg-gradient-to-r from-[#0B1F3A] via-[#1E3A8A] to-[#2563EB] text-white">

  <div className="max-w-5xl mx-auto text-center px-6">

    <h2 className="text-4xl md:text-5xl font-bold">
      Ready to Transform Your School?
    </h2>

    <p className="mt-6 text-xl text-blue-100 leading-8">
      Join the next generation of schools using MySmartCampus to simplify
      admissions, fees, attendance, examinations and complete school management.
    </p>

    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

      <a
  href="https://wa.me/917009960636"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-white text-[#1E3A8A] font-bold px-10 py-4 rounded-xl shadow-xl hover:bg-slate-100 transition"
>
  💬 Chat on WhatsApp
</a>

    </div>

  </div>

</section>

</section>

  <form
    onSubmit={handleSubmit}
    className="max-w-3xl mx-auto bg-white/90 backdrop-blur-lg border border-blue-100 rounded-3xl shadow-2xl p-8 md:p-10"
  >
    <div className="grid md:grid-cols-2 gap-6">

      <input
        type="text"
        placeholder="🏫 School Name"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
      />

      <input
        type="text"
        placeholder="👤 Contact Person"
        value={contactPerson}
        onChange={(e) => setContactPerson(e.target.value)}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
      />

      <input
        type="email"
        placeholder="📧 Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
      />

      <input
        type="text"
        placeholder="📱 Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        required
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
      />

      <input
        type="text"
        placeholder="📍 City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
        className="md:col-span-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
      />
      

    </div>

    <button
  type="submit"
  disabled={loading}
  className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
>
  {loading ? "Submitting..." : "🚀 Book Free Demo"}
</button>
  </form>
   {/* FAQ Section */}

<section className="py-24 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-14">

      <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
        Frequently Asked Questions
      </span>

      <h2 className="text-5xl font-bold mt-6 text-slate-900">
        Got Questions?
      </h2>

      <p className="mt-5 text-gray-600 text-lg">
        Everything you need to know about MySmartCampus School ERP.
      </p>

    </div>

    <div className="space-y-5">

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          What is MySmartCampus?
        </summary>
        <p className="mt-4 text-gray-600">
          MySmartCampus is a complete cloud-based School ERP Software that helps schools manage admissions, fees, attendance, examinations, transport, communication and administration from one platform.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Is MySmartCampus cloud based?
        </summary>
        <p className="mt-4 text-gray-600">
          Yes. Access your school data securely anytime, anywhere using a web browser.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Is our school data secure?
        </summary>
        <p className="mt-4 text-gray-600">
          Yes. Your school's data remains your property. We use secure cloud infrastructure and regular backups to help protect your information.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Does it support CBSE and PSEB?
        </summary>
        <p className="mt-4 text-gray-600">
          Yes. MySmartCampus is being designed to support CBSE, PSEB and other educational boards with configurable academic settings.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Do parents get a mobile app?
        </summary>
        <p className="mt-4 text-gray-600">
          Yes. Parents can receive attendance updates, fee reminders, homework, notices and other school communications through the mobile app.
        </p>
      </details>

      <details className="bg-white rounded-2xl shadow-md p-6">
        <summary className="font-semibold text-lg cursor-pointer">
          Can we migrate data from our existing ERP?
        </summary>
        <p className="mt-4 text-gray-600">
          Yes. We plan to provide data import assistance for schools moving from other ERP systems, subject to supported formats.
        </p>
      </details>

    </div>

  </div>
</section>
      {/* Dashboard */}
      <section className="py-20 px-8 text-center bg-slate-100">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">
          Complete School Management Dashboard
        </h2>

        <p className="text-gray-600 mb-8">
          Get complete control of your school operations with one smart dashboard.
        </p>

        <div className="max-w-6xl mx-auto space-y-8">
          <Image
            src="/dashboard1.png"
            alt="Dashboard 1"
            width={1200}
            height={700}
            className="rounded-xl shadow-2xl"
          />

          <Image
            src="/dashboard2.png"
            alt="Dashboard 2"
            width={1200}
            height={700}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* ERP Modules */}

<section
  id="modules"
  className="py-24 bg-gradient-to-b from-white to-slate-50"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">

      <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
        Complete School ERP
      </span>

      <h2 className="text-5xl font-bold mt-6 text-slate-900">
        Complete School Management Modules
      </h2>

      <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
        Everything your school needs to automate admissions, academics,
        administration, communication and daily operations.
      </p>

    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {[
        "🎓 Student Admission",
        "👨‍🎓 Student Information",
        "💳 Fee Management",
        "📅 Attendance",
        "📝 Homework",
        "📚 Library",
        "🚌 Transport",
        "📍 GPS Tracking",
        "📊 Examination",
        "🏆 Result Cards",
        "🪪 ID Cards",
        "📖 Timetable",
        "👨‍🏫 Staff Management",
        "💼 Payroll",
        "📦 Inventory",
        "📜 Certificates",
        "📢 Notice Board",
        "📱 Parent Mobile App",
        "📈 Reports & Analytics",
        "☁️ Secure Cloud Backup",
      ].map((module) => (

        <div
          key={module}
          className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
        >

          <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-700">
            {module}
          </h3>

        </div>

      ))}

    </div>

  </div>
</section>

     {/* Footer */}

<footer
  id="contact"
  className="bg-slate-950 text-white pt-20 pb-8"
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Company */}
      <div>
        <Image
          src="/logo1.png"
          alt="MySmartCampus"
          width={170}
          height={60}
          className="mb-5"
        />

        <p className="text-slate-400 leading-7">
          Complete School ERP Software for Admissions, Fees, Attendance,
          Examinations, Transport, Parent Communication and School Administration.
        </p>
      </div>

      {/* Products */}
      <div>
        <h3 className="font-bold text-xl mb-5">Products</h3>

        <ul className="space-y-3 text-slate-400">
          <li>School ERP</li>
          <li>Parent Mobile App</li>
          <li>GPS Transport</li>
          <li>Fee Management</li>
          <li>Attendance System</li>
        </ul>
      </div>

      {/* Company */}
      <div>
        <h3 className="font-bold text-xl mb-5">Company</h3>

        <ul className="space-y-3 text-slate-400">
          <li><a href="#features">Features</a></li>
          <li><a href="#modules">ERP Modules</a></li>
          <li><a href="#demo">Book Demo</a></li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h3 className="font-bold text-xl mb-5">Contact</h3>

        <div className="space-y-5 text-slate-400">

          <div>
            <p className="text-white font-semibold mb-1">Phone</p>
            <p>+91 70099 60636</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-1">Email</p>
            <p>info@mysmartcampus.in</p>
          </div>

          <div>
            <p className="text-white font-semibold mb-1">Location</p>
            <p>Gurdaspur, Punjab, India</p>
          </div>

        </div>
      </div>

    </div>

    <div className="border-t border-slate-800 mt-12 pt-8 text-center">

      <p className="text-slate-400">
        Designed in Punjab. Built for Every School in India 🇮🇳
      </p>

      <p className="mt-3 text-sm text-slate-500">
        © 2026 MySmartCampus. All Rights Reserved.
      </p>

    </div>

  </div>

  <a
    href="https://wa.me/917009960636"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-5 py-4 shadow-2xl z-50 font-semibold"
  >
    💬 WhatsApp
  </a>

</footer>
    </main>
  );
}