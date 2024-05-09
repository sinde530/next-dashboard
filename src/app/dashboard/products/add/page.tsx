export default function Add() {
  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px] mt-5">
      {/* <form action={addProduct} className={styles.form}> */}
      <form className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        />
        <select
          name="cat"
          id="cat"
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-[45%]"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows={16}
          placeholder="Description"
          className="p-[30px] bg-[--bg] text-[--text] border-2 rounded-[5px] mb-[30px] w-full"
        />
        <button
          type="submit"
          className="w-full p-[30px] bg-[teal] text-[--text] border-none rounded-[5px] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
