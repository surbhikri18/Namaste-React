const Shimmer = () => {
    // return <h1>Shimmer UI Loading.......</h1>;
    return(
        <div className="restaurant-list">
            {Array(15)
                .fill("")
                .map((e) => (
                <div className="shimmer-card"></div>
            ))}   
        </div>
    );
};

export default Shimmer; 