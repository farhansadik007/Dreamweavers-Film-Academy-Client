import { GiFilmProjector, GiFilmSpool } from 'react-icons/gi';
import { IoMdFilm } from 'react-icons/io';

const Footer = () => {
    return (
            <footer className="footer footer-center p-10">
                <div>
                    <img width={200} height={200} src="dreamweaver.png" alt="" />
                    <p className="font-bold text-2xl">
                        DreamWeavers Film Academy
                    </p>
                    <p className='font-bold'>Copyright © 2023 - All right reserved</p>
                    <div className='flex space-x-5 mt-3'>
                        <p className='link link-hover'>About Us</p>
                        <p className='link link-hover'>Report</p>
                        <p className='link link-hover'>Contact</p>
                    </div>
                </div>
                <div className='flex space-x-9'>
                        <IoMdFilm size={30} />
                        <GiFilmProjector size={30} />
                        <GiFilmSpool size={30} />
                </div>
            </footer>
    );
};

export default Footer;