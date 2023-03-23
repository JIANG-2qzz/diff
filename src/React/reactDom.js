import {createFiberRoot} from './reactFiberRoot.js'
import {updateContainer} from './ReactFiberReconciler.js'

function render(element, container, callback){
    var fiberRoot = createFiberRoot(container)
    // console.log(fiberRoot)
    updateContainer(element,fiberRoot) //更新根容器
}


const ReactDom = {
    render
}

export default ReactDom