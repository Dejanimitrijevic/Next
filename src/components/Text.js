"use client"

const { useState } = require("react")

const Text = ({ data }) => {

    const [text, setText] = useState(data);

    return (
        <div className="text-button-text">
            {text.content}
        </div>
    )
}

export default Text;