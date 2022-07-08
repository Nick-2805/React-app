import './SectionWithTextItem.css'

export default function SectionWithTextItem(props) {
    const {icon, title, text, varblock, varIcon, varTitle} = props
    return <div className={`SectionWithTextItem ${varblock === 'l' ? 'SectionWithTextItem_l' : ''}`}>
        <div className={`SectionWithTextItemIcon ${varIcon === 'none' ? 'SectionWithTextItemIcon_none' : ''}`}>
            <img className='SectionWithTextItemIconElem' src={icon} alt="{icon}"/>
        </div>
        <h3 className={`SectionWithTextItemTitle ${varTitle === 'l' ? 'SectionWithTextItemTitle_l' : ''}`}>{title}</h3>
        <div className='SectionWithTextItemText'>{text}</div>
    </div>
}
