import logo from "../assets/logo.png";

export default function Navbar({ companyName }) {
  return (
    <>
      <div className="inline-flex items-start">
        <img src={logo} alt="logo" className="w-10 h-10 m-6" />
        <h1 className="mt-6 text-3xl font-bold text-black ml-[-20px] font-titilliumWeb">
          {companyName}
        </h1>
      </div>
    </>
  );
}
