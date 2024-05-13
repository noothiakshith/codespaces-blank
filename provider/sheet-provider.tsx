"use client";
import { useMountedState } from "react-use";
import { NewAccountSheet } from "@/features/accounts/components/new-account-sheet";
import { useEffect, useState } from "react";

export const SheetProvider = ()=>{
    const [isMounted,setIsMounted] = useState(false);
    useEffect(()=>{
        setIsMounted(true);
        return ()=>{
            setIsMounted(false);
        }
    },[])
  if(!isMounted) return null;
    return(
        <>
        <NewAccountSheet/>
        </>
    )
}