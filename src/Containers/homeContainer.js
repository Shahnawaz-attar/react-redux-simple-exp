import Home from '../components/Home';
import { connect } from 'react-redux';
import { addTocart ,removefromcart} from '../Services/Actions/Action';


const mapStateToProps = (state) => {

    return {
        cartItems: state.cartItems.cartItems
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        addTocarthandler: (product) => dispatch(addTocart(product)),
        removefromcarthandler: (product) => dispatch(removefromcart(product)),
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

