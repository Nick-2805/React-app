import './SectionWhitPhoto.css'

export default function SectionWhitPhoto(props) {
    const {start, img, variant, startP} = props
    return (
        <div className={`SectionWhitPhoto ${variant === 'reverse' ? 'reverse' : ''}`}>
            <div
                className={`SectionWhitPhoto-start ${startP === 'center' ? 'SectionWhitPhoto-start-center' : startP === 'left' ? 'SectionWhitPhoto-start-left' : 'SectionWhitPhoto-start-right'}`}>{start}</div>
            <div className='SectionWhitPhoto-end' style={{backgroundImage: `url(${img})`}}></div>
        </div>
    )
}