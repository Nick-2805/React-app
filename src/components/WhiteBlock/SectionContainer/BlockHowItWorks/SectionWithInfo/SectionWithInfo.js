import './SectionWithInfo.css'
import SectionWithInfoItem from "./SectionWithInfoItem/SectionWithInfoItem";
import icon1 from '../../../../assets/icons/house.svg'
import icon2 from '../../../../assets/icons/receipt.svg'
import icon3 from '../../../../assets/icons/key.svg'

export default function SectionWithInfo() {
    return (
        <div className='SectionWithInfo'>
            <SectionWithInfoItem
                icon={icon1}
                titleText='Find property'
                description='Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non.'
            />
            <SectionWithInfoItem
                icon={icon2}
                titleText='Make a deal'
                description='Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi.'
            />
            <SectionWithInfoItem
                icon={icon3}
                titleText='Get your keys'
                description='Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat.'
            />
        </div>
    )
}