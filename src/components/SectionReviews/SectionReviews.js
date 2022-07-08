import './SectionReviews.css'

export default function SectionReviews(props) {
    const {icon, text, img, name, prof} = props
    return <div className='SectionReviews'>
        <div className="SectionReviews_rating">
            <img src={icon} className='SectionReviews_rating_star' alt={icon}/>
        </div>
        <div className="SectionReviews_desc">{text}</div>
        <div className="SectionReviews_author">
            <img src={img} className="SectionReviews_author_img" alt={img}/>
            <div className="SectionReviews_author_data">
                <div className="SectionReviews_author_data_name">{name}</div>
                <div className="SectionReviews_author_data_prof">{prof}</div>
            </div>
        </div>
    </div>
}