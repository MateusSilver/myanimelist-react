import { Footerdiv, Container, Malbadget, ImagesDiv, TextBadgets, SocialImg, StoreImg, Link, SecondContainer, Footerfinals } from "./style";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import discord from "../../assets/discord.png";
import applestore from "../../assets/badge_iOS.png";
import googleplay from "../../assets/badge_googleplay.png";

export default function Footer(){
    return(
        <Footerdiv>
            <Container>
                <Malbadget>
                    <TextBadgets big>Follow Us:</TextBadgets>
                    <ImagesDiv>
                        <SocialImg src={facebook} alt="facebook" />
                        <SocialImg src={twitter} alt="twitter" />
                        <SocialImg src={instagram} alt="instagram" />
                        <SocialImg src={discord} alt="discord" />
                    </ImagesDiv>
                </Malbadget>
                <Malbadget>
                    <TextBadgets big>Get the App:</TextBadgets>
                    <ImagesDiv>
                        <StoreImg src={applestore} />
                        <StoreImg src={googleplay} />
                    </ImagesDiv>
                </Malbadget>
            </Container>
            <SecondContainer>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Press Room</Link>
                <Link>Support</Link>
                <Link>Advertising</Link>
                <Link>FAQ</Link>
                <Link>Terms</Link>
                <Link>Privacy</Link>
                <Link>Cookie</Link>
                <Link>Notice at Collection</Link>
                <Link>Sitemap</Link>
            </SecondContainer>
            <Footerfinals>MyAnimeList.net is a property of MyAnimeList Co.,Ltd. &copy;2023 All Rights Reserved.</Footerfinals>
            <Footerfinals small>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</Footerfinals>
        </Footerdiv>
    )
}