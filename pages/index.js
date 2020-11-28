import Head from "next/head";
import NextLink from "next/link";
import { Button, Box, Heading, Link } from "@chakra-ui/react";

export default function Home() {
	return (
		<Box maxW="1080px" px="8" mx="auto" pb="16">
			<Heading as="h1">Home Page</Heading>
			<NextLink href="/posts/codewars-intro">
				<Link>Codewars</Link>
			</NextLink>
		</Box>
	);
}
