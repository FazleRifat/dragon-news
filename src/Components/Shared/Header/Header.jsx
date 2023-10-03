import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import Headline from '../../Home/Headline';
const Header = () => {
    return (
       <div className='space-y-3 my-3'>
         <div className='text-center '>
            <img className='mx-auto' src={logo} alt="" />
            <h3 className='text-lg font-normal text-gray-400'>Journalism Without Fear or Favour</h3>
            <p className='font-medium text-xl'>{moment().format("dddd, ")}<span className='text-gray-400'>{moment().format("MMMM D, YYYY")}</span></p>
            
        </div>
        <Headline></Headline>
       </div>
    );
};

export default Header;