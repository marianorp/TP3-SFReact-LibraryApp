import "./styles/Register.module.css"

export default function Register(){
    return (
        <div className="section">
            
        <h1>Library App</h1>
        <div className="form">
        
        
          <div className="form-button">

                <div className="form-button-acc">
                    <label htmlFor="username">Account:</label>
                    <input type="name"  id="account"/>
                </div>

                <div className="form-button-name">
                    <label htmlFor="name">Name:</label>
                    <input type="name"  id="name"/>
                </div>

                <div className="form-button-lastname">
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="name"  id="lastname"/>
                </div>

                <div className="form-button-pass">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"/>
                </div>

                <div className="form-button-signup">
                    <button className="form-button-2">Sign up </button>
                </div>
          </div>
        
       </div>
    </div>
    )
}