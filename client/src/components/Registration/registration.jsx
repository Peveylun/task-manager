import "./registration.css"

function Registration () {
    return (
        <div className="register-overlay">
            <div className="register-container">
                <h2>Register</h2>
                <form className="register-form">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;