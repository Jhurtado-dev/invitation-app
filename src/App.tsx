

import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Confetti from "./components/Confetti";
import SectionDivider from "./components/SectionDivider";
import InvitationMessage from "./components/InvitationMessage";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import ContactInfo from "./components/ContactInfo";
export default function App() {

  return (
    <>
    <Confetti />
     <Navbar />
      <Hero />
      <SectionDivider />
      <InvitationMessage />
      <SectionDivider />
      <Countdown />
       <SectionDivider />
       <Gallery />
       <SectionDivider />
       <ContactInfo/>
       <SectionDivider />
    </>
  )
}
