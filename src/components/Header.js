import logo from "../img/icon100.png";

function Header() {
  return (
    <div className="bg-[#29857f] px-4 text-center sm:px-20 flex flex-row justify-start items-center gap-4">
      <img src={logo} alt="logo" className="w-20" />
      <h1 className="text-[#d3f1ed] text-2xl font-extrabold">TODO APP</h1>
    </div>
  );
}

export default Header;
