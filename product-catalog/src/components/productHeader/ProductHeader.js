import React, {Component} from 'react';
import '../product/Product.css';

class ProductHeader extends Component {
    constructor(props)  {
        super(props);
    }

    render() {
        return (
            <div className="Product-Row-Position Product-Row"> {Object.keys(this.props.product).map(function(propertyName, index ) {
                    return (<div className='Inline-Div Product-Cell Header-Name' key={index} >{propertyName}</div>);
                })}
            </div>);
    }

};
export default ProductHeader;