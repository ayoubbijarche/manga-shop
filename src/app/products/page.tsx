import Navbar from "../component/navbar";
import { bebas } from "../lib/constants";

const Products = function Poducts(){
  return (
    <div className={`flex-col flex ${bebas.className}`}>
      <Navbar/>
    </div>
  );
}

export default Products;
