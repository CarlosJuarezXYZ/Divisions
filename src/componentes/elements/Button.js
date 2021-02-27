export default function Button({type,name,model}){
   
    return (
        <div className={type}>
          <button className={model} >{name}</button>
        </div>
    )
}