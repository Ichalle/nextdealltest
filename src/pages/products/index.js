import Products from './Products';
import { getAllProducts } from '@/redux/actions/productActions';
import { connect } from 'react-redux';

const mapStoreToProps = state => ({
    products: state.product.products
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(Products);