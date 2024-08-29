import Image from "next/image";

interface Props {
  setShowNavBar: (showNavBar: boolean) => void;
}

const NavBar: React.FC<Props> = ({ setShowNavBar }) => {
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
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
