import featureIcon1 from '../../images/feature-icon-1.svg';
import featureIcon2 from '../../images/feature-icon-2.svg';
import featureIcon3 from '../../images/feature-icon-3.svg';
import featureIcon4 from '../../images/feature-icon-4.svg';
import roadmap from '../../images/roadmap.svg';

function RoadmapSection() {
  return (
    <div className="w-full roadmap-section pb-8" id="roadmap">
      <div className="py-16">
      <p className="container w-3/4 mx-auto  text-5xl font-semibold leading-tight ">
          Roadmap
      </p>
      <div className="small-space"></div> 
      <p className="container w-3/4 mx-auto leading-tight ">
      We are in for an adventure.
      </p>
      <div className="small-space"></div> 
      <p className="container w-3/4 mx-auto leading-tight ">
      We have set up some dares for ourselves. Once we hit those through <br /> percentage, we will begin to achieve our stated dares

      </p>
      </div>
    
      <div className="container w-3/4 mx-auto my-auto flex justify-between">
        <div className="w-1/2">
            <div className="flex my-8">
                <div className="mr-8">
                    <div className="roadmap-percentage">
                        10%
                    </div>
                    {/* <img  alt="Feature Icon 1"/> */}
                </div>
                <div>
                    <p className=" troadmap-percentage-text">
                    We throw a party to our friends
                    </p>
                </div>
            </div>
            <div className="flex my-8">
                <div className="mr-8">
                <div className="roadmap-percentage">
                        20%
                    </div>
                </div>
                <div>
                    <p className="troadmap-percentage-text">
                    we airdrop 10 Rare Desi punks to random Desi SOL holders
                    </p>
                </div>
            </div>
           
            <div className="flex my-8">
                <div className="mr-8">
                <div className="roadmap-percentage">
                        40%
                    </div>
                </div>
                <div>
                    <p className="troadmap-percentage-text">
                    We create the member exclusive discord server
                    </p>
                </div>
            </div>

            <div className="flex my-8">
                <div className="mr-8">
                <div className="roadmap-percentage">
                        60%
                    </div>
                </div>
                <div>
                    <p className="troadmap-percentage-text">
                    we lauch a Member-Exclusive Desi Sol Merch Store, featuring Limited <br /> Edition tees, hoodies and other goodies.
                    </p>
                </div>
            </div>

            <div className="flex my-8">
                <div className="mr-8">
                <div className="roadmap-percentage">
                        80%
                    </div>
                </div>
                <div>
                    <p className="troadmap-percentage-text">
                    We drop Desi Little Ones collection (nft breeding)
                    </p>
                </div>
            </div>


            <div className="flex my-8">
                <div className="mr-8">
                <div className="roadmap-percentage">
                100% 
                    </div>
                </div>
                <div>
                    <p className="troadmap-percentage-text">
                    Desi Stall will donate 25 SOL to both Smile Foundation India <br /> and NoKidHunger
                    </p>
                </div>
            </div>

        </div>
        <div className="w-1/2 pl-24">
            <img src={roadmap} alt="Road-map"/>
        </div>
      </div>
    </div>
  );
}

export default RoadmapSection;
