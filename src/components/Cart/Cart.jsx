import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Cart = ({bookMark}) => {

    return (
            <div className='rounded-xl'>
                <div className="p-4 m-4 bg-base-100 shadow-xl">
                    <h1 className='text-xl font-medium text-[#2F80ED] mt-4 mb-4'>Credit Hour Remaining 7 hr</h1>
                    <hr />
                    <h1 className='text-2xl text-black font-medium mt-4 mb-8'>Course Name</h1>
                    <div className='mb-2'>
                        {
                            bookMark.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} idx={idx}></Bookmark>)
                        }
                    </div>
                    <hr />
                    <h1 className='text-lg text-[#1C1B1BCC] my-4'>Total Credit Hour : 13</h1>
                    <hr />
                    <h1 className='text-lg text-[#1C1B1BCC] my-4'>Total Price : 48000 USD</h1>
                </div>
            </div>
    ); 
};

Cart.propTypes = {
    bookMark: PropTypes.array,
}


export default Cart;