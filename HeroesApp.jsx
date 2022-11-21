import React from 'react'
import { AuthProvider } from './src/auth/context'
import { AppRouter } from './src/router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
