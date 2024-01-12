import Card from "./Card";
import hero from '../assets/hero.png';

export default function HeroSection() {
  return (
    <div className="flex flex-row justify-around">
      <img src={hero} alt="hero-img" className="w-2/5 h-full ml-3" />
      <Card cardHeading="QR Code Generator" cardSubtext = "Turn your links to QR codes, create unlimited free QR codes quickly & easily!"/>
    </div>
  );
}
