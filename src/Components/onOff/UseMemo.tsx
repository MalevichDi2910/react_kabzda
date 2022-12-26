import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
    for(let i = 1; i <= a; i++){
        let fake = 0;
        while (fake < 10000000){
            fake++;
            const fakeValue = Math.random();
        }
        tempResultA *= i
    }
    return tempResultA
    },[a])

    for(let i = 1; i <= b; i++){
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e)=> setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e)=> setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>

        </>
    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(["Di", "Karina", "Vlad"]);

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    },[])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
}
//__________________________________________________________________________


export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo')
    let [counter, setCounter] = useState(0);
    let [books, setBooks] = useState(["React", "JS", "Angular"]);

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBooks = [...books,'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }
    }, [books]);

    const memoizedAddBook1 = useCallback(() => {
            console.log(books)
            const newBooks = [...books,'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books]);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)