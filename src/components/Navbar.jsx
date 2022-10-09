import "./styles/Navbar.module.css"

export default function Navbar(){
    return (
        <div className="navbar">

            <span className="nav-logo">Insertar Texto o Imagen</span>
            
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/contact">Contact</a>

            </div>

        </div>    
    )
}