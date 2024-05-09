import Image from 'next/image';

const Transactions = () => {
  const image = 'https://docs.nestjs.com/assets/logo-small-gradient.svg';

  return (
    <div className="bg-[--bgSoft] p-5 rounded-[10px]">
      <h2 className="mb-5 font-extralight text-[--textSoft] text-xl">Latest Transactions</h2>
      <table className="p-[10px] w-full">
        <thead>
          <tr>
            <td className="p-10px">Name</td>
            <td className="p-10px">Status</td>
            <td className="p-10px">Date</td>
            <td className="p-10px">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-10px">
              <div className="flex gap-[10px] items-center py-2">
                <Image
                  src={image}
                  alt="not found..."
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-10px">
              <span className="p-[5px] rounded-[5px] size-[14px] text-[#FFFFFF] bg-[#F7CB7375]">
                Pending
              </span>
            </td>
            <td className="p-10px">2024.02.14</td>
            <td className="p-10px">$3.200</td>
          </tr>
          <tr>
            <td className="p-10px">
              <div className="flex gap-[10px] items-center py-2">
                <Image
                  src={image}
                  alt="not found..."
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-10px">
              <span className="p-[5px] rounded-[5px] size-[14px] text-[#FFFFFF] bg-[#AFD6EE75]">
                Done
              </span>
            </td>
            <td className="p-10px">2024.02.14</td>
            <td className="p-10px">$3.200</td>
          </tr>
          <tr>
            <td className="p-10px">
              <div className="flex gap-[10px] items-center py-2">
                <Image
                  src={image}
                  alt="not found..."
                  width={40}
                  height={40}
                  className="object-cover rounded-[50%]"
                />
                John Doe
              </div>
            </td>
            <td className="p-10px">
              <span className="p-[5px] rounded-[5px] size-[14px] text-[#FFFFFF] bg-[#F7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-10px">2024.02.14</td>
            <td className="p-10px">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
