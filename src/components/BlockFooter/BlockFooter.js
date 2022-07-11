import './BlockFooter.css'
import Button from "../Button/Button";

export default function BlockFooter() {
    return (
        <div className='BlockFooter'>
            <div className="container">
                <div className='BlockFooter_wrapper'>

                    <div className="BlockFooter_logoBlock">
                        <div className="BlockFooter_logoBlock_icon"></div>
                        <div className="BlockFooter_logoBlock_name">Company</div>
                    </div>
                    <div className="BlockFooter_block">
                        <div className="BlockFooter_block_title">Pages</div>
                        <a href="#home" className='BlockFooter_block_elem'>Home</a>
                        <a href="#about" className='BlockFooter_block_elem'>About</a>
                        <a href="#agents" className='BlockFooter_block_elem'>Agents</a>
                        <a href="#contacts" className='BlockFooter_block_elem'>Contacts</a>
                        <a href="#FAQs" className='BlockFooter_block_elem'>FAQs</a>
                        <a href="#properties" className='BlockFooter_block_elem'>Properties</a>
                    </div>
                    <div className="BlockFooter_block">
                        <div className="BlockFooter_block_title">CMS Pages</div>
                        <a href="#property" className='BlockFooter_block_elem'>Property</a>
                        <a href="#propertySingle" className='BlockFooter_block_elem'>Property Single</a>
                        <a href="#blogCategories" className='BlockFooter_block_elem'>Blog Categories</a>
                        <a href="#blogSingle" className='BlockFooter_block_elem'>Blog Single</a>
                        <a href="#agentSingle" className='BlockFooter_block_elem'>Agent Single</a>
                    </div>
                    <div className="BlockFooter_block">
                        <div className="BlockFooter_block_title">Utility Pages</div>
                        <a href="#styleGuide" className='BlockFooter_block_elem'>Style Guide</a>
                        <a href="#changelog" className='BlockFooter_block_elem'>Changelog</a>
                        <a href="#licenses" className='BlockFooter_block_elem'>Licenses</a>
                        <a href="#404" className='BlockFooter_block_elem'>404</a>
                        <a href="#password" className='BlockFooter_block_elem'>APassword</a>
                        <a href="#search" className='BlockFooter_block_elem'>Search</a>
                    </div>
                    <div className="BlockFooter_block formBlock">
                        <div className="BlockFooter_block_title">Subscribe</div>
                        <div className="BlockFooter_block_desc">Join our newsletter to stay up to date on features and
                            releases.
                        </div>
                        <form className='FormBlock'>
                            <input type='search' className='SectionWithPhotoContent-search'
                                   placeholder="Enter your email"></input>
                            <Button
                                text='Subscribe'
                            />
                        </form>
                        <div className="BlockFooter_block_agree">By subscribing you agree to with our Privacy Policy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}