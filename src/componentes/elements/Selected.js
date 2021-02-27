export default function Selected({name,type}){

    return(
        <div >
            <select className={type}>
                <option value="value1">{name}</option>
            </select>
        </div>
    )
}
