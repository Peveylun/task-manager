import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <div className="title">
                    <h1>Task Manager</h1>
                </div>
            </div>
            <div className="right">
                <a className="profile" href="#">
                    <img src="avatar.jpg" alt=""/>
                </a>
            </div>
        </div>
    )
}

export default Footer;