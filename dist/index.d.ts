import React, { ReactElement } from 'react';

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

export { TextAnimationTemplate, justSayHello };
