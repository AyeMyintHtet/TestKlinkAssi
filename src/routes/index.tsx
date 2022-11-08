import { HeaderCom } from 'components'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRoute from './router'

type AppLayoutProps = {}
const AppLayout: React.FC<AppLayoutProps> = props => {
  return (
    <BrowserRouter>
    <HeaderCom/>
    <AppRoute />
    </BrowserRouter>
  )
}

export default AppLayout
