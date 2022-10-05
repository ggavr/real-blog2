import React from "react";

function InputControl({value, onChange}) {
    return <input
        type="text"
        placeholder="Title"
        className="form--input"
        name="Title"
        value={value}
        onChange={onChange}
    />;
}

export default InputControl