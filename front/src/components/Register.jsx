import React from 'react'

export default ({handleSubmit, handleChange, state}) => {
    return (
        <div className = "col-12">            
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <h1>Sign in</h1>
                </div>
                <hr />
                <br />
                <br />
                <div className="form-group">
                    <label htmlFor="exampleInputName">Name</label>
                    <input onChange= {handleChange} value= {state.name} name= "name" type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange= {handleChange} value= {state.email} name= "email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange= {handleChange} value= {state.password} name= "password" type="password" className="form-control" id="exampleInputPassword1" required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}