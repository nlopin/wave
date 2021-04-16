// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const MO: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="MO__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="MO__b" fill="#fff">
                    <use xlinkHref="#MO__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#MO__a" />
                <path fill="#079D7B" mask="url(#MO__b)" d="M0 0h28v20H0z" />
                <g mask="url(#MO__b)">
                    <path
                        d="M11.27 11.87c.602.018 1.6.13 2.73.13 1.114 0 2.101-.11 2.706-.13a8.702 8.702 0 01-.582.13h3.21a6.129 6.129 0 01-.631 1.333H9.297A6.129 6.129 0 018.667 12h3.166a8.778 8.778 0 01-.564-.13zm-.557-.168c-1.494-.504-2.518-1.313-2.357-1.914.18-.67 1.766-.828 3.545-.351.093.025.185.051.276.079a5.79 5.79 0 01-.062-.85c0-1.84.844-3.333 1.885-3.333s1.885 1.493 1.885 3.334c0 .292-.021.575-.061.844.102-.031.206-.061.312-.09 1.779-.476 3.366-.319 3.545.352.163.606-.88 1.423-2.395 1.927-.268-.794-1.637-1.033-3.286-1.033-1.65 0-3.021.24-3.287 1.035zm6.842 2.965A5.435 5.435 0 0114 16c-1.347 0-2.584-.5-3.555-1.333h7.11z"
                        fill="#FFF"
                    />
                    <path
                        d="M14 4a.667.667 0 110-1.333A.667.667 0 0114 4zM8.667 7.333a.667.667 0 110-1.333.667.667 0 010 1.333zm10.666 0a.667.667 0 110-1.333.667.667 0 010 1.333zm-2-2a.667.667 0 110-1.333.667.667 0 010 1.333zm-6.666 0a.667.667 0 110-1.333.667.667 0 010 1.333z"
                        fill="#FCD117"
                    />
                </g>
            </g>
        </svg>
    );
};

MO.defaultProps = {};
export default MO;