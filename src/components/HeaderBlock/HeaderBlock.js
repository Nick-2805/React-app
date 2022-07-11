import './HeaderBlock.css'

export default function HeaderBlock(props) {
    const {preTitle, preTitleNone, titleText, description, descNone} = props;

    return (
        <div className='HeaderBlock'>
            <div className='preTitleDiv' style={{display: `${preTitleNone === 'none' ? 'none' : 'inline-block'}`}}>{preTitle}</div>
            <h3 className='sectionTitle'>{titleText}</h3>
            <div className='description' style={{display: `${descNone === 'none' ? 'none' : 'block'}`}}>{description}</div>
        </div>
    )
}
//
// export default function HeaderBlock(props) {
//     const {text} = props;
//     return  <h3 className='HeaderBlock'>{text}</h3>
// }