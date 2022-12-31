import React from "react";
import { icons } from "react-icons";
import vg from "../assets/two.webp";
import {
  AiFillGoogleCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillAmazonCircle,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>AI Assistant</h1>
          <p>solution to all your problems</p>
        </main>
      </div>

      <div className="Home2">
        <div>
          <img src={vg} alt="Graphics" />
        </div>
        <p>
          we are your one and only solution to the tech problems you face
          everyday. we are leading tech company whose aim is to increase the
          problem solvig ability in children{" "}
        </p>
      </div>

      <div className="Home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            voluptatibus architecto blanditiis voluptates nulla ducimus fuga
            esse delectus voluptatem laborum ipsam, tempora alias voluptate
            unde? Cum nam nostrum architecto laborum! esse delectus voluptatem
            laborum ipsam, tempora alias voluptate unde? Cum nam nostrum
            architecto laborum!
          </p>
        </div>
      </div>

      <div className="Home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }
            }>

              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay:"0.5s"
            }
            }>

              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay:"0.7s"
            }
            }>

              <AiFillYoutube/>
              <p>YouTube</p>
            </div>
            <div style={{
              animationDelay:"1s"
            }
            }>

              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
