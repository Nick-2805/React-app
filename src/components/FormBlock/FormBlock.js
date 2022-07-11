import './FormBlock.css';
import Button from "../Button/Button";


export default function FormBlock() {
    return <form className='FormBlock'>
        <input type='search' className='SectionWithPhotoContent-search' placeholder="Search"></input>
        <Button
            text = 'Find property'
            variant = 'hero'
        />
    </form>
}