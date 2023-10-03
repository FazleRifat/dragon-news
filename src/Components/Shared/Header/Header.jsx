import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
const Header = () => {
    return (
        <div className='max-w-xl mx-auto flex flex-col justify-center items-center gap-3 my-3'>
            <img src={logo} alt="" />
            <h3 className='text-lg font-normal text-gray-400'>Journalism Without Fear or Favour</h3>
            <p className='font-medium text-xl'>{moment().format("dddd, ")}<span className='text-gray-400'>{moment().format("MMMM D, YYYY")}</span></p>
        </div>
    );
};

export default Header;