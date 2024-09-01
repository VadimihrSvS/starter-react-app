import React from 'react';
import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

export default function OperationalSummary() {
    const showPopup = useShowPopup();

    const handleClick = () =>
        showPopup({
            message: 'Hello, I am popup',
        });


    return (
        <div>
            <h1>Оперативная сводка</h1>
            <MainButton text="SHOW POPUP" onClick={handleClick} />
        </div>
    );
};
