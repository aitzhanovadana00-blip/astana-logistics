import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Contract from "@/components/Contract";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Gallery />
        <Advantages />
        <Contract />
        <Stats />
        <ContactForm />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
