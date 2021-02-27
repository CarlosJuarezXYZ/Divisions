export default function Input({type}){
    return(
        <div className="main-input">
            <input type="text" className = {type} placeholder="Buscar"></input>
            <a href="#"><i className="ri-search-line"></i></a>
        </div>
    )
}