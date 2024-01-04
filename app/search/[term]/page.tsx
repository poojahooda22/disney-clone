import React from 'react'

type Props = {
    params: {
        term: string;
    }
}


function SearchPage({params: {term}} : Props) {
    
  return (
    <div>
      Welecome to the search page { term }
    </div>
  )
}

export default SearchPage
