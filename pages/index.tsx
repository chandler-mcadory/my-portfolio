import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from '../components/Toast';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import background from "../public/images/newportback.jpg"
// import backgroundload from "../public/images/portbackground.jpg"
import Image from "next/image";
import AssignmentCard from "../components/Cards";
import CardList from "../components/Cards";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div>
      <Parallax pages={2}>
        <ParallaxLayer 
          speed={1.7}
          factor={4}
          // style={{
          //   backgroundImage: `url(${background.src})`,
          //   backgroundSize: 'cover',
          // }}
          >
            <Image src={background} alt="Background" fill priority quality={100} style={{objectFit: "cover"}} /> 

        </ParallaxLayer>


        <ParallaxLayer className="text-center" offset={.2} speed={1}>
          <AboutMe />
          <CardList />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )
}
