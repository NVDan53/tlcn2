import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // context
  const {
    state: { user },
    dispatch,
  } = useContext(Context);

  // redirect if already logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      let { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log(data);
      if (data.ok) {
        // toast("Registration successful. Please login");
        toast("Please check your email and click on the activation link.");
        setName("");
        setEmail("");
        setPassword("");
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  return (
    <>
    {/* component */}
    <div
      className="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80)"
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Đăng ký thành viên!</h2>
          <p className="mt-2 text-sm text-gray-600">
          VietEdu là cộng đồng học tập trực tuyến miễn phí. Đăng ký để cùng nhau học tập, đóng góp và chia sẻ kiến thức 
          </p>
        </div>
       
        
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Họ và tên
            </label>
            <input
              className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập họ và tên của bạn"
              required
            />
          </div>
          <div className="relative">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email của bạn"
              required
            />
          </div>
          <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Password
            </label>
            <input
              className="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu của bạn"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                            font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg 
                            cursor-pointer transition ease-in duration-300"
                            disabled={!name || !email || !password || loading}
            >
              {loading ? <SyncOutlined spin /> : "ĐĂNG KÝ"}
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">Bạn đã có tài khoản?{" "}
            <Link href="/login">
            <a href="#" className="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300">
              Đăng nhập
            </a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  </>
  );
};

export default Register;
