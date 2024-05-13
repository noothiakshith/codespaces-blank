import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { useNewAccount } from "../hooks/use-new-account"
import { AccountForm } from "./account-form"

  export const NewAccountSheet = ()=>{
    const {isOpen,onClose } = useNewAccount();
    return(
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                        <SheetDescription>
                            Create a new account to track your trnasactions
                        </SheetDescription>
                    </SheetTitle>
                </SheetHeader>
                <AccountForm onSubmit ={()=>{}} disabled = {false} />
            </SheetContent>
        </Sheet>
    )
  }