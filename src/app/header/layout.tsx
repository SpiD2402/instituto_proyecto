import Header from '@/components/header/Header';
import React from 'react'


export default function  headerLayout({
    children
   }: {
    children: React.ReactNode;
   }) {
     return (
        <>
        <Header/>
           <div>
            {children}
            </div>
        </>
    

       );
   }
   
