
export default function Navbar({ children }) {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    );
}

function Logo() {
    return (
        <div className="logo">
            <span role="img">🍥</span>
            <h1>Animeku</h1>
            <span role="img">🍥</span>
        </div>
    )
}

