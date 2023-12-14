import * as z from 'zod'

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  amount: z.string().min(1, {
    message: 'Amount must be at least 1 character.',
  }),
})

export type formSchemaType = z.infer<typeof formSchema>
