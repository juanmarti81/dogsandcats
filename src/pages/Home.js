import ItemListContainer from "../components/ItemListContainer";
import Carrousel from "../components/Carrousel";
import {NewArrivals} from "../components/NewArrivals";

const Home = () => {
  return (
    <div>
      <div className="w-full place-content-center flex pt-10 pb-10">
        <ItemListContainer />
      </div>
      <Carrousel />
      <NewArrivals />
    </div>
  );
};

export default Home;
