'use server'

import { z } from 'zod'
import { formSchema, formSchemaType } from '@/schemas/toDo'
import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function CreateToDo(data: formSchemaType) {
  const validation = formSchema.safeParse(data)
  if (!validation.success) {
    throw new Error('form not valid')
  }

  const {} = data

  const form = await db.todo.create({
    data: {},
  })

  if (!form) {
    throw new Error('something went wrong')
  }

  return form.id
}

// interface ExpenseParams {
//     name: string
//     amount: string

//   }

const AddExpense = z.object({
  name: z.string(),
  amount: z.string(),
})

export async function createExpense(formData: FormData) {
  const { name, amount } = AddExpense.parse({
    name: formData.get('name'),
    amount: formData.get('amount'),
  })

  await db.expense.create({
    data: {
      name,
      amount,
    },
  })

  revalidatePath('/expense-tracker')
}
