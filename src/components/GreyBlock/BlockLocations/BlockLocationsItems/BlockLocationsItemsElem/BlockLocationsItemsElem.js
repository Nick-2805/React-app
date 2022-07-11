import './BlockLocationsItemsElem.css'

export default function BlockLocationsItemElem(prop) {
    const {title, viewProp} =prop
    return (
        <div className='BlockLocationsItemsElem'>
            <div className='BlockLocationsItemsElem-title'>{title}</div>
            <div className='BlockLocationsItemsElem-viewProp'>{viewProp}</div>
        </div>
    )
}