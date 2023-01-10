import "./GalleryCard.css";
import getToBerenderedFigures from "./helpers/galleryCardHelper";

const GalleryCard = (props) => {
    return (
        <article class="galleryCard">
            {getToBerenderedFigures(props.drinks)}
        </article>
    );
}

export default GalleryCard;