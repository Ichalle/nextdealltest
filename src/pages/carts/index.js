import Carts from './Carts';
import { 
    getAllCarts,
 } from '@/redux/actions/cartActions';
import { connect } from 'react-redux';

const mapStoreToProps = state => ({
})

const mapDispatchToProps = {
    getAllCarts
};

export default connect(mapStoreToProps, mapDispatchToProps)(Carts);