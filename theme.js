import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	components: {
		Link: {
			baseStyle: {
				color: "pink.400",
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
