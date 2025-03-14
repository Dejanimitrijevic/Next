"use client"

const { useState } = require("react")

const Button = ({ data }) => {

    const [button, setButton] = useState(data);
    const [buttonOpacity, setButtonOpacity] = useState(0)

    return (
        <>
            {
                (button.type == 'link-button') ?
                    <a href={button.url} className="button-link">
                        {button.content}
                    </a>
                    : (button.addToCartButton.type == 'single') ?
                        <div style={{ opacity: `${button.state}` }} id={button.id} className="product-add-button">
                            <button className="button-link add">{button.addToCartButton.content}</button>
                        </div> :
                        (button.addToCartButton.type == 'variants') ?
                            <div className="product-variants">
                                {
                                    button.addToCartButton.content.map((item, index) => (
                                        <button key={index} className="varaints-button">{item}</button>
                                    ))
                                }
                            </div> : null
            }
        </>
    )
}

export default Button;