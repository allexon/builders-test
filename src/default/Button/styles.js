import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-flow:column nowrap;
    width: 230px;
    height:48px;
    justify-content:center;
    align-items:center;
    margin:3px;

    button {
        position:relative;  
        box-sizing: border-box;
        display:flex;
        flex-flow: column wrap;        
        background-color: ${props => props.children.props.isLoading? '#F0F0F0' : props.children.props.bg? props.children.props.bg : '#EFECC3'};
        color: ${props => props.children.props.isLoading? 'gray' : props.children.props.color? props.children.props.color : 'black'};
        outline:none;    
        pointer-events: ${props => props.children.props.isLoading? 'none' : 'normal'};
        cursor: ${props => props.children.props.isLoading? 'not-allowed' : 'pointer'};
        letter-spacing:3px;
        align-items:center;
        justify-content:center;        
        width:100%;  
        min-height:40px;
        height:100%;
        border-radius:3px;
        outline: none !important;
        border:none;

        &::focus {
            outline: none !important;
            outline: 0 !important;
        }
    
        &.yellow {
            border-radius:20px;  
            border:none;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;    
            background-image: ${props => props.children.props.isLoading? 'linear-gradient(45deg, #BDBFC1, #E6E7E8, #E6E7E8, #BDBFC1);': 'linear-gradient(45deg, #FCDE00, #FFF96D, #FFF96D, #FCDE00);'};    
            color: ${props => props.children.props.isLoading ? '#BDBFC1' : 'black'};
            margin:0px;
            padding:0px;
        }

        &.green {        
            border: outset 1px white;
            border-bottom: outset 1px green;  
            border-right: outset 1px green;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
            background-image: ${props => props.children.props.isLoading? 'linear-gradient(45deg, #BDBFC1, #E6E7E8, #E6E7E8, #BDBFC1);': 'linear-gradient(45deg, #96D1AA, #CCE7D4, #CCE7D4, #96D1AA);'};    
            color: ${props => props.children.props.isLoading ? '#BDBFC1' : 'black'};
            margin:0px;
            padding:0px;
        }
    }
`