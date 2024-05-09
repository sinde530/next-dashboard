'use client';

import Search from '@/app/ui/dashboard/search';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const products = [
  {
    id: 1,
    title: 'product 1',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    desc: 'this is test1.',
    createdAt: '2024.04.13',
    price: 19000,
    stock: 30,
  },
  {
    id: 2,
    title: 'product 2',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    desc: 'this is test2.',
    createdAt: '2024.04.23',
    price: 24000,
    stock: 23,
  },
  {
    id: 3,
    title: 'product 3',
    img: 'https://docs.nestjs.com/assets/logo-small-gradient.svg',
    desc: 'this is test3.',
    createdAt: '2024.04.03',
    price: 4000,
    stock: 10,
  },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(products);

  useEffect(() => {
    const results = products.filter((products) =>
      products.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(results);
  }, [searchTerm]);

  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px] mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." onSearch={setSearchTerm} />
        <Link href="/dashboard/products/add">
          <button className="p-[10px] bg-[#5D57C9] text-[--text] border-none rounded-[5px] cursor-pointer">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Title</td>
            <td className="p-[10px]">Description</td>
            <td className="p-[10px]">Price</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Stock</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((product) => (
            <tr key={product.id}>
              <td className="p-[10px]">
                <div className="flex items-center gap-[10px]">
                  <Image
                    src={product.img || '/noproduct.jpg'}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-[50%] object-cover"
                  />
                  {product.title}
                </div>
              </td>
              <td className="p-[10px]">{product.desc}</td>
              <td className="p-[10px]">${product.price}</td>
              <td className="p-[10px]">{product.createdAt?.toString().slice(0, 16)}</td>
              <td className="p-[10px]">{product.stock}</td>
              <td className="p-[10px]">
                <div className="flex gap-[10px]">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="py-[10px] px-[10px] rounded-[5px] text-[--text] border-none cursor-pointer bg-[teal]">
                      View
                    </button>
                  </Link>
                  {/* <form action={deleteProduct}> */}
                  <form>
                    <input type="hidden" name="id" value={product.id} />
                    <button className="py-[10px] px-[10px] rounded-[5px] text-[--text] border-none cursor-pointer bg-[crimson]">
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
