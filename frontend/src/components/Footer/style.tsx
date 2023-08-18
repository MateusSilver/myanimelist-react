import styled, { css } from 'styled-components';
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

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    flex-wrap: wrap;
`;

export const SecondContainer = styled(Container)`
    margin: 2em 0;
    background-image: url('../../assets/footer-sns-border.png');
    background-position: center top;
    background-repeat: no-repeat;
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

interface TextSize {
    big?: boolean;
    small?: boolean;
}

export const TextBadgets = styled.p<TextSize>`
    font-size: ${props => (props.big? '14px' : '12px')};
    color: ${props => props.big? global.colors.malgray : global.colors.grayletters};
    padding-right: 1em;
`;

export const Footerfinals = styled.p<TextSize>`
    font-size: ${props => (props.small ? '8px' : '12px')};
    color: ${global.colors.grayletters};
    margin-top: ${props => (props.small ? '0' : '20px')};
    margin-bottom: 8px;
`;

export const SocialImg = styled.img `
    padding-right: 1em;

    &:hover {
        filter: brightness(0.85);
        transition: 1s;
    }
`;

SocialImg.defaultProps = {
    src: defaultSocialMedia,
};

export const StoreImg = styled.img `
    width: 40%;
    padding-right: 1em;

    &:hover {
        filter: brightness(0.85);
        transition: 1s;
    }
`;

export const Link = styled.a`
    --acent-color: ${global.colors.malgray};

    font-size: 12px;
    cursor: pointer;

    padding-right: 12px;
    margin-right: 12px;

    color: var(--acent-color);

    &:first-child {
        border-right: 1px solid whitesmoke;
    }

    &:hover {
        text-decoration: underline;
    }
`;