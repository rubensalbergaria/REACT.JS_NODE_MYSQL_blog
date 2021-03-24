import React from 'react'

export default function Post() {
  return (    
      <div className="Post" key={key}>
          <h1>{val.title}</h1>
            <p>{val.post_text.lenght > 500 ? 
              val.post_text.substring(0, 500) + '...': 
              val.post_text}
            </p>
            <h4>{val.user_name}</h4>
      </div>
    
  )
}
