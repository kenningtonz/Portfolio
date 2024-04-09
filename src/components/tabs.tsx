"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { colors } from "@/lib/data/colorsDynamic";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			"inline-flex px-2 sm:h-10 3xl:h-12  items-stretch justify-stretch gap-2 text-brown w-full flex-wrap sm:flex-nowrap",
			className
		)}
		{...props}
	/>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, color, ...props }, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			"flex-1 inline-flex items-center grow justify-center whitespace-nowrap rounded px-3 py-1.5 res-text-lg font-medium  transition-all focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-brown-dark ",
			className,
			`${
				color == "white"
					? "data-[state=active]:bg-brown-midLight  data-[state=inactive]:bg-brown-light"
					: `data-[state=active]:bg-${color}-600  data-[state=inactive]:bg-${color} `
			}  `,

			` ring-offset-${color} focus-visible:ring-${color}-400  data-[state=active]:text-white  `
		)}
		{...props}
	/>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, color, ...props }, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn(
			"h-full p-2 focus-visible:outline-none focus-visible:ring-2 mt-4 focus-visible:ring-offset-2 min-h-dvh rounded-t",
			className,
			` ring-offset-${color} focus-visible:ring-${color}-300 `
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
