import { text_components } from "./components/texts"

export function justSayHello({name}: {name: string}){
    console.log("Hey!!! Hello ", name)
} 

export const {
    TextAnimationTemplate, 
    TextColorFade,
    TextRevealByHeight
} = text_components

// export * from "./components/texts"