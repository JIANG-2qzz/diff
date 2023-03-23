import {createUpdate,enqueueUpdate} from './ReactUpdateQueue'
import {scheduleUpdateOnFiber} from './ReactFiberWorkLoop'
/**
 * 把虚拟dom变成真实dom插入或者说渲染到container容器中
 */
export function updateContainer(element,container){
    console.log(container,"container")
    const current = container.current;
    const update = createUpdate();
    update.payload = {element};
    enqueueUpdate(current,update);
    scheduleUpdateOnFiber(current);
}