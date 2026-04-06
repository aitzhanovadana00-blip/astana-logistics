import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Services />
        <Advantages />
        <ContactForm />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
