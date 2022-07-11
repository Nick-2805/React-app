import './CardReview.css'

export default function CardReview(props) {
    const {icon, text, img, name, prof} = props
    return (
        <div className='CardReview'>
            <div className="CardReview_rating">
                <img src={icon} className='CardReview_rating_star' alt={icon}/>
            </div>
            <div className="CardReview_desc">{text}</div>
            <div className="CardReview_author">
                <img src={img} className="CardReview_author_img" alt={img}/>
                <div className="CardReview_author_data">
                    <div className="CardReview_author_data_name">{name}</div>
                    <div className="CardReview_author_data_prof">{prof}</div>
                </div>
            </div>
        </div>
    )
}