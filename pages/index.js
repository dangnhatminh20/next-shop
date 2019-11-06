import Layout from "../components/MyLayout";
import Head from "next/head";

const Content = () => {
  return (
    <div>
      {/*Section1*/}
      <section className="section_1 chefs_info container-fluid row">
        <div className="row">
          <div className="col-6 chef_area">
            <div className="container-fluid">
              <h1 className="chef_heading">
                Đầu bếp <span style={{ color: "black" }}>của chúng tôi</span>
              </h1>
            </div>
            <div
              className="carousel slide"
              id="carouselExampleIndicators"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  className="active"
                  data-target="#carouselExampleIndicators"
                  data-slide-to={0}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={1}
                />
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={2}
                />
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="chef_content row">
                    <div className="col-4 avatar_chef">
                      <img src="images/home_Page/chef_small.png" alt="chef" />
                    </div>
                    <div className="col-8 name_chef">
                      <p className="name">Kano Kun</p>
                      <p className="role">Bếp trưởng</p>
                    </div>
                  </div>
                  <p className="content">
                    Với 20 năm kinh nghiệm của mình ở các nước trên toàn thế
                    giới, tôi sẽ mang tới những hương vị tuyệt vời nhất cho bạn!{" "}
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="chef_content row">
                    <div className="col-4 avatar_chef">
                      <img src="images/home_Page/chef_1.png" alt="chef" />
                    </div>
                    <div className="col-8 name_chef">
                      <p className="name">Taro Yuki</p>
                      <p className="role">Bếp phó</p>
                    </div>
                  </div>
                  <p className="content">
                    Với 20 năm kinh nghiệm của mình ở các nước trên toàn thế
                    giới, tôi sẽ mang tới những hương vị tuyệt vời nhất cho bạn!
                  </p>
                </div>
                <div className="carousel-item">
                  <div className="chef_content row">
                    <div className="col-4 avatar_chef">
                      <img src="images/home_Page/chef_2.png" alt="chef" />
                    </div>
                    <div className="col-8 name_chef">
                      <p className="name">Hana Yuki</p>
                      <p className="role">Bếp phó</p>
                    </div>
                  </div>
                  <p className="content">
                    Với 20 năm kinh nghiệm của mình ở các nước trên toàn thế
                    giới, tôi sẽ mang tới những hương vị tuyệt vời nhất cho bạn!{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 chef_image">
            <img src="images/home_Page/chef_big.png" alt="chef" />
          </div>
        </div>
      </section>
      {/*section2      */}
      <section className="section_2 gallery container-fluid">
        <div>
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}>Bộ sưu tập </span>của chúng tôi
          </p>
          <p className="content text-center">
            Với các đầu bếp hàng đầu thế giới, chúng tôi đã tạo ra những “tác
            phẩm nghệ thuật” !
          </p>
        </div>
        <div className="text-center">
          <div className="menu_section_2">
            <nav className="navbar">
              <ul className="navbar-nav d-flex flex-row slider">
                <li className="nav-item">
                  <a className="nav-link" href>
                    TẤT CẢ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    THỊT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    CÁ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    RAU CỦ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    KHAI VỊ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href>
                    TRÁNG MIỆNG
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* end grid container*/}
      </section>
      {/*section3      */}
      <section className="section_3 services container">
        <div>
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}>Dịch vụ </span>của chúng tôi
          </p>
          <p className="content text-center">
            Làm hài lòng khách hàng là điều chúng tôi đặt lên hàng đầu, khách
            hàng chính là người quyền lực nhất!
          </p>
        </div>
        <div className="service_content">
          <div className="row text-center">
            <div className="col-3 service">
              <img src="./images/section3/Rectangle1.png" alt />
              <p className="title">Bữa Sáng</p>
              <p className="content">Khởi động ngày mới tràn đầy năng lượng</p>
            </div>
            <div className="col-3 service">
              <img src="./images/section3/Rectangle2.png" alt />
              <p className="title">Bữa Trưa</p>
              <p className="content">Tiếp tục một ngày tràn đầy năng lượng</p>
            </div>
            <div className="col-3 service">
              <img src="./images/section3/Rectangle3.png" alt />
              <p className="title">Bữa Tối</p>
              <p className="content">Thưởng thức trọn vẹn món ăn</p>
            </div>
            <div className="col-3 service">
              <img src="./images/section3/Rectangle4.png" alt />
              <p className="title">Yêu Cầu</p>
              <p className="content">Phục vụ theo yêu cầu của riêng bạn</p>
            </div>
          </div>
        </div>
      </section>
      {/*section4      */}
      <section className="section_4 menu_restaurant container-fuild">
        <div>
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}> Thực đơn </span>của chúng tôi
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6 dish">
              <ul className="leaders">
                <li>
                  <span className="dish_name">Bít tết bò Kobe</span>
                  <span className="dish_info">150.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Gà nướng ngũ vị hương</span>
                  <span className="dish_info">180.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Gà cay phô mai</span>
                  <span className="dish_info">160.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Trứng tráng rau củ</span>
                  <span className="dish_info">190.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Sừng trâu hầm nhân sâm</span>
                  <span className="dish_info">120.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Đuôi lươn xào tỏi ớt</span>
                  <span className="dish_info">100.000VND</span>
                </li>
              </ul>
            </div>
            <div className="col-6 dish">
              <ul className="leaders">
                <li>
                  <span className="dish_name">Gà nướng khoai tây</span>
                  <span className="dish_info">150.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Rau củ quả luộc</span>
                  <span className="dish_info">150.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Sushi nướng</span>
                  <span className="dish_info">150.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Cải thảo xào me</span>
                  <span className="dish_info">150.000VND</span>
                </li>
                <li>
                  <span className="dish_name">Phô mai que</span>
                  <span className="dish_info">100.000VND</span>
                </li>
                <li>
                  <span className="dish_name">gác bếp nhân xâm</span>
                  <span className="dish_info">100.000VND</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center btn_detail">
          <a href="menu.html">
            <button
              className="btn btn-dark"
              type="submit"
              formAction="menu.html"
            >
              Xem chi tiết
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default function Index() {
  return (
    <Layout>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          media="screen"
          href="css/index.css"
        />
      </Head>
      <Content />
    </Layout>
  );
}
