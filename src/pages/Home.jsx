import React from 'react'
import Layout from '../components/Layout'
import Bbg from "/images/01.jpg";

const Home = () => {
  return (
    <Layout>
            <div className='text-3xl py-4 font-bold text-center'>
              <h1>หน้าแรก</h1>
            </div>
            <img src={Bbg} alt="" />
    </Layout>

  )
}

export default Home