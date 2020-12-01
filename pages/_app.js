import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../theme";
import Menu from "../components/Menu";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Nav />
			<Box mt={{ base: "10px", md: "70px" }}>
				<Component {...pageProps} />
			</Box>
			<Menu />
		</ChakraProvider>
	);
}

export default MyApp;
