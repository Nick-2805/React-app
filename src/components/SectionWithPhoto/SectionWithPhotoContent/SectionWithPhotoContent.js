import './SectionWithPhotoContent.css';

export default function SectionWithPhotoContent(props) {
    const {preTitle, title, text, endForm, endInfo, endButtons} = props;
  return <div className='SectionWithPhotoContent'>
      <div className='SectionWithPhotoContent-preTitle'>{preTitle}</div>
      <div className='SectionWithPhotoContent-title'>{title}</div>
      <div className='SectionWithPhotoContent-text'>{text}</div>
      {endForm}
      {endInfo}
      {endButtons}
    </div>
}