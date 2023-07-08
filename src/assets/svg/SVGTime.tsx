function SVGTime({
    width = 23,
    height = 22,
}: {
    width?: number;
    height?: number;
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 23 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M19.4583 12.3737C19.4583 16.6769 15.9699 20.1654 11.6667 20.1654C7.36344 20.1654 3.87499 16.6769 3.87499 12.3737C3.87499 8.07048 7.36344 4.58203 11.6667 4.58203C15.9699 4.58203 19.4583 8.07048 19.4583 12.3737Z"
                stroke="#4D4D4D"
                strokeWidth="1.5"
            />
            <path
                d="M14.4167 2.21159C13.5425 1.96434 12.62 1.83203 11.6667 1.83203C10.7133 1.83203 9.79085 1.96434 8.91666 2.21159"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
            <path
                d="M13.0417 12.832C13.0417 13.5914 12.426 14.207 11.6667 14.207C10.9073 14.207 10.2917 13.5914 10.2917 12.832C10.2917 12.0726 10.9073 11.457 11.6667 11.457C12.426 11.457 13.0417 12.0726 13.0417 12.832Z"
                stroke="#4D4D4D"
                strokeWidth="1.5"
            />
            <path
                d="M11.6667 11V8.25"
                stroke="#4D4D4D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SVGTime;
