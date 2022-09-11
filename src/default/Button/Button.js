import { Container } from './styles'
import { storeMessage } from '../../store/index'

const Button = ({ onClick, width, bg, color, className, ...props }) => {

    const message = storeMessage(state => state)

    return (
        <Container>
            <button className={className} onClick={onClick} color={color} width={width} bg={bg} isLoading={message.boolIsLoading}>
                {props.children}
            </button>
        </Container>
    )
}

export default Button