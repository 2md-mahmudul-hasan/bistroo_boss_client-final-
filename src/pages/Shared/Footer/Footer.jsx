import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>

      <section className='footer bg-black py-14 justify-evenly'>
        <div className='text-center'>
          <img className='w-[50px] mx-auto rounded' src='https://images-platform.99static.com//h9rFjYKA0LZWUImhqN5wpERYVsQ=/138x1395:1606x2863/fit-in/590x590/projects-files/53/5352/535253/febca19b-e215-4c6f-9b09-1a09df8a6039.png' alt='logo' />
          <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        </div>
        <div>
          <h2 className="footer-title text-center">Social</h2>
          <div className="grid grid-flow-col gap-4">
            <a> <FaLinkedin /></a>
            <a> <FaYoutube /></a>
            <a> <FaInstagram /></a>
          </div>
        </div>

      </section>


      <div className='text-center bg-slate-800'>
        <p className='error-content py-3'>Copyright {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
      </div>
    </div>
  );
};

export default Footer;