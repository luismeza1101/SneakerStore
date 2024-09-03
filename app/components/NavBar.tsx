import Image from "next/image";

interface Props {
  setShowNavBar: (showNavBar: boolean) => void;
  options: string[]
}

const NavBar: React.FC<Props> = ({ setShowNavBar, options }) => {
  return (
    <div className="bg-Black w-screen h-screen fixed top-0 left-0 z-[60]">
      <nav className="bg-White w-60 p-6 h-full">
        <Image
          src="/images/icon-close.svg"
          alt="Cerrar"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={() => setShowNavBar(false)}
        />
        <ul className="font-bold grid gap-5 mt-12">
          {options.map((option, index) => (
            <li className="cursor-pointer" key={index}>{option}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
