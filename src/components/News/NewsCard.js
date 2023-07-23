import React,{useState} from 'react'

const BlogsCard = ({data}) => {
  const [imageSrc, setImageSrc] = useState(data.urlToImage);
  const defaultImage = 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/202302230723-main-sixteen_nine.jpg';

  const handleError= () => {
    setImageSrc(defaultImage);
  }
  return (
    <li>
      <div className="blog-card">
        <figure className="card-banner">
          <a href={data.url}>
            <img src={imageSrc} onError={handleError} loading="lazy" class="w-100" />
          </a>
          <a href={data.url} className="btn card-badge">{data.name}</a>
        </figure>

        <div className="card-content">
          <h3 className="h3 card-title">
            <a href={data.url}>{data.title}</a>
          </h3>
          <div className="card-meta">
            <div className="publish-date">
              <ion-icon name="time-outline"></ion-icon>
              <time datetime={data.date}>{data.publishedAt}</time>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default BlogsCard