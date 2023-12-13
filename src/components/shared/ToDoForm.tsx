'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { formSchema } from '@/schemas/toDo'
import FormWrapper from './FormWrapper'

export function ToDoForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: '',
    },
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <FormWrapper>
      <h2 className="text-3xl font-bold text-yellow-600">To Do</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="task"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-yellow-600">Task</FormLabel>
                <FormControl>
                  <Input placeholder="to do" {...field} />
                </FormControl>
                <FormDescription>
                  These are your tasks for today.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="w-full bg-slate-800 text-yellow-400 hover:bg-slate-500"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Form>
    </FormWrapper>
  )
}

export default ToDoForm
