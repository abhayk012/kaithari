import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import type { ReactNode } from "react";

export default function RootGroupLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
