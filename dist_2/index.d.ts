import * as react_jsx_runtime from 'react/jsx-runtime';
import React, { ReactElement } from 'react';

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

export { TextAnimationTemplate, TextColorFade, TextRevealByHeight, justSayHello };
