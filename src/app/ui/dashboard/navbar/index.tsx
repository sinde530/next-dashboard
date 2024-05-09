'use client';

import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="p-5 rounded-xl bg-[--bgSoft] flex items-center justify-between">
      <div className="text-[--textSoft] font-bold capitalize">{pathname.split('/').pop()}</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-3 bg-[#2e374a] p-3 rounded-xl">
          <MdSearch />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent rounded-none text-[--text]"
          />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
}
