export default function Login() {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      {/* <form action={formAction} */}
      <form className="bg-[--bgSoft] p-[50px] rounded-[10px] w-[500px] h-[500px] flex flex-col items-center justify-center gap-[30px]">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="w-full p-[30px] border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text]"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="w-full p-[30px] border-2 border-[#2E374A] rounded-[5px] bg-[--bg] text-[--text]"
        />
        <button
          type="submit"
          className="w-full p-[30px] bg-[teal] text-[--text] border-none cursor-pointer rounded-[5px]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
