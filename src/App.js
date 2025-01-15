import './css/index.css'
import Nav from "./components/Nav";
import Mininav from "./components/Mininav";
import Slider from "./components/Slider";
import UpBtn from './components/UpBtn';
import CardSlot1 from "./components/CardSlot1";
import Heading1 from './components/Heading1';
import ImageCont from './components/ImageCont';
import x1 from './image/1.jpg'
import x2 from './image/2.jpg'
import x3 from './image/3.jpg'
import x4 from './image/4.jpg'
import ProductCards from './components/ProductCards';
import p1 from './image/P1.jpg'
import p2 from './image/P2.png'
import p3 from './image/P3.png'
import p4 from './image/P4.png'
import p5 from './image/P5.png'
import p6 from './image/P6.png'
import p7 from './image/P7.png'
import p8 from './image/P8.png'
import p9 from './image/P9.png'
import p10 from './image/P10.png'
import p11 from './image/P11.png'
import p12 from './image/P12.png'
import p13 from './image/P13.png'
import p14 from './image/P14.png'
import p15 from './image/P15.png'
import p16 from './image/P16.png'
import p17 from './image/P17.png'
import p18 from './image/P18.png'
import p19 from './image/P19.png'
import p20 from './image/P20.png'
import Press from './components/Press';
import Footer from './components/Footer';
import MenuBar from './components/MenuBar';


function App() {
  return (
    <>
      <Mininav/>
      <Nav/>
      <Slider/>
      <UpBtn/>
      <MenuBar/>
      <Heading1/>

      <div className="firstCardSlot">
        <CardSlot1 cardImg={x1} pName="Audio"/>
        <CardSlot1 cardImg={x2} pName="Mobile Accessories"/>
        <CardSlot1 cardImg={x3} pName="Computer Accessories"/>
        <CardSlot1 cardImg={x4} pName="Car Accessories"/>
      </div>

      <ImageCont/>

      <div className="parentProductCards">

      <div className="productCards">
        <ProductCards myHeading="NEW LAUNCHES" myImg={p1} specs="50W Party Speaker" model="DASH 10" modelSpecs="Dual Wireless Karaoke Mic | Dual Bass" price="₹5,499" delPrice="₹11,999" discount="54% OFF" Emi="or Rs.1833/Month"/>

        <ProductCards myImg={p2} specs="Card Reader" model="MPORT 30 PLUS" modelSpecs="microSD & SD Cards | Storage Case" price="₹449" delPrice="₹799" discount="44% OFF" Emi="or Rs.150/Month"/>

        <ProductCards myImg={p3} specs="40 Hour Playtime" model="MUFFS M4" modelSpecs="40mm Dynamic Driver | Powerful Bass" price="₹1,199" delPrice="₹2,499" discount="52% OFF" Emi="or Rs.400/Month"/>

        <ProductCards myImg={p4} specs="22 Inches Screen" model="RUFFPAD 22" modelSpecs="Monocolor LCD | One-Tap Erase" price="₹1,049" delPrice="₹2,999" discount="65% OFF" Emi="or Rs.350/Month"/>
      </div>

      <div className="productCards">
        <ProductCards myHeading="AUDIO" myImg={p5} specs="80W HD SOUND" model="HARMONY" modelSpecs="Bass Boost Technology | Bass/Treble" price="₹8,499" delPrice="₹12,999" discount="35% OFF" Emi="or Rs.2833/Month"/>

        <ProductCards myImg={p6} specs="Digital Display" model="HARMONICS TWINS S5" modelSpecs="15 Hour Playtime | Low Latency" price="₹996" delPrice="₹2,999" discount="67% OFF" Emi="or Rs.332/Month"/>

        <ProductCards myImg={p7} specs="16W Speaker" model="DECIBEL 20" modelSpecs="15 Hour Playtime | Heavy Bass" price="₹1,049" delPrice="₹3,999" discount="74% OFF" Emi="or Rs.350/Month"/>

        <ProductCards myImg={p8} specs="Powerfull Bass" model="MUFFS M2" modelSpecs="15 Hour Playtime | 40mm Dynamic" price="₹1,049" delPrice="₹2,499" discount="58% OFF" Emi="or Rs.350/Month"/>
      </div>

      <div className="productCards">
        <ProductCards myHeading="COMPUTER ACCESSORIES" myImg={p9} specs="Smartphone Holder" model="BUBBLE SQUARE" modelSpecs="2.4 GHz Bluetooth | 3-Device Pairing" price="₹849" delPrice="₹2,499" discount="66% OFF" Emi="or Rs.283/Month"/>

        <ProductCards myImg={p10} specs="4K UHD Support" model="PICO 12" modelSpecs="Smart DLP Projector | Rechargeable" price="₹29,999" delPrice="₹44,999" discount="33% OFF" Emi="or Rs.10000/Month"/>

        <ProductCards myImg={p11} specs="13-in-1 Design" model="MPORT 13C" modelSpecs="HDMI | Ethernet" price="₹3,999" delPrice="₹7,999" discount="50% OFF" Emi="or Rs.1333/Month"/>

        <ProductCards myImg={p12} specs="Full-layout Keyboard" model="KEY5 COMBO" modelSpecs="2.4 GHz Wireless | Adjustable DPI" price="₹999" delPrice="₹1,999" discount="50% OFF" Emi="or Rs.333/Month"/>
      </div>

      <div className="productCards">
        <ProductCards myHeading="CAR ACCESSORIES" myImg={p13} specs="Bass Control Roller" model="AUTO TUNE" modelSpecs="Bluetooth 5.3 | Multi-color Lighting" price="₹999" delPrice="₹1,999" discount="50% OFF" Emi="or Rs.333/Month"/>

        <ProductCards myImg={p14} specs="Compact Size" model="AUTO 21" modelSpecs="Bluetooth 5.3 | Multi-function Button" price="₹799" delPrice="₹999" discount="20% OFF" Emi="or Rs.266/Month"/>

        <ProductCards myImg={p15} specs="65 Watts Car Charger" model="CAR POWER 65" modelSpecs="100W Type-C Cable | Dual Ports" price="₹1,599" delPrice="₹1,999" discount="20% OFF" Emi="or Rs.533/Month"/>

        <ProductCards myImg={p16} specs="Portable Tyre Inflator" model="VAYU LITE" modelSpecs="Digital Display | Powerful Motor" price="₹1,521" delPrice="₹2,999" discount="49% OFF" Emi="or Rs.507/Month"/>
      </div>

      <div className="productCards">
        <ProductCards myHeading="MOBILE ACCESSORIES" myImg={p17} specs="3-in-1 Wireless Charger" model="FREEDOM TRIO" modelSpecs="15W Fast Charging | Wide Compatibility" price="₹2,049" delPrice="₹2,999" discount="32% OFF" Emi="or Rs.683/Month"/>

        <ProductCards myImg={p18} specs="15W Smallest Power Bank" model="LUXCELL WIRELESS..." modelSpecs="MagSafe Wireless Charging | Dual Port" price="₹1,449" delPrice="₹3,999" discount="63% OFF" Emi="or Rs.500/Month"/>

        <ProductCards myImg={p19} specs="20-in-1 Cleaner" model="CLEAN G" modelSpecs="Compact & Portable | Multifunctional" price="₹699" delPrice="₹1,599" discount="56% OFF" Emi="or Rs.233/Month"/>

        <ProductCards myImg={p20} specs="3-in-1 Charging Cable" model="KONNECT J9" modelSpecs="Changable Metal Heads | Multi-device" price="₹499" delPrice="₹999" discount="50% OFF" Emi="or Rs.166/Month"/>
      </div>

      </div>
      <Press/>
      <Footer/>

      
    </>
  );
}

export default App;
