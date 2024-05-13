import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  export const NewAccountSheet = ()=>{
    return(
        <Sheet open>
            <SheetContent className="space-y-4">
                <SheetHeader>
                    <SheetTitle>
                        New Account
                        <SheetDescription>
                            Create a new account to track your trnasactions
                        </SheetDescription>
                    </SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
  }