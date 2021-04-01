import React, { useState, useEffect } from 'react';
import Color from './components/Color';
import Values from 'values.js';

function App() {
    const [colorList, setColorList] = useState([]);
    const [input, setInput] = useState('#f15025');
    const [err, setErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        try {
            createColorList(input);
        } catch (error) {
            setErr(true);
            console.log(error);
        }
    };
    const createColorList = (c) => {
        const color = new Values(c);
        setColorList(color.all(5));
    };
    useEffect(() => {
        const timeout = setTimeout(() => {
            setErr(false);
        }, 5000);
        return () => clearTimeout(timeout);
    }, [err]);
    useEffect(() => {
        createColorList('#f15025');
    }, []);
    return (
        <>
            <section className='container'>
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className={err ? 'error' : 'null'}
                        type='text'
                        name='color'
                        id='color'
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='#f15025'
                    />
                    <button type='submit' className='btn'>
                        submit
                    </button>
                </form>
            </section>
            <section className='colors'>
                {colorList.map((color, index) => {
                    const { weight, hex, rgb } = color;
                    return (
                        <Color
                            weight={weight}
                            hex={hex}
                            rgb={rgb}
                            key={index}
                        />
                    );
                })}
            </section>
        </>
    );
}

export default App;
