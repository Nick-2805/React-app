import './HeaderBlock.css'

export default function HeaderBlock(props) {
    const {preTitle, headerB, headerRL, preTitleNone, titleText, titleTextLight, titleTextLightSize,  description, descNone, descCenter, descLight} = props;

    return (
        <div className='HeaderBlock' style={{display: `${headerB === 'block' ? 'block' : 'flex'}`}}>
            <div className='preTitleDiv' style={{display: `${preTitleNone === 'none' ? 'none' : 'inline-block'}`}}>{preTitle}</div>
            <h3 className={`sectionTitle ${titleTextLight === 'light' ? 'sectionTitle-light' : ''}`} style={{fontSize: `${titleTextLightSize==='light' ? '48px' : '56px'}`}}>{titleText}</h3>
            <div className={`description ${descCenter=== 'center' ? 'description-center' : ''} ${descLight==='light' ? 'description-light' : ''}`} style={{display: `${descNone === 'none' ? 'none' : 'block'}`}}>{description}</div>
        </div>
    )
}