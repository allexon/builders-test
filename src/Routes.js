import { Router } from 'preact-router'
import { Home, PageCardTemperature } from './components/index'

const Routes = () => {
    return (
        <Router>
            <Home path="/" />
            <PageCardTemperature path='/page-card-temperature' />
            <Home default />
        </Router>
    )
}

export default Routes