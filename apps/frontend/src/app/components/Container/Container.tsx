import React from 'react';

export interface Props {
    className?: string
    children: React.ReactNode
}

const Container = ({className, children, ...rest}: Props) => {
    return (
        <div className={`container ${className || ''}`} {...rest}>
            {children}
        </div>
    )
}

export default React.memo(Container);