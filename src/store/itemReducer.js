
const data = [
        {id: 1, title: 'Велосипед', count: 5}, 
        {id: 2, title: 'Самокат', count: 4}, 
        {id: 3, title: 'Гантели', count: 7}, 
        {id: 4, title: 'Ракетки', count: 1} 
]


const defaultState = JSON.parse(localStorage.getItem('item')) ?? data


const ADD_ITEM = 'ADD_ITEM'
const INCR = 'INCR'
const DECR = 'DECR'




export const itemReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_ITEM:
            const title = prompt('Введите имя товара');
                if (title !== null) {
                    const newItem = {
                    id: state.reduce((maxId, item) => Math.max(item.id, maxId), 0) + 1,
                    title: title,
                    count: 1,
                };
            return [...state, newItem];
            }
        case INCR:
            return state.map(
                (elem) => elem.id === action.payload ?
                {...elem, count: Math.min(elem.count + 1, 25)} : elem
                )
        case DECR:
            const updatedState = state.map((item) =>
            item.id === action.payload
            ? { ...item, count: Math.max(item.count - 1, 0) }
            : item);
            return updatedState.filter((item) => item.count > 0);

        default:
            return state;
    }
}
export const decrAction = (payload) => ({type: DECR, payload})
export const incrAction = (payload) => ({type: INCR, payload})
export const addItemAction = () => ({type: ADD_ITEM})