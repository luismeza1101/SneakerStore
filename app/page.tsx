import Header from "./components/Header";
import Carrousel from "./components/Carrousel";
import ProductInformation from "./components/ProductInformation";
import { ProductContextProvider } from "./context/ProductContext";

export default function Home() {
  return (
    <ProductContextProvider>
      <Header/>
      <Carrousel/>
      <section className="w-[80%] mx-auto my-6">
        <ProductInformation/>
      </section>
    </ProductContextProvider>
  );
}
