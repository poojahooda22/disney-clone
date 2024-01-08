"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input"

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

   // 2. Define a submit handler.
   function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    router.push(`/search/${values.input}`);
  }
  
  return (
    <Form {...form}
    >
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name="input"
          render={({field}) => (
            <FormItem>
              <FormControl>
                <Input placeholder="search" {...field} />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
      </form>
    </Form>
  )
}

export default SearchInput
