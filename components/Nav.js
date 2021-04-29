import React from "react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	Container,
	Text,
	Button,
	IconButton,
	Stack,
	useColorMode,
	Flex,
} from "@chakra-ui/react";

export default function Nav() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			as="nav"
			className={colorMode === "light" ? "frosty-light" : "frosty-dark"}
			boxShadow="md"
			zIndex="4"
			// display={{ base: "none", md: "block" }}
		>
			<Container maxW="960px" py={0}>
				<Flex justifyContent="space-between">
					<NextLink href="/">
						<Text
							as="a"
							color="blue.900"
							fontSize="4xl"
							margin={0}
							cursor="pointer"
							className="site-title-font"
							display={{ base: "none", md: "block" }}
						>
							Блог А. Кудрявцева
						</Text>
					</NextLink>
					<NextLink href="/">
						<Text
							as="a"
							color="blue.900"
							fontSize="4xl"
							margin={0}
							cursor="pointer"
							className="site-title-font"
							display={{ base: "block", md: "none" }}
						>
							A. К.
						</Text>
					</NextLink>
				</Flex>
			</Container>
			{/* <IconButton
				onClick={toggleColorMode}
				aria-label="Dark mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				position="fixed"
				top="10px"
				right="20px"
			/> */}
		</Box>
	);
}
