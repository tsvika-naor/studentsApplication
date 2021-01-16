import React, { useEffect, useState } from 'react';
import './Student.css';

// import Checkbox from './Checkbox';

const Student = ({...props}) => {
    console.log(props.loading)
    const [value, setValue] = useState('')
    const [checked, setChecked] = useState(false)
    const handleInputChange = (event: { target: any; }) => {
        setChecked(checked => !checked)
        setValue(props.student.name);
    }
    useEffect(() => {
        if (props.isRemoved)
            setChecked(false);
    }, [props])

    useEffect(() => {
        if (checked === true)
            props.studentsClicked(value, false);
        else
            props.studentsClicked(value, true);
    }, [checked])

    if(props.loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <div className="col-lg-12" style={{ marginLeft: "30px" }}>
                <div id="card" style={{ marginBottom: '100px', border: "1px solid black", padding: "20px 20px", width: "300px", height: "400px" }}>
                    <span style={{ float: "right" }}>
                        <input
                            name="checkbox"
                            type="checkbox"
                            checked={checked}
                            onChange={handleInputChange} />
                    </span>
                    <h2 className="card-title" style={{ marginTop: "20px" }}>{props.student.name}</h2>
                    <div id="card-body" style={{ marginTop: "30px" }}>
                        <h4><p className="card-text">Age: {props.student.age}</p></h4>
                        <h4><p className="card-text">Gender: {props.student.gender}</p></h4>
                        <h4><p className="card-text">City:{props.student.city}</p></h4>
                        <h4><p className="card-text">School:{props.student.school}</p></h4>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Student;