import { FormEvent } from "react";

export type InputChange = (
	e: FormEvent<HTMLDivElement>,
	section: "personalDetails" | "education" | "experience",
	index?: number
) => void;

export type AddItem = (section: "education" | "experience") => void;

export type RemoveItem = (id: string, section: "education" | "experience") => void;
