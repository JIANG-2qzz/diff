//更新队列


export function initializeUpdateQueue(fiber){
    const updateQueue = {
        shared :{
            pending : null
        }
    }
    fiber.updateQueue = updateQueue
}

export function createUpdate(){
    return {}
}

export function enqueueUpdate(fiber,update){
    let updateQueue = fiber.updateQueue;
    let shared = updateQueue.shared;
    let pending = shared.pending;
    if(!pending){
        update.next = update;
    }else{
        update.next = pending.next;
        pending.next = update
    }
    fiber.updateQueue.shared.pending = update
}

// let fiber = {baseState : { Number : 0}};
// initializeUpdateQueue(fiber)
// let update1 = createUpdate()
// update1.payload = { Number : 2}
// enqueueUpdate(fiber,update1)

