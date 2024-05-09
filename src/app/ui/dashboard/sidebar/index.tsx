import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md';
import MenuLink from './menuLink';
import Image from 'next/image';

export default function Sidebar() {
  const image = 'https://docs.nestjs.com/assets/logo-small-gradient.svg';
  // const image =
  //   'https://mml.pstatic.net/www/mobile/edit/20240507_1095/upload_1715044214109txxgd.gif';
  const menuItems = [
    {
      title: 'Pages',
      list: [
        {
          title: 'Dashboard',
          path: '/dashboard',
          icon: <MdDashboard />,
        },
        {
          title: 'Users',
          path: '/dashboard/users',
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: 'Products',
          path: '/dashboard/products',
          icon: <MdShoppingBag />,
        },
        {
          title: 'Transactions',
          path: '/dashboard/transactions',
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: 'Analytics',
      list: [
        {
          title: 'Revenue',
          path: '/dashboard/revenue',
          icon: <MdWork />,
        },
        {
          title: 'Reports',
          path: '/dashboard/reports',
          icon: <MdAnalytics />,
        },
        {
          title: 'Teams',
          path: '/dashboard/teams',
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: 'User',
      list: [
        {
          title: 'Settings',
          path: '/dashboard/settings',
          icon: <MdOutlineSettings />,
        },
        {
          title: 'Help',
          path: '/dashboard/help',
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  return (
    <div className="sticky top-10">
      <div className="flex items-center gap-5 mb-5">
        <Image
          src={image || '/noavatar.png'}
          alt="not found..."
          width="50"
          height="50"
          className="rounded-full object-cover h-full"
        />
      </div>

      <ul className="list-none">
        {menuItems.map((menu) => (
          <li key={menu.title}>
            <span className="text-[--textSoft] font-bold text-sm my-[10px]">{menu.title}</span>
            {menu.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>

      <form>
        <button className="flex p-4 items-center gap-[10px] my-1 rounded-xl hover:bg-[#2E374A] w-full">
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
}
