function SVGPrice({
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
      viewBox='0 0 23 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.9999 16.5013H13.4999M18.9999 16.5013C20.0124 16.5013 20.8332 17.3221 20.8332 18.3346C20.8332 19.3472 20.0124 20.168 18.9999 20.168H13.4999C12.4873 20.168 11.6665 19.3472 11.6665 18.3346C11.6665 17.3221 12.4873 16.5013 13.4999 16.5013M18.9999 16.5013C20.0124 16.5013 20.8332 15.6805 20.8332 14.668C20.8332 13.6554 20.0124 12.8346 18.9999 12.8346H18.3888M13.4999 16.5013C12.4873 16.5013 11.6665 15.6805 11.6665 14.668C11.6665 13.6554 12.4873 12.8346 13.4999 12.8346H18.3888M13.2024 20.168H10.1307C6.37664 20.168 3.72581 16.4901 4.91295 12.9287L5.82962 10.1787C6.57825 7.93283 8.68001 6.41797 11.0474 6.41797H12.2857C14.6531 6.41797 16.7548 7.93283 17.5035 10.1787L18.3888 12.8346'
        stroke='#4D4D4D'
        stroke-width='1.5'
        stroke-linejoin='round'
      />
      <path
        d='M13.5787 6.41536L9.75459 6.41536L8.47027 4.94224C7.21128 3.49819 8.68002 1.33976 10.5181 1.93273L11.3686 2.20708C11.5622 2.26954 11.7711 2.26954 11.9647 2.20708L12.8152 1.93273C14.6533 1.33976 16.122 3.49819 14.863 4.94224L13.5787 6.41536Z'
        stroke='#4D4D4D'
        stroke-width='1.5'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export default SVGPrice;