import "../styles/PersonInfo.css"

function PersonInfo() {
    return (
    <div className="info-container">
        <div className="title-info">
            General Information
        </div>
        <div className="row">
            <div className="feature">Eye Color</div>
            <div className="data"> Blue</div>
        </div>
        <div className="row">
            <div className="feature">Hair Color</div>
            <div className="data"> Blue</div>
        </div>
        <div className="row">
            <div className="feature">Skin Color</div>
            <div className="data"> Blue</div>
        </div>
        <div className="row">
            <div className="feature">Birth Year</div>
            <div className="data"> Blue</div>
        </div>

        <div className="title-info">
            Vehicles
        </div>
        <div className="row">
            <div className="feature">Snowspeeder</div>
        </div>
        <div className="row">
            <div className="feature">Imperial Speeder Bike</div>
        </div>
    </div>
    );
}

export default PersonInfo;