import React, {useEffect, useState} from "react";
import CreatableSelect from "react-select/creatable";
import {useDispatch, useSelector} from "react-redux";
import comments from "../comments";
import {
    // findAllSongsLikedByUserAction,
    findAllSongsLikedByUserThunk
} from "../../services/likes/like-thunk";
import {useNavigate} from "react-router-dom";

const LikesSideBar = ({userID, user}) => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const likedSongs = useSelector((state) => state.likes.likes.likedSongs)
    console.log("Liked Songs :", likedSongs)
    useEffect(() => {
        console.log("Liked Songs :", likedSongs)
        console.log("Going to call findAllSongsLikedByUserAction");
        // console.log("UserID", userID);
        // console.log("dispatch", dispatch);
        // console.log("findAllSongsLikedByUserThunk(userID)", findAllSongsLikedByUserThunk(userID))
        dispatch(findAllSongsLikedByUserThunk(userID))
        // dispatch(findAllSongsLikedByUserAction(userID))
    }, [dispatch])

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
        console.log("handleChange", selectedOption.value);
        navigate("/song-details", {
            state: {
                songDetails:selectedOption.value
            }
        })
    };
    const handleInputChange = (inputValue, actionMeta) => {
        console.log("handleInputChange", inputValue);
    };
    return (
        <CreatableSelect
            options={likedSongs.map(i => ({
                    value: i,
                    label: i.title
            }))}
            onChange={handleChange}
            onInputChange={handleInputChange}
            defaultValue="Liked Songs"
        />
    );
};

export default LikesSideBar;