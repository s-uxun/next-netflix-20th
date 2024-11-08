'use client'; // 사용자가 메뉴를 클릭하므로 클라이언트 컴포넌트로 처리
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import HomeIcon from '@public/icons/home.svg';
import SearchIcon from '@public/icons/search.svg';
import ComingIcon from '@public/icons/coming.svg';
import DownloadIcon from '@public/icons/download.svg';
import MoreIcon from '@public/icons/more.svg';

interface FooterProp {
  tab: number;
}

export default function Footer({ tab }: FooterProp) {
  const router = useRouter();
  const [isActive, setIsActive] = useState(tab); // 클릭하는 메뉴 id

  const handleClick = (id: number) => {
    setIsActive(id);
    switch (id) {
      case 1:
        router.push('/main');
        break;
      case 2:
        router.push('/search');
        break;
      default:
        router.push('/');
    }
  };

  const menus = [
    {
      id: 1,
      Icon: HomeIcon,
      name: 'Home',
      default: 'stroke-Gray',
      active: 'stroke-White',
    },
    {
      id: 2,
      Icon: SearchIcon,
      name: 'Search',
      default: 'stroke-Gray',
      active: 'stroke-White',
    },
    {
      id: 3,
      Icon: ComingIcon,
      name: 'Coming Soon',
      default: 'fill-Gray',
      active: 'fill-White',
    },
    {
      id: 4,
      Icon: DownloadIcon,
      name: 'Downloads',
      default: 'fill-Gray',
      active: 'fill-White',
    },
    {
      id: 5,
      Icon: MoreIcon,
      name: 'More',
      default: 'fill-Gray',
      active: 'fill-White',
    },
  ];

  return (
    <div className="flex flex-col w-[375px]">
      <span className="flex flex-row justify-around items-center bg-Black_Black w-full h-12">
        {menus.map((item) => (
          <div
            key={item.id}
            className="flex flex-col cursor-pointer w-[3.4rem] justify-center items-center"
            onClick={() => handleClick(item.id)}
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
        ))}
      </span>
    </div>
  );
}
