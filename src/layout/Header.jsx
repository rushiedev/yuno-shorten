import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header id="header">
                <div id="header-left">
                    <Link to={'/'} id="header-brand">Yuno Shorten</Link>
                </div>

                <div id="header-right">
                    {/* <Link to={'/'} className="header-link">Find shorten</Link> */}
                    <a href="https://www.facebook.com/natsumeyuno.cn/" target="_blank" rel="noreferrer" className="button">Contact Yuno</a>
                </div>
            </header>
        </>
    )
}

export default Header;