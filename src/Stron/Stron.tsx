import { FacebookOutlined, Instagram, Twitter } from '@mui/icons-material'
import Button from '@mui/material-next/Button'

import icon from '../Women.svg'
import './Stron.css'

export const Stron = () => {
    return (
        <div className="Stron">
            <div className="LeftStron">
                <div className="TitleStron">
                    Discover Your Runway Potential: Unleash Your Inner Style Icon
                </div>
                <div className="SubTitleStron">
                    Where Fashion Dreams Take Flight: Unleash Your Potential at Our Model School
                </div>
                <div className="ButtonStron">
                    <Button className="buttonStron" variant="filled">
                        <div className="StronButtonText">on the podium</div>
                    </Button>
                </div>
            </div>
            <div className="RightStron">
                <img src={icon} className="Women" alt="women" />
            </div>
            <div className="links">
                <div className="verticalLine"></div>
                <div className="muiIcons">
                    <FacebookOutlined fontSize="large" />
                    <Twitter fontSize="large" />
                    <Instagram fontSize="large" />
                </div>
                <div className="verticalLine"></div>
            </div>
        </div>
    )
}
