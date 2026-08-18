const getToLocalStorage= (bookItem) => {
    const books = localStorage.getItem(bookItem);
    if(books){
        return JSON.parse(books)
    }
    return [];
}

const setToLocalStorage = (bookItem, id) => {
    const currentListBooks = getToLocalStorage(bookItem);
    const isAlreadyAdded = currentListBooks.find(bookId => bookId === id)
    if(!isAlreadyAdded){
        currentListBooks.push(id)
        localStorage.setItem(bookItem, JSON.stringify(currentListBooks));
    }
        
}
export {getToLocalStorage, setToLocalStorage}