import {createWorkInProgress} from './ReactFiber'

let workInProgressRoot = null //当前正在更新的根
let workInProgress = null   //当前横着更新的fiber节点

/**
 * 不管如何更新，都会调度到这个方法里
 */
export function scheduleUpdateOnFiber(fiber){
    const fiberRoot = markUpdateLaneFromFiberToRoot(fiber)
    performSyncWorkOnRoot(fiberRoot)
}

//找到这个fiber的根节点
function markUpdateLaneFromFiberToRoot(sourceFiber){
    let node = sourceFiber;
    let parent = node.return;
    while(parent){
        node = parent;
        parent = parent.parent
    }
    return node.stateNode
}

/**
 * 根据老的fiber树和更新对象创建新的fiber树，然后根据新的fiber树去更新我们的真实dom
 * @param {*} fiberRoot 
 */
function performSyncWorkOnRoot(fiberRoot){
    workInProgressRoot = fiberRoot
    workInProgress = createWorkInProgress(workInProgressRoot.current)
    console.log(workInProgress,"workInProgress")
}