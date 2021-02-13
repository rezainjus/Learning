import PropTypes from 'prop-types';
import Button from './Button'


const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    return ( 
        <header className="header">
            <h1>{props.title}</h1>
            <Button onClick={onClick}/>
        </header>
     );
}

Header.defaultProps = { 
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}
 
export default Header;