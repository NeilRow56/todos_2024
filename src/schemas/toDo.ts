import * as z from 'zod'

export const formSchema = z.object({
  task: z.string().min(2, {
    message: 'Task must be at least 2 characters.',
  }),
})

export type formSchemaType = z.infer<typeof formSchema>
