import { useState, useEffect } from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import GalleryCard from "../components/GalleryCard/GalleryCard";
import itemsFromDataFile from "../data/items";
import "./App.css";
const App = () => {

  const [items, setItems] = useState([]);
  const [defaultItems, setDefaultItems] = useState([]);

  useEffect(() => {
      /* iterator for which card is which */
    let i = 0;
    let types = ["whiskey","wine","pizza"];
    const galleryCardsToBeRendered = itemsFromDataFile.map(collection => {
      let temp = <GalleryCard key={types[i]} type={types[i]} items={collection}/>
      i = i + 1;
      return temp;
   });

   setItems(galleryCardsToBeRendered);
   setDefaultItems(galleryCardsToBeRendered);
  },[]);

  const onFilter = (typeToBeFiltered) => {
    const copy = [...defaultItems];
    const cardsToBeRendered = copy.filter(card => {
      if(card.props.type === typeToBeFiltered){
        return card;
      }
    });
    setItems([cardsToBeRendered]);
  }

  return (
    <>
      <FilterBar onFilter={onFilter}></FilterBar>
      {items}
    </>
  );
}

export default App;
