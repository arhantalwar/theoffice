import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Infopg = () => {

    return (
        <>
        <div className="h-screen w-screen bg-black text-white flex justify-center items-center gap-10 p-10">
            <div className="h-full w-screen justify-center items-center flex">
                <img src="https://i.pinimg.com/originals/61/be/42/61be42ebd791710510f3d9338114bacf.jpg" />
            </div>
            <div className="h-full w-screen font-Passion mt-28">
                <Parallax pages={2}> 
                  <ParallaxLayer offset={0} speed={1}>
                    <h1 id="hi" className="text-9xl">Hi</h1>
                  </ParallaxLayer>
                  <ParallaxLayer offset={1} speed={1}>
                    <h1 className="text-9xl">I'm Jim Halpert</h1>
                    <div>
                    <h1 className="text-3xl">(keep scrolling if you wanna know more about me...)</h1>
                    </div>
                  </ParallaxLayer>
                </Parallax>
            </div>
        </div>
        </>
    )
}

export default Infopg;
