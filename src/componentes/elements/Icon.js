export default function Icon({type,className}){

    return(
    <div className={type}>
        <a href="#"><i className={className}></i></a>
    </div>
    )
}