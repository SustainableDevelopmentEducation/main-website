import Pic from "../../assets/Foundation.jpg"
import Background from "../../assets/Subscribe.jpg"

export default function Subscribe() {
  return (
    <section className="p-56 flex gap-5 " style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 50, 0.7), rgba(0, 0, 100, 0.8)), url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div className="pic w-1/2">
        <img src={Pic} alt="" />
      </div>
      <div className="text w-1/2 flex flex-col justify-center gap-5">
        <h1 className="text-6xl font-bold  text-white">Subscribe To Our Newsletter</h1>
        <p className="text-xl text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, excepturi!</p>
        <div className="inputGroup flex gap-2 mt-5"><input className="p-3 border border-black rounded-md w-96 placeholder:text-2xl placeholder:text-gray-500" type="email" name="email" id="email" placeholder="&#x2709; Email Address" />
        <button className="bg-orange-500 px-6 py-3 text-white rounded-md text-x hover:opacity-55 transition-opacity duration-300">SignUp</button></div>
        
      </div>
    </section>
  )
}
