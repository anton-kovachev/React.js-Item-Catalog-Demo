import React, {Component} from 'react';
import ProductStore from  '../../store/product/ProductStore';
import './ProductRow.css';

class ProductRow extends Component {
    constructor(props) {
        super(props);
        this.store = ProductStore;
        this.state = { isInStock: this.store.isProductInStock(this.props.product) };
    }

     componentWillReceiveProps(nextProps) {
         this.setState({ isInStock: this.store.isProductInStock(nextProps.product)});
     }

    render() {
        
        let generateItemRow = function( propertyName, index ) 
        {
            return  (<div  className={`Inline-Div Product-Cell Product-Name ${this.props.matchFilter ? '' : 'Product-Filter'} `} key={index} > {this.props.product[propertyName].toString() } </div>);
        };

        generateItemRow = generateItemRow.bind(this);

        return (   <div className={`Product-Row Product-Row-Position ${this.state.isInStock ? 'Available-Product-Row-Background' : 'UnAvailable-Product-Row-Background '}`}>
                        {Object.keys(this.props.product).map(generateItemRow)}
                    </div>
                );
    }
};

export default ProductRow;


