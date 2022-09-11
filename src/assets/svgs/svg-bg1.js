import React from 'react'
import styled from 'styled-components'

export const SvgBg1 = ({ width, right}) => (    
    <SVG width={width} right={right} viewBox="0 0 93.489 13.418" preserveAspectRatio="none">
     <g transform="translate(94.592 -144.83)">
        <path d="m-94.592 144.83 0.06201 8.1106s30.629-4.2057 45.042 0c30.898 9.016 34.174 4.8336 48.385 0l-0.061494-8.1106z" fill="#006680"/>
    </g>
    </SVG>
)

const SVG = styled.svg`
    position:absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    /* top: ${props => props.top ? props.top : '200px'}; */
    width: ${props => props.width ? props.width : '100%'};
    bottom:-50px;
    z-index:1;
`