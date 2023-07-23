import React, { useState, useEffect } from 'react'
import axios from 'axios';
import NewsCard from './NewsCard'

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://automobile-backend.onrender.com/news');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <section className="section blog" id="blog">
      <div className="container">
        <h2 className="h2 section-title">News</h2>
        <ul className="blog-list has-scrollbar">
          {data ? ( data.map((user) => (
            <NewsCard data={user} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </section>
  )
}

export default News
