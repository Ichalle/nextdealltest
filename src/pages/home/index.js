import Home from './Home';
import { getAllProducts } from '@/redux/actions/productActions';
import { connect } from 'react-redux';

const mapStoreToProps = state => ({
    products: state.product.products
})

const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
})

export default connect(mapStoreToProps, mapDispatchToProps)(Home);