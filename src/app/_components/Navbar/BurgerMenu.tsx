'use client'

import React, { useState } from 'react'
import Link from 'next/link';

import {Drawer} from '@mui/material';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { links } from '@/data/Links';
import { useTranslations } from 'next-intl';

export const BurgerMenu = () => {
    const [IsOpen, setIsOpen] = useState(false)
    const t = useTranslations('navbar');
    return (
        <div className='md:hidden'>
        <CiMenuBurger size={40} onClick={() => setIsOpen(true)} color='black' className='cursor-pointer m-3' />
        <Drawer open={IsOpen} onClose={() => setIsOpen(false)}>
            <div className="flex justify-between items-center font-arial text-center">
                <h1 className='text-3xl font-bold p-4'>ODALHO</h1>
                <IoMdCloseCircleOutline size={36} onClick={() => setIsOpen(false)} color='black' className='cursor-pointer m-3' />
            </div>
            <ul className='flex flex-col gap-3 p-4 font-arial'>
                {
                    links.map((link, i) => {
                        const text = t(`nav${i + 1}`)
                        const urlNormalized = link.normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
                        .toLowerCase()
                        .split(" ")
                        .join("-");
                        return (
                        <li key={link}>
                            <Link href={link === 'ODALHO' ? '/' : urlNormalized} onClick={() => setIsOpen(false)}>{text}</Link>
                        </li>
                    )})
                }
            </ul>
        </Drawer>
    </div>
  )
}
