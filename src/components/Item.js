import { useEffect } from "react"
import { addItemAction, decrAction, incrAction, incrAction2 } from "../store/itemReducer"
import { useDispatch, useSelector } from "react-redux"

function Item(){

    const item = useSelector(store => store.item)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(item))
    }, [item])


    return(
        <div className="container">
            {item.map(elem => 
            <div className='btn_box' key={elem.id}>
            <h2 className="item_name">{elem.title}</h2>
            <button onClick={() => dispatch(decrAction(elem.id))}><div className="plus_minus">-</div></button>
            <span className="count">{elem.count}</span>
            <button onClick={() => dispatch(incrAction(elem.id))}><div className="plus_minus">+</div></button>
            </div>
                )}
            <button className='add_btn' onClick={() => dispatch(addItemAction())}>Add Item</button>
            </div>
    )
}

export default Item