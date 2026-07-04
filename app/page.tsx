"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [schoolName, setSchoolName] = useState("");
const [contactPerson, setContactPerson] = useState("");
const [mobile, setMobile] = useState("");
const [city, setCity] = useState("");

const handleSubmit = () => {
  const message = `New Demo Request:%0A%0ASchool Name: ${schoolName}%0AContact Person: ${contactPerson}%0AMobile: ${mobile}%0ACity: ${city}`;

  window.open(`https://wa.me/917009960636?text=${message}`, "_blank");
};
 return (
  <main className="bg-gradient-to-b from-white to-blue-50 text-gray-900">
    
    {/* Navbar */}
    <nav className="flex justify-between items-center px-4 md:px-12 py-2 bg-gradient-to-r from-[#F8FAFC] to-[#DBEAFE] shadow-md sticky top-0 z-50">
      <Image
        src="/logo1.png"
        alt="MySmartCampus Logo"
        width={160}
        height={70}
        style={{ height: "auto" }}
      />

      <ul className="flex items-center gap-2 md:gap-4 text-sm md:text-base font-medium">
  <li>
    <a href="#home" className="cursor-pointer hover:text-blue-600 transition">
      Home
    </a>
  </li>

  <li>
    <a href="#features" className="cursor-pointer hover:text-blue-600 transition">
      Features
    </a>
  </li>

  <li>
    <a href="#modules" className="cursor-pointer hover:text-blue-600 transition">
      Modules
    </a>
  </li>

  <li>
    <a
      href="#contact"
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition"
    >
      Contact
    </a>
  </li>
</ul>
    </nav>

    {/* Hero Section */}
      <section id="home" className="pt-28 pb-20 px-8 ... bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#06B6D4] text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-200 font-semibold mb-4">
              Punjab’s No.1 School Web Management ERP
            </p>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Transform Your School with Smart ERP Solution
            </h1>

            <p className="text-lg text-blue-100 mb-8">
              Manage admissions, fees, attendance, transport and complete school operations with one powerful platform.
            </p>

            <a
  href="#demo"
  className="inline-block bg-white text-blue-700 px-8 py-4 rounded-xl font-bold shadow-2xl hover:scale-105 transition"
>
  Book Free Demo
</a>
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

  {/* Features Section */}
<section id="features" className="py-24 px-8 bg-gradient-to-b from-white to-blue-50">
  <h2 className="text-5xl font-bold text-center mb-4 text-slate-900">
    Our Core Features
  </h2>

  <p className="text-center text-gray-600 text-lg mb-14 max-w-3xl mx-auto">
    Powerful tools designed to simplify school management and improve daily operations.
  </p>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Student Card */}
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">
        🎓 Student Management
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Manage student admissions, records, profiles, and complete academic data with ease.
      </p>
    </div>

    {/* Fee Card */}
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">
        💳 Fee Management
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Track fees, dues, receipts, pending balances, and payment reports in real time.
      </p>
    </div>

    {/* Attendance Card */}
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
      <h3 className="text-2xl font-bold mb-4 text-blue-800">
        📊 Attendance Tracking
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Monitor daily attendance of students and staff instantly with smart reporting.
      </p>
    </div>
    <div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    📝 Exam Management
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Manage exams, marks, report cards and academic performance easily.
  </p>
</div>
<div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    🚌 GPS Transport
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Live bus tracking with route management and student pickup monitoring.
  </p>
</div>
<div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    📱 Parent Mobile App
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Parents get instant updates for fees, attendance, homework and notices.
  </p>
</div>
<div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    👨‍🏫 Staff Management
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Manage teachers, staff records, attendance and payroll efficiently.
  </p>
</div>
<div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    📊 Reports & Analytics
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Generate smart reports for fees, attendance, academics and operations.
  </p>
</div>
<div className="bg-gradient-to-br from-slate-50 to-blue-100 border border-blue-200 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 min-h-[250px]">
  <h3 className="text-2xl font-bold mb-4 text-blue-800">
    🔔 Smart Notifications
  </h3>
  <p className="text-gray-600 leading-relaxed">
    Send instant notices, alerts and announcements to parents and staff.
  </p>
</div>

  </div>
</section>
      {/* Why Choose Section */}
      <section className="py-20 px-8 bg-gradient-to-r from-blue-50 to-cyan-50">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Why Choose MySmartCampus?
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Mobile App for Parents & Teachers</h3>
            <p>Stay connected with real-time updates, homework, attendance and notices.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Live GPS Transport Tracking</h3>
            <p>Track school buses in real-time with smart GPS monitoring.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Smart Fee Receipt Management</h3>
            <p>Generate instant fee receipts with payment tracking and due reports.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Dedicated Support Team</h3>
            <p>Our expert team is always available to assist your school.</p>
          </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Multi Language Support</h3>
            <p>Operate seamlessly in Punjabi, Hindi, and English.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-3">Easy to Use Interface</h3>
            <p>Simple and user-friendly design for admins, teachers and parents.</p>
          </div>
        </div>
      </section>

      {/* Demo Form */}
<section id="demo" className="py-20 px-8 bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white">
        <h2 className="text-4xl font-bold text-center mb-12">
          Book Free Demo
        </h2>

        <div className="max-w-3xl mx-auto bg-white text-black rounded-xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="School Name" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Contact Person" className="border p-3 rounded-lg" />
            <input type="text" placeholder="Mobile Number" className="border p-3 rounded-lg" />
            <input type="text" placeholder="City" className="border p-3 rounded-lg" />
          </div>

          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg mt-6 w-full">
            Submit
          </button>
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
      <section id="modules" className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-800">
          ERP Modules
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {["Admissions", "Fees", "Examinations", "Transport", "Library", "Payroll", "Inventory", "Reports"].map((item) => (
            <div
              key={item}
             className="bg-[#F8FAFC] border-l-4 border-blue-700 text-gray-800 text-2xl font-semibold p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-r from-[#0F172A] to-[#0F172A] text-white py-10 px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MySmartCampus</h3>
            <p>India’s Next Generation Web School Management ERP</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p>Phone: +917009960636</p>
            <p>Email: info@mysmartcampus.in</p>
            <p>City: Dhariwal, Punjab</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Features</h3>
            <p>School ERP</p>
            <p>Mobile App</p>
            <p>GPS Transport</p>
            <p>Fee Management</p>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-400 pt-6">
          <p>© 2026 MySmartCampus. All Rights Reserved.</p>
        </div>
        <a
  href="https://wa.me/917009960636"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-2xl z-50 font-semibold"
>
  WhatsApp
</a>
      </footer>
    </main>
  );
}