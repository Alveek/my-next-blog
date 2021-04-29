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
				(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(77001877, "init", {
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
							<div><img src="https://mc.yandex.ru/watch/77001877" style="position:absolute; left:-9999px;" alt="" /></div>`,
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
