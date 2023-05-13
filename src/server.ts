import { object, z } from "zod";

const userSchema = z.object({
    country: z.string()
        .min(2, {message: 'Name needs have min 2 caracters'})
        .transform(country => country.toLocaleUpperCase()),
    email: z.string().min(2, {message: 'Name needs have min 2 caracters'}),
    firstName: z.string().min(2, {message: 'Name needs have min 2 caracters'}),
    lastName: z.string().min(2, {message: 'Name needs have min 2 caracters'}),
    number: z.number().min(9, {message: 'Number is invalid'}),
    username: z.string().min(6, {message: 'Username needs have min 6 caracters'})
})

type User = z.infer<typeof userSchema>

const SaveUserInDatabase = (user: User) => {
    const  { country, 
             email, 
             firstName, 
             lastName,
             number,
             username  
    } = userSchema.parse(user)
    
    console.log(`Welcome, ${firstName} ${lastName} from ${country}!!`);

    console.log(`Your Data: ${email}, ${number} and ${username}, is ready to be saved?`)

    // GET API
    const api = async (user:User) => {
        // TO DO
    }
}

SaveUserInDatabase({
    country: "Brazil",
    email: "alberttgomes@email.com",
    firstName: "Albert",
    lastName: "Gomes",
    number: 988888989,
    username: "alberttgomes"
})