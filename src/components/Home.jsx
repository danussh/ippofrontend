import React, { useEffect, useState } from "react";
import "./Home.css";

export default function App() {
    const [dataField, setDataField] = useState([]);

    useEffect(() => {
        const fetchata = async () => {

            const response = await fetch(
                'http://localhost:5000/users');
            const data = await response.json();

            //use only 3 sample data
            setDataField(data)

        }

        // Call the function
        fetchata();
    }, []);

    return (
        <div className="App">
            <h1>List of Registered Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>MERCHANT NAME</th>
                        <th>EMAIL</th>
                        <th>VPA</th>
                        <th>SHOP NAME</th>
                        <th>CONTACT NUMBER</th>
                        <th>address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataField.map((data, key) =>
                            <tr key={key}>
                                <td className='table-data'>{data.merchantName}</td>
                                <td className='table-data'>{data.email}</td>
                                <td className='table-data'>{data.vpa}</td>
                                <td className='table-data'>{data.storeName}</td>
                                <td className='table-data'>{data.contactNumber}</td>
                                <td className='table-data'>{data.address}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}