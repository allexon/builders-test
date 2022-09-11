import styled from 'styled-components'
//import { Link } from 'preact-router'
import { Link } from 'preact-router/match'

export const StyledLink = styled(Link)`
    display: flex;
    position: relative;
    height: ${(props) => (props.height ? props.height : '45px')};
    cursor: pointer;
    width: 45px;
    width: 45px;
    justify-content: center;
    border-radius: 100%;
    align-items: center;
    text-decoration: none;
    background-color: ${(props) => (props.bg ? props.bg : 'black')};
    color: white;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '')};
`
