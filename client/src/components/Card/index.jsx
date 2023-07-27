import ImgCard from './ImgCard';

function Card({ searchText, data }) {
    let emptyDataMessage = 'No Posts Yet';
    let images = data.posts;

    if(searchText) {
        emptyDataMessage = 'No Search Results Found';
        images = data.searchResults;
    }

    if (images?.length) {
        return (
            images.map((image) => <ImgCard key={image._id} {...image} />)
        )
    } else
        return (
            <h3 className='mt-4 font-semibold text-[#282525] text-xl uppercase'>
                {emptyDataMessage}
            </h3>
        )
}

export default Card
