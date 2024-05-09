import Image from 'next/image';

export default async function UserDataView({ params }: any) {
  const { id } = params;
  const user = id;
  // const user = await fetchUser(id);
  const notfundImage = 'https://docs.nestjs.com/assets/logo-small-gradient.svg';

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="w-1/4 bg-[--bgSoft] p-5 rounded-[10px] font-bold text-[--textSoft] max-h-max">
        <div className="w-full h-[300px] relative rounded-[10px] overflow-hidden mb-5">
          <Image src={user.img || notfundImage} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="w-3/4 bg-[--bgSoft] p-5 rounded-[10px]">
        {/* <form action={updateUser} className={styles.form}> */}
        <form className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={user.id}
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.username}
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Password</label>
          <input
            type="password"
            name="password"
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Phone</label>
          <input
            type="text"
            name="phone"
            placeholder={user.phone}
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Address</label>
          <textarea
            name="address"
            placeholder={user.address}
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          >
            <option value="true" selected={user.isAdmin}>
              Yes
            </option>
            <option value="false" selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 bg-[--bg] border-2 border-[#2E374A] rounded-[5px] text-[--text] my-[10px]"
          >
            <option value="true" selected={user.isActive}>
              Yes
            </option>
            <option value="false" selected={!user.isActive}>
              No
            </option>
          </select>
          <button className="w-full p-5 bg-[teal] text-[--text] border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
