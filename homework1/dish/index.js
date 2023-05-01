const Image = ({ imgSrc, className, text = "test1" }) => {
    return (
        <>
            <img src={imgSrc} className={"App-logo " + className} />
            <p>{text}</p>

        </>
    );
};

export default Image;


