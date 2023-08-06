import styled from 'styled-components';
import { global } from '../../globalStyle';

import defaultSocialMedia from '../../assets/instagram.png';

export const Footerdiv = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: ${global.colors.darkgrey};
    padding-top: 2em;
    padding-bottom: 5px;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
    
`;

export const Malbadget = styled.div `
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 40%;
    flex-wrap: wrap;
`;

export const ImagesDiv = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    flex-wrap: wrap;
`;

export const TextBadgets = styled.p `
    font-size: 12px;
    color: ${global.colors.malgray};
    padding-right: 1em;
`;

export const SocialImg = styled.img `
    padding-right: 1em;
`;

SocialImg.defaultProps = {
    src: defaultSocialMedia,
};

export const StoreImg = styled.img `
    width: 40%;
    padding-right: 1em;
`;