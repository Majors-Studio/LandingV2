import {FC, useCallback} from 'react';

interface ChevronProps {
    className?: string;
    color?: string;
    thicker?: boolean;
    title?: string;
    direction?: 'down' | 'right' | 'left' | 'up';
}

const Chevron: FC<ChevronProps> = ({className, color = 'currentColor', title = 'seta', thicker = false, direction = 'down'}) => {
    const getAngle = useCallback(() => {
        switch (direction) {
            case 'left':
                return '90deg';
            case 'right':
                return '-90deg';
            case 'up':
                return '180deg';
            case 'down':
                return '0deg';
            default:
                return '0deg';
        }
    }, [direction]);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.768" height="10.655" viewBox="0 0 17.768 10.655"
            aria-labelledby={`chevron-${title}`}
            className={className}
            style={{
                transform: `rotate(${getAngle()})`,
            }}
        >
            <title id={`chevron-${title}`}>{title}</title>
            {thicker ? (
                <path id="seta" d="M0,0,9.4,9.182,17.674,0" transform="translate(0.358 0.349)" fill="none"
                      stroke={color} strokeWidth="2"/>
            ) : (
                <path id="seta" d="M0,0,8.068,8,16,0" transform="translate(0.88 0.888)" fill="none" stroke={color}
                      strokeWidth="2.5"/>
            )}
        </svg>
    )
}

export default Chevron;