"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import React, { useState } from "react";
import "./globals.css";
import Footer from "@/Components/footer"; // Importa o componente do footer
import Topbar from "@/Components/topbar"; // Importa o componente da topbar
import { AboutModal } from "@/about/aboutmodal"; // Importa o modal "Sobre Nós"
import { PrivacyContent } from "@/Components/PrivacyContent"; // Importa o conteúdo da política de privacidade
import Modal from "@/app/Modal/Modal"; // Importa seu componente de modal genérico
import { title } from "process";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openAboutModal = () => setIsAboutModalOpen(true);
  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closeAboutModal = () => setIsAboutModalOpen(false);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false);

  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Topbar onAboutClick={openAboutModal} />
        {children}
        <Footer onPrivacyClick={openPrivacyModal} onAboutClick={openAboutModal} />


        <AboutModal isOpen={isAboutModalOpen} onClose={closeAboutModal} />


        <Modal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal}>
          <PrivacyContent />
        </Modal>

        <div id="modal-root"></div>
      </body>
    </html>
  );
}