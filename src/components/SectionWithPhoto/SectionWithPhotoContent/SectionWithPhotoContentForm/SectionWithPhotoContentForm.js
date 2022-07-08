import Button from "../../../Button/Button";
import './SectionWithPhotoContentForm.css';


export default function SectionWithPhotoContentForm() {
    return <form>
        <input type='search' className='SectionWithPhotoContent-search' placeholder="Search"></input>
        <Button
            text = 'Find property'
            variant = 'hero'
        />
    </form>
}