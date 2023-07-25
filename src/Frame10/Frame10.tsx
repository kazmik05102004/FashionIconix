import TextField from '@mui/material/TextField'
import { Theme, ThemeProvider, createTheme, useTheme } from '@mui/material/styles'
import icon3 from '../avatar.svg'
import icon from '../girlsOnField.svg'
import icon2 from '../gradient.svg'
import './Frame10.css'

const customTheme = (outerTheme: Theme) =>
    createTheme({
        palette: {
            mode: outerTheme.palette.mode,
        },
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        '--TextField-brandBorderColor': '#E0E3E7',
                        '--TextField-brandBorderHoverColor': '#B2BAC2',
                        '--TextField-brandBorderFocusedColor': '#6F7E8C',
                        '& label.Mui-focused': {
                            color: 'var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            MuiFilledInput: {
                styleOverrides: {
                    root: {
                        '&:before, &:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderColor)',
                        },
                        '&:hover:not(.Mui-disabled, .Mui-error):before': {
                            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
                        },
                        '&.Mui-focused:after': {
                            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
                        },
                    },
                },
            },
            // MuiFilledInput: {
            //     styleOverrides: {
            //         root: {
            //             '&:before, &:after': {
            //                 borderBottom: '2px solid var(--TextField-brandBorderColor)',
            //             },
            //             '&:hover:not(.Mui-disabled, .Mui-error):before': {
            //                 borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
            //             },
            //             '&.Mui-focused:after': {
            //                 borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
            //             },
            //         },
            //     },
            // },
        },
    })

export const Frame10 = () => {
    const outerTheme = useTheme()

    return (
        <div className="Frame10">
            <img src={icon2} className="gradient" alt="gradient" />
            <div className="Frame10Conteiner">
                <div className="Frame10Title">REGISTRATION</div>
                <div className="Frame10Bot">
                    <div className="Frame10Left">
                        <div className="Frame10Image">
                            <img src={icon} className="girlsOnField" alt="girlsOnField" />
                        </div>
                    </div>
                    <div className="Frame10Right">
                        <div className="registrationForm">
                            <div></div>
                            <div className="avatar">
                                <img src={icon3} className="gradient" alt="gradient" />
                            </div>
                        </div>
                        <div className="emailBiographygForm">
                            <div className="Email">
                                <p>EMAIL</p>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField className="EmailText" label="" variant="filled" />
                                </ThemeProvider>
                            </div>
                            <div className="Biographyg">
                                <p>BIOBIOGRAPHYG</p>
                                <ThemeProvider theme={customTheme(outerTheme)}>
                                    <TextField
                                        id="filled-multiline-static"
                                        className="BioText"
                                        multiline
                                        maxRows={4}
                                        label=""
                                        variant="filled"
                                    />
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
