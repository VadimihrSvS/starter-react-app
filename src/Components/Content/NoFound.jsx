import { React, useEffect, useState } from 'react';

export default function NoFound() {

    const [message, setMessage] = useState('');
    const [user, setUser] = useState(null);
    const tg = window.Telegram.WebApp;

    useEffect(() => {
        // Получаем контекст из Telegram Web App SDK
        const tg = window.Telegram.WebApp;
        tg.expand(); // Увеличить размер веб-приложения

        // Получаем информацию о пользователе
        const userInfo = tg.initDataUnsafe.user;
        setUser(userInfo);

        // Показать главную кнопку Telegram и добавить обработчик нажатия
        tg.MainButton.setText('Close');
        tg.MainButton.show();
        tg.MainButton.onClick(() => {
            tg.close();
        });
    }, []);

    const handleSendData = () => {
        const chatId = tg.initDataUnsafe.chat.id; // Используйте ID чата из контекста Telegram
        // Отправляем данные через Telegram Bot API
        fetch("https:api.telegram.org/bot6635208886:AAGqI66NmuyGEkzy2JJ97hp5iUnM35dtp6k/sendMessage", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        }).then(response => response.json())
            .then(data => {
                console.log('Response from bot:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div>
            {/* {user && (
                <div>
                    <h1>Welcome to Telegram Web App</h1>

                     <p>User ID: {user.id}</p>
                    <p>First Name: {user.first_name}</p>
                    <p>Last Name: {user.last_name}</p>
                    <p>Username: {user.username}</p> 

                    <h1>Send Message to Telegram Bot</h1>

                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter message"
                    />
                    <button onClick={handleSendData}>Send Message</button>
                </div>


            )*/}</div>
    );
};
