import React, { useState } from "react";

export default function IQTest(){
    const [iq, setIQ] = useState();   //iq: lưu 1 số, setIQ: là 1 function để cập nhật IQ
    const [person, setPerson] = useState({name: 'Hai Tran', address: 'HN', job: 'PM'});
        // setIQ(Math.floor(Math.random() * (200 - 50 +1) +50));
        // console.log(iq);
    const showIQ = () => {
        let newIq = Math.floor(Math.random() * (200 - 50 +1) +50);
        setIQ(newIq);
    }

    const changeJob = () => {
        setPerson({...person, job:"Tester"
            // name: person.name,
            // address: person.address,
            // job: "Tester"
        }); //để cập nhật lại giao diện => truyền vào đây 1 Obj mới
    }

    return(<div className="iq-test">
        <h3>IQ của bạn là: <i>{iq}</i></h3>
        <button onClick={showIQ}>Test IQ</button>

        <h3>Person:</h3>
        <div>Name: {person.name}</div>
        <div>address: {person.address}</div>
        <div>job: {person.job}</div>
        <button onClick={changeJob}>Click to change somethinng </button>
    </div>);
}
