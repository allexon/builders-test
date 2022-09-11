import styled, { keyframes } from 'styled-components';
import img1 from '../../assets/images/bg1.png'

const anima = keyframes`
  from  { background-position: 0 0;}
  to    {background-position: 100% 0;}
`

export const Main = styled.div`
    display:flex;
    position: relative;
    flex-flow:column nowrap;
    align-items: center;
    width:100%;
    height: 100%;
    background-color: #C0DEED;
    background-color: pink;
`

export const Container = styled.div`
    display: flex;
    position:fixed;
    flex-flow:column nowrap;
    align-items: center;
    width:100vw;
    min-height:100vh;
    background: #C0DEED url(${img1}) center top repeat-x;
    background-image: url(${img1});
    animation: ${anima} 100s linear infinite;
    //z-index:1000;
`

export const Header = styled.div`
    position:absolute;
    display:flex;
    flex-flow:row nowrap;    
    justify-content: flex-end;
    background-color: #006680;
    height: ${props => props.height? props.height : '60px' };
    width:100%;
    padding-right: 10px;
    z-index: 1;
`

export const Content = styled.div`
    display:flex;
    width:100%;
    flex-flow: column wrap;
    justify-content: center;    
    align-items: center;
    height: 100%;    
    flex: auto;
    color: white;
    overflow: auto;
`

export const Footer = styled.div`
    position:absolute;
    display:flex;
    flex-flow:row nowrap;    
    justify-content: flex-end;
    background-color: #006680;
    height: ${props => props.height? props.height : '60px' };
    width:100%;
    padding-right: 10px;
    bottom:0px;
    z-index: 1;
`