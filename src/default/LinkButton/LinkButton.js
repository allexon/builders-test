import React from 'react'
import { StyledLink } from './styles'

const LinkButton = ({ onClick, link, children, disabled, bg, height, className, marginLeft, href }) => (
    <StyledLink className={className || ''} onClick={onClick} height={height} disabled={disabled} href={href} to={link} bg={bg} marginLeft={marginLeft}>
        <span style={{fontSize:'20px', color:'white', position:'absolute', display:'flex', justifyContent:'centee', alignItems:'center'}}>↺</span>
        {children}
    </StyledLink>
)

export default LinkButton