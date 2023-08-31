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


/*

 <Input
                    type="text"
                    label="Book finder"
                    onChange={(e) => {
                        setBookFind(e.target.value)
                    }}
                    containerProps={{
                        className: "min-w-0",
                    }}
                />
                <Button
                    size="sm"
                    color={bookFind ? "gray" : "blue-gray"}
                    disabled={!bookFind}
                    className="!absolute right-1 top-1 rounded"
                    type="submit"
                >
                    Search
                </Button>


                 <Input
                name="searchQuery"
                component="input"
                type="text"
                placeholder="Search by title..."
                value={filter}
                onChange={(e) => dispatch(setFilter(e.target.value))}
            />

*/

