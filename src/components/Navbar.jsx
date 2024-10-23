import React, { useState } from 'react';
import { LuSettings2 } from 'react-icons/lu';

const Navbar = ({ count, setCount,sort,setSort }) => {

    const handleOnChange = (e) => {
        setCount(e.target.value);
        console.log(e.target.value); // This logs the updated value
    };
    const handleOnChange1 = (e) => {
        setSort(e.target.value);
        console.log(e.target.value); // This logs the updated value
    };

    return (
        <div className="navbar">
                                <LuSettings2 />
            <select 
                className="select select-bordered w-full max-w-xs" 
                onChange={handleOnChange}
                value={count} // Control the value with state
            >
                <option value={0} disabled>
                     Display
                </option>
                <option value={1}>Sort By Users</option>
                <option value={2}>Sort By Priority</option>
                <option value={3}>Sort By Status</option>
            </select>
            <select 
                className="select select-bordered w-full max-w-xs" 
                onChange={handleOnChange1}
                value={sort} // Control the value with state
            >
                <option value={0} disabled>
                     Sort By
                </option>
                <option value={1}>Sort By Title</option>
                <option value={2}>Sort By Priority</option>
            </select>
        </div>
    );
};

export default Navbar;