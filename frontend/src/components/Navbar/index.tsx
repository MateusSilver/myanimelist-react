import { Navbardiv, Sitelogo, Container, Icons } from "./style";
import logo from "../../assets/MyAnimeList-Logo.png";
import lista from "../../assets/lista.png";
import messages from "../../assets/envelope.png"
import notification from "../../assets/packard-bell.png"

export default function Navbar() {
    return (
        <Navbardiv>
            <Sitelogo src={logo} />
            <Container>
                <Icons src={lista} alt="" />
                <Icons src={messages} alt="" />
                <Icons src={notification} alt="" />
            </Container>
        </Navbardiv>
    )
};