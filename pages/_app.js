import "../styles/globals.css";
import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import theme from "../theme";
import Menu from "../components/Menu";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Nav />
			<Container
				as="main"
				maxW="960px"
				minH={{ base: "calc(100vh - 118px)", md: "calc(100vh - 130px)" }}
			>
				<Head>
					<meta name="yandex-verification" content="" />
					<script
						dangerouslySetInnerHTML={{
							__html: `
				<!-- Yandex.Metrika counter -->
					 
					 <!-- /Yandex.Metrika counter -->
				`,
						}}
					/>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `
						<div>
						
						</div>`,
						}}
					/>
				</Head>
				<Box mt={{ base: "20px", md: "30px" }} pb={8}>
					<Component {...pageProps} />
				</Box>
			</Container>
			{/* <Menu /> */}
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
