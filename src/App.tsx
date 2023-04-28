import { ThemeProvider } from 'styled-components'

import { Button } from "./components/Button"
import { defaltTheme } from './components/styles/themes/default'
export function App() {

  return (
   <ThemeProvider theme={defaltTheme}>
    <Button variant="primary"/>
    <Button variant="secondary"/>
    <Button variant="success"/>
    <Button variant="danger"/>
    <Button />
   </ThemeProvider>
  )
}

