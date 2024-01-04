import React from 'react'

type Props = {
    params: {
        term: string;
    }
}


function SearchPage({params: {term}} : Props) {
    
  return (
    <div>
      Search Page
    </div>
  )
}

export default SearchPage
