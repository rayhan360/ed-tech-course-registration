import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BsFillBookFill } from 'react-icons/bs';

const Card = ({card, handleBookMarks}) => {
    const {cover, title, description, price, credit_hour} = card;
    return (
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-5 pt-5">
                        <img src={cover} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p className='text-sm text-gray-600'>{description}</p>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <FiDollarSign></FiDollarSign>
                                <h1>Price : {price}</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                            <BsFillBookFill></BsFillBookFill>
                            <h1>Credit : {credit_hour}hr</h1>
                            </div>
                        </div>

                        <div className="card-actions">
                            <button 
                            className="p-2 rounded-lg text-white bg-[#2F80ED] w-full" 
                            onClick={()=> handleBookMarks(card)}
                            >Select</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func
}

export default Card;