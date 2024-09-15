    import React, { useState } from 'react'

    const DragDrop = () => {
        const [data, setData] = useState(
            [
                {
                    "fullName": "John",
                    "age": 26
                },

                {
                    "fullName": "Jane",
                    "age": 35
                }
            ]
        )

        const row = data.map((item) => {
            return (
                <tr
                draggable
                >
                <td> {item.fullName} </td>
                <td> {item.age} </td>
                </tr>
            )
        })

        
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {React.Children.toArray(row)}
                </tbody>
            </table>
        </div>
    )
    }

export default DragDrop