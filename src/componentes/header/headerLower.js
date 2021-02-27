import Button from "../elements/Button";
import Icon from "../elements/Icon";

export default function HeaderLower(){
    return(
        <div className="headerLower">
           <div className="lowerfirst">
              <h3>Organización</h3>
                  <div className = "lowersbuttons">
                     <Button type = "lowerbutton" name = "Divisiones" model="button-simple"/>
                     <Button type = "lowerbutton" name = "Colaboradores" model="button-simple"/>
                  </div>
           </div>

           <div className="lowersecond">
              <Icon type = "icon-medium" className="ri-add-line"/>
              <Icon type = "icon-medium" className="ri-upload-line"/>
              <Icon type = "icon-medium" className="ri-download-line"/>
           </div>
        </div>
    )
}