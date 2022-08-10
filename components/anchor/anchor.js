import {forwardRef} from "react";
import clsx from "clsx";

export const Anchor = forwardRef(({
                                    children,
                                    variant,
                                    size,
                                    outline,
                                    ...props
                                }, ref) => (
    <a
        className={clsx({
            'btn': true,
            'btn-sm': size === 'small',
            'btn-lg': size === 'large',
            'btn-primary': !outline && variant === 'primary',
            'btn-secondary': !outline && variant === 'secondary',
            'btn-success': !outline && variant === 'success',
            'btn-danger': !outline && variant === 'danger',
            'btn-info': !outline && variant === 'info',
            'btn-warning': !outline && variant === 'warning',
            'btn-light': !outline && variant === 'light',
            'btn-dark': !outline && variant === 'dark',
            'btn-link': !outline && variant === 'link',
            'btn-outline-primary': outline && variant === 'primary',
            'btn-outline-secondary': outline && variant === 'secondary',
            'btn-outline-success': outline && variant === 'success',
            'btn-outline-danger': outline && variant === 'danger',
            'btn-outline-info': outline && variant === 'info',
            'btn-outline-warning': outline && variant === 'warning',
            'btn-outline-light': outline && variant === 'light',
            'btn-outline-dark': outline && variant === 'dark',
            'btn-outline-link': outline && variant === 'link',
        })}
        ref={ref}
        {...props}>
        {children}
    </a>
))

Anchor.displayName = 'anchor';
