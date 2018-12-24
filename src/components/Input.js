import React from 'react';

const Input = ({ onChange, value, onInputSubmit }) => {
    return (
        <div>
            <form>
                <div className="from-group">
                    <label htmlFor="listInput">Email Address</label>
                    <input type="text" className="form-control" id="listItemInput" placeholder="Add new todo" onChange={onChange} value={value} />
                    <button className="btn btn-primary" onClick={onInputSubmit}>Add Item</button>
                </div>
            </form>
        </div>
    )

}
export default Input;