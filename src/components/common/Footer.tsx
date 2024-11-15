'use client';
import React, { useState, memo } from 'react';
import Link from 'next/link';

import HomeIcon from '@public/icons/home.svg';
import SearchIcon from '@public/icons/search.svg';
import ComingIcon from '@public/icons/coming.svg';
import DownloadIcon from '@public/icons/download.svg';
import MoreIcon from '@public/icons/more.svg';

interface FooterProp {
  tab: number;
}

function Footer({ tab }: FooterProp) {
  const [isActive, setIsActive] = useState(tab); // 클릭하는 메뉴 id

  const menus = [
    {
      id: 1,
      Icon: HomeIcon,
      name: 'Home',
      href: '/main',
      default: 'stroke-Gray',
      active: 'stroke-White',
    },
    {
      id: 2,
      Icon: SearchIcon,
      name: 'Search',
      href: '/search',
      default: 'stroke-Gray',
      active: 'stroke-White',
    },
    {
      id: 3,
      Icon: ComingIcon,
      name: 'Coming Soon',
      href: '/comingsoon',
      default: 'fill-Gray',
      active: 'fill-White',
    },
    {
      id: 4,
      Icon: DownloadIcon,
      name: 'Downloads',
      href: '/downloads',
      default: 'fill-Gray',
      active: 'fill-White',
    },
    {
      id: 5,
      Icon: MoreIcon,
      name: 'More',
      href: '/more',
      default: 'fill-Gray',
      active: 'fill-White',
    },
  ];

  return (
    <div className="flex flex-col w-[375px]">
      <span className="flex flex-row justify-around items-center bg-Black_Black w-full h-12">
        {menus.map((item) => (
          <Link key={item.id} href={item.href} passHref>
            <div
              key={item.id}
              className="flex flex-col cursor-pointer w-[3.4rem] justify-center items-center"
              onClick={() => setIsActive(item.id)}
            >
              <item.Icon
                className={`w-6 h-6 ${item.id === isActive ? item.active : item.default}`}
              />
              <div
                className={`${item.id === isActive ? 'text-White' : 'text-Gray'} text-[0.5125rem]`}
              >
                {item.name}
              </div>
            </div>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default memo(Footer);
