import Head from "next/head";
import NextLink from "next/link";
import {
	Button,
	Box,
	Heading,
	Link,
	Code,
	Icon,
	Container,
	useToast,
} from "@chakra-ui/react";
import Menu from "../components/Menu";
import { FaPencilAlt } from "react-icons/fa";

export default function Home() {
	let toast = useToast();

	if (typeof window !== "undefined") {
		if (localStorage.getItem("cookiesAccepted") != "true") {
			toast({
				title: "Cookies и всё такое...",
				description:
					"На этом сайте нет cookies, я даже не знаю как ими пользоваться",
				status: "success",
				duration: 9000,
				isClosable: true,
				position: "bottom-left",
			});
			localStorage.setItem("cookiesAccepted", "true");
		}
	}

	return (
		<Box>
			<Head>
				<title>Хоум пэйдж</title>
				<meta name="description" content="Блог Алексея Кудрявцева"></meta>
				<meta property="og:title" content=""></meta>
				<meta property="og:description" content=""></meta>
				<meta property="og:type" content="article"></meta>
			</Head>

			<Heading as="h2" size="lg">
				Статьи
			</Heading>
			<NextLink href="/posts/codewars-intro">
				<Link fontSize={{ base: "16px", md: "18px" }}>
					Codewars: обзор и рекомендации
				</Link>
			</NextLink>
		</Box>
	);
}
