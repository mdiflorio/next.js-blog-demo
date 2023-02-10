import cn from "classnames";


const Row = ({reverse = false, middle = '', bottom = '', gutter = '', children, className}) => {

    const classList = cn(
        "box-border flex flex-initial flex-row flex-wrap",
        {
            "flex-row-reverse": reverse,
            "items-center": middle,
            "items-end": bottom,
            "-mx-5": gutter === 'sm'
        },
        className
    )

    return (
        <div className={classList}>
            {children}
        </div>
    )
}

export default Row