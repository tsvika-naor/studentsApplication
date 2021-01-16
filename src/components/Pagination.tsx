import React, { useState } from "react";
import { Link } from "react-router-dom";



const Pagination = ({ ...props }) => {
    const pageNumbers = [];


    for (let i = 1;i <= Math.ceil(props.totalStudednts / props.stuedntsPerPage);i++) {
        pageNumbers.push(i)
    }
    const clicked = (event: any) => {
     props.setCurrent(event.target.value)
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button value={number} onClick={clicked} className="page-link">{number}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Pagination;
