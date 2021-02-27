import HeaderHigher from "./header/headerHigher";
import HeaderLower from "./header/headerLower";
import "../stylesheet/header.css";
import "../stylesheet/elementscss/link.css";
import "../stylesheet/elementscss/icon.css";
import "../stylesheet/elementscss/selected.css";
import "../stylesheet/elementscss/button.css";

export default function Header(){
  return (
      <div className="header">
         <HeaderHigher/>
         <HeaderLower/>
      </div>
  )
}