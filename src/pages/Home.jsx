import React from 'react'
import Layout from '../components/Layout'
import Bbg from "/images/01.jpg";

const Home = () => {
  return (
    <Layout>
            <div className='text-2xl py-2 text-center'>
              <h1 className='py-2'>หน้าแรก</h1>
              <hr />
            </div>
            <img src={Bbg} alt="" />
    </Layout>

  )
}

export default Home