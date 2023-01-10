import React, { PropsWithChildren } from "react";
import profile from "./profile.png";

interface SvgProps extends PropsWithChildren {
  width: number;
  height: number;
}

export const images = {
  profile,
};
export const SVG: React.FC<SvgProps> = ({ width, height, children }) => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    {children}
  </svg>
);

export const sideBarItems = [
  {
    id: 1,
    name: "الرئيسية",
    path: "/",
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
    name: "الحجوزات",
    path: "/reservations",
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
    name: "المستخدمين",
    path: "/users",
    icon: (
      <SVG width={24} height={24}>
        <circle cx="12" cy="7" r="4" fill="#FCFCFC" />
        <ellipse opacity="0.4" cx="12" cy="17" rx="7" ry="4" fill="#FCFCFC" />
      </SVG>
    ),
  },
  {
    id: 4,
    name: "الموظفين",
    path: "/employees",
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
    name: "أماكن الحجز",
    path: "/locations",
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
    name: "تسجيل خروج",

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
  { label: "يناير", id: 1 },
  { label: "فبراير", id: 2 },
  { label: "مارس", id: 3 },
  { label: "أبريل", id: 4 },
  { label: "مايو", id: 5 },
  { label: "يونيو", id: 6 },
  { label: "يوليو", id: 7 },
  { label: "أغسطس", id: 8 },
  { label: "سبتمبر", id: 9 },
  { label: "أكتوبر", id: 10 },
  { label: "نوفمبر", id: 11 },
  { label: "ديسمبر", id: 12 },
];

export const Icons = {
  pdfButton: (
    <SVG width={24} height={24}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 18.75C6.05004 18.75 6.09894 18.7451 6.14624 18.7358C6.85087 18.6985 7.54378 18.3922 8.05538 17.8166L9.56056 16.1233C9.83575 15.8137 9.80787 15.3396 9.49828 15.0645C9.18869 14.7893 8.71464 14.8171 8.43945 15.1267L6.93427 16.8201C6.8774 16.884 6.8156 16.9407 6.75 16.99V6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V16.99C5.18441 16.9407 5.12261 16.884 5.06575 16.8201L3.56056 15.1267C3.28538 14.8171 2.81132 14.7893 2.50174 15.0645C2.19215 15.3396 2.16426 15.8137 2.43945 16.1233L3.94463 17.8166C4.45623 18.3922 5.14913 18.6985 5.85375 18.7357C5.90106 18.7451 5.94996 18.75 6 18.75ZM12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25H21C21.4142 17.25 21.75 17.5858 21.75 18C21.75 18.4142 21.4142 18.75 21 18.75H12ZM12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12ZM11.25 6C11.25 6.41421 11.5858 6.75 12 6.75H15C15.4142 6.75 15.75 6.41421 15.75 6C15.75 5.58579 15.4142 5.25 15 5.25H12C11.5858 5.25 11.25 5.58579 11.25 6Z"
        fill="#4C2784"
      />
    </SVG>
  ),
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
  deleteIcon: (
    <SVG width={24} height={24}>
      <path
        opacity="0.4"
        d="M14.75 22.75H8.75C6.54086 22.75 4.75 20.9591 4.75 18.75V5.75H18.75V18.75C18.75 20.9591 16.9591 22.75 14.75 22.75Z"
        fill="#191919"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.75 10C14.1642 10 14.5 10.3358 14.5 10.75L14.5 16.75C14.5 17.1642 14.1642 17.5 13.75 17.5C13.3358 17.5 13 17.1642 13 16.75L13 10.75C13 10.3358 13.3358 10 13.75 10Z"
        fill="#191919"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 10C10.1642 10 10.5 10.3358 10.5 10.75L10.5 16.75C10.5 17.1642 10.1642 17.5 9.75 17.5C9.33579 17.5 9 17.1642 9 16.75L9 10.75C9 10.3358 9.33579 10 9.75 10Z"
        fill="#191919"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.53223 3.22457C9.04226 2.45953 9.9009 2 10.8204 2H12.6796C13.5991 2 14.4577 2.45953 14.9678 3.22457L16.1514 5H20.75C21.1642 5 21.5 5.33579 21.5 5.75C21.5 6.16421 21.1642 6.5 20.75 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H7.34861L8.53223 3.22457Z"
        fill="#191919"
      />
    </SVG>
  ),
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
};
