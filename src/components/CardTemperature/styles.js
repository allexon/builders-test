import styled from 'styled-components'

export const ContainerCardTemperature = styled.div`
   display: flex;
    position:relative;
    flex-flow:column wrap;
    flex-grow: 1;
    width: 100%;
    height: 450px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ContainerPageTemperature = styled.div`
   display: flex;
    position:relative;
    flex-flow:column wrap;
    flex-grow: 1;
    width: 380px;
    min-height: 450px;
    max-height: 450px;
    background-color: white;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Box = styled.div`    
    display:flex;
    position: relative;
    flex-flow: ${props => props.wrap? props.wrap : 'column wrap' };
    width: 100%;
    flex: ${props => props.flex? props.flex : 1 };
    background-color: ${props => props.bg? props.bg : '' };
    justify-content: flex-start;
    align-items: flex-start;    
`

export const Content = styled.div`    
    display:flex;
    position: relative;
    flex-flow: row nowrap;    
    width: 100%;
    height: 100%;
`

export const Label = styled.span`
    display:flex;
    font-size: 15px;
    font-family: Arial;
    width: ${props => props.width? props.width : '100%' };
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color:black;   
`

export const Value = styled.span`
    display:flex;
    font-size: ${props => props.fontSize? props.fontSize : '15px' };
    font-family: Arial;    
    width: ${props => props.width? props.width : '100%' };
    justify-content: center;
    align-items: center;
    color:black;   
`

export const Strong = styled.span`
    display:flex;
    position: absolute;
    font-size: 80px;
    font-family: 'Arial Black', Arial;    
    width: 100%;
    justify-content: center;
    align-items: flex-end;
    bottom:80px;
    color:black;   
`

export const BoxTop = styled.div`
    display:flex;
    flex-flow: row wrap;
    background-color: #EC268F;
    width:100%;
    height: 100%;
    border-radius: 7px 7px 0px 0px;
    font-family: Arial;
    align-items: center;
    justify-content: center;
    padding:5px;
    font-weight: bold;
    font-size: 20px;
    color:white;
`

export const Icon = styled.div`
    display:flex;    
    width: 40px;
    justify-content: center;
    align-items: center;
`

export const Tag = styled.span`
    display:flex;
    position: absolute;
    font-size: 15px;
    font-family: Arial;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: bold;    
    bottom:0px;
`

