'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { createExpense } from '@/actions/toDoActions'

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
import { formSchema } from '@/schemas/expenses'
import FormWrapper from './FormWrapper'

export function ExpenseInputForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      amount: '',
    },
  })

  // 2. Define a submit handler.
  // const addExpense = async (formData: FormData) => {
  //   'use server'
  // }

  return (
    <FormWrapper>
      <h2 className="text-3xl font-bold text-yellow-600">Expenses</h2>
      <Form {...form}>
        <form action={createExpense} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-yellow-600">Expense</FormLabel>
                <FormControl>
                  <Input placeholder="expense" {...field} />
                </FormControl>
                <FormDescription>Input expense</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-yellow-600">Amount</FormLabel>
                <FormControl>
                  <Input placeholder="amount" {...field} />
                </FormControl>
                <FormDescription>Input amount</FormDescription>
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

export default ExpenseInputForm
