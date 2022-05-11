import React, {useState} from "react";
import JAVCreateForm from "./JAVCreateForm";
import JAVItem from "./JAVItem";

export default function JAVTutorial () {

    const [data, setData] = useState([
        { id: 1, name: 'Jav001', date: '2022/05/06', watched: true},
        { id: 2, name: 'Jav002', date: '2022/05/07', watched: false},
        { id: 3, name: 'Jav003', date: '2022/05/08', watched: false},
    ]); //Tạo 1 dữ liệu có sẵn

    const addItem = (name) => {
        console.log("Tạo thêm 1 item với name là" + name);

        const newItem = {
            id: Date.now(),
            name: name,
            date: new Date().toISOString(),
            watched: false
        };
        const newData = [...data, newItem]; //newData phải là 1 mảng gồm tất cả phần tử cũ của data + newItem
        setData(newData); //SetData là cập nhập lại data
    }

    const deleteItem = (itemId) => {
        console.log("xóa 1 item có id là" + itemId);
    }

    return (
        <div className="jav-tutorial">
            <h1>Japanese Anti Vius</h1>
            <JAVCreateForm onAddItem={addItem} />

            <div className="jav-list">
                {data.map(jav => {   //Để show ra ngoài màn hình
                    return <JAVItem 
                    id={jav.id} 
                    name={jav.name} 
                    date={jav.date} 
                    watched={jav.watched}
                    onDeleteItem={deleteItem} />
                })} 
            </div>
        </div>
    );
}