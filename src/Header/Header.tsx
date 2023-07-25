import Button from '@mui/material-next/Button'
import icon from '../FashionIconix.svg'
import './Header.css'

export const Header = () => {
    return (
        <div>
            <div className="head">
                <div className="row">
                    <div className="Icon">
                        <img src={icon} className="App-logo" alt="logo" />
                        <div className="line"></div>
                    </div>
                    <div className="HeadInfo">
                        <div>About us</div>
                        <div>Courses and programs</div>
                        <div>Teachers</div>
                        <div>Graduates</div>
                    </div>
                    <div className="Button">
                        <Button className="button" variant="filled">
                            <div className="RegisterText">Register</div>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
