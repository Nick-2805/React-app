import './BlockHowItWorks.css'
import HeaderBlock from "../../../HeaderBlock/HeaderBlock";
import SectionWithInfo from "./SectionWithInfo/SectionWithInfo";

export default function BlockHowItWorks() {
    return (
        <div className='BlockHowItWorks'>
            <HeaderBlock
                titleText='How it works'
                description='Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur pellentesque. Maecenas varius felis felis.'
            />
            <SectionWithInfo/>

        </div>
    )
}