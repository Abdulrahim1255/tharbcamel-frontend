export const storeBatch = (batchArray)=>{
    return {
        type:"STORE_BATCH",
        payload:batchArray
    }
}

export const deleteBatchItem = (item)=>{
    return {
        type:"DELETE_BATCH_ITEM"
    }
}