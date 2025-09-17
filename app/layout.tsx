import type { Metadata } from "next";
import { Roboto  } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Clientlayout from "./_context/layout";
import { Toaster } from "@/components/ui/sonner"
const geistSans = Roboto ({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appointment App",
  description: "web application designed to simplify the process of booking medical appointments. It connects patients with doctors efficiently, allowing users to schedule, manage, and track appointments through an intuitive and user-friendly interface",
  keywords:"doctor appointment app ,online doctor booking ,medical appointment system  healthcare scheduling  book doctor online  doctor booking platform clinic appointment app ",
  icons:{
    icon:"/Appointments-doctors-app/assets/logo.png"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Header/>
       <Clientlayout>
         {children}
          <Toaster />
       </Clientlayout>
        <Footer/>
      </body>
    </html>
  );
}
