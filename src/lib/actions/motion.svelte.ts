import {
    animate,
    hover as hoverMotion,
    type AnimationOptions,
    type DOMKeyframesDefinition,
} from "motion";
import type { Action } from "svelte/action";

type MotionParams = {
    keyframes: DOMKeyframesDefinition;
    options?: AnimationOptions;
};

export const motion: Action<HTMLElement | SVGElement, MotionParams> = (
    node: HTMLElement | SVGElement,
    data: MotionParams = { keyframes: { scale: [0, 1] } }
) => {
    $effect(() => {
        const animation = animate(node, data.keyframes, data.options);

        animation.play();

        return () => {
            animation.cancel();
        };
    });
};

export const hover: Action = (node: HTMLElement) => {
    $effect(() => {
        hoverMotion(node, (element) => {
            animate(element, { scale: 1.3 }, { type: "spring", duration: 0.3 });

            return () => animate(element, { scale: 1 }, { type: "spring" });
        });
    });
};

export const sequence: Action<HTMLElement | SVGElement, MotionParams[]> = (
    node: HTMLElement | SVGElement,
    sequences: MotionParams[] = []
) => {
    $effect(() => {
        let currentAnimation: ReturnType<typeof animate> | null = null;
        let currentIndex = 0;

        const playNext = () => {
            if (currentIndex >= sequences.length) return;

            const { keyframes, options } = sequences[currentIndex];
            currentAnimation = animate(node, keyframes, {
                ...options,
                onComplete: () => {
                    currentIndex++;
                    playNext();
                },
            });
        };

        playNext();

        return () => {
            if (currentAnimation) {
                currentAnimation.cancel();
            }
        };
    });
};
