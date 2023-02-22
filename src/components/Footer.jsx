import "../styles/Footer.css";
import Button from "./Button.jsx";


function Footer({ pageActuelle, updatePageActuelle, contactVisible }) {
    return (
        <footer>
            {contactVisible ? 
            <div className="contactBtn">
                <Button text="Contact" linkTo={() => updatePageActuelle("Contact")} />
            </div>
            : null}
            {contactVisible ?
            <div className="line"></div>
            : null}
            <div className="otherLinks">
                <a href="https://github.com/Nicos-08/choixpeau-magique" target="_blank" rel="noreferrer">Code (GitHub)</a>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    contactVisible: true
}

export default Footer;