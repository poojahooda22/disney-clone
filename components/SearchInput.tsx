"use Client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  input: z.string().min(2).max(50)
})

function SearchInput() {
  const router = useRouter();
  
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  
  
  return (
    <div>
      Search 
    </div>
  )
}

export default SearchInput
