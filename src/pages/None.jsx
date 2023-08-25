import { Link } from "react-router-dom";

function None() {
    return (
        <main id="no_page">
            <h2>This page isn't exist!</h2>

            <Link to={'/'} className="button none">Go back</Link>
        </main>
    )
}

export default None;