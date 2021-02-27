export default function Link({name,type}){

    return(
        <div className={type}>
            <a href="#"><p>{name}</p></a>
        </div>
    )
}