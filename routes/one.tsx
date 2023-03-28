import Counter from "../islands/Counter.tsx"
import {a} from 'kl/two.js'

export  default function One(){
    return (
        <>
        <h1>one page{a}</h1>
        <hr />
        <Counter start={4}></Counter>
        </>
    )
}