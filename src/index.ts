import { text_components } from "./components/texts"

// import { text_components } from "./components/texts"

// export * from "./components/texts"
// export * from text_components
{/* <TextAnimationTemplate /> */}

// export const {TextAnimationTemplate} = text_components
// module.exports = {TextAnimationTemplate}

// export function justSayHello(){
export function justSayHello({name}: {name: string}){
    console.log("Hey!!! Hello ", name)
}

// export default TextAnimationTemplate
// module.exports = {
//     justSayHello,
//     TextAnimationTemplate
// }

export const {TextAnimationTemplate} = text_components
