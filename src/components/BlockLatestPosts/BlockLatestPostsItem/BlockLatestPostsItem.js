import './BlockLatestPostsItem.css'

export default function BlockLatestPostsItem(props) {
    const {img, preTitle, data, titleText, desc, link} = props
    return (
        <div className='BlockLatestPostsItem'>
            <div className='BlockLatestPostsItem_img' style={{backgroundImage: `url(${img})`}}></div>
            <div className='BlockLatestPostsItem_content'>
                <div className='BlockLatestPostsItem_header'>
                    <div className='BlockLatestPostsItem_header_preTitle'>{preTitle}</div>
                    <div className='BlockLatestPostsItem_header_data'>{data}</div>
                </div>
                <div className='BlockLatestPostsItem_title'>{titleText}</div>
                <div className='BlockLatestPostsItem_desc'>{desc}</div>
                <div className='BlockLatestPostsItem_link'>{link}</div>
            </div>
        </div>
    )
}