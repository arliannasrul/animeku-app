import { useState } from 'react';

export default function Box({ children }) {
    {/*reuse Box component*/ }

    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? '–' : '+'}
            </button>
            {isOpen && children}   {/*drilling props children*/}

        </div>
    )
}


