// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Adjust the path
import Footer from "./components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="">
        <Outlet /> {/* Dynamic content goes here */}
      </main>
      <Footer />
    </div>
  );
}
