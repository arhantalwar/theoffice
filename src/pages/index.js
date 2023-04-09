import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Friendspg from "./friendspg";
import Infopg from "./infopg";
import Workpg from "./workpg";

const Home = () => {
  return (
      <>
      <Parallax pages={3}>

      <ParallaxLayer offset={0} speed={0.5}>
      <Infopg />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={1}>
      <Workpg />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={1}>
      <Friendspg />
      </ParallaxLayer>

      </Parallax>
      </>
  )
}

export default Home;
