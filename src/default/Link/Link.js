import { Container } from './styles'

const Link = ({ onClick, width, bg, isLoading, href, ...props }) => {
    return (        
        <Container>
            <a href={href} onClick={onClick} width={width} bg={bg} isLoading={isLoading}>
                {props.children}
            </a>
        </Container>
    )
}

export default Link