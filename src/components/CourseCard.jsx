import React from 'react'

const CourseCard = (props) => (
    <div className='p-4 text-center'>
      <img src={`/images/${props.image}`} alt={props.name} className="w-full h-full object-cover rounded-t-xl"/>
      <div className='bg-blue-500 rounded-b-xl p-1 text-white'>
        <h3 className='mt-2'>{props.name}</h3>
        <p className='font-light'>{props.description}</p>
        <span>{props.price}</span>
      </div>
    </div>
);

export default CourseCard