import React, {useId} from "react";

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    return(
        <div className="w-full">
            {label && <label htmlFor={id} className=''></label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={` px-3 rounded-lg bg-white text-black focus:bg-gray-50 border-gray-200 w-full ${className}`}  //these are given inside {} so they are not string literals (because its not pure js)
                >
                    {options?.map((option)=>(  //the use of ? is to prevent null pointer exception meaning if options is null then it will not throw error
                        <option key={option} value={option}>
                            {options}
                        </option>
                    )
                )}
            </select>
        </div>
    )
}
export default React.forwardRef(Select);
