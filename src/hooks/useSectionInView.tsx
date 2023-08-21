import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAtom } from "jotai";
import { activeSectionAtom, timeOfLastClickAtom } from "@/lib/atoms";
import type { SectionName } from "@/lib/types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
    });
    const [activeSection, setActiveSection] = useAtom(activeSectionAtom);
    const [timeOfLastClick, setTimeOfLastClick] = useAtom(timeOfLastClickAtom);

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {
        ref,
    };
}
