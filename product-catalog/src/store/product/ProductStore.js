import Product from  './Product';

class ProductStore {
    constructor() {
        this.productList = {};

        this.productList[1] = (new Product(1, "SchwarzButter", 5, 0.5, 2, true, 20));
        this.productList[2] = (new Product(2, "Gauda", 5, 0.7, 10, true, 10));
        this.productList[3] = (new Product(3, "Feta", 5, 1.5, 2, true, 50));
        this.productList[4] = (new Product(4, "BulgarianCheese", 5, 0.5, 10, true, 50));
        this.productList[5] = (new Product(5, "Margarin", 5, 0.4, 1, false, 20));
        
        this.productList[6] = (new Product(6, "Samsung S7", 2, 2, 500, true, 20));
        this.productList[7] = (new Product(7, "Iphone 7", 2, 0.7, 700, false, 10));
        this.productList[8] = (new Product(8, "BlackBerry", 2, 1, 300, true, 50));
        this.productList[9] = (new Product(9, "IPAD Mini", 2, 0.5, 800, true, 50));
        this.productList[10] = (new Product(10, "Lenovo S33", 2, 0.4, 200, false, 20));
    }

    getProductById(productId) {
        if( this.productList.hasOwnProperty(productId) === true) {
            return this.productList[productId];
        }
        
        return "Not exists!";
    }
    
    getAllProductsByCateogryId(categoryId) {
        var filteredProductsByCategory = []
        // this.productList.filter(function(product, index) { return product.category === categoryId ?  true :  false; });

        
        var productKeys = Object.keys(this.productList);
        productKeys.forEach(function(key) {
                if(this.productList[key].category === categoryId) {
                        filteredProductsByCategory.push(this.productList[key]);
                }
        }.bind(this));
        return filteredProductsByCategory;
    }

    getAllProductIdsByCateogryId(categoryId) {
      var productIds =  this.getAllProductsByCateogryId(categoryId).map( function(product) {
            return product.id;
        } );
        
        return productIds;
    }

    isInStock(productId) {
        const product = this.getProductById(productId);
        return product.inStock === true;
    }

    isProductInStock(product) {
        return product.inStock === true;
    } 
};

var store = new ProductStore();

export default store ;