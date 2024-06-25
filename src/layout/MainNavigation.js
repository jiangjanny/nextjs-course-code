import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Some Link</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>new-meetup Link</Link>
                </li>
                <li>
                    <Link to='/favorites'>favorites Link</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation