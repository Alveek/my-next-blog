import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Menu from "../components/Menu";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
			<Menu />
		</ChakraProvider>
	);
}

export default MyApp;
