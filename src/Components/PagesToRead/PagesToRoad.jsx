import React, { useEffect, useState } from 'react'
import { BiPointer } from 'react-icons/bi'
import { useLoaderData } from 'react-router'
import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { getToLocalStorage } from '../../utilities/localStorage'

function PagesToRoad() {
  const books = useLoaderData()
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const storedReadBooks = getToLocalStorage('read');
    const book = books.filter(book => storedReadBooks.includes(book.bookId))
    const setData = book.map(setBook => (
      {
      name: setBook.bookName,
      value: setBook.totalPages
      }
    ))    
    console.log(setData)
    setChartData(setData);
  },[])
  console.log(chartData)
  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  // Custom SVG path to draw a triangle bar
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
      y + height / 3
    }
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    },${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <ResponsiveContainer width='100%' height={500} className='container mx-auto px-2'>
      <BarChart data={chartData}>
        <XAxis 
        dataKey='name' 
        tick={{fontSize:14}}
        textAnchor="end"
        interval={0}
        angle={-20}
        height={100}
        /> 
        <YAxis dataKey='value'/>
        <Tooltip
            formatter={(value) => [`${value} pages`, 'Total Pages']}
            cursor={{
              fill: 'rgba(34, 197, 94, 0.15)',
              stroke: '#22c55e',            
              strokeWidth: 1,     
              strokeDasharray: '2 2', 
            }}
            contentStyle={{
              backgroundColor: '#1f2937', // Dark gray background
              borderColor: '#374151',     // Optional border color
              borderRadius: '8px',       // Rounded corners
              color: '#ffffff',          // Text color inside tooltip
            }}
            itemStyle={{ color: '#ffffff' }} // Text color for values (pages/ratings)
            labelStyle={{ color: '#9ca3af' }}
        />
        <Bar dataKey='value' fill="#22c55e" shape={TriangleBar}>
          {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default PagesToRoad