import TextAnimationTemplate from "./components/texts"
// npm i --save-dev react react-dom
// npm install rollup rollup-plugin-babel @rollup/plug-node-resolve rollup-plugin-peer-deps-external --save-dev
// npm i react react-dom rollup rollup-plugin-babel @rollup/plugin-node-resolve rollup-plugin-peer-deps-external --save-dev
// npm i babel-loader @babel/core @babel/preset-react --save-dev
// const texts = require("./components/texts")
// const { default: TextAnimationTemplate } = require("./components/texts/TextAnimationTemplate")
// import { text_components } from "./components/texts"
// import TextAnimationTemplate from "./components/texts/TextAnimationTemplate"

// import { text_components } from "./components/texts"

// export * from "./components/texts"
// export * from text_components
{/* <TextAnimationTemplate /> */}

// export const {TextAnimationTemplate} = text_components
// module.exports = {TextAnimationTemplate}

// export function justSayHello(){
function justSayHello({name}: {name: string}){
    console.log("Hey!!! Hello ", name)
}

// export default TextAnimationTemplate
module.exports = {
    justSayHello,
    TextAnimationTemplate
}
