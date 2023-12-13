'use server'

import { db } from '@/lib/db'
import { formSchema, formSchemaType } from '@/schemas/toDo'

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
