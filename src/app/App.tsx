import React, { useState } from "react";
import { generateQR } from "./modules/qr/_requests";

const App = () => {
    const [text, setText] = useState("");
    const [img, setImg] = useState();

    const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setText(e.target.value);
    };

    const onHandleSubmit: React.FormEventHandler<HTMLFormElement> = async (
        form
    ) => {
        form.preventDefault();
        try {
            const response = await generateQR(text);
            if (response.status === 201 && response.statusText === "Created") {
                setImg(response.data);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input
                    type="text"
                    name="text"
                    onChange={handleOnChange}
                    value={text}
                />
                <input type="submit" value="submit" />
            </form>
            {img && <img src={img} alt="QR Code" />}
        </div>
    );
};

export default App;