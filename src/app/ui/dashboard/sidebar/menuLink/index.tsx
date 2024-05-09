'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuLink({ item }: any) {
  const pathname = usePathname();

  const className = pathname === item.path ? 'bg-[#2E374A]' : '';

  return (
    <Link
      href={item.path}
      className={`${className} flex p-4 items-center gap-[10px] my-1 rounded-xl hover:bg-[#2E374A] active:bg-[#2E374A]`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
