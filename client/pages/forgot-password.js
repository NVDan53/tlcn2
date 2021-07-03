import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
  const [email, setEmail] = useState("doanvietthuan1005@gmail.com");
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // context
  const {
    state: { user },
    dispatch,
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if already logged in
  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // send code to user email
      let { data } = await axios.post(`/api/forgot-password`, {
        email,
      });
      // shoe code input field
      setSuccess(true);
      setLoading(false);
      // ask user to check email and enter code
      toast("Check your email for the secret code.");
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // send code to user email
      let { data } = await axios.post(`/api/reset-password`, {
        email,
        code,
        newPassword,
      });
      setEmail("");
      setCode("");
      setNewPassword("");
      setLoading(false);
      // ask user to check email and enter code
      toast("Great! Now you can login with your new password");
      router.push("/login");
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
          "url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
      }}
    >
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">KHÔI PHỤC MẬT KHẨU</h2>
          <p className="mt-2 text-sm text-gray-600">
            Hãy điền thông tin bên dưới
          </p>
        </div>
        
       
        <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={success ? handleResetPassword : handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="relative">

            <label className="text-sm font-bold text-gray-700 tracking-wide">
              Email
            </label>
            <input
              className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
            {success && (
            <>
             <div className="mt-8 content-center">
            <label className="text-sm font-bold text-gray-700 tracking-wide">Nhập mã đã gửi qua mail</label>
              <input
                type="text"
                className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="********"
                required
              />
            </div>
            <div className="mt-8 content-center">
              <label className="text-sm font-bold text-gray-700 tracking-wide">Nhập mật khẩu mới</label>
              <input
                type="password"
                className=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="********"
                required
              />
              </div>
            </>
            
          )}
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-gray-100 p-4  rounded-full tracking-wide
                            font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
                            disabled={!email || loading}
            >
              {loading ? <SyncOutlined spin /> : "Khôi phục mật khẩu"}
            </button>
          </div>
         
        </form>
      </div>
    </div>
  </>
  
  );
};

export default ForgotPassword;
