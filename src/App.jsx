import Navbar from "./components/Navbar"
import Content from "./components/Content"
import data from './data'

export default function App(){
    const contentInfo = data.map(info =>
        <Content
            info={info}
        />
        )

    return(
        <div className="container">
            <Navbar/>
            <div className="content-list">
                {contentInfo}
            </div>
        </div>
    )
}