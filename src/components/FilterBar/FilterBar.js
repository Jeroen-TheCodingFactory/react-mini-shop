import "./FilterBar.css";

const FilterBar = () => {


    return (
        <section class="filterBar">
            <div className="filterBarWrapper">
                <div className="filterBarInputWrapper">
                    <input type="checkbox" name="" id="whiskey" className="filterBar__checkbox" />
                    <label htmlFor="whiskey">Whiskey</label>
                </div>
                <div className="filterBarInputWrapper">
                    <input type="checkbox" name="" id="wine" className="filterBar__checkbox" />
                    <label htmlFor="wine">Wine</label>
                </div>
                <div className="filterBarInputWrapper">
                    <input type="checkbox" name="" id="pizza" className="filterBar__checkbox" />
                    <label htmlFor="pizza">Pizza</label>
                </div>
            </div>

        </section>
    );
}

export default FilterBar;