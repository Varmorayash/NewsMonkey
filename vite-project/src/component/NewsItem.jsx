import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
   let {title,description,imgeUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card">
        <img src={!imgeUrl?"https://nypost.com/wp-content/uploads/sites/2/2025/01/celebrates-touchdown-kansas-city-chiefs-97416702.jpg?quality=75&strip=all&w=1024":imgeUrl} className="card-img-top" alt=".."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">read more</a>
          </div>
      </div>        
    </div>

)
  }
}

export default NewsItem