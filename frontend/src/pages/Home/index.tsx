import { HomeDiv } from "./style"
import Navbar from "../../components/Navbar/index"
import Mainmenu from "../../components/Mainmenu/index"

export default function Home() {
    return (
        <HomeDiv>
            <Navbar></Navbar>
            <Mainmenu></Mainmenu>
        </HomeDiv>
    )
}