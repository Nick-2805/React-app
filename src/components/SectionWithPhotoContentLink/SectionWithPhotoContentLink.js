import './SectionWithPhotoContentLink.css';

export default function  SectionWithPhotoContentLinks(props) {
    const {dNone1, dNone2, text='Explore properties'} = props
    return <div className='SectionWithPhotoContentLinks'>
        <div className='SectionWithPhotoContentLinkFirst' style={{display: `${dNone1==='none' ? 'none' : 'block'}`}}>{text}
        </div>
        <div className='SectionWithPhotoContentLinkSecond' style={{display: `${ dNone2==='none' ? 'none' : 'block'}`}}>Contact agent &rsaquo;</div>
    </div>
}