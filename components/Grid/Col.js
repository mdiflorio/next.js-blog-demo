import cn from "classnames";

import {columnClassList} from "@/components/Grid/constants";

const Col = ({cols, colsBp = {}, offset, first, last, gutter, className, children}) => {
    const getColumnClasses = () => {
        // Grab column classes for all screen sizes
        const defaultClasses = columnClassList.default[cols - 1];

        // Get list of breakpoints in colsBp
        const breakpoints = Object.entries(colsBp)

        // Grab column class for each breakpoint
        const classesPerBp = breakpoints.map((bp, value) => columnClassList[bp][value - 1]).join(" ")

        return `${defaultClasses} ${classesPerBp}`
    }

    const columnClasses = getColumnClasses();

    const classList = cn(
        "box-border flex grow-0 shrink-0 basis-auto -px-5",
        columnClasses,
        className
    )

    return (
        <div className={classList}>
            {children}
        </div>
    )
}

export default Col