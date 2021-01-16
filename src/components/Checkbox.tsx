// import React from 'react'
// interface ICheckbox {
//     isChecked: boolean,
//     id: number,
//     value: string
// }

export const CheckBox = (props: { id: string | number | null | undefined; isChecked: boolean | undefined }) => {
    const handleCheckChieldElement = (event: { target: { value: any } }) => {
        const target = event.target
    }
    return (
        <li>
            <input key={props.id} onClick={(event) => handleCheckChieldElement} type="checkbox" checked={props.isChecked} />
        </li>
    )
}

export default CheckBox