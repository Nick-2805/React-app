import  './SectionWhitPhoto.css'

export default function SectionWhitPhoto(props) {
    const {start, img, variant} = props
    return (
        <div className={`SectionWhitPhoto ${variant === 'reverse' ? 'reverse' : ''}`}>
            <div className='SectionWhitPhoto-start'>{start}</div>
            <div className='SectionWhitPhoto-end' style={{backgroundImage: `url(${img})`}}></div>
        </div>
    )
}