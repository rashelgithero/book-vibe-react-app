const getToLocalStorage= (bookItem) => {
    const books = localStorage.getItem(bookItem);
    if(books){
        return JSON.parse(books)
    }
    return [];
}
const removeToLocalStorage = (key, removeBookedId) =>{
    const currentList = getToLocalStorage(key) || [];
    console.log(currentList)
    const updateList = currentList.filter(id => id !== removeBookedId)
    localStorage.setItem(key, JSON.stringify(updateList))
}

const setToLocalStorage = (bookItem, id) => {
    const currentListBooks = getToLocalStorage(bookItem);
    const isAlreadyAdded = currentListBooks.find(bookId => bookId === id)
    if(!isAlreadyAdded){
        currentListBooks.push(id)
        localStorage.setItem(bookItem, JSON.stringify(currentListBooks));
    }
        
}
export {getToLocalStorage, setToLocalStorage, removeToLocalStorage}