'use client'
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Navigation from "@/components/Navigation";
import Home from "@/components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "@/components/Students";
import Manage from "@/components/Manage";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/students" element={<Students/>} />
          <Route exact path="/manage" element={<Manage/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      </body>
    </html>
  );
}
