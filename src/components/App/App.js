import Header from '../Header/Header';
import './App.css';
import BlockFindHouses from "../BlockFindHouses/BlockFindHouses";
import WhiteBlock from "../WhiteBlock/WhiteBlock";
import GreyBlock from "../GreyBlock/GreyBlock";
import BlockReviews from "../BlockReviews/BlockReviews";
import BlockLatestPost from "../BlockLatestPosts/BlockLatestPosts";
import BlockFooter from "../BlockFooter/BlockFooter";

function App() {
    return (
        <div className="App">
            <Header/>
            <BlockFindHouses/>
            <WhiteBlock/>
            <GreyBlock/>
            <BlockReviews/>
            <BlockLatestPost/>
            <BlockFooter/>

        </div>
    )
}

export default App;
