import React from "react";
import { RiFacebookFill } from 'react-icons//ri';
import { AiOutlineTwitter} from 'react-icons//ai';
import { FaInstagram } from 'react-icons/fa';
import s from "./footer.module.scss"
const Footer = () => {

 
  const [value, setValue] = React.useState('fruit');
 
  const handleChange = (event) => {
 
    setValue(event.target.value);
 
  };
 
  
  return (
    <footer>
      <div className={s.container}>
        <div className={s.left}>
          <img
            src="https://images.squarespace-cdn.com/content/v1/59e0ec65b1ffb652c49849db/1603972112989-OILN0IIELHFJKWGSH49U/lift99-ukraine-wall-of-fame-lalafo-logo.png"
            alt="logo"
          />
          <span className={s.leftText}>© 2023 Bütün hüquqlar qorunur</span>
        </div>
        <div className={s.right}>
         <ul>
         <li> <div>
         <label>
         
           <select value={value} onChange={handleChange}>
             <option value="fruit">Fruit</option>

             <option value="vegetable">Vegetable</option>

             <option value="meat">Meat</option>
           </select>
         </label>

       </div></li>
         <li>Saytın Xeritesi</li>
         <li className={s.linkF}><RiFacebookFill/> Facebook</li>
         <li className={s.linkT}><AiOutlineTwitter/> Twitter</li>
         <li className={s.linkI}><FaInstagram/>  Instagram</li>
         
         </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
