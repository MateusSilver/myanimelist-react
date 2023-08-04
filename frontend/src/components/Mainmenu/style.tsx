import styled from 'styled-components';
import { global } from '../../globalStyle';

export const Bluebox = styled.div `
    display: flex;
    background-color: ${global.colors.malBlue};
    justify-content: space-between;
    align-items: center;
    padding: .5em 3em;
`;

export const Menudiv = styled.nav `
    width: 50%;
    display: flex;
    flex-direction: row;
    background-color: none;
`;

export const Menuitem = styled.li `
    padding-right: 0.5em;
    font-weight: 600;
    font-size: 14px;
    list-style: none;
`;