import React from "react";
import CreatableSelect from "react-select/creatable";

const PlaylistsSideBar = () => {
    const options = [
        { value: "Love", label: "Love", color: "#FF8B00" },
        { value: "Happy", label: "Happy", color: "#36B37E" },
        { value: "Sad", label: "Sad", color: "#0052CC" },
    ];
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
            defaultValue="Playlisted Songs"
        />
    );
};

export default PlaylistsSideBar;