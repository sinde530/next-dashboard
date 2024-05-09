'use client';

import Search from '@/app/ui/dashboard/search';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const users = [
  {
    id: 1,
    email: 'test1@naver.com',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    username: 'test1',
    createdAt: '2024.04.13',
    isAdmin: null,
    isActive: 'active',
  },
  {
    id: 2,
    email: 'test2@naver.com',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    username: 'test2',
    createdAt: '2024.04.23',
    isAdmin: 1,
    isActive: null,
  },
  {
    id: 3,
    email: 'test3@naver.com',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    username: 'test3',
    createdAt: '2024.04.03',
    isAdmin: null,
    isActive: 'active',
  },
];

export default function Users() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    const results = users.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm]);

  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px] mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." onSearch={setSearchTerm} />
        <Link href="/dashboard/users/add">
          <button className="p-[10px] bg-[#5D57C9] text-[--text] border-none rounded-[5px] cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Email</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Role</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="p-[10px]">
                <div className="flex items-center gap-[10px]">
                  <Image
                    src={user.img || '/noavatar.png'}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-[50%] object-cover"
                  />
                  {user.username}
                </div>
              </td>
              <td className="p-[10px]">{user.email}</td>
              <td className="p-[10px]">{user.createdAt?.toString().slice(0, 16)}</td>
              <td className="p-[10px]">{user.isAdmin ? 'Admin' : 'Client'}</td>
              <td className="p-[10px]">{user.isActive ? 'active' : 'passive'}</td>
              <td className="p-[10px]">
                <div className="flex gap-[10px]">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className="px-[10px] py-[10px] rounded-[5px] text-[--text] border-none cursor-pointer bg-[teal]">
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteUser}> */}
                  <form>
                    <input type="hidden" name="id" value={user.id} />
                    <button className="px-[10px] py-[10px] rounded-[5px] text-[--text] border-none cursor-pointer bg-[crimson]">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * .container {
  background-color: var(--bgSoft);
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}

.form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.form input,
.form textarea,
.form select {
  padding: 30px;
  background-color: var(--bg);
  color: var(--text);
  border: 2px solid #2e374a;
  border-radius: 5px;
  margin-bottom: 30px;
}

.form input, .form select {
  width: 45%;
}

.form textarea{
  width: 100%;
}

.form button{
  width: 100%;
  padding: 30px;
  background-color: teal;
  color: var(--text);
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
 */
