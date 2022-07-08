import './CardElem.css'

export default function CardElem(props) {
    const {img, title, price, geo, place, bath, bathNum, bed, bedNum, area, areaNum} = props
    return <div className='CardElem'>
        <div className='CardElemBlock_img' style={{backgroundImage: `url(${img})`}}></div>
        <div className="CardElemBlock">
            <div className='CardElemBlock_title'>{title}</div>
            <div className='CardElemBlock_price'>{price}</div>
            <div className='CardElemBlock_location'>
                <img src={geo} className='CardElemBlock_location_icon' alt={geo}/>
                <div className='CardElemBlock_location_name'>{place}</div>
            </div>
            <div className='CardElemBlock_params'>
                <div className='CardElemBlock_params-item'>
                    <img src={bath} alt={bath}/>
                    <div>{bathNum}</div>
                </div>
                <div className='CardElemBlock_params-item'>
                    <img src={bed} alt={bath}/>
                    <div>{bedNum}</div>
                </div>
                <div className='CardElemBlock_params-item'>
                    <img src={area} alt={area}/>
                    <div>{areaNum}</div>
                </div>
            </div>
        </div>
    </div>
}