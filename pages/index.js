import Head from "next/head";
import NextLink from "next/link";
import { Button, Box, Heading, Link, Code, Icon } from "@chakra-ui/react";
import Menu from "../components/Menu";
import { FaPencilAlt } from "react-icons/fa";

export default function Home() {
	return (
		<Box as="main">
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
			>
				<Heading
					fontFamily="Nerko One"
					fontWeight="400"
					as="h1"
					size="3xl"
					textAlign="center"
				>
					A. K. Notes <Icon as={FaPencilAlt} />
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
