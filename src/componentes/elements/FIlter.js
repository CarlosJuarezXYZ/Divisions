export default function Filter({value,button,filter}){
    return(
        <div className="filter">
          <div className="paragraph-filter">
                <p>{value}</p>
                {button && <div className="button-order">
                    <button>ʌ</button>
                    <button>v</button>
                </div>}
          </div>
        {filter&&<i className="ri-filter-2-line"></i>}
        </div>
    )
}