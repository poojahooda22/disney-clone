"use Client";

import React from 'react';
import * as z from 'zod';

const formSchema = z.object({
  input: z.string().min(2).max(50)
})

function SearchInput() {
  return (
    <div>
      Search 
    </div>
  )
}

export default SearchInput
