/**
 * 实现创建仓库的功能
 */
export default function (reducer, defaultState) {

    let currentReducer = reducer,
        currentState = defaultState

    function dispatch(action) {
        if(!isPlainObject(action)) {
            throw new TypeError('action musty be plain object')
        }
        if(!action.type) {
            throw new TypeError('action must be has a property of type')
        }
        currentState = currentReducer(currentState, action)
    }

    function getState() {

    }

    function subscribe() {

    }

    return {
        dispatch,
        getState,
        subscribe
    }
}

/**
 * 判断某个对象是否是一个plain-object
 */
function isPlainObject(obj) {
    if(typeof obj != 'object') {
        return false
    }
    return Object.getPrototypeOf(obj) === Object.prototype
}