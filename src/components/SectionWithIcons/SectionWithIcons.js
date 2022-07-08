import './SectionWithIcons.css'


export default function SectionWithIcons (props) {
    const {text, icon1, icon2, icon3, icon4, icon5} = props
    return <div className='SectionWithIcons'>
        <div className="SectionWithIconsText">{text}</div>
        <div className="SectionWithIconsElements">
            <img src={icon1} className="SectionWithIconsElement" alt={icon1}></img>
            <img src={icon2} className="SectionWithIconsElement" alt={icon2}></img>
            <img src={icon3} className="SectionWithIconsElement" alt={icon3}></img>
            <img src={icon4} className="SectionWithIconsElement" alt={icon4}></img>
            <img src={icon5} className="SectionWithIconsElement" alt={icon5}></img>
        </div>
    </div>
}