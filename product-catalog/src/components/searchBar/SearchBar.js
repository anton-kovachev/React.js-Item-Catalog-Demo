import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
         this.setState({ 'searchText' : '' });
    }

    handleChange(e) {
        console.log(e.target.value);
        console.log(this.state.searchText);
        //this.props.handleSearchBarInputText(e.target.value);
        this.props.handleSearchBarInputText(this.textInput.value);
    }
    


    render() {
        return ( 
            <div>
                <div>
                    <input ref={ (input) => { this.textInput = input } } type="text" placeholder="Search..." defaultValue={this.state.searchText} onKeyUp={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default SearchBar;