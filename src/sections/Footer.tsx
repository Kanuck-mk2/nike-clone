import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';
import { motion } from 'framer-motion';
import { slideUp2 } from '../constants/animations';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <motion.footer
      className="max-container"
      variants={slideUp2}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex-flex-col items-start">
          <a href="/" title="/">
            <img src={footerLogo} width={150} height={46} title="logo" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get Shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get rewards.
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full hover:bg-coral-red duration-300">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />{' '}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red duration-200 cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved. {currentYear}</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
