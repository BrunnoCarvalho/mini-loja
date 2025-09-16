import "./Navbar.css";

function Navbar({ cartCount, theme, onToggleTheme }) {
    return (
        <header className="navbar" role="banner">
            <div className="navbar-inner" >
                <div className="logo">Mini Loja</div>


                <div className="nav-actions">
                    <button
                        className="theme-toggle"
                        onClick={onToggleTheme}
                        title="Alterar tema"
                        aria-label="Alternar tema claro/escuro"
                    >
                        {theme === "light" ? "🌑" : "☀️"}
                    </button>

                    <div className="cart"  tabIndex={0} aria-label={`Carrinho com ${cartCount} itens`} >
                        🛒 <span className="badge"  aria-live="polite">{cartCount}</span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Navbar
