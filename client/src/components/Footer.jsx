import logo from "../assets/ndseLogoPrimary.png";

function Footer() {
  return (
    <>
      <footer className="p-10 ps-32  px-20 flex flex-col gap-20">
        <div className="flex ">
          <div className="links flex gap-32  w-2/3">
            <div className="product flex flex-col gap-2 ">
              <h3 className="text-xl font-bold">Product</h3>
              <a href="#">lorem</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
              <a href="#">lorem epsum</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
            </div>
            <div className="product flex flex-col gap-2 ">
              <h3 className="text-xl font-bold">Information</h3>
              <a href="#">lorem</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
              <a href="#">lorem epsum</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
            </div>
            <div className="product flex flex-col gap-2">
              <h3 className="text-xl font-bold">Company</h3>
              <a href="#">lorem</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
              <a href="#">lorem epsum</a>
              <a href="#">epsum</a>
              <a href="#">lorem</a>
            </div>
        
          </div>
          <div className="logo w-1/3">
            <img src={logo} alt="Logo" className="w-fit" />
          </div>
        </div>
        <div className="footlinks flex items-center justify-center gap-5">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
        </div>
      </footer>
    </>
  );
}

export { Footer };
