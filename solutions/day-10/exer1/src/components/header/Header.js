import Button from '../shared/Button';
import './header.css';

const Header = (props) => (
    <header>
        <div className='header-wrapper' style={props.styles.div}>
            <div className='logo-div'>
                <p className='logo' style={props.styles.p}>Natucci's Page</p>
            </div>

            <div className='buttons'>
                <Button class = 'button-header' style={props.styles.p} text='Home'/>
                <Button class = 'button-header' style={props.styles.p} text='Change theme' onclick={props.change}/>
            </div>
        </div>
    </header>
)

export default Header;
