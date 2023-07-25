import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material'
import icon from '../FashionIconix.svg'
import './Footer.css'
export const Footer = () => {
    return (
        <div>
            <div className="foot">
                <div className="columns">
                    <div className="icon">
                        <img src={icon} className="App-logo" alt="logo" />
                        <div className="messengers">
                            <FacebookOutlined fontSize="large" />
                            <Twitter fontSize="large" />
                            <Instagram fontSize="large" />
                        </div>
                    </div>
                    <div className="aboutUs">
                        About us <br />
                        Courses and programs
                        <br />
                        Teachers
                        <br />
                        Graduates
                    </div>
                    <div className="Event">
                        Event
                        <div className="txtColor">
                            Privacy
                            <br />
                            Experience
                            <br />
                            Support
                        </div>
                    </div>
                    <div className="Support">
                        Support
                        <div className="txtColor">
                            Customer Stories
                            <br />
                            Startup Program
                        </div>
                    </div>
                    <div className="FAQ">
                        FAQ
                        <div className="txtColor">
                            About Us
                            <br />
                            Careers
                            <br />
                            Contact Us
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
