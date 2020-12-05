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
				px={{ base: 5, md: 8 }}
				minH={{ base: "calc(100vh - 60px)", md: "calc(100vh - 166px)" }}
			>
				<Head>
					<meta name="yandex-verification" content="0499116b97024f38" />
					<script
						dangerouslySetInnerHTML={{
							__html: `
				<!-- Yandex.Metrika counter -->
					 (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
				
					 ym(70137757, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
					 });
					 <!-- /Yandex.Metrika counter -->
				`,
						}}
					/>
					<noscript
						dangerouslySetInnerHTML={{
							__html: `
						<div>
							<img
								src="https://mc.yandex.ru/watch/70137757"
								style="position:absolute; left:-9999px;"
								alt=""
							/>
						</div>`,
						}}
					/>
				</Head>
				<Box mt={{ base: "10px", md: "116px" }} pb={8}>
					<Component {...pageProps} />
				</Box>
			</Container>
			<Menu />
			<Footer />
		</ChakraProvider>
	);
}

export default MyApp;
