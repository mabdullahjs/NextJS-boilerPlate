import React from 'react'

const About = async () => {

  //fetch data

  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json();
  console.log(data);

  return (
    <div>{data.map((item: any, index: number) => {
      return <div key={item.id}>
        <h1>UserId:{item.userId}</h1>
        <h1>title:{item.title}</h1>
        <button
          className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900 ml-5">
          Button
        </button>
      </div>
    })}</div>
  )
}

export default About