import React from 'react'
import { DescriptionText } from '../_components/description/DescriptionText'
import { propouse } from '@/data/Desctiptions'

export default function Propouse() {
  return <DescriptionText ask='' text={propouse.text} className='bg-prop' />
}
