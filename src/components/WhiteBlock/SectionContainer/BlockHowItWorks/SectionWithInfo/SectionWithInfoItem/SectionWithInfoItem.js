import './SectionWithInfoItem.css'

export default function SectionWithInfoItem(props) {
    const {icon, titleText, description, dFlex, descLeft} = props
    return (
        <div className={`SectionWithInfoItem ${dFlex==='left' ? 'SectionWithInfoItem-left' : ''}`}>
            <div className='SectionWithInfoItem_iconBlock'>
                <img src={icon} className='SectionWithInfoItem_icon_img' alt=""/>
            </div>
            <div className='SectionWithInfoItem_title'>{titleText}</div>
            <div className={`SectionWithInfoItem_desc ${descLeft === 'left' ? 'SectionWithInfoItem_desc-left' : ''}`}>{description}</div>
        </div>
    )
}