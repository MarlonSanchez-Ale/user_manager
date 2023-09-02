import React from 'react'
import { Input, IconButton } from '@material-tailwind/react';
import { useDispatch } from "react-redux";
import { setFilter } from '../../reducer/features/BookSlice';
import { BsXCircle } from "react-icons/bs";

export const SearchBar = ({ filter }) => {

    const dispatch = useDispatch();

    const handleInputClear = () => {
        dispatch(setFilter(""))
    }

    return (
        <div className="flex flex-row justify-center items-cente " >
            <div className="relative flex w-full max-w-[24rem]">
                <Input
                    type="text"
                    label="Search by title..."
                    name="searchQuery"
                    component="input"
                    value={filter}
                    onChange={(e) => dispatch(setFilter(e.target.value))}
                    className="pr-20"
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <IconButton
                    size="sm"
                    color={filter ? "gray" : "blue-gray"}
                    disabled={!filter}
                    className="!absolute right-1 top-1 rounded"
                    onClick={() => handleInputClear()}
                >
                    <BsXCircle size={20} />
                </IconButton>
            </div>
        </div>
    )
}


