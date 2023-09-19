import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import comingsoon from "./assets/comingsoon.png";
import SmallCard from "./components/SmallCard";
import cashIcon from "./assets/cil_cash.png";
import boxIcon from "./assets/package-light.png";
import chatIcon from "./assets/chat.png";
import customerIcon from "./assets/customer.png";
import sendIcon from "./assets/send.png";
import Footer from "./components/Footer";
import BigCardLeft from "./components/BigCardLeft";
import BigCardRight from "./components/BigCardRight";
import Contact from "./components/Contact";
import iphone1 from "./assets/iphone1.png";
import locationIcon from "./assets/VectorLocation.png";
import iphone2 from "./assets/iphone2.png";
import iphone3 from "./assets/iphone3.png";
import iphone4 from "./assets/iphone4.png";
import locationRightIcon from "./assets/Vectorlocationright.png";

const cardsData = [
  {
    icon: cashIcon,
    title: "Get Estimate",
    text: "Get an estimate of the cost to make a delivery.",
    color1: "#ffa500",
    color2: "#c78100",
  },
  {
    icon: boxIcon,
    title: "Deliver a Package",
    text: "Deliver your packages from anywhere.",
    color1: "#C9FFC9",
    color2: "#22D90B",
  },
  {
    icon: chatIcon,
    title: "In-app Message",
    text: "Chat with your courier to be constantly updated.",
    color1: "#FDC86F",
    color2: "#C78100",
  },
  {
    icon: customerIcon,
    title: "Customer Care",
    text: "Get in touch with the customer care service representative.",
    color1: "#D1D1FF",
    color2: "#9494FF",
  },
  {
    icon: sendIcon,
    title: "Real-time Track",
    text: "With Godaesil Ride, you can track your deliveries in real-time.",
    color1: "#FFD1D1",
    color2: "#FF9494",
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <div className="comingsoon-tag">
        <h3>COMING SOON COMING SOON COMING SOON COMING SOON COMING SOON</h3>
      </div>

      <section className="features" id="features">
        <h2>
          <span className="special">Fe</span>atures
        </h2>
        <div className="small-cards-container">
          {cardsData.map((card) => (
            <SmallCard
              key={card.text}
              color1={card.color1}
              color2={card.color2}
              title={card.title}
              icon={card.icon}
              text={card.text}
            />
          ))}
        </div>
      </section>
      <BigCardLeft
        title="Track Deliveries in Real-time"
        image={iphone1}
        text="Stay in control with our real-time delivery tracking. Know where your order is and when it will arrive, ensuring a seamless experience."
        location={locationIcon}
      />
      <BigCardRight
        title="Trusted Delivery Services"
        image={iphone2}
        text="Trust our reliable delivery services for peace of mind. We prioritize safety and efficiency to ensure your packages are in good hands."
        location={locationRightIcon}
      />
      <BigCardLeft
        title="In-App Message With Image Sharing"
        image={iphone3}
        text="Connect seamlessly with in-app messaging and share photos instantly. Enhance communication and provide visual context for a more efficient delivery experience."
        location={locationIcon}
      />
      <BigCardRight
        title="Get Estimate"
        image={iphone4}
        text="Get a quick estimate. Plan your delivery cost with our easy-to-use estimate tool."
        location={locationRightIcon}
      />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
