import logo from '../assets/logodream2.png'
import { FaInstagram } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className="mb-20 flex items-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt='logo' />
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaInstagram />
            <FaSquareXTwitter />
            <FaTiktok />
        </div>

    </div>
  )
}

export default Navbar