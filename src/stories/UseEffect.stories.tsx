import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffet demo'
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleEffect')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect first render,and every once, if counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>
    </>
}

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleTimeoutEffect')

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCounter((state)=>state + 1)
    //     },1000)
    // },[])

    return <>
        Hello,counter: {counter}
        {/*<button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>*/}
    </>
}
