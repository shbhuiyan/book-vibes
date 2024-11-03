const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('mark-read');
    if(storeListStr){
        const getStoreList = JSON.parse(storeListStr);
        return getStoreList;
    }else{
        return [];
    }
}


const addToStoreReadList = (bookId) => {

    const storedList = getStoreReadList();
    if(storedList.includes(bookId)){
        console.log(bookId,'this is already exist');
    }else{
        storedList.push(bookId)
        const newStoredList = JSON.stringify(storedList);
        localStorage.setItem('mark-read',newStoredList)
    }
}

export {addToStoreReadList , getStoreReadList}