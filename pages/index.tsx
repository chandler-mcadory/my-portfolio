import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { toast } from '../components/Toast';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import background from "../public/images/newportback.jpg"
// import backgroundload from "../public/images/portbackground.jpg"
import Image from "next/image";
import AssignmentCard from "../components/Cards";
import CardList from "../components/Cards";

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

        <ParallaxLayer className="text-center" offset={.2} speed={.5}>
          <h2>I'm Chandler McAdory</h2>
        </ParallaxLayer>

        <ParallaxLayer className="text-center" offset={.45} speed={1}>
          <h4>I'm a full stack developer who recently graduated from Coding Dojo's full-time boot camp.</h4>
          <p>I've gotten hands-on experience with MERN, C#, and Python.</p>
          <p>Impressively, I can type parentheses without looking.</p>
        </ParallaxLayer>

        <ParallaxLayer className="text-center" offset={.45} speed={1}>
          <CardList />
        </ParallaxLayer>
        
      </Parallax>
    </div>
  )
}
