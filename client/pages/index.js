import { withRouter } from "next/router";
import axios from "axios";
import CourseCard from "../components/cards/CourseCard";
import Head from "next/head";
import Link from "next/link";

const Index = ({ courses, router }) => {
  const head = () => (
    <Head>
      <title>
         VIETEDU.COM
      </title>
      <meta
        name="description"
        content=""
      />
      <link rel="canonical" href={`${process.env.DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`VIETEDU.COM | ${process.env.APP_NAME}`}
      />
      <meta
        property="og:description"
        content={`VIETEDU.COM | Free and Paid | ${process.env.APP_NAME}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta property="og:site_name" content={process.env.APP_NAME} />
      <meta property="og:image" content={`${process.env.DOMAIN}/default.jpg`} />
      <meta
        property="og:image:secure_url"
        content={`${process.env.DOMAIN}/default.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />
    </Head>
  );

  return (
    <>
      {head()}
      <>
  <header
  id="up"
  className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative"
  style={{ 
    backgroundImage:
      "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)"
  }}
>
  <div
    className="h-screen bg-opacity-50 bg-black flex items-center justify-center"
    style={{ background: "rgba(0,0,0,0.5)" }}
  >
    <div className="mx-2 text-center">
      <h1 className="text-gray-100 font-extrabold text-4xl xs:text-5xl md:text-6xl">
        <span className="text-white">VIETEDU</span>
        
      </h1>
      
      <h2 className="text-gray-200 font-extrabold text-4xl xs:text-4xl md:text-5xl leading-tight">
       <p class="text-4xl font-medium tracking-wider text-gray-300">Không có kho báu nào quý bằng học thức</p>
       <p class="text-4xl font-medium tracking-wider text-gray-300">Hãy tích lũy nó bất cứ lúc nào có thể.</p>

      </h2>
      <div className="inline-flex">
        <button className="p-2 my-5 mx-2 bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded border-2 border-transparent hover:border-indigo-800 shadow-md transition duration-500 md:text-xl">
         <Link href="/register">
          Đăng ký ngay!
          </Link>
        </button>
        
      </div>
    </div>
  </div>
</header>

</>


<section className="bg-white">
  <div className="max-w-5xl px-6 py-16 mx-auto">
    <div className="items-center md:flex md:space-x-6">
      <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold text-gray-800">
          GIỚI THIỆU VIETEDU<br />
        </h3>
        <h4 className="max-w-md mt-4 text-gray-600 text-xl">
        Trung tâm VietEdu là trung tâm thương mại giáo dục nhằm giúp đỡ các thầy cô và các học sinh trao đổi các kiến thức, 
        cũng như các bài học bổ ích về các kỹ thuật công nghệ trực tuyến hiện nay. 
        VietEdu mong muốn mang đến các khóa học chất lượng cao, chi phí hợp lý và quan trọng nhất 
        là hiệu quả đối với nhu cầu của học viên.
        </h4>
        <a href="#" className="block mt-8 text-indigo-700 underline">
          Tìm hiểu thêm
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:w-1/2">
        <div className="flex items-center justify-center">
          <div className="max-w-md">
            <img
              className="object-cover object-center w-full rounded-md shadow"
              style={{ height: 500 }}
              src="https://images.unsplash.com/photo-1604872428066-4407f25e6d2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




<section className="bg-gray-100">
  
<div className="max-w-5xl px-6 py-16 mx-auto text-center bg-gray-100">
<div className="text-center max-w-xl mx-auto">
<h1 className="text-5xl md:text-6xl font-bold mb-5 text-gray-600">
            Khóa Học <br />
           
          </h1>
</div>  
        <div className="row pt-2">
          {courses.map((course) => (
            <div key={course._id} className="col-md-4">
              <CourseCard key={course._id} course={course} />
              
            </div>
          ))}
        </div>
      </div>  
</section>
<>
  {/* component */}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')"
    }}
  />
    <div className="w-full bg-white border-t border-b border-gray-200 px-5  text-gray-800">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-gray-600">
            Nhận xét của <br />
            học viên!
          </h1>
          
          <div className="text-center mb-10">
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-40 h-1 rounded-full bg-indigo-500" />
            <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1" />
            <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1" />
          </div>
        </div>
        <div className="-mx-3 md:flex items-start">
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=15" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Nguyen Tan Loc
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Thật tuyệt vời khi được biết đến trung tâm, nơi đã giúp đỡ em về tiếng Anh.
                   Em cảm ơn nhiều sự nhiệt tình của các cô các thầy đã giúp em hoàn thành tốt các khóa học ở trung tâm
                 
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=14" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Nguyen Truong Hoang Hieu
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Thầy cô ở đây dạy học rất nhiệt tình và luôn hỗ trợ sinh viên tối đa 
                  các bạn có thể yên tâm về chất lượng cũng như sự tận tâm của thầy cô ở trung tâm này
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=13" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Truong Viet Hoang
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Từ khi biết tới trang web này thì em cũng biết được nhiều công nghệ và những cái tools bổ ích cảm ơn mọi người.

                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=1" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Mai Nguyen Anh Thu
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Cảm ơn trung tâm đã chia sẽ những khóa học hay và bổ ích.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=5" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Phan Vinh Loc
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Cảm ơn thầy cô đã lập nên trung tâm. Đây không phải là một trung tâm kinh doanh tri thức 
                  nhưng là một trung tâm của những tâm hồn khao khát cho đi giảng dạy hết lòng hết sức vì học viên.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=6" alt />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-sm uppercase text-gray-600">
                    Nguyen Dinh Thien Phuoc
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-sm leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Cảm ơn thầy cô đã giúp đỡ em thời gian vừa qua bây giờ em có thể tự tin sử 
                  dụng những công nghệ và kỹ thuật mới nhất.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 
</>


<section className="bg-gray-100">
  <div className="max-w-5xl px-6 py-16 mx-auto text-center">
  <h1 className="text-5xl md:text-6xl font-bold mb-5 text-gray-600">
            Team members <br />
          </h1>
    <p className="max-w-lg mx-auto mt-4 text-gray-600">
      Nhóm chúng tôi mong muốn website này mang lại thật nhiều lợi ích cho mọi người trong công động, đặc biết là đối với giáo dục hiện nay và cả tương lai.
    </p>
    <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src="./images/MsTho.jpg"
        />
        <h3 className="mt-2 font-medium text-gray-700">Ms. Mai Anh Tho</h3>
        <p className="text-sm text-gray-600">Intructor</p>
      </div>
      <div>
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-9/p843x403/194163574_1476588169343448_3392736782266940466_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=JjGORrRSq7cAX8GG8r9&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=621cce7bfaaf45f1c06a1b5c2dbf4735&oe=60E48817"
        />
        <h3 className="mt-2 font-medium text-gray-700">Nguyen Van Dan</h3>
        <p className="text-sm text-gray-600">Leader</p>
      </div>
      <div>
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src="./images/jason.jpg"
        />
        <h3 className="mt-2 font-medium text-gray-700">Nguyen Tan Phat</h3>
        <p className="text-sm text-gray-600">Back End developer</p>
      </div>
      <div>
        <img
          className="object-cover object-center w-full h-64 rounded-md shadow"
          src="./images/oliver.jpg"
          alt="" 
        />
        <h3 className="mt-2 font-medium text-gray-700">Doan Viet Thuan</h3>
        <p className="text-sm text-gray-600">Front End developer</p>
      </div>
    </div>
  </div>
</section>






      
    </>

    
  );
};



export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API}/courses`);
  // console.log("DATA LENGTH =====> ", data.length);
  return {
    props: {
      courses: data,
    },
  };
}

export default withRouter(Index);
