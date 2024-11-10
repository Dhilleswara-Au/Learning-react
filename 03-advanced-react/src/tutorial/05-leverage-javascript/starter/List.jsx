import { Person } from './Person'
import React from 'react'
import { people } from '../../../data'

const List = () => {
  return (
    <>
        {people.map((person) => {
            console.log(person);
            return <Person key={person.id} {...person}/>
        })}
    </>
  )
}

export default List