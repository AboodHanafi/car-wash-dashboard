import React, { PropsWithChildren } from 'react';
import profile from './profile.png';

interface SvgProps extends PropsWithChildren {
    width: number;
    height: number;
}

export const images = {
    profile,
};
export const SVG: React.FC<SvgProps> = ({ width, height, children }) => (
    <svg
        style={{ margin: '0 0.2rem' }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}>
        {children}
    </svg>
);

export const sideBarItems = [
    {
        id: 1,
        name: 'الرئيسية',
        path: '/',
        icon: (
            <SVG width={24} height={24}>
                <path
                    opacity="0.4"
                    d="M1.53833 3.61523C1.53833 2.51066 2.43376 1.61523 3.53833 1.61523H8.46167C9.56623 1.61523 10.4617 2.51066 10.4617 3.61523V8.53857C10.4617 9.64314 9.56623 10.5386 8.46166 10.5386H3.53833C2.43376 10.5386 1.53833 9.64314 1.53833 8.53857V3.61523Z"
                    fill="#FCFCFC"
                />
                <path
                    opacity="0.4"
                    d="M13.4617 15.5391C13.4617 14.4345 14.3571 13.5391 15.4617 13.5391H20.385C21.4896 13.5391 22.385 14.4345 22.385 15.5391V20.4624C22.385 21.567 21.4896 22.4624 20.385 22.4624H15.4617C14.3571 22.4624 13.4617 21.567 13.4617 20.4624V15.5391Z"
                    fill="#FCFCFC"
                />
                <circle cx="17.9233" cy="6.0769" r="4.46166" fill="#FCFCFC" />
                <circle cx="5.99999" cy="18.0007" r="4.46166" fill="#FCFCFC" />
            </SVG>
        ),
    },
    {
        id: 2,
        name: 'الحجوزات',
        path: '/reservations',
        icon: (
            <SVG width={24} height={24}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.9995 1.25C16.4137 1.25 16.7495 1.58579 16.7495 2L16.7495 5C16.7495 5.41421 16.4137 5.75 15.9995 5.75C15.5853 5.75 15.2495 5.41421 15.2495 5L15.2495 2C15.2495 1.58579 15.5853 1.25 15.9995 1.25Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.99951 1.25C8.41373 1.25 8.74951 1.58579 8.74951 2L8.74951 5C8.74951 5.41421 8.41373 5.75 7.99951 5.75C7.5853 5.75 7.24951 5.41421 7.24951 5L7.24951 2C7.24951 1.58579 7.5853 1.25 7.99951 1.25Z"
                    fill="#FCFCFC"
                />
                <path
                    opacity="0.4"
                    d="M17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V7.5C21 5.29086 19.2091 3.5 17 3.5Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H12C12.4142 8.25 12.75 8.58579 12.75 9C12.75 9.41421 12.4142 9.75 12 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H16C16.4142 12.25 16.75 12.5858 16.75 13C16.75 13.4142 16.4142 13.75 16 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H16C16.4142 16.25 16.75 16.5858 16.75 17C16.75 17.4142 16.4142 17.75 16 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z"
                    fill="#FCFCFC"
                />
            </SVG>
        ),
    },
    {
        id: 3,
        name: 'المستخدمين',
        path: '/users',
        icon: (
            <SVG width={24} height={24}>
                <circle cx="12" cy="7" r="4" fill="#FCFCFC" />
                <ellipse
                    opacity="0.4"
                    cx="12"
                    cy="17"
                    rx="7"
                    ry="4"
                    fill="#FCFCFC"
                />
            </SVG>
        ),
    },
    {
        id: 4,
        name: 'الموظفين',
        path: '/employees',
        icon: (
            <SVG width={24} height={24}>
                <path
                    opacity="0.4"
                    d="M10.3754 2.72171L5.37761 4.94296C3.93199 5.58546 2.978 7.0243 3.06999 8.6036C3.42962 14.7778 5.23767 17.496 9.93579 20.6766C11.1804 21.5192 12.821 21.5213 14.0646 20.6773C18.7772 17.4793 20.5205 14.7228 20.9118 8.62498C21.0138 7.03525 20.0583 5.58113 18.6025 4.93415L13.6245 2.72171C12.5903 2.26203 11.4097 2.26204 10.3754 2.72171Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.4939 9.43558C15.8056 9.70834 15.8372 10.1822 15.5645 10.4939L12.6946 13.7738C12.0779 14.4786 11.0156 14.5729 10.2843 13.9879L8.53151 12.5857C8.20806 12.3269 8.15562 11.8549 8.41438 11.5315C8.67313 11.208 9.1451 11.1556 9.46855 11.4144L11.2214 12.8166C11.3258 12.9002 11.4776 12.8867 11.5657 12.786L14.4356 9.50613C14.7084 9.1944 15.1822 9.16282 15.4939 9.43558Z"
                    fill="#FCFCFC"
                />
            </SVG>
        ),
    },
    {
        id: 5,
        name: 'مناطق التغطية',
        path: '/locations',
        icon: (
            <SVG width={24} height={24}>
                <path
                    opacity="0.4"
                    d="M19.5 9.5C19.5 13.4274 14.625 19 12 19C9.375 19 4.5 13.0385 4.5 9.11111C4.5 5 8.13401 2 12 2C15.866 2 19.5 5 19.5 9.5Z"
                    fill="#FCFCFC"
                />
                <circle cx="12" cy="9" r="3" fill="#FCFCFC" />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25 22C5.25 21.5858 5.58579 21.25 6 21.25H18C18.4142 21.25 18.75 21.5858 18.75 22C18.75 22.4142 18.4142 22.75 18 22.75H6C5.58579 22.75 5.25 22.4142 5.25 22Z"
                    fill="#FCFCFC"
                />
            </SVG>
        ),
    },
    {
        id: 6,
        name: 'الخدمات',
        path: '/services',
        icon: (
            <SVG width={24} height={24}>
                <g opacity="0.4">
                    <path
                        d="M20 3H8C6.89543 3 6 3.89543 6 5V8C6 8.55228 5.55228 9 5 9C3.34315 9 2 10.3431 2 12C2 13.6569 3.34315 15 5 15C5.55228 15 6 15.4477 6 16V19C6 20.1046 6.89543 21 8 21H10C10.5523 21 11 20.5523 11 20C11 18.3431 12.3431 17 14 17C15.6569 17 17 18.3431 17 20C17 20.5523 17.4477 21 18 21H20C21.1046 21 22 20.1046 22 19V16C22 15.4477 21.5523 15 21 15C19.3431 15 18 13.6569 18 12C18 10.3431 19.3431 9 21 9C21.5523 9 22 8.55228 22 8V5C22 3.89543 21.1046 3 20 3Z"
                        fill="white"
                    />
                </g>
            </SVG>
        ),
    },
    {
        id: 7,
        name: 'كوبونات الخصم',
        path: '/coupons',
        icon: (
            <SVG width={24} height={24}>
                <path
                    opacity="0.4"
                    d="M2 17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V16C22 15.4477 21.54 15.0163 21.0181 14.8356C19.8435 14.4289 19 13.313 19 12C19 10.687 19.8435 9.57105 21.0181 9.16437C21.54 8.98368 22 8.55228 22 8V7C22 4.79086 20.2091 3 18 3H6C3.79086 3 2 4.79086 2 7V8C2 8.55228 2.46 8.98368 2.98189 9.16437C4.15653 9.57105 5 10.687 5 12C5 13.313 4.15653 14.4289 2.98189 14.8356C2.46 15.0163 2 15.4477 2 16V17Z"
                    fill="white"
                />
                <path
                    d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z"
                    fill="white"
                />
                <path
                    d="M16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15Z"
                    fill="white"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
                    fill="white"
                />
            </SVG>
        ),
    },
    {
        id: 8,
        name: 'تسجيل خروج',
        path: '/signin',
        icon: (
            <SVG width={24} height={24}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.4697 13.4697C17.1768 13.7626 17.1768 14.2374 17.4697 14.5303C17.7626 14.8232 18.2374 14.8232 18.5303 14.5303L19.8232 13.2374C20.5066 12.554 20.5066 11.446 19.8232 10.7626L18.5303 9.46967C18.2374 9.17678 17.7626 9.17678 17.4697 9.46967C17.1768 9.76256 17.1768 10.2374 17.4697 10.5303L18.1893 11.25L13 11.25C12.5858 11.25 12.25 11.5858 12.25 12C12.25 12.4142 12.5858 12.75 13 12.75L18.1893 12.75L17.4697 13.4697Z"
                    fill="#FCFCFC"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11 4.51562L14 4.51563C15.5188 4.51563 16.75 5.74684 16.75 7.26562C16.75 7.67984 16.4142 8.01562 16 8.01562C15.5858 8.01562 15.25 7.67984 15.25 7.26562C15.25 6.57527 14.6904 6.01562 14 6.01562H11V4.51562ZM16 16.5156C16.4142 16.5156 16.75 16.8514 16.75 17.2656C16.75 18.7844 15.5188 20.0156 14 20.0156H11V18.5156H14C14.6904 18.5156 15.25 17.956 15.25 17.2656C15.25 16.8514 15.5858 16.5156 16 16.5156Z"
                    fill="#FCFCFC"
                />
                <path
                    opacity="0.4"
                    d="M3 5.99676C3 5.27511 3.38195 4.60121 4.01783 4.20091L7.44642 2.36612C8.9654 1.40989 11 2.43812 11 4.16198V19.838C11 21.5619 8.9654 22.5901 7.44642 21.6339L4.01785 19.7959C3.38196 19.3956 3.00002 18.7217 3.00002 18L3 5.99676Z"
                    fill="#FCFCFC"
                />
            </SVG>
        ),
    },
];

export const Months = [
    { label: 'يناير', id: 1 },
    { label: 'فبراير', id: 2 },
    { label: 'مارس', id: 3 },
    { label: 'أبريل', id: 4 },
    { label: 'مايو', id: 5 },
    { label: 'يونيو', id: 6 },
    { label: 'يوليو', id: 7 },
    { label: 'أغسطس', id: 8 },
    { label: 'سبتمبر', id: 9 },
    { label: 'أكتوبر', id: 10 },
    { label: 'نوفمبر', id: 11 },
    { label: 'ديسمبر', id: 12 },
];

export const Icons = {
    xIcon: (
        <SVG width={24} height={24}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7123 16.7734C16.0052 17.0663 16.4801 17.0663 16.7729 16.7734C17.0658 16.4805 17.0658 16.0057 16.7729 15.7128L13.0607 12.0005L16.7729 8.28819C17.0658 7.99529 17.0658 7.52042 16.7729 7.22753C16.48 6.93463 16.0052 6.93463 15.7123 7.22753L12 10.9398L8.28766 7.22748C7.99477 6.93459 7.5199 6.93459 7.227 7.22748C6.93411 7.52038 6.93411 7.99525 7.227 8.28814L10.9393 12.0005L7.22699 15.7128C6.9341 16.0057 6.9341 16.4806 7.22699 16.7735C7.51989 17.0664 7.99476 17.0664 8.28765 16.7735L12 13.0611L15.7123 16.7734Z"
                fill="#191919"
            />
        </SVG>
    ),
    pdfButton: (fillColor = '#4C2784') => {
        return (
            <SVG width={24} height={24}>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18.75C6.05004 18.75 6.09894 18.7451 6.14624 18.7358C6.85087 18.6985 7.54378 18.3922 8.05538 17.8166L9.56056 16.1233C9.83575 15.8137 9.80787 15.3396 9.49828 15.0645C9.18869 14.7893 8.71464 14.8171 8.43945 15.1267L6.93427 16.8201C6.8774 16.884 6.8156 16.9407 6.75 16.99V6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V16.99C5.18441 16.9407 5.12261 16.884 5.06575 16.8201L3.56056 15.1267C3.28538 14.8171 2.81132 14.7893 2.50174 15.0645C2.19215 15.3396 2.16426 15.8137 2.43945 16.1233L3.94463 17.8166C4.45623 18.3922 5.14913 18.6985 5.85375 18.7357C5.90106 18.7451 5.94996 18.75 6 18.75ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H12ZM12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12ZM11.25 6C11.25 6.41421 11.5858 6.75 12 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H12C11.5858 5.25 11.25 5.58579 11.25 6Z"
                    fill={fillColor}
                />
            </SVG>
        );
    },
    fromToDate: (
        <SVG width={24} height={36}>
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.5303 12.5303C18.8232 12.2374 18.8232 11.7626 18.5303 11.4697L14.5303 7.46967C14.2374 7.17678 13.7626 7.17678 13.4697 7.46967C13.1768 7.76256 13.1768 8.23744 13.4697 8.53033L16.1893 11.25L6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75L16.1893 12.75L13.4697 15.4697C13.1768 15.7626 13.1768 16.2374 13.4697 16.5303C13.7626 16.8232 14.2374 16.8232 14.5303 16.5303L18.5303 12.5303Z"
                fill="#28303F"
            />
            <path
                d="M18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.9708 12.0025L13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697Z"
                fill="#28303F"
            />
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.46967 24.5303C5.17678 24.2374 5.17678 23.7626 5.46967 23.4697L9.46967 19.4697C9.76256 19.1768 10.2374 19.1768 10.5303 19.4697C10.8232 19.7626 10.8232 20.2374 10.5303 20.5303L7.81066 23.25L18 23.25C18.4142 23.25 18.75 23.5858 18.75 24C18.75 24.4142 18.4142 24.75 18 24.75L7.81066 24.75L10.5303 27.4697C10.8232 27.7626 10.8232 28.2374 10.5303 28.5303C10.2374 28.8232 9.76256 28.8232 9.46967 28.5303L5.46967 24.5303Z"
                fill="#28303F"
            />
            <path
                d="M5.46967 23.4697C5.17678 23.7626 5.17678 24.2374 5.46967 24.5303L9.46967 28.5303C9.76256 28.8232 10.2374 28.8232 10.5303 28.5303C10.8232 28.2374 10.8232 27.7626 10.5303 27.4697L7.02925 24.0025L10.5303 20.5303C10.8232 20.2374 10.8232 19.7626 10.5303 19.4697C10.2374 19.1768 9.76256 19.1768 9.46967 19.4697L5.46967 23.4697Z"
                fill="#28303F"
            />
        </SVG>
    ),
    search: (
        <SVG width={24} height={24}>
            <path
                d="M18 15.7661L19.5373 17.3034C20.1542 17.9203 20.1542 18.9204 19.5373 19.5373C18.9204 20.1542 17.9203 20.1542 17.3034 19.5373L15.766 18M4 10.8C4 7.04446 7.04446 4 10.8 4C14.5555 4 17.6 7.04446 17.6 10.8C17.6 14.5555 14.5555 17.6 10.8 17.6C7.04446 17.6 4 14.5555 4 10.8Z"
                stroke="#A0A0A0"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </SVG>
    ),
    moreIcon: (
        <SVG width={27} height={6}>
            <path
                d="M14.0938 5.5625C12.6267 5.5625 11.4375 4.37326 11.4375 2.90625C11.4375 1.43924 12.6267 0.25 14.0938 0.25C15.5608 0.25 16.75 1.43924 16.75 2.90625C16.75 4.37326 15.5608 5.5625 14.0938 5.5625Z"
                fill="#4C2784"
            />
            <path
                opacity="0.4"
                d="M23.6563 5.5625C22.1892 5.5625 21 4.37326 21 2.90625C21 1.43924 22.1892 0.25 23.6563 0.25C25.1233 0.25 26.3125 1.43924 26.3125 2.90625C26.3125 4.37326 25.1233 5.5625 23.6563 5.5625Z"
                fill="#4C2784"
            />
            <path
                opacity="0.4"
                d="M3.46875 5.5625C2.00174 5.5625 0.8125 4.37326 0.8125 2.90625C0.8125 1.43924 2.00174 0.25 3.46875 0.25C4.93576 0.25 6.125 1.43924 6.125 2.90625C6.125 4.37326 4.93576 5.5625 3.46875 5.5625Z"
                fill="#4C2784"
            />
        </SVG>
    ),
    deleteIcon: (fillColor = '#191919') => {
        return (
            <SVG width={24} height={24}>
                <path
                    opacity="0.4"
                    d="M14.75 22.75H8.75C6.54086 22.75 4.75 20.9591 4.75 18.75V5.75H18.75V18.75C18.75 20.9591 16.9591 22.75 14.75 22.75Z"
                    fill={fillColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.75 10C14.1642 10 14.5 10.3358 14.5 10.75L14.5 16.75C14.5 17.1642 14.1642 17.5 13.75 17.5C13.3358 17.5 13 17.1642 13 16.75L13 10.75C13 10.3358 13.3358 10 13.75 10Z"
                    fill={fillColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.75 10C10.1642 10 10.5 10.3358 10.5 10.75L10.5 16.75C10.5 17.1642 10.1642 17.5 9.75 17.5C9.33579 17.5 9 17.1642 9 16.75L9 10.75C9 10.3358 9.33579 10 9.75 10Z"
                    fill={fillColor}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.53223 3.22457C9.04226 2.45953 9.9009 2 10.8204 2H12.6796C13.5991 2 14.4577 2.45953 14.9678 3.22457L16.1514 5H20.75C21.1642 5 21.5 5.33579 21.5 5.75C21.5 6.16421 21.1642 6.5 20.75 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H7.34861L8.53223 3.22457Z"
                    fill={fillColor}
                />
            </SVG>
        );
    },
    NotificationIcon: (fillColor = '#4C2784') => {
        return (
            <SVG width={24} height={24}>
                <path
                    d="M12 21C13.385 21 14.5633 20.1652 15 19H9C9.43668 20.1652 10.615 21 12 21Z"
                    fill={fillColor}
                />
                <path
                    opacity="0.4"
                    d="M6.22281 19H17.7772C19.6056 19 20.6492 17.1609 19.5522 15.8721C19.0666 15.3016 18.7673 14.6249 18.6867 13.9153L18.2395 9.97519C17.9984 7.85063 16.4123 6.10719 14.2699 5.37366V5.26995C14.2699 4.01629 13.2537 3 12 3C10.7463 3 9.73005 4.01629 9.73005 5.26995V5.37366C7.58766 6.10719 6.0016 7.85063 5.76046 9.97519L5.31328 13.9153C5.23274 14.6249 4.93344 15.3016 4.44779 15.8721C3.35076 17.1609 4.39443 19 6.22281 19Z"
                    fill={fillColor}
                />
            </SVG>
        );
    },
    editIcon: (
        <SVG width={24} height={24}>
            <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 2.75C4.20507 2.75 2.75 4.20507 2.75 6V18C2.75 19.7949 4.20507 21.25 6 21.25H18C19.7949 21.25 21.25 19.7949 21.25 18V12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12V18C22.75 20.6234 20.6234 22.75 18 22.75H6C3.37665 22.75 1.25 20.6234 1.25 18V6C1.25 3.37665 3.37665 1.25 6 1.25H12C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75H6Z"
                fill="#191919"
            />
            <path
                d="M9.15467 15.9893L12.1583 15.5602C12.5916 15.4983 12.9931 15.2975 13.3025 14.9881L19.9773 8.31335C19.9773 8.31335 18.547 8.31335 17.1167 6.88305C15.6864 5.45276 15.6864 4.02246 15.6864 4.02246L9.01164 10.6972C8.70217 11.0067 8.50142 11.4082 8.43952 11.8414L8.01044 14.845C7.91508 15.5125 8.4872 16.0846 9.15467 15.9893Z"
                fill="#191919"
            />
            <path
                opacity="0.4"
                d="M21.4075 4.02275L19.9772 2.59245C19.1872 1.80252 17.9065 1.80252 17.1166 2.59245L15.6863 4.02275C15.6863 4.02275 15.6863 5.45305 17.1166 6.88334C18.5469 8.31364 19.9772 8.31364 19.9772 8.31364L21.4075 6.88334C22.1974 6.09341 22.1974 4.81268 21.4075 4.02275Z"
                fill="#191919"
            />
        </SVG>
    ),
    sendIcon: (
        <SVG width={24} height={24}>
            <circle opacity="0.4" cx="12" cy="12" r="10" fill="#28303F" />
            <path
                d="M7.66469 10.4029L14.7188 8.05157C15.4788 7.79825 16.2018 8.52124 15.9484 9.28119L13.5971 16.3353C13.3016 17.2216 12.0481 17.2216 11.7526 16.3353L10.8843 13.7305C10.7876 13.4402 10.5598 13.2124 10.2695 13.1157L7.66469 12.2474C6.77844 11.9519 6.77844 10.6984 7.66469 10.4029Z"
                fill="#28303F"
            />
        </SVG>
    ),
    gpsIcon: (
        <SVG width={24} height={24}>
            <circle
                cx="11"
                cy="10.082"
                r="2.75"
                stroke="#1975FF"
                strokeWidth="1.5"
            />
            <path
                d="M19.25 9.98018C19.25 14.4803 14.0938 20.1654 11 20.1654C7.90628 20.1654 2.75003 14.4803 2.75003 9.98018C2.75003 5.48008 6.44368 1.83203 11 1.83203C15.5564 1.83203 19.25 5.48008 19.25 9.98018Z"
                stroke="#1975FF"
                strokeWidth="1.5"
            />
        </SVG>
    ),
    personsIcon: (
        <SVG width={24} height={24}>
            <ellipse
                cx="9.83335"
                cy="16.0404"
                rx="6.41667"
                ry="3.20833"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <circle
                cx="9.83335"
                cy="6.41667"
                r="3.66667"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinejoin="round"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.4982 9.33114C14.1826 9.83508 13.7876 10.2842 13.3308 10.6611C13.6726 10.7725 14.0376 10.8328 14.4167 10.8328C16.3497 10.8328 17.9167 9.26577 17.9167 7.33277C17.9167 5.49378 16.4984 3.98605 14.6959 3.84375C14.9691 4.35901 15.1627 4.92287 15.2605 5.51899C15.9434 5.83723 16.4167 6.52973 16.4167 7.33277C16.4167 8.41004 15.5649 9.28838 14.4982 9.33114Z"
                fill="#4D4D4D"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5807 17.7784C17.9059 17.2369 18.0834 16.6518 18.0834 16.0414C18.0834 16.0359 18.0834 16.0304 18.0833 16.0249C18.4916 15.8479 18.78 15.6579 18.9581 15.4825C19.1431 15.3003 19.1667 15.1799 19.1667 15.1247C19.1667 15.0696 19.1431 14.9492 18.9581 14.767C18.7706 14.5823 18.4607 14.3814 18.0173 14.1966C17.8155 14.1125 17.5933 14.0348 17.3534 13.965C16.8094 13.2304 15.9858 12.5898 14.9655 12.0938C16.3472 12.1477 17.6155 12.4042 18.5943 12.812C19.1461 13.0419 19.6417 13.3349 20.0108 13.6984C20.3825 14.0646 20.6667 14.5471 20.6667 15.1247C20.6667 15.7024 20.3825 16.1849 20.0108 16.5511C19.6417 16.9146 19.1461 17.2076 18.5943 17.4375C18.2837 17.5669 17.9439 17.6811 17.5807 17.7784Z"
                fill="#4D4D4D"
            />
        </SVG>
    ),
    phoneIcon: (size = 20) => (
        <SVG width={size} height={size}>
            <path
                d="M17.5 15.8333V14.4617C17.5 13.7802 17.0851 13.1674 16.4523 12.9143L14.7572 12.2362C13.9524 11.9143 13.0352 12.263 12.6475 13.0383L12.5 13.3333C12.5 13.3333 10.4167 12.9167 8.75 11.25C7.08333 9.58333 6.66667 7.5 6.66667 7.5L6.96168 7.35249C7.73698 6.96484 8.08571 6.04761 7.76379 5.2428L7.08574 3.54768C6.83263 2.91492 6.21979 2.5 5.53828 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667C2.5 11.5305 8.46954 17.5 15.8333 17.5C16.7538 17.5 17.5 16.7538 17.5 15.8333Z"
                stroke="#787878"
                strokeWidth="1.3"
                strokeLinejoin="round"
            />
        </SVG>
    ),
};
