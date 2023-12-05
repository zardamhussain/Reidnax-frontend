import LoginSignupHandler from "@/components/LoginSignupHandler";
import Footer from "@/components/footer";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <>
      <LoginSignupHandler />
      <Footer />
    </>
  );
}
