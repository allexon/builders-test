import styled from 'styled-components'

export const Main = styled.div`
    position: relative;    
    display: flex;
    flex-flow:row nowrap;    
    width:100%;
`

export const Text = styled.span`
    display:flex;
    flex-flow:row wrap;
    width:100%;
    height: 35px;
    justify-content: center;
    align-items: flex-end;
    color:black;
    font-size: ${props => props.theme.title.fontSize};
    font-family: ${props => props.theme.title.fontFamily};
    letter-spacing: 1px;
    
`