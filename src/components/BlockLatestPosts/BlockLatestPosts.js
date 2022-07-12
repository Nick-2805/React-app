import './BlockLatestPosts.css'
import HeaderBlock from "../HeaderBlock/HeaderBlock";
import BlockLatestPostsItem from "./BlockLatestPostsItem/BlockLatestPostsItem";
import img1 from '../assets/img/latesPost1.jpg'
import img2 from '../assets/img/latesPost2.jpg'
import img3 from '../assets/img/latesPost3.jpg'
import SectionWithPhotoContentLinks from "../SectionWithPhotoContentLink/SectionWithPhotoContentLink";

export default function BlockLatestPosts() {
    return (
        <div className='BlockLatestPosts'>
            <div className='container'>
                <div className='BlockLatestPosts-top'>
                    <HeaderBlock
                        headerB='block'
                        preTitle='Blog'
                        titleText='Latest posts'
                        description='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Praesent efficitur nibh massa morbi sagittis ornare dui in ornare.'
                    />
                    <SectionWithPhotoContentLinks
                        text='View all'
                        dNone2='none'
                    />
                </div>
                <div className='BlockLatestPostsItems'>
                    <BlockLatestPostsItem
                        img={img1}
                        preTitle='Trends'
                        data='May 10, 2022'
                        titleText='The 9 best homes in New York'
                        desc='Integer tincidunt rutrum faucibus. Proin sit amet varius arcu. Aliquam vel leo augue donec.'
                        link='Read more >'
                    />
                    <BlockLatestPostsItem
                        img={img2}
                        preTitle='DIY'
                        data='May 10, 2022'
                        titleText='How to easily buy a house with Realco'
                        desc='Praesent nec felis nisl. Phasellus eget lacus a metus fringilla fermentum sit amet.'
                        link='Read more >'
                    />
                    <BlockLatestPostsItem
                        img={img3}
                        preTitle='DIY'
                        data='May 10, 2022'
                        titleText='Renting houses - complete guide'
                        desc='Nunc in bibendum leo, gravida scelerisque quam nulla interdum tellus a turpis.'
                        link='Read more >'
                    />
                </div>
            </div>
        </div>
    )
}