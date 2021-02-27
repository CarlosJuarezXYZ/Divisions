export default function SelectedEspecial({name,type}){

    return(
        <div >
            <select className={type} name = {name}>
                <option>División</option>
                <option>División superior</option>
                <option>Colaboradores</option>
                <option>Nivel</option>
                <option>Subdivisiones</option>
                <option>Embajadores</option>
            </select>
        </div>
    )
}
