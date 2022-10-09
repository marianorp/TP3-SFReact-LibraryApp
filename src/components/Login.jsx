import "./styles/Login.module.css"

export default function Login(){
    return (

        
        <div className="section">
            
            <h1>Library App</h1>
            <div className="form">
            
            
              <div className="form-button">

                    <div className="form-button-acc">
                        <label htmlFor="username">Account:</label>
                        <input type="name"  id="account"/>
                    </div>

                    <div className="form-button-pass">
                        <label htmlFor="password"> Password:</label>
                        <input type="password" id="password"/>
                    </div>

                    <div className="form-button-sig">
                    <a href="/contact"><button className="form-button-2">Sign in</button></a>
                    </div>
              </div>
            
           </div>
        </div>

       
    )
}