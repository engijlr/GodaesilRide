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
      <section className="comingsoon-tag">
        <img src={comingsoon} />
      </section>
      <section className="features">
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
      <BigCardLeft />
      <BigCardRight />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
