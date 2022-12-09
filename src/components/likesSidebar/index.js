import React, {useEffect, useState} from "react";
import CreatableSelect from "react-select/creatable";
import {useDispatch, useSelector} from "react-redux";
import {findLikedSongsThunk} from "../../services/likes/like-thunk";
import comments from "../comments";

const LikesSideBar = ({userID, user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const {likedSongs} = useSelector((state) => state.likes.likes.likedSongs || {})
    useEffect(() => {
        console.log("Liked Songs :", likedSongs)
        console.log("Going to call findLikedSongsThunk");
        dispatch(findLikedSongsThunk(userID))
    }, [])
    const colorStyles = {
        control: (styles) => ({ ...styles, backgroundColor: "white" }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            return { ...styles, color: data.color };
        },
        multiValue: (styles, { data }) => {
            return {
                ...styles,
                backgroundColor: data.color,
                color: "#fff",
            };
        },
        multiValueLabel: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
            };
        },
        multiValueRemove: (styles, { data }) => {
            return {
                ...styles,
                color: "#fff",
                cursor: "pointer",
                ":hover": {
                    color: "#fff",
                },
            };
        },
    };
    const handleChange = (selectedOption, actionMeta) => {

    };
    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };
    return (
        <CreatableSelect
            options={likedSongs}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isMulti
            styles={colorStyles}
            defaultValue="Liked Songs"
        />
    );
};

export default LikesSideBar;