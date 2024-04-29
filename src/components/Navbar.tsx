import headerLogo from '../assets/images/header-logo.svg';
import hamburger from '../assets/icons/hamburger.svg';
import { navLinks } from '../constants/index';
import { motion } from 'framer-motion';
import { slideDown, slideDown2, staggerDown } from '../constants/animations';

const Navbar: React.FC = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <motion.a
          href="#"
          variants={slideDown}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </motion.a>
        <motion.ul
          className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
          variants={staggerDown}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((item) => (
            <motion.li key={item.label} variants={slideDown2}>
              <a
                href={item.href}
                className="font-montserrat font-bold  leading-normal text-lg text-white hover:text-coral-red"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <div className="hidden max-lg:block ">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
