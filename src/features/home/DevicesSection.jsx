import DevicesCard from "./DevicesCard";
import Main from "../../ui/Main";
import { FiSmartphone } from "react-icons/fi";
import { FaTablet } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import { FaLaptop } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { GiVrHeadset } from "react-icons/gi";

const DEVICES = [
  {
    label: "Smartphones",
    icon: FiSmartphone,
    text: "Cineverse is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or Apple App Store",
  },
  {
    label: "Tablet",
    icon: FaTablet,
    text: "Enjoy Cineverse on your Android or iPad tablet with a responsive interface and immersive viewing. Download the app from the Google Play Store or Apple App Store.",
  },
  {
    label: "Smart TV",
    icon: FaTv,
    text: "Watch Cineverse directly on your Smart TV. Available on major platforms like Android TV, Roku, and Apple TV for a cinematic experience at home.",
  },
  {
    label: "Laptops",
    icon: FaLaptop,
    text: "Access Cineverse from any browser on your Windows, macOS, or Linux laptop. No downloads needed—just log in and start streaming.",
  },
  {
    label: "Gaming Consoles",
    icon: GiConsoleController,
    text: "Stream Cineverse on your PlayStation or Xbox for big-screen entertainment between gaming sessions. Available in your console's app store.",
  },
  {
    label: "VR Headsets",
    icon: GiVrHeadset,
    text: "Step into Cineverse with supported VR headsets like Meta Quest and HTC Vive. Enjoy immersive cinema in virtual reality through our dedicated VR app.",
  },
];

function DevicesSection() {
  return (
    <Main>
      <div id="devices">
        <h2 className="text-text-primary mb-3 text-2xl font-bold">
          We provide you streaming experiences across various devices
        </h2>
        <p className="text-text-tertiary mb-7">
          With Cineverse, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {DEVICES.map((device) => (
            <DevicesCard
              label={device.label}
              icon={device.icon}
              text={device.text}
            />
          ))}
        </div>
      </div>
    </Main>
  );
}

export default DevicesSection;
