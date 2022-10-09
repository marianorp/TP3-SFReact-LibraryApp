import "./styles/Home.module.css"

export default function Home(){
    return (
        <div className="section">
            <h1>Library App</h1>
            <div className="form">
                {/* tengo que agregar los redirect con useHistory */}
                <a href="/login"><button className="form-button-2">Login</button></a>
                <a href="/register"><button className="form-button-2">Register</button></a>
            
            </div>
        </div> 
    )
}
