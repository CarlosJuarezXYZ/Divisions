import SelectedEspecial from "./elements/SelectedEspecial";
import Button from "./elements/Button";
import Input from "./elements/Input";
import "../stylesheet/main.css";
import Check from "./elements/Check";
import Filter from "./elements/FIlter";
import Celda from "./elements/Celda";
import CheckList from "./elements/CheckList";

export default function Main(){
    return(
        <div class="main">
            
            <div className = "mainfirst">

               <div className="mainbutton">
                    <Button type = "mainbutton-first" name = "Listado" model="button-main"/>
                    <Button type = "mainbutton-second" name = "Árbol" model="button-main"/>
               </div>
               
               <div className="mainselected">
                  <SelectedEspecial type="selected-especial" name="selected-especial"/>
                  <Input type="input-main"/>
               </div>

            </div>

                <div className = "mainsecond">
                    <div className="filter-second">
                    <Check/><Filter value = "Division" button="true" filter="true"/>
                    <Filter value = "Division superior" button="true" filter="true"/>
                    <Filter value = "Colaboradores" button="true"/>
                    <Filter value = "Nivel" button="true" filter="true"/>
                    <Filter value = "Subdivisiones" button="true" filter="true"/>
                    <Filter value = "Embajadores"/>
                    </div>

                    <div class="celdas-generales">
                        <div className="celdas-first">
                            <Check/>
                            <Check/>
                            <Check/>
                            <Check/>
                        </div>

                        <div className="celdas-second">
                            <Celda value="Ceo" button=""/>
                            <Celda value="Direccion general" button=""/>
                            <Celda value="1" button=""/>
                            <Celda value="1" button=""/>
                            <Celda value="1" button="true"/>
                            <Celda value="Jordyn Herwits" button=""/>

                            <Celda value="Ceo" button=""/>
                            <Celda value="Direccion general" button=""/>
                            <Celda value="1" button=""/>
                            <Celda value="1" button=""/>
                            <Celda value="1" button="true"/>
                            <Celda value="Jordyn Herwits" button=""/>
                        </div>

                    </div>


                    <div className="filter-checklist">

                        <div className="checklist-input">
                            <Input type="input-main"></Input>
                        </div>

                        <div className="checklist">
                            <CheckList value="Statregy"/>
                            <CheckList value="Producto"/>
                            <CheckList value="Direccion general"/>
                            <CheckList value="Operaciones"/>
                            <CheckList value="Ceo"/>
                            <CheckList value="Statregy"/>
                            <CheckList value="Producto"/>
                            <CheckList value="Direccion general"/>
                            <CheckList value="Operaciones"/>
                            <CheckList value="Ceo"/>
                        </div>

                        <div className="checklist-buttons">
                            <Button type = "lowerbutton" name = "OK" model="button-simple"/>
                            <Button type = "lowerbutton" name = "Reiniciar" model="button-simple"/>
                        </div>

                    </div>

            </div>
    
      </div>
    )
}