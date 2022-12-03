
const SongStats = (props) => {

    const handleShow = () => {
        let updatedShow = new Array(props.show.length);
        for (let i = 0; i < props.show.length; i++) {
            if (i === props.index) {
                updatedShow[i] = !props.show[i];
            }
            else {
                updatedShow[i] = props.show[i];
            }
        }
        props.setShow(updatedShow)
    }
    return(
        <div>
            <div className="wd-float-left wd-icons-text">
                <button className="fa-regular fa-heart wd-grey-text wd-heart wd-icon-button"></button>
            </div>
            <div className="wd-float-left wd-icons-text">
                <button onClick={handleShow} className="fa-regular fa-comment wd-grey-text wd-icon-button"></button>
            </div>
        </div>
    )

}

export default SongStats