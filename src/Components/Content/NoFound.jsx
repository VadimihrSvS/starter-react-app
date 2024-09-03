import { React, useEffect, useState } from 'react';

export default function NoFound() {

    const [user, setUser] = useState(null);
    useEffect(() => {
        const tg = window.Telegram.WebApp
        tg.expand();

        const userInfo = tg.initDataUnsafe.user;
        setUser(userInfo);

        // Показать главную кнопку Telegram и добавить обработчик нажатия
        tg.MainButton.setText('Close');
        tg.MainButton.show();
        tg.MainButton.onClick(() => {
            tg.close();
        });
    }, []);
    return (
        <div>
            <h1>Welcome to Telegram Web App</h1>
            {user && (
                <div>
                    <p>User ID: {user.id}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Username: {user.username}</p>
                </div>
            )}</div>
    );
};
