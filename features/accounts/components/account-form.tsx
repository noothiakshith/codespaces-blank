import {z} from 'zod'
import { Trash } from 'lucide-react'
import { useForm } from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { insertAcountSchema } from '@/db/schema'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  


const formSchema = insertAcountSchema.pick({
    name: true,
})

type Formvalues = z.input<typeof formSchema>;

type Props = {
    id?:string,
    defaultValues?:Formvalues,
    onSubmit:(values:Formvalues)=>void,
    onDelete?:()=>void
    disabled?:boolean
}
export const AccountForm = ({id,defaultValues,onSubmit,onDelete,disabled}:Props)=>{
    const form= useForm<Formvalues>({
        resolver:zodResolver(formSchema),
        defaultValues:defaultValues
    });

    const handleSubmit = (Values:Formvalues)=>{
        onSubmit(Values);
    }
    const hadleDelete = ()=>{
        onDelete?.();
    }
    return(
       <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 pt-4">
        <FormField
        name="name"
        control={form.control}
        render={({field})=>(
            <FormItem>
                <FormLabel>
                    Name
                </FormLabel>
                <FormControl>
                    <Input disabled={disabled} placeholder="eg..cash, Bank" {...field}/>
                </FormControl>
            </FormItem>
        )}
        />
        <Button className='w-full' disabled={disabled}>
            {id?"save changes":"Create Account"}
        </Button>
        {!!id && <Button type='button'onClick={hadleDelete} variant ="outline" className='w-full' disabled={disabled}>
            <Trash size={24}  className='size-4 mr-2' />
            Delete Account
        </Button>}
        </form>
       </Form>
    )
}
export default AccountForm;