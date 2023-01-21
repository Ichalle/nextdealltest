import Products from './Products';
import { 
    getAllProducts,
    getAllCategories,
    getProductsSearch,
    getProductsByCategory
 } from '@/redux/actions/productActions';
import { connect } from 'react-redux';

const mapStoreToProps = state => ({
    products: state.product.products
})

const mapDispatchToProps = {
    getAllProducts,
    getAllCategories,
    getProductsSearch,
    getProductsByCategory
};

export default connect(mapStoreToProps, mapDispatchToProps)(Products);