"use Client";

import React from 'react';
import * as z from 'zod';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  input: z.string().min(2).max(50)
})

function SearchInput() {
  const router = useRouter();
  return (
    <div>
      Search 
    </div>
  )
}

export default SearchInput
