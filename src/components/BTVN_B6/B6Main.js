import React, { useState } from "react";
import B6Form from "./B6Form";
import B6Item from "./B6Item";

export default function B6Main (){

    const [data, setData] = useState([
        { id: 1, name: 'Name001', content: 'Nội dung 001', date: '11/05/20222', like: 'Số lượt thích: 1111'},
        { id: 2, name: 'Name002', content: 'Nội dung 002', date: '12/05/20222', like: 'Số lượt thích: 2222'},
    ]);

    const addItem = (name) => {
        console.log("Tạo thêm 1 item với name là" + name);
        const newItem = {
            id: Date.now(),
            name: name,
            content: false,
            date: new Date().toISOString(),
            like: false,
        };
        const newData = [...data, newItem];
        setData(newData); 
    }

    const likeItem = (itemId) => {
        console.log("Đã like " + itemId);
    }

    const editItem = (itemId, newName) => {
        const newData = [...data];
        for (let item of data){
            if (item.id == itemId) item.name = newName;
        }
        setData(newData);
    }

    return (<div>
        <B6Form onAddItem={addItem} />
        <div>
            {data.map(b6 => { return <B6Item {...b6} onLikeItem={likeItem} onEditItem={editItem} />})}
        </div>
    </div>);
}