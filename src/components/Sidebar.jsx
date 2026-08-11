function Sidebar() {
    return (
        <aside className="sidebar">
            
            <div className="logo">
                <span>☁️</span>
            </div>

            <nav className="sidebar-nav">

                <a href="#" className="nav-item active">
                    <span className="nav-icon">☁️</span>
                    <span>Weather</span>
                </a>

                <a href="#" className="nav-item">
                    <span className="nav-icon">🏙️</span>
                    <span>Cities</span>
                </a>

                <a href="#" className="nav-item">
                    <span className="nav-icon">🗺️</span>
                    <span>Map</span>
                </a>

                <a href="#" className="nav-item">
                    <span className="nav-icon">⚙️</span>
                    <span>Settings</span>
                </a>

            </nav>
            
        </aside>
    );
}

export default Sidebar;