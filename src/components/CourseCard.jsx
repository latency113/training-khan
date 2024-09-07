import React from 'react';

const CourseCard = (props) => (
  <div className='p-4 text-center max-w-sm mx-auto'>
    <img 
      src={`/images/${props.image}`} 
      alt={props.name} 
      className="w-full h-64 object-cover rounded-t-xl"
    />
    <div className='bg-blue-500 rounded-b-xl p-4 text-white'>
      <h3 className='text-lg font-semibold mt-2'>{props.name}</h3>
      <p className='font-light text-sm mb-2'>{props.description}</p>
      <span className='text-xl font-bold'>{props.price}</span>
    </div>
  </div>
);

export default CourseCard;
