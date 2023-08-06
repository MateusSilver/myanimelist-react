import { Footerdiv, Container, Malbadget, ImagesDiv, TextBadgets, SocialImg, StoreImg } from "./style";
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
                    <TextBadgets>Follow Us:</TextBadgets>
                    <ImagesDiv>
                        <SocialImg src={facebook} alt="facebook" />
                        <SocialImg src={twitter} alt="twitter" />
                        <SocialImg src={instagram} alt="instagram" />
                        <SocialImg src={discord} alt="discord" />
                    </ImagesDiv>
                </Malbadget>
                <Malbadget>
                    <TextBadgets>Get the App:</TextBadgets>
                    <ImagesDiv>
                        <StoreImg src={applestore} />
                        <StoreImg src={googleplay} />
                    </ImagesDiv>
                </Malbadget>
            </Container>
            <Container>
                
            </Container>
        </Footerdiv>
    )
}