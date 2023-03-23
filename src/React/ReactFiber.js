import {HostRoot} from './reactWorkTag'
import {NoFlags} from './ReactFiberFlags'

export function createHostRootFiber(){
    return createFiber(HostRoot)
}

/**
 * 
 * @param {*} tag 
 * @param {*} pendingProps 
 * @param {*} key 
 */
export function createFiber(tag,pendingProps,key){
    return new FiberNode(tag,pendingProps,key)
}

export function FiberNode(tag,pendingProps,key){
    this.tag = tag
    this.pendingProps =pendingProps
    this.key = key
}

/**
 * 根据老fiber创建新fiber
 * @param {*} current 老fiber
 * @param {*} pendingProps 新属性
 */
export function createWorkInProgress(current,pendingProps){
    let workInProcress = current.alternate
    //如果没有新fiber就用老fiber的属性创建新fiber
    if(!workInProcress){
        workInProcress = createFiber(current.tag,pendingProps,current.key);
        workInProcress.type = current.type
        workInProcress.stateNode = current.stateNode
        workInProcress.alternate = current
        current.alternate = workInProcress
    }else{
        workInProcress.pendingProps = pendingProps
    }
    workInProcress.flags = NoFlags
    workInProcress.child = null;
    workInProcress.sibling = null;
    workInProcress.updateQueue = current.updateQueue;
    //在dom diff 过程中会给fiber添加副作用
    workInProcress.firstEffect = workInProcress.lastEffect = workInProcress.nextEffect = null
    return workInProcress
}