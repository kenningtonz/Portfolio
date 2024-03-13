import type { Config } from "tailwindcss";

const config = {
	darkMode: ["class"],
	safelist: [
		"shadow-drop-green",
		"shadow-drop-blue",
		"shadow-drop-purple",
		"shadow-drop-red",
		"shadow-drop-orange",
		"shadow-drop-yellow",
		"shadow-drop-green-sm",
		"shadow-drop-blue-sm",
		"shadow-drop-purple-sm",
		"shadow-drop-red-sm",
		"shadow-drop-orange-sm",
		"shadow-drop-yellow-sm",
		"shadow-drop-green-soft",
		"shadow-drop-blue-soft",
		"shadow-drop-purple-soft",
		"shadow-drop-red-soft",
		"shadow-drop-orange-soft",
		"shadow-drop-yellow-soft",
		"border-green-300",
		"border-green-400",
		"border-green-500",
		"border-green-600",
		"border-blue-300",
		"border-blue-400",
		"border-blue-500",
		"border-blue-600",
		"border-purple-300",
		"border-purple-400",
		"border-purple-500",
		"border-purple-600",
		"border-red-300",
		"border-red-400",
		"border-red-500",
		"border-red-600",
		"border-orange-300",
		"border-orange-400",
		"border-orange-500",
		"border-orange-600",
		"border-yellow-300",
		"border-yellow-400",
		"border-yellow-500",
		"border-yellow-600",
		"border-brown",
		"focus:outline-green-400",
		"focus:outline-red-400",
		"focus:outline-orange-400",
		"focus:outline-yellow-400",
		"focus:outline-purple-400",
		"focus:outline-blue-400",

		"text-brown-dark",
		"dark:text-brown-dark",

		"bg-red-100",
		"bg-red-200",
		"bg-red",
		"bg-red-400",
		"bg-red-500",
		"bg-red-600",
		"bg-red-700",
		"bg-red-800",
		"bg-red-dark",

		"bg-blue-100",
		"bg-blue-200",
		"bg-blue",
		"bg-blue-400",
		"bg-blue-500",
		"bg-blue-600",
		"bg-blue-700",
		"bg-blue-800",
		"bg-blue-dark",

		"bg-orange-100",
		"bg-orange-200",
		"bg-orange",
		"bg-orange-400",
		"bg-orange-500",
		"bg-orange-600",
		"bg-orange-700",
		"bg-orange-800",
		"bg-orange-dark",

		"bg-yellow-100",
		"bg-yellow-200",
		"bg-yellow",
		"bg-yellow-400",
		"bg-yellow-500",
		"bg-yellow-600",
		"bg-yellow-700",
		"bg-yellow-800",
		"bg-yellow-dark",

		"bg-green-100",
		"bg-green-200",
		"bg-green",
		"bg-green-400",
		"bg-green-500",
		"bg-green-600",
		"bg-green-700",
		"bg-green-800",
		"bg-green-dark",

		"bg-purple-100",
		"bg-purple-200",
		"bg-purple",
		"bg-purple-400",
		"bg-purple-500",
		"bg-purple-600",
		"bg-purple-700",
		"bg-purple-800",
		"bg-purple-dark",
		"bg-brown",
		"bg-white",
		"bg-brown-light",
		"data-[state=active]:bg-blue-600",
		"data-[state=active]:bg-green-600",
		"data-[state=active]:bg-purple-600",
		"data-[state=active]:bg-red-600",
		"data-[state=active]:bg-orange-600",
		"data-[state=active]:bg-yellow-600",
		"data-[state=inactive]:bg-blue",
		"data-[state=inactive]:bg-green",
		"data-[state=inactive]:bg-purple",
		"data-[state=inactive]:bg-red",
		"data-[state=inactive]:bg-orange",
		"data-[state=inactive]:bg-yellow",
	],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		colors: {
			purple: {
				100: "#f4f0f7",
				200: "#E6DBED",
				DEFAULT: "#CDBADB",
				400: "#ab8bc1",
				500: "#9570ad",
				600: "#6a4e7b",
				700: "#574063",
				800: "#392645",
				dark: "#26093B",
			},
			red: {
				100: "#fde8e3",
				200: "#fcd5cc",
				DEFAULT: "#F8AB99",
				400: "#f38e76",
				500: "#e9684a",
				600: "#d64c2c",
				700: "#b43d21",
				800: "#7c3120",
				dark: "#40140A",
			},

			orange: {
				100: "#ffefd6",
				200: "#fddbaa",
				DEFAULT: "#FCCA7E",
				400: "#FAA726",
				500: "#f79618",
				600: "#e7820d",
				700: "#be690e",
				800: "#7c4b13",
				dark: "#492F09",
			},

			yellow: {
				100: "#fff0c7",
				200: "#FFE99B",
				DEFAULT: "#FFE070",
				400: "#FFD334",
				500: "#f9c006",
				600: "#dea002",
				700: "#b77c06",
				800: "#78560d",
				dark: "#3A2F0A",
			},

			green: {
				100: "#f3f9ec",
				200: "#e4f1d6",
				DEFAULT: "#C6E1AB",
				400: "#B1D67C",
				500: "#8bbd5e",
				600: "#6ca240",
				700: "#416328",
				800: "#374f25",
				dark: "#243D09",
			},
			blue: {
				100: "#f2fafd",
				200: "#E9F7FA",
				DEFAULT: "#B8E4F0",
				400: "#86D4EB",
				500: "#56c3da",
				600: "#30abc7",
				700: "#1b7089",
				800: "#1b5e71",
				dark: "#08303C",
			},
			// brown: ##362316
			// light: "#4A311F",
			brown: {
				DEFAULT: "#2B1C12",
				light: "#C4A484",
				midLight: "#6b4728",
				mid: "#4A311F",
				dark: "#221603",
			},

			white: "#FFFFFF",
		},
		fontFamily: {
			display: ["Fredoka", "sans-serif"],
			body: ["Fredoka", "sans-serif"],
		},
		borderRadius: {
			DEFAULT: "10px",
			inner: "7px",
			round: "50%",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},

		extend: {
			boxShadow: {
				"drop-green": "5px 5px 0 0 #5C7F39",
				"drop-blue": "5px 5px 0 0 #3B7E91",
				"drop-purple": "5px 5px 0 0 #65477A",
				"drop-red": "5px 5px 0 0 #8B3A28",
				"drop-orange": "5px 5px 0 0 #91621D",
				"drop-yellow": "5px 5px 0 0 #92781B",
				"drop-green-sm": "2px 2px  0 0 #5C7F39",
				"drop-blue-sm": "2px 2px  0 0 #3B7E91",
				"drop-purple-sm": "2px 2px  0 0 #65477A",
				"drop-red-sm": "2px 2px  0 0 #8B3A28",
				"drop-orange-sm": "2px 2px 0 0 #91621D",
				"drop-yellow-sm": "2px 2px 0 0 #92781B",
				"drop-green-soft": "5px 5px 5px 0 #5C7F39",
				"drop-blue-soft": "5px 5px 5px 0 #3B7E91",
				"drop-purple-soft": "5px 5px 5px 0 #65477A",
				"drop-red-soft": "5px 5px 5px 0 #8B3A28",
				"drop-orange-soft": "5px 5px 5px 0 #91621D",
				"drop-yellow-soft": "5px 5px 5px 0 #92781B",
			},

			// colors: {
			// 	border: "hsl(var(--border))",
			// 	input: "hsl(var(--input))",
			// 	ring: "hsl(var(--ring))",
			// 	background: "hsl(var(--background))",
			// 	foreground: "hsl(var(--foreground))",
			// 	primary: {
			// 		DEFAULT: "hsl(var(--primary))",
			// 		foreground: "hsl(var(--primary-foreground))",
			// 	},
			// 	secondary: {
			// 		DEFAULT: "hsl(var(--secondary))",
			// 		foreground: "hsl(var(--secondary-foreground))",
			// 	},
			// 	destructive: {
			// 		DEFAULT: "hsl(var(--destructive))",
			// 		foreground: "hsl(var(--destructive-foreground))",
			// 	},
			// 	muted: {
			// 		DEFAULT: "hsl(var(--muted))",
			// 		foreground: "hsl(var(--muted-foreground))",
			// 	},
			// 	accent: {
			// 		DEFAULT: "hsl(var(--accent))",
			// 		foreground: "hsl(var(--accent-foreground))",
			// 	},
			// 	popover: {
			// 		DEFAULT: "hsl(var(--popover))",
			// 		foreground: "hsl(var(--popover-foreground))",
			// 	},
			// 	card: {
			// 		DEFAULT: "hsl(var(--card))",
			// 		foreground: "hsl(var(--card-foreground))",
			// 	},
			// },
			// borderRadius: {
			// 	lg: "var(--radius)",
			// 	md: "calc(var(--radius) - 2px)",
			// 	sm: "calc(var(--radius) - 4px)",
			// },
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
