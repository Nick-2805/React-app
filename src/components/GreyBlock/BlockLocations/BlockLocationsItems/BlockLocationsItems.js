import './BlockLocationsItems.css'
import BlockLocationsItemsElem from "./BlockLocationsItemsElem/BlockLocationsItemsElem";

export default function BlockLocationsItems() {
    return (
        <div className='BlockLocationsItems'>
            <BlockLocationsItemsElem
                title='San Francisco, CA'
                viewProp='View Properties >'
            />
            <BlockLocationsItemsElem
                title='Los Angeles, CA'
                viewProp='View Properties >'
            />
            <BlockLocationsItemsElem
                title='San Diego, CA'
                viewProp='View Properties >'
            />
            <BlockLocationsItemsElem
                title='New York, NY'
                viewProp='View Properties >'
            />
            <BlockLocationsItemsElem
                title='Las Vegas, NV'
                viewProp='View Properties >'
            />
            <BlockLocationsItemsElem
                title='Las Vegas, NV'
                viewProp='View Properties >'
            />
        </div>
    )
}