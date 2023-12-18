import React from "react";

function Input({onChange, placeholder}) {
    console.log(placeholder)
    return (
        <div className="input-group input-group-sm mb-3 d-flex flex-row justify-content-md-center">
            <div className="col-sm-2">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </div>
        </div>
    )
}

export default Input;