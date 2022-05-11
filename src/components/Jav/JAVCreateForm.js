import React, {useState} from "react";

// onAddItem là 1 function
export default function JAVCreateForm ({ onAddItem }) {

    const [name, setName] = useState();
    const handleCreateItem = (event) => {
        event.preventDefault();
        if (!name){    //!name là nếu ko nhập gì vào thì
            alert("Nhập vào tên"); //Hiện bằng thông báo nhập tên vào
            return
        }
        onAddItem(name);
    }

    return(
        <form onSubmit={handleCreateItem}>
            <input type="text" onChange={(event) => setName(event.target.value)} />
            <button>Thêm</button>
        </form>
    );
}