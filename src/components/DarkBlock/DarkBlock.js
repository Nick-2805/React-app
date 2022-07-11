import './DarkBlock.css'
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import Button from "../Button/Button";
import icon from '../assets/icons/family.svg'

export default function DarkBlock(prop) {
    return (
        <div className='DarkBlock'>
            <div className='DarkBlock_iconBlock'>
                <img src={icon} alt="family"/>
            </div>
            <HeaderBlock
                titleText='Families are our priority'
                description='Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non, placerat vel arcu. In non consectetur lorem. Morbi non varius sapien suscipit mauri.'
            />
            <Button
                text='Get started'
            />
        </div>
    )
}