import '../App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

function Header(props) {
    return (
        <div className='shopping-card'>
            <div className='shopping' onClick={() => props.handleShow(false)}>NTP_Shop</div>
            <div className='cart-icon' onClick={() => props.handleShow(true)}> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                <sup> {props.count} </sup>
            </div>
        </div>
    );
}

export default Header;