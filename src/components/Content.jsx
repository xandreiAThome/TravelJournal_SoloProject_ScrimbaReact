import map_icon from '../assets/map_icon.png'

export default function Content(props){
    const contentImg = {
        backgroundImage: `url(${props.info.imageUrl})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }

    return(
        <div className="content-container">
            <div className='content-img-container' style={contentImg}  ></div>
            <div className="content-text">
                <div className="content-header-text">
                    <img src={map_icon}/>
                    <p className='content-location'>{props.info.location.toUpperCase()}</p>
                    <a href={props.info.googleMapsUrl} className='grey-lined-text'>View on Google Maps</a>
                </div>

                <h2 className='content-main-attraction'>{props.info.title}</h2>
                <p className='content-duration'>{props.info.startDate} - {props.info.endDate}</p>
                <p className='content-description'>{props.info.description}</p>
            </div>
        </div>
    )
}