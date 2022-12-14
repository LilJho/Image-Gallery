import React from 'react'

function ImageCard({ image }) {
    const tags = image.tags.split(',');

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full"/>
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-purple-500">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag, index) => (
            <span key={index} className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
            #{tag}
          </span>
          ))}
        </div>
      </div>
  )
}

export default ImageCard