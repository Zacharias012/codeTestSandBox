// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();
import { useState } from 'react';

export default function App() {
    const [selectedDiscount, setSelectedDiscount] = useState(100);

    function handleDiscountChange(selectedDiscount) {
        setSelectedDiscount(selectedDiscount - 25);
    }
    
    return (
        <div>
            <p data-testid="price">{selectedDiscount}</p>
            <button onClick={() => handleDiscountChange(selectedDiscount)}>Apply Discount</button>
        </div>
    );
}
