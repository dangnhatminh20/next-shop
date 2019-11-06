import { useRouter } from "next/router";
import Layout from "../components/MyLayout";
import Head from "next/head"

const Content = () => {
  const router = useRouter();
  return (
    <div>
      {/* Navbar*/}
      <div className="menu_blog">
        <nav className="navbar navbar-expand navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TẤT CẢ BÀI VIẾT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  KHÁM PHÁ ẨM THỰC &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CÔNG THỨC NẤU ĂN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
              </li>
              <li>
                <form className="form-inline">
                  <input
                    className="search-box form-control"
                    type="text"
                    placeholder="Tìm kiếm"
                    aria-describedby="basic-addon2"
                  />
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/*section1*/}
      <section className="section_1 container-fluid">
        <div className="post">
          <p className="post_tag text-center">CÔNG THỨC NẤU ĂN</p>
          <p className="post_title text-center">BÒ BÍT TẾT KOBE</p>
          <p className="post_subtitle text-center">
            Ngày 8 /9/2018, by NhatMinh, 2 bình luận
          </p>
          <div className="post_image text-center">
            <img src="./images/blog_Page/1.png" alt="image" />
          </div>
          <div>
            <p className="post_content">
              Từng miếng bò bít tết ngon thơm mềm, nóng hổi, còn mọng nước,
              trông hấp dẫn làm sao. Không chỉ có vậy, Moo Beef Steak còn rất đa
              dạng các loại nước sốt ăn kèm với bò bít tết như: sốt phô mai
              xanh, sốt nấm, sốt tiêu đen, sốt vang đỏ hay sốt tiêu xanh,... có
              thể lựa chọn theo sở thích của mình.
            </p>
            <a href="singerBlog.html">
              <p className="post_detail">Xem chi tiết ...</p>
            </a>
          </div>
          <hr />
        </div>
        <div className="post">
          <p className="post_tag text-center">CÔNG THỨC NẤU ĂN</p>
          <p className="post_title text-center">TRAI LUỘC CHANH XẢ</p>
          <p className="post_subtitle text-center">
            Ngày 8 /9/2018, by NhatMinh, 2 bình luận
          </p>
          <div className="post_image text-center">
            <img src="./images/about_Page/blog_post.png" alt="image" />
          </div>
          <div>
            <p className="post_content">
              Thịt trai là một khối cứng giòn, có mùi thơm ngon và rất bổ dưỡng,
              là một vị thuốc quý bởi vị mặn, tính bình, có tác dụng trong việc
              tăng khí, hạ nhiệt, bổ thận, chống suy nhược cơ thể. Bên cạnh đó
              còn có tác dụng bổ mắt, tráng dương, tăng cường sinh lực cho phái
              mạnh.
            </p>
            <p className="post_detail">Xem chi tiết ...</p>
          </div>
          <hr />
        </div>
        <div className="text-center btn_detail">
          <button className="btn" type="button">
            Xem thêm
          </button>
        </div>
      </section>
    </div>
  );
};

const Page = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" type="text/css" media="screen" href="css/blog.css" />
    </Head>
    <Content />
  </Layout>
);

export default Page;
