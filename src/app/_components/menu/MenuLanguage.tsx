"use client";
import React, { useState, type MouseEvent } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useParams, useSearchParams } from 'next/navigation';
import { usePathname, useRouter } from '../../../navigation';
import { languages, Locales, locales } from '../../../utils/locales';


export const MenuLanguage = () => {
    const router = useRouter()
    const params= useParams()
    const qParams= useSearchParams()
    const pathname= usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const openMenu= () => setIsOpen(true)
    const handleClose = () => setIsOpen(false)
    
    
    const changeLanguage = (lng: Locales) =>{
        /*@ts-ignore*/
        router.replace(`${pathname}?${qParams.toString()}`, {locale: lng })
    }
    return (
      <div>
        <Button
          id="basic-button"
          color='inherit'
          aria-controls={isOpen ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen? 'true' : undefined}
          onClick={openMenu}
        >
          Change Language
        </Button>
        <Menu
          id="basic-menu"
          
          open={isOpen}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {
            languages.map(l => <MenuItem key={l.name} onClick={() => changeLanguage(l.path as Locales)}>{l.name}</MenuItem>)
          }
        </Menu>
      </div>
    );
}
