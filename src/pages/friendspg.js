import Imgholder from "./imgholder";

const Friendspg = () => {
    return (
        <>
        <div className="h-screen w-screen block">
        <div className="h-52 w-screen bg-black flex justify-center items-center">
            <h1 className="text-7xl text-white font-Passion"> These guys work with me... </h1>
        </div>
        <div className="flex px-10 justify-center">
              <Imgholder friendsName="Pam" infoAboutThem="Sits at reception, and looks at me"
                url="http://images2.fanpop.com/image/photos/11400000/Pam-Beesly-pam-halpert-11437436-710-959.jpg" />

              <Imgholder friendsName="Michael" infoAboutThem="Hate to say it, but my BOSS"
                url="https://lastfm.freetls.fastly.net/i/u/ar0/b1c3c53f4e754d80a1aa0d51bb96f7dc.jpg" />

              <Imgholder friendsName="Dwight" infoAboutThem="I do pranks on him all the time"
                url="https://www.myany.city/sites/default/files/styles/scaled_cropped_medium__260x260/public/field/image/node-related-images/sample-dwight-k-schrute.jpg?itok=8TfRscbA" />

              <Imgholder friendsName="Andy" infoAboutThem="Loves to sing high notes"
                url="https://www.looper.com/img/gallery/the-office-the-real-reason-andy-was-promoted-over-dwight/intro-1586377261.jpg" />
       
              <Imgholder friendsName="Kevin" infoAboutThem="He thought 11 was a sweet"
                url="https://uproxx.com/wp-content/uploads/2020/07/office-kevin.jpg?w=1600&h=660&crop=1" />

        </div>
        </div>
        </>
    )
}

export default Friendspg;

