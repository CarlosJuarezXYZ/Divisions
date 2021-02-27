export default function Celda({value,button}){
    return(
        <div className="celdagroup">
         <p>{value}</p>
         {button&&<button class="button-add">+</button>}
        </div>
    )
}