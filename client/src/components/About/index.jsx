import Background from "../../assets/About.jpg";
import Foundation from "../../assets/Foundation.jpg";
export default function About() {
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
        About <span className="text-deep-orange-700">SDEN</span>
      </div>
      <div className="foundation flex p-32 gap-10">
        <div className="text w-1/2 flex flex-col gap-4 ">
          <h1 className="text-4xl font-bold text-black">
            Our Foundation's <span className="text-deep-orange-700">Journey</span>
          </h1>
          <p className=" text-gray-600 mb-5 w-5/6 text-xl ">
            The inception of SDIE Foundation was deeply influenced by the global
            commitment to the 17 Sustainable Development Goals (SDGs) set by the
            United Nations. As the world rallied to address pressing global
            challenges, we recognized the need for a focused effort to achieve
            these ambitious goals.
          </p>
          <p className="text-gray-600 w-5/6 text-xl ">
            Additionally, the political changes in Afghanistan, particularly the
            exclusion of girls from pursuing education and general existence of
            limitation to accessing education, served as a catalyst for our
            foundation's establishment. This pivotal moment underscored the
            urgency of our mission.
          </p>
        </div>
        <div className="pic w-1/2 ">
          <img src={Foundation} className=" h-full"/>
        </div>
      </div>
    </section>
  );
}
