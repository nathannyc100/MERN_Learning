import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <header>
            <div className='navbar' >
                <Link to='/'>
                    <h1>Weapon Wiki</h1>
                </Link>
            </div>
        </header>
    )
}
