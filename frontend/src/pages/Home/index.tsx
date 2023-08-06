import { HomeDiv } from "./style"
import Navbar from "../../components/Navbar/index"
import Mainmenu from "../../components/Mainmenu/index"
import Footer from "../../components/Footer/index"

export default function Home() {
    return (
        <HomeDiv>
            <Navbar></Navbar>
            <Mainmenu></Mainmenu>
            <Footer></Footer>
        </HomeDiv>
    )
}