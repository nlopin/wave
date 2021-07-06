// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const WS: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="WS__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="WS__b" fill="#fff">
                    <use xlinkHref="#WS__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#WS__a" />
                <path fill="#E31F37" mask="url(#WS__b)" d="M0 0h28v20H0z" />
                <path fill="#083B9A" mask="url(#WS__b)" d="M-1.333-1.333h16v12h-16z" />
                <path
                    d="M6.667 9.333l-.943.276L6 8.667l-.276-.943.943.276.942-.276-.276.943.276.942-.942-.276zm0-6.666l-.943.276L6 2l-.276-.943.943.276.942-.276L7.333 2l.276.943-.942-.276zM4 6l-.943.276.276-.943-.276-.942.943.276.943-.276-.276.942.276.943L4 6zm6-.667l-.943.276.276-.942-.276-.943L10 4l.943-.276-.276.943.276.942L10 5.333zm-1.667 2a.333.333 0 110-.666.333.333 0 010 .666z"
                    fill="#FFF"
                    mask="url(#WS__b)"
                />
            </g>
        </svg>
    );
};

WS.defaultProps = {};
export default WS;