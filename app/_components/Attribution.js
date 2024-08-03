/** @format */

import Link from "next/link";

function Attribution() {
  return (
    <div className='fixed left-0 top-0 p-4 text-[0.625rem]'>
      <p className='attribution'>
        Challenge by&nbsp;
        <Link
          className='underline'
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
        >
          Frontend Mentor
        </Link>
        . <br />
        Coded by{" "}
        <Link
          href='https://github.com/luAr26'
          className='underline'
          target='_blank'
        >
          Raul
        </Link>
        .
      </p>
    </div>
  );
}

export default Attribution;
