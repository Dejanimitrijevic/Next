"use client"

import { useState } from "react";
import Text from "@/components/Text";
import Button from "@/components/Button";

const TextButton = ({ data }) => {

    const [textButton, setTextButton] = useState(data);

    return (
        <div className="text-button">
            {
                textButton.blocks.map((item, index) => (
                    (item.type == 'text') ?
                        <Text key={index} data={item} />
                        : (item.type == 'link-button') ?
                            <Button key={index} data={item} />
                            : null
                ))
            }
        </div>
    )
}

export default TextButton;