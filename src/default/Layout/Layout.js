import { Main, Container, Header, Content, Footer } from './styles'

const Layout = (props) => {
    
    return (
        <Main>
            <Container>
                {
                    props.header &&
                    <Header></Header>
                }
                
                <Content>
                    {props.children}
                </Content>

                {
                    props.footer &&
                    <Footer></Footer>
                }            
            </Container>
        </Main>
    )
}

export default Layout