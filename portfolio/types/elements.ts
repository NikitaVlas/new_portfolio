import {Path} from "@remix-run/router/history.ts";

export interface  ButtonProps{
    title: string
    to?: string|Partial<Path>|undefined
    onClick?: () => void
}