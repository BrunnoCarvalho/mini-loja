import styles from "./Navbar.module.css";

function Navbar({ cartCount, theme, onToggleTheme }) {
    return (
        <header className={styles.navbar} role="banner">
            <div className={styles.navbarInner} >
                <div className={styles.logo}>Mini Loja</div>


                <div className={styles.navActions}>
                    <button
                        className={styles.themeToggle}
                        onClick={onToggleTheme}
                        title="Alterar tema"
                        aria-label="Alternar tema claro/escuro"
                    >
                        {theme === "light" ? "🌑" : "☀️"}
                    </button>

                    <div className={styles.cart}  tabIndex={0} aria-label={`Carrinho com ${cartCount} itens`} >
                        🛒 <span className={styles.badge}  aria-live="polite">{cartCount}</span>
                    </div>
                </div>

            </div>

        </header>
    )
}

export default Navbar
