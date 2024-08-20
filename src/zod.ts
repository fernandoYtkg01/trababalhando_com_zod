import z from 'zod'

const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
})

// inferencia de tipos usando zod
type User = z.infer<typeof schema>

const data: User = {
    name: 'fernando',
    email: 'fernando68ribeirosilva@gmail.com',
    age: 27,
}
// parse explode um erro no terminal 
// const result = schema.parse(data)
//já o safeParse não explode um erro mas ele criar um campo de success
const result = schema.safeParse(data)
console.log(result)
