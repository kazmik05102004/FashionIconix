import './App.css'
import { Footer } from './Footer/Footer'
import { Frame10 } from './Frame10/Frame10'
import { Header } from './Header/Header'
import { Stron } from './Stron/Stron'
import { SubHeader } from './SubHeader/SubHeader'

function App() {
    return (
        <div className="page">
            <Header />
            <SubHeader />
            <Stron />
            <Frame10 />
            <Footer />
            {/* <div className="middle">
                <Footer />
            </div> */}
        </div>
    )
}

export default App
