import { Component } from "react";

class SearchBar extends Component {
  beenClicked(e) {
    this.props.sortArr(e);
  }

  beingSelected(e) {
    this.props.filterArr(e);
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="Alphabetically"
            name="sort"
            checked={null}
            onChange={(e) => this.beenClicked(e)}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="Price"
            name="sort"
            checked={null}
            onChange={(e) => this.beenClicked(e)}
          />
          Price
        </label>
        <br />
        <label>
          <strong>Filter:</strong>
          <select onChange={(e) => this.beingSelected(e)}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}

export default SearchBar;
