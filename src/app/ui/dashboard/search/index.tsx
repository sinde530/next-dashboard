'use client';

import { MdSearch } from 'react-icons/md';

export default function Search({ placeholder, onSearch }: any) {
  const handleSearch = (event: any) => {
    onSearch(event.target.value);
  };

  return (
    <div className="flex items-center gap-[10px] bg-[#2E374A] p-[10px] rounded-[10px] w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-none text-[--text] outline-none"
        onChange={handleSearch}
      />
    </div>
  );
}
