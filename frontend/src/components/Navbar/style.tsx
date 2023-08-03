import styled from 'styled-components';
import { global } from '../../globalStyle';

export const Navbardiv = styled.div `
    display: flex;
    width: 100%;
    padding: .5em 3em;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${global.colors.malgray};
`;

export const Sitelogo = styled.img `
    height: 100%;
    width: 20%;
`;

export const Container = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

export const Icons = styled.img `
    padding: 1em;
    border-right: 1px solid ${global.colors.darkgrey};
`;