import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import ProductInformation from "./components/ProductInformation";
import { ProductContextProvider } from "./context/ProductContext";

export default function Home() {
  return (
    <ProductContextProvider>
      <div className="flex flex-col h-screen">
        <Header/>
        <section className="flex flex-col gap-6 flex-1 justify-center items-center mx-auto desktop:flex-row desktop:w-[90%] desktop:gap-16 xl:w-[70%]">
          <Carrousel/>
          <ProductInformation/>
        </section>
      </div>
    </ProductContextProvider>
  );
}
