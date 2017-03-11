import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import ProductCatalog from './components/productCatalog/ProductCatalog';
import Accordion from './components/accordion/Accordion';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 'searchText' : '' };
    this.handleSearchBarInputText = this.handleSearchBarInputText.bind(this);
  }
  
  handleSearchBarInputText(searchText) {
    this.setState({searchText: searchText});
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Product Catalog</h2>
        </div>
        <p className="App-intro">
        </p>
        <Collapsible trigger="Food" className="Collapse-Header">
            <ProductCatalog productCategoryId="5" />
        </Collapsible>
        
        <Collapsible trigger="Gadgets" className="Collapse-Header">
            <ProductCatalog productCategoryId="2" />
        </Collapsible>
      </div>
    );
  }
}

export default App;
