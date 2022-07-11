import './SectionWithInfoItem.css'

export default function SectionWithInfoItem(props) {
    const {icon, titleText, description} = props
    return (
        <div className='SectionWithInfoItem'>
            <div className='SectionWithInfoItem_iconBlock'>
                <img src={icon} className='SectionWithInfoItem_icon_img' alt=""/>
            </div>
            <div className='SectionWithInfoItem_title'>{titleText}</div>
            <div className='SectionWithInfoItem_desc'>{description}</div>
        </div>
    )
}