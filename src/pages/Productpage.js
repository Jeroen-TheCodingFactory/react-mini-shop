import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Productpage.css";

const Productpage = (props) => {
    useEffect(() => {
        window.scrollTo(0,0);
    });

    const {type} = useParams();
    if(type === "wine"){
        document
      .getElementsByTagName('meta')
      .namedItem('description')
      .setAttribute('content','Add wine to cart!');
    }

    const toBeRendered = props.collection.map(item => {
        return (
        <li key={item.name} className="productpage__listItem">
            <img src={item.image} alt={item.alt} />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button>Add to Cart</button>
        </li>);
    });


    return (
        <article className="productpage">
            <ul className="productpage__list">
                {toBeRendered}
            </ul>
        </article>
    )
}

export default Productpage;