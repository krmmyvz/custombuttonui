import React from 'react'

import { CustomButton } from 'custombuttonui'
import 'custombuttonui/dist/index.css'

const App = () => {
  return (
    <div className='container'>
      <CustomButton text={'Primary'} type={'primary'} />
      <CustomButton text={'Default'} type={'default'} />
      <CustomButton text={'Dashed'} type={'dashed'} />
      <CustomButton text={'Text'} type={'text'} />
      <CustomButton text={'Link'} type={'link'} />
    </div>
  )
}

export default App
