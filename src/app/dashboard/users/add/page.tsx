export default function Add() {
  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px] mt-5">
      {/* <form action={addUser} */}
      <form className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value="false">Is Admin?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value="true">Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={16}
          placeholder="Address"
          className="p-[30px] bg-[--bg] text-[--text] border-2 border-[#2E374A] rounded-[5px] mb-[30px] w-full"
        />
        <button
          type="submit"
          className="w-full p-[30px] bg-[teal] border-none rounded-[5px] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
