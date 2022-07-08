import './SectionWithPhotoContentInfoItem.css'

export default function SectionWithPhotoContentInfoItem(props) {
    const {icon, title, content} = props;
    return <div className='SectionWithPhotoContentInfoItem'>
        <div className='iconBlock'>
            <img className='icon' src={`${icon}`}/>
        </div>
        <div className='title'>{title}</div>
        <div className='content'>{content}</div>
    </div>
}