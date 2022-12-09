import React from "react";
import CreatableSelect from "react-select/creatable";
import {useDispatch} from "react-redux";
import {findLikedSongsThunk} from "../../services/likes/like-thunk";

const LikesSideBar = ({userID, user}) => {
    const dispatch = useDispatch();
    const likeSideBarHandler = () => {
        dispatch(findLikedSongsThunk)
    }
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
        console.log("handleChange", selectedOption, actionMeta);
    };
    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue, actionMeta);
    };
    return (
        <CreatableSelect
            options={options}
            onChange={handleChange}
            onInputChange={handleInputChange}
            isMulti
            styles={colorStyles}
            defaultValue="Liked Songs"
        />
    );
};

export default LikesSideBar;