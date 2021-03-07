import React from 'react';
import './SearchBar.css';

const SortByOptions {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{
    renderSortByOptions() {
        return Object.keys(SortByOptions).map(SortByOptions => {
            let SortByOptionValue = SortByOptions[sortByOption];
            return <li key={SortByOptionValue}> {sortByOption} </li>;
        });
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
            </div>
            </div>
        );
    }
};

export default SearchBar;