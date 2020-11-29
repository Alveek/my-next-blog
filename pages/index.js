import Head from "next/head";
import NextLink from "next/link";
import { Button, Box, Heading, Link, Code } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box as="main" bg="#F7FAFC">
			<Head>
				<title>Главная страница</title>
				<meta name="description" content="Крутой сайт о том о сем"></meta>
				<meta property="og:title" content=""></meta>
				<meta property="og:description" content=""></meta>
				<meta property="og:type" content="article"></meta>
			</Head>
			<Box
				maxW="1080px"
				minH="100vh"
				px={{ base: 5, md: 8 }}
				mx="auto"
				py="10"
				boxShadow="lg"
				bg="white"
			>
				<Heading as="h1" size="2xl" textAlign="center">
					Home Page
				</Heading>

				<Heading as="h2" size="lg">
					Статьи
				</Heading>
				<NextLink href="/posts/codewars-intro">
					<Link fontSize={{ base: "16px", md: "18px" }}>
						Codewars: обзор и рекомендации
					</Link>
				</NextLink>
			</Box>
		</Box>
	);
}
