    import React, { useRef, useState } from 'react'

const DragDrop = () => {
        const dragItem = useRef()
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
    
    const dragStart = (e) => {
        dragItem.current = e.target.id;
    }

        const row = data.map((item) => {
            return (
                <tr
                    onDragStart={(e) => dragStart(e)}
                draggable
                >
                <td> {item.fullName} </td>
                <td> {item.age} </td>
                </tr>
            )
        })

        
    return (
        <>
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
        </>
    )
    }

export default DragDrop