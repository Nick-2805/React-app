import './SectionWithIcons.css'
import icon1 from '../../../assets/icons/icon1.svg'
import icon2 from '../../../assets/icons/icon2.svg'
import icon3 from '../../../assets/icons/icon3.svg'
import icon4 from '../../../assets/icons/icon4.svg'
import icon5 from '../../../assets/icons/icon5.svg'

export default function SectionWithIcons() {
    return (
        <div className='SectionWithIcons'>
            <div className="SectionWithIconsText">'As seen on the world's best magazines and media'</div>
            <div className="SectionWithIconsElements">
                <img src={icon1} className="SectionWithIconsElement" alt='icon1'></img>
                <img src={icon2} className="SectionWithIconsElement" alt='icon2'></img>
                <img src={icon3} className="SectionWithIconsElement" alt='icon3'></img>
                <img src={icon4} className="SectionWithIconsElement" alt='icon4'></img>
                <img src={icon5} className="SectionWithIconsElement" alt='icon5'></img>
            </div>
        </div>
    )
}