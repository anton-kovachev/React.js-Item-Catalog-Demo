import React, { Component } from 'react';
import ProductStore from '../../store/product/ProductStore';
import ProductRow from '../productRow/ProductRow';
import ProductHeader from '../productHeader/ProductHeader';
import MathUtility from '../../store/utility/MathUtility';
import  './Product.css';
import classNames from 'classnames';

class Product extends Component {
    constructor(props) {
        super(props);
        this.toogleStock = this.toogleStock.bind(this);
    };

    componentWillMount() {
        const productId = parseInt(this.props.productId);
        //const store = new ProductStore();

        let product =  ProductStore.getProductById(productId);
        this.setState({ 'product': product});
        this.setState( { 'matchFilter': true });

    }

    componentDidMount() {
        this.setChangeId = setInterval(this.toogleStock, 1000);
    }
    
    componentWillUnMount() {
        clearInterval(this.setChangeId);
    }
    
  //  shouldComponentUpdate(nextProps, nextState) {
    //    console.log(this.state.product.inStock + " " + nextState.product.inStock);
      //  if (this.state.product.inStock !== nextState.product.inStock) {
     //       return true;
      //  }
        
    //    return false;
   // }

    toogleStock() {
         this.setState( (prevState, props) => { 
             let randInt = MathUtility.getRandomInt(0,1);

             const product = prevState.product;
              product.inStock = product.inStock == randInt; 
              product.inStock ? product.quamtity = MathUtility.getRandomInt(1, 50) : product.quamtity = 0;
              
              return { 'product': product }});
    }

    componentWillReceiveProps(nextProps) {
       let searchText = '';
       if (nextProps.searchText !== undefined || nextProps.searchText !== '') {
            searchText = nextProps.searchText.toLowerCase();
       }

            if ( searchText !== '' && this.state.product.name.toLowerCase().includes(searchText) === false) {
                this.setState({ 'matchFilter': false });
            }
            else 
            {
                this.setState({ 'matchFilter': true });
            }
    };

    render() {
        if (this.state.matchFilter) {
            return (
                <div className="Product-Row-Position ">
                    <ProductHeader product={this.state.product} />
                    <ProductRow product={this.state.product} matchFilter={this.state.matchFilter} />
                </div>
            );
        }
        else {
            return (<div></div>);
        }
    
    }
}

export default Product;