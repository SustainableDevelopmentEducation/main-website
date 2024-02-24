import Background from "../../assets/About.jpg";
// import Foundation from "../../assets/Foundation.jpg";
import Subscribe from "../Subscribe";

export default function Home() {
  return (
    <section>
      <div
        className="py-36 header text-white text-6xl font-bold text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 100, 0.8)), url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Change Starts with Small Choices <br /> <span className="text-sm">Welcome to SDEN foundation where we are dedicated to realizing the vision of a more equitable and sustainable world</span> <br /> <div className="text-sm"><button>Become a volunteer</button> <button>Donate now</button></div>
      </div>
      <div>
      <div>
        <h2>Welcome to SDEN - Sustainable Development & Education Network</h2>
        <p>Our Commitment Lies Firmly in line with the <span>united Nations' 17 Sudatinable Development Goals (SDGs)</span>.  The Global Blueprint for addressing the world's most pressing challenges</p>
      <p>At the heard of our mission is <span>Goal 4: Quality Education</span>. A fundamental human right for all individuals.  by promoting and advocating for accessible quality education with a special focus on marginalized communities and goal we believe we can empower individuals strengthen communities and foster positive change worldwide</p>
      <p>Join us on this Transformative Journey towards sustainable development. Where your support can make a world of difference.  Together we can achieve the SDGs and create a more equitable world</p>
      <button>Get Involved</button>
      </div>
      <img src="" alt="" />
      </div>
      <div>
        <div>
          <span></span>
          <h3>Donate</h3>
          <p>Make a difference by supporting our mission to provied equal educational opportunities for all.  Every contribution counts</p>
        </div>
        <div>
          <span></span>
        <h3>Get Involved</h3>
        <p>Explore how you can be part of our journey towards sustainable development</p>
        </div>
        <div>
          <span></span>
          <h3>Volunteer</h3>
          join us in nurturing responsible citizens who actively contribute to society and advocate for the rights of others
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <div>
            <span></span>
            <p></p>
            </div>
            <h3></h3>
            <p></p>
            <button></button>
          </div>
        </div>
        <div>
          <div>
            <div>
            <span></span>
            <p></p>
            </div>
            <h3></h3>
            <p></p>
            <button></button>
          </div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
          <div>
            <div>
            <span></span>
            <p></p>
            </div>
            <h3></h3>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
      <Subscribe/>
    </section>
  )
}
