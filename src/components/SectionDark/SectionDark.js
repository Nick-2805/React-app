import './SectionDark.css'


export default function SectionDark(props) {
    const {img, title, desc, btn} = props
    return <div className='SectionDark'>
        <img src={img} alt={img}/>
        {title}
        {desc}
        {btn}
    </div>
}