import './SectionWithPhotoContent.css';

export default function SectionWithPhotoContent(props) {
    const {preTitleDiv, title, text, endForm, endInfo, endButtons} = props;
  return <div className='SectionWithPhotoContent'>
      {/*<div className='SectionWithPhotoContent-PreTitle'>{PreTitle}</div>*/}
      {preTitleDiv}
      <div className='SectionWithPhotoContent-title'>{title}</div>
      <div className='SectionWithPhotoContent-text'>{text}</div>
      {endForm}
      {endInfo}
      {endButtons}
    </div>
}