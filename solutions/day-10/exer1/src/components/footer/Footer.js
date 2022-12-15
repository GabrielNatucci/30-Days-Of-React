import './footer.css';

const Footer = (props) => (
    <footer style={props.styles.div}>
        <div className='footer-wrapper'>
            <p style={props.styles.p}>Copyright {new Date().getFullYear()} ©</p>
        </div>
    </footer>
)

export default Footer;
