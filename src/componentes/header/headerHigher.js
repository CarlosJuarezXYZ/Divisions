import Icon from "../elements/Icon";
import Link from "../elements/Link";
import Selected from "../elements/Selected";


export default function HeaderHigher(){

    return(
        <div className="headerHiger">
            <div className="higerfirst">
              <img src="./mandu.png"></img>
              <Link name = "Dashboard" type = "link-simple"/>
              <Link name = "Organización" type = "link-simple"/>
              <Selected name="Modelos" type="select-simple"/>
              <Selected name="Seguimiento" type = "select-simple"/>
            </div>

            <div className="higersecond">
              <Icon type = "icon-small" className = "ri-briefcase-4-line"/>
              <Icon type = "icon-small" className = "ri-question-line"/>
              <Icon type = "icon-small" className = "ri-notification-4-fill"/>
              <div className = "second-circle">A</div>
              <Selected name="Administrador" type="select-simple"/>
              <img src="./mandu2.png"></img>
            </div>
            
        </div>
    )
}