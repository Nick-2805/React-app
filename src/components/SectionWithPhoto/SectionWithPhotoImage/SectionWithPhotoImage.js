import './SectionWithPhotoImage.css'

export default function SectionWithPhotoImage(props) {
    const {img, variant, variant3} = props;
    return <div
        className={`SectionWithPhotoImage 
                ${variant === 'v2' ? 'SectionWithPhotoImage_variant2' : variant3 === 'v3' ? 'SectionWithPhotoImage_variant3' : ''}`}
        style={{backgroundImage: `url(${img})`}}
    />
}