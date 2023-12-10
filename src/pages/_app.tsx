import "@fontsource/roboto"
import "nprogress/nprogress.css"
import "react-multi-carousel/lib/styles.css"
import "../styles/globals.css"
import "react-multi-carousel/lib/styles.css"
import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { theme } from "src/config/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
