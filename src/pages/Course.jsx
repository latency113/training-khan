import React from 'react';
import CourseCard from '../components/CourseCard';
import Layout from '../components/Layout';

const Course = () => {
  const p = [
    {
      image: "basic-react-native.png",
      name: "Basic React Native",
      description: "ระยะเวลา (วัน): 5",
      price: "ราคา 7,500 บาท",
    },
    {
      image: "powerbi-dashboard.png",
      name: "Power BI Dashboard",
      description: "ระยะเวลา (วัน): 4",
      price: "ราคา 5,500 บาท",
    },
    {
      image: "ui-design-with-figma.png",
      name: "UI Design with Figma",
      description: "ระยะเวลา (วัน): 3",
      price: "ราคา 5,000 บาท",
    },
    {
      image: "cross-platform-with-flutter.png",
      name: "Cross Platfrom with Flutter",
      description: "ระยะเวลา (วัน): 5",
      price: "ราคา 6,500 บาท",
    },
  ];

  return (
    <>
      <Layout>
        <div className="p-4 text-center text-2xl">หลักสูตรที่เปิดสอน</div>
        <hr />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 py-5">
          {p.map((b) => (
            <CourseCard key={b.name} {...b} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Course;
