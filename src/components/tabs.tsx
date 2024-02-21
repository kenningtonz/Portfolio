"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			"inline-flex h-10 items-stretch justify-stretch  text-brown w-full ",
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
			"inline-flex items-center grow justify-center whitespace-nowrap rounded-t px-3 py-1.5 text-lg font-medium  transition-all focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  data-[state=active]:text-black data-[state=inactive]:bg-white",
			className,
			`ring-offset-${color}-200 focus-visible:ring-${color}-300 data-[state=active]:bg-${color}-200 `
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
			"h-full p-2 focus-visible:outline-none focus-visible:ring-2  focus-visible:ring-offset-2 rounded-b",
			className,
			`bg-${color}-200 ring-offset-${color}-300 focus-visible:ring-${color}-300 shadow-drop-${color}-soft`
		)}
		{...props}
	/>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
