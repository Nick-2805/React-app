import './SectionWithPhotoContentInfo.css'

export default function SectionWithPhotoContentInfo(props) {
    const {item1, item2} = props;
    return <div className='SectionWithPhotoContentInfo'>{item1}{item2}</div>
}