import React, {useMemo, useState} from 'react';
import {Select} from '../components/Select/Select';

export default {
    title: 'useMemo'
};

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a ; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    },[a])

    for (let i = 1; i <= b ; i++) {
        resultB = resultB * i
    }

    return (
        <>
            <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </>
        )

}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('UsersSecret')
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alik', 'Igor', 'Artem'])

    const newArr = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    },[users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add User</button>
        {counter}
        <Users users={newArr}/>
    </>
}


//1 селект- города из беларуси
//2 селект- города на букву какую-то
//3 селект- города на c численностью больше 10000000
//дабвить счетчик который не будет перерисовывать города, при изменение счетчика (добавить console.log)

type City = {
    id: number,
    CountyId: number,
    city: string,
    countPeople: number
}

export type CountryType = City[]


export const ExampleSelect = () => {

    const [count, setCount] = useState(0)

    const [items, setItems] = useState<CountryType>([
        {id: 1, CountyId: 1, city: 'Минск', countPeople: 2000000},
        {id: 2, CountyId: 1, city: 'Гродно', countPeople: 500000},
        {id: 3, CountyId: 1, city: 'Брест', countPeople: 600000},
        {id: 4, CountyId: 2, city: 'Москва', countPeople: 2000000},
        {id: 5, CountyId: 2, city: 'Питер', countPeople: 2000000},
        {id: 6, CountyId: 2, city: 'Вологда', countPeople: 100000},
        {id: 7, CountyId: 3, city: 'Киев', countPeople: 2000000},
        {id: 8, CountyId: 3, city: 'Днепр', countPeople: 2000000},
        {id: 9, CountyId: 3, city: 'Львов', countPeople: 2000000},
    ])

    const citiesBelarus = useMemo(()=>{
        return items.filter(i => i.CountyId === 1).map(el => el.city)
    },[items])
    const citiesVowelO = useMemo(()=>{
        return items.filter(i => i.city.includes('а')).map(el => el.city)
    },[items])
    const citiesСount = useMemo(()=>{
        return items.filter(i => i.countPeople >= 1000000).map(el => el.city)
    }, [items])
    console.log('Changed')

    return (
        <div>
            <SelectHelps cities={citiesBelarus}/>
            <SelectHelps cities={citiesVowelO}/>
            <SelectHelps cities={citiesСount}/>
            <button onClick={()=>setCount(count+1)} >+</button>
            {count}
        </div>
        )
}

type SelectHelps = {
    cities: string[]
}
const SelectSecret = (props: SelectHelps) => {
    console.log('Cities changed')
    return (
        <select >
            {props.cities.map(city => (
                <option key={city} value={city}>
                    {city}
                </option>
            ))}
        </select>
    )
}

const SelectHelps = React.memo(SelectSecret)




