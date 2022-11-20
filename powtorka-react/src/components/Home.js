import React, {useEffect, useState} from 'react'

export const Home = () => {

    const [data, setData] =useState([]);
    // tak zapisny useEffect odpali się przy każdej zminie w komponencie
    //    useEffect(() => {

    //     });
    // z pustą tablicą jako 2 parametr, odlai się tylko na poczatku i tylko jeden raz 
    useEffect(() => {

    }, [])

// useEffect obserwuje czy data się zmniła czy nie, jak siezmieni to zacznie działać 
    useEffect(() => {

    }, [data])

  return (
    <div>useEffect</div>
  )
}
