import cn from "classnames";

const Container = ({fluid, offset, className, children}) => {
    const classList = cn(
        "max-w-5xl flex xl:w-full mx-6 sm:mx-10 md:mx-12 lg:mx-20 xl:mx-auto",
        {
            "mx-3 sm:mx-5 md:mx-6 lg:mx-10 xl:mx-auto": offset,
            "max-w-full": fluid
        },
        className
    )
    return (
        <div className={classList} >
            {children}
        </div>
    )
}


export default Container
