import Image from 'next/image';

export default function ProductDataView({ params }: any) {
  const { id } = params;
  const product = id;
  // const product = await fetchProduct(id);
  const notfundImage = 'https://docs.nestjs.com/assets/logo-small-gradient.svg';

  return (
    <div className="flex gap-[20px] mt-5">
      <div className="w-1/4 bg-[--bgSoft] p-5 rounded-[10px] font-bold text-[--textSoft] max-h-max">
        <div className="w-full h-[300px] relative rounded-[10px] overflow-hidden mb-5">
          <Image src={notfundImage || '/noavatar.png'} alt="" fill />
        </div>
        {product.title}
      </div>
      <div className="w-3/4 bg-[--bgSoft] p-5 rounded-[10px]">
        {/* <form action={updateProduct} className={styles.form}> */}
        <form className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={product.id}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Title</label>
          <input
            type="text"
            name="title"
            placeholder={product.title}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Price</label>
          <input
            type="number"
            name="price"
            placeholder={product.price}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Stock</label>
          <input
            type="number"
            name="stock"
            placeholder={product.stock}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || 'color'}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Size</label>
          <textarea
            name="size"
            placeholder={product.size || 'size'}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <label className="text-[12px]">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-[12px]">Description</label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            placeholder={product.desc}
            className="p-5 border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text] my-[10px]"
          />
          <button
            className="w-full p-5 bg-[teal] text-[--text] border-none rounded-[5px] cursor-pointer mt-5"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
