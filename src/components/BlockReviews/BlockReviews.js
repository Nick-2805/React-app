import './BlockReviews.css'
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import CardReview from "./CardReview/CardReview";
import star from '../assets/icons/star.svg'
import photo1 from '../assets/img/photo1.png'
import photo2 from '../assets/img/photo2.png'
import photo3 from '../assets/img/photo3.png'


export default function BlockReviews() {
    return (
        <div className='BlockReviews'>
            <div className='container'>
                <HeaderBlock
                    preTitleNone='none'
                    titleText='What customers say'
                />
                <div className='BlockReviews_cards'>
                    <CardReview
                        icon={star}
                        text='"Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam."'
                        img={photo1}
                        name='Michael Webb'
                    />
                    <CardReview
                        icon={star}
                        text='"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor."'
                        img={photo2}
                        name='Amber Keene'
                    />
                    <CardReview
                        icon={star}
                        text='"Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl."'
                        img={photo3}
                        name='Sarah Tarleton'
                    />
                </div>
            </div>
        </div>
    )
}