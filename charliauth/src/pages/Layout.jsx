import { Outlet } from 'react-router-dom'
import NewAppBar from '../components/NewAppBar'

const Layout = () => {
    return (
        <div>
            <NewAppBar />
            <Outlet />
        </div>
    )
}

export default Layout
