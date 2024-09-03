import { React, useEffect, useState } from 'react';

export default function HourMumgReport() {


    const someJSON = {
        lal: {
            sas: [
                1, 2, 3, 4, 5
            ]
        }
    }

    const f = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'chat_id': 1118378486, 'text': "123" })
        };
        const data = await fetch('https://api.telegram.org/bot6635208886:AAGqI66NmuyGEkzy2JJ97hp5iUnM35dtp6k/sendMessage', requestOptions)
            .then(response => response.json())
        console.log(data)
    }

    return (
        <div>
            <h1>Часовые данные</h1>

            <button onClick={f}>Отправить</button>

        </div>
    );
};
