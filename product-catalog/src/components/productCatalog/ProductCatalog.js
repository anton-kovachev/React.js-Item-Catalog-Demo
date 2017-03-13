import React, {Component} from 'react';
import Product from '../product/Product';
import ProductHeader from '../productHeader/ProductHeader';
import SearchBar from '../searchBar/SearchBar';
import ProductStore from '../../store/product/ProductStore';


class ProductCatalog  extends Component  {
    constructor(props) {
        super(props);
        this.state = { searchText: '', productIds: ProductStore.getAllProductIdsByCateogryId(parseInt(this.props.productCategoryId)) };
        this.handleSearchBarInputText = this.handleSearchBarInputText.bind(this);
    }
    
    handleSearchBarInputText(searchText) {
        this.setState({searchText: searchText});
    }

    render() {
        
       let products =  [];

        for(let i = 0; i < this.state.productIds.length; i++) {
            products.push(<Product productId={this.state.productIds[i]} searchText={this.state.searchText} key={i} />);
        }
        
        return(
            <div>
                <div>
                    <SearchBar handleSearchBarInputText={this.handleSearchBarInputText} searchText={this.state.searchText}  />
                </div>
                <div>
                    {products}
                </div>
            </div>);
    }
}

export default ProductCatalog;