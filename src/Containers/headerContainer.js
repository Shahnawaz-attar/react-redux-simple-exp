import Home from '../components/Home';
import { connect } from 'react-redux';
import Header from '../components/Header';


const mapStateToProps = (state) => {

    return {
        cartItems: state.cartItems.cartItems
    }

}



export default connect(mapStateToProps)(Header);

