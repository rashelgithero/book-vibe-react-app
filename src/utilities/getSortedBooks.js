const getSortedBooks = (books, sort ) => {
    if(!books || books.length === 0){
        return []
    }
    
    return [...books].sort((a, b) => {
        const criterion = sort? sort.toLowerCase(): '';
        if(criterion === 'rating'){
            return b.rating - a.rating;
        }
        else if(criterion === 'numberofpages'){
            return b.totalPages - a.totalPages;
        }
        else if(criterion === 'publishedyear'){
            return b.yearOfPublishing - a.yearOfPublishing;
        }
        else{
            return 0;
        }
    })
}

export default getSortedBooks;