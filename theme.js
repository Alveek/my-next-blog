import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	components: {
		Link: {
			baseStyle: {
				color: "blue.500",
				fontWeight: "bold",
				// fontSize: "35px",
			},
		},
		Text: {
			baseStyle: {
				marginBottom: "20px",
				fontSize: "16px",
			},
		},
		Heading: {
			baseStyle: {
				marginBottom: "20px",
			},
		},
	},
});

export default theme;
