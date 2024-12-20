import React from "react";
import FooterTop from "./FooterTop";
import FooterInner from "./FooterInner";
import Copyright from "./Copyright";

export default function Footer() {
  return (
    <footer className="py-20 bg-[#45595b] ">
      <div className="container">
        <FooterTop />
        <FooterInner />
        <Copyright />
      </div>
    </footer>
  );
}
