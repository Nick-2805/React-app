import './SectionWithPhoto.css';

export default function SectionWithPhoto(props) {
    const {start, end, variant, bcg, img} = props;
    return <div className={`SectionWithPhoto 
    ${variant === 'reverse' ? 'SectionWithPhoto_reverse' : ''}`}>
        <div className='SectionWithPhoto-start'>{start}</div>
        <div className={`SectionWithPhoto-end ${bcg=== 'grey' ? 'SectionWithPhoto-end-bcg' : ''}`} style={{backgroundImage: `url(${img})`}}>{end}</div>
    </div>
}