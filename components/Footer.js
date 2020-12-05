import { Container, Text, Icon } from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
	return (
		<Container
			as="footer"
			maxW="100wh"
			bg="blue.700"
			color="white"
			centerContent
			py={2}
			height="50px"
			justifyContent="center"
		>
			<Text mb={0}>
				Made with <Icon as={FaHeart} color="red.600" fontSize="22px" mx={1} />{" "}
				in Kazan
			</Text>
		</Container>
	);
}
