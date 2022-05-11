import React, { useState } from "react";
import "../../CSS/B6Item.css";

export default function B6Item ({ id, name, content, date, like, onLikeItem, onEditItem }) {

    const [isEditing, setIsEditing] = useState();
    const [newName, setNewName] = useState();

    const liked = (event) => {
        onLikeItem(id);
    }

    const edit = (event) => {
        onEditItem(id, newName);
        setIsEditing(false);
        setNewName('');
    }
    const enableEdit = () => {
        console.log("chuyển javitem " + id + " sang chế độ sửa");
        setIsEditing(true);
    }

    return (<div className="b6-item">
        <div className="b6-info">
            {isEditing ? <input type="text" defaultValue={name} onChange={(event) => setNewName(event.target.value)} /> : <b className="item-name">{name}</b>}
            <p className="item-date">{date}</p>
            <i className="item-like">{like}</i>
        </div>

        <div className="b6-action">
            <button onClick={liked}>Thích</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {isEditing ? <button onClick={edit}>Lưu</button> : <button onClick={enableEdit}>Sửa</button>}
        </div>
    </div>);
}