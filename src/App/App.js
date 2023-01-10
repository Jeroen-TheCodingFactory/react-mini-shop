import FilterBar from "../components/FilterBar/FilterBar";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import items from "../data/items";
import "./App.css";
const App = () => {


  return (
    <>
      <FilterBar></FilterBar>
      <GalleryCard drinks={items.whiskey}/>
      <GalleryCard drinks={items.wine}/>
      <GalleryCard drinks={items.pizza}/>
    </>
  );
}

export default App;
