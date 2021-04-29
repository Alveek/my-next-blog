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
		>
			<Container maxW="960px" py={0}>
				<Flex py={2} justifyContent="space-between">
					<NextLink href="/">
						<Text
							as="a"
							color="green.600"
							fontSize="2xl"
							margin={0}
							cursor="pointer"
							className="site-title-font"
							textTransform="uppercase"
							// display={{ base: "none", md: "block" }}
						>
							Kudryavtsev
						</Text>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
}
