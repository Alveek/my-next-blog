import React from "react";
import NextLink from "next/link";
import { Box, Container, Text, Flex } from "@chakra-ui/react";

export default function Nav() {
	return (
		<Box as="nav" boxShadow="md" zIndex="4">
			<Container maxW="960px" py={0}>
				<Flex py={2} justifyContent="space-between">
					<NextLink href="/">
						<Text
							as="a"
							color="green.400"
							fontSize="2xl"
							margin={0}
							cursor="pointer"
							className="site-title-font"
							textTransform="uppercase"
						>
							Kudryavtsev
						</Text>
					</NextLink>
				</Flex>
			</Container>
		</Box>
	);
}
