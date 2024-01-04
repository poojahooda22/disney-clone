import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        term: string;
    }
}


function SearchPage({params: {term}} : Props) {
    // for not found page
    if(!term) notFound();
    
  return (
    <div>
      Welecome to the search page { term }
    </div>
  )
}

export default SearchPage
