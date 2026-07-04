import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactElement } from 'react';

interface TextEngineTypes$4 {
    children?: ReactElement<{
        className?: string;
        style: any;
        ref?: React.Ref<HTMLElement>;
    }>;
    text?: string;
    scrollingElement?: string;
    progression?: "char" | "word" | "line" | "char_line" | "word_line";
    style?: any;
    className?: string;
    speed?: number;
    playOnScroll?: boolean | number | undefined;
    playInView?: boolean;
    delay?: number;
    timeline?: any;
    gsapScrollTrigger?: any;
    extendAnimation?: any;
    defaultAnimation?: any;
    watch?: any;
}
declare function TextFadeOverlay$1(props: TextEngineTypes$4): react_jsx_runtime.JSX.Element;

interface TextEngineTypes$3 {
    children?: ReactElement<{
        className?: string;
        style: any;
        ref?: React.Ref<HTMLElement>;
    }>;
    text?: string;
    scrollingElement?: string;
    progression?: "char" | "word" | "line" | "char_line" | "word_line";
    style?: any;
    className?: string;
    speed?: number;
    playOnScroll?: boolean | number | undefined;
    playInView?: boolean;
    delay?: number;
    timeline?: any;
    gsapScrollTrigger?: any;
    extendAnimation?: any;
    defaultAnimation?: any;
    watch?: any;
}
declare function TextFadeSkew_2$1(props: TextEngineTypes$3): react_jsx_runtime.JSX.Element;

interface TextEngineTypes$2 {
    children?: ReactElement<{
        className?: string;
        style: any;
        ref?: React.Ref<HTMLElement>;
    }>;
    text?: string;
    scrollingElement?: string;
    progression?: "char" | "word" | "line" | "char_line" | "word_line";
    style?: any;
    className?: string;
    speed?: number;
    playOnScroll?: boolean | number | undefined;
    playInView?: boolean;
    delay?: number;
    timeline?: any;
    gsapScrollTrigger?: any;
    extendAnimation?: any;
    defaultAnimation?: any;
    watch?: any;
}
declare function TextFadeSkew$1(props: TextEngineTypes$2): react_jsx_runtime.JSX.Element;

interface TextEngineTypes$1 {
    children?: ReactElement<{
        className?: string;
        style: any;
        ref?: React.Ref<HTMLElement>;
    }>;
    text?: string;
    scrollingElement?: string;
    progression?: "char" | "word" | "line" | "char_line" | "word_line";
    style?: any;
    className?: string;
    speed?: number;
    playOnScroll?: boolean | number | undefined;
    playInView?: boolean;
    delay?: number;
    timeline?: any;
    gsapScrollTrigger?: any;
    extendAnimation?: any;
    defaultAnimation?: any;
    watch?: any;
}
declare function TextFadeDown$1(props: TextEngineTypes$1): react_jsx_runtime.JSX.Element;

interface TextEngineTypes {
    children?: ReactElement<{
        className?: string;
        style: any;
        ref?: React.Ref<HTMLElement>;
    }>;
    text?: string;
    scrollingElement?: string;
    progression?: "char" | "word" | "line" | "char_line" | "word_line";
    style?: any;
    className?: string;
    speed?: number;
    playOnScroll?: boolean | number | undefined;
    playInView?: boolean;
    delay?: number;
    timeline?: any;
    gsapScrollTrigger?: any;
    extendAnimation?: any;
    defaultAnimation?: any;
    watch?: any;
}
declare function TextFade$1(props: TextEngineTypes): react_jsx_runtime.JSX.Element;

declare function TextEngine$1(props: any): react_jsx_runtime.JSX.Element;

interface Props$2 {
    children: ReactElement<{
        className?: string;
        ref?: React.Ref<HTMLElement>;
    }>;
}
declare function TextRevealByHeight$1(props: Props$2): react_jsx_runtime.JSX.Element;

interface Props$1 {
    children: ReactElement<{
        className?: string;
        ref?: React.Ref<HTMLElement>;
    }>;
    speed?: number | string;
    delay?: number;
    duration?: number;
    animateOnScroll?: boolean;
    scrub?: boolean;
}
declare function TextColorFade$1(props: Props$1): React.ReactElement<{
    className?: string;
    ref?: React.Ref<HTMLElement>;
}, string | React.JSXElementConstructor<any>>;

interface Props {
    children: ReactElement<{
        className?: string;
        ref?: React.Ref<HTMLElement>;
    }>;
    speed?: number | string;
    delay?: number;
    duration?: number;
    animateOnScroll?: boolean;
    scrub?: boolean;
}
declare function TextAnimationTemplate$1(props: Props): React.ReactElement<{
    className?: string;
    ref?: React.Ref<HTMLElement>;
}, string | React.JSXElementConstructor<any>>;

declare function justSayHello({ name }: {
    name: string;
}): void;
declare const TextAnimationTemplate: typeof TextAnimationTemplate$1;
declare const TextColorFade: typeof TextColorFade$1;
declare const TextRevealByHeight: typeof TextRevealByHeight$1;
declare const TextEngine: typeof TextEngine$1;
declare const TextFade: typeof TextFade$1;
declare const TextFadeDown: typeof TextFadeDown$1;
declare const TextFadeSkew: typeof TextFadeSkew$1;
declare const TextFadeSkew_2: typeof TextFadeSkew_2$1;
declare const TextFadeOverlay: typeof TextFadeOverlay$1;

export { TextAnimationTemplate, TextColorFade, TextEngine, TextFade, TextFadeDown, TextFadeOverlay, TextFadeSkew, TextFadeSkew_2, TextRevealByHeight, justSayHello };
