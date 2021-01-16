import { Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Student from './Student';
import Pagination from './Pagination'

interface IStudents {
    name: string,
    age: string,
    gender: string,
    city: string,
    school: string
}
const List = () => {

    const [isRemoved, setIsremoved] = useState(false)
    const [students, setStudents] = useState<IStudents[]>([]);
    const [names, setNames] = useState<string[]>([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [stuedntsPerPage, setStuentsPerPage] = useState(8)

    const indexOfLastStudent = currentPage * stuedntsPerPage; // 1*8
    const indexOfFirstStudent = indexOfLastStudent - stuedntsPerPage; // 8-8
    const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent)



    const checkedStudents = (data: any, edit: boolean) => {
        console.log(data, edit);
        if (edit === false) {
            setNames(names => [...names, data])
        }
        if (edit === true)
            setNames(names.filter(name => name !== data))
    }

    useEffect(() => {
        const fetchStudents = async () => {
            setLoading(true)
            const response = await axios.get('https://run.mocky.io/v3/a78bb22f-059c-4ae7-8e9a-83e2240273e0')
            setStudents(response.data);
            setLoading(false)
        }
        fetchStudents();
    }, [])
    useEffect(() => {
        setIsremoved(false)
    }, [students])

    const remove = () => {
        console.log(names)
        setStudents((students).filter((student) => (names).includes(student.name) === false))
        console.log(students)
        setIsremoved(true);
    }
    
    return (
        <div>

            <Button variant="outline-primary btn-lg" onClick={remove} style={{ marginBottom: "30px" }}>Remove</Button>
            <div className="row">
                {currentStudents.map((student: IStudents, index) => {
                    return <Student student={student} loading={loading} key={index} studentsClicked={(data: any, edit: boolean) => checkedStudents(data, edit)} isRemoved={isRemoved} />
                })}
            </div>
            <Pagination stuedntsPerPage={stuedntsPerPage} totalStudednts={students.length} setCurrent={(val : any)=> setCurrentPage(val)}/>
        </div>

    )
}
export default List;
