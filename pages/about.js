import { useRouter } from "next/router";
import Layout from "../components/MyLayout";
import Head from "next/head";

const Content = () => {
  const router = useRouter();
  return (
    <div>
      {/*section1*/}
      <section className="section_1 container-fluid">
        <div>
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}>Giới thiệu </span>về chúng tôi
          </p>
          <p className="content text-center">
            Với các đầu bếp hàng đầu thế giới, chúng tôi đã tạo ra những “tác
            phẩm nghệ thuật” !
          </p>
          <div className="row about_content container-fluid">
            <div className="col-sm-6">
              <p className="content_left">
                Ẩm thực nơi đây là sự kết hợp hài hòa tinh tế giữa hương vị đặc
                sắc của những món ăn từ đất nước Mêhicô vui nhộn, đất nước Italy
                cổ kính và từ xứ sở tràn ngập nắng mặt trời của những chú
                Kangaroo. Đặc biệt, nhà hàng còn góp phần tăng thêm hương vị
                tuyệt vời cho những món ăn bằng những loại thức uống hấp dẫn như
                bia mát lạnh và những loại rượu vang ngon nức tiếng từ Úc &amp;
                Nam Mỹ.
              </p>
            </div>
            <div className="col-sm-6">
              <p className="content_right">
                Đến nhà hàng Yummy, thực khách sẽ nhớ mãi hương vị khó quên của
                món sườn khổng lồ nướng mềm phết sốt BBQ kiểu Mỹ. Món ăn này
                được mọi lứa tuổi đặc biệt yêu thích. Ngoài ra, nhà hàng còn
                mang đến thực đơn phong phú và hợp lý về giá cả, không những phù
                hợp cho khách nước ngoài mà còn được các bạn trẻ Việt Nam vô
                cùng hâm mộ và ủng hộ nhiệt tình.
              </p>
            </div>
          </div>
        </div>
        <div className="child-page-listing">
          <div className="grid-container">
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Mokey.D.Luffy
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef1.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Zoro
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef2.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Sanji
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef3.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Nami
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef2.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Uppsop
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef3.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
            <article className="location-listing" id={3685}>
              <a className="location-title" href="#">
                Franky
              </a>
              <div className="location-image">
                <a href="#">
                  <img
                    width={300}
                    height={169}
                    src="./images/about_Page/chef4.jpg"
                    alt="Name Chef"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section_2 container-fluid">
        <div>
          <p className="content text-center">
            Với không gian thoải mái, thân thiện, sự phục vụ nhiệt tình chuyên
            nghiệp, Yummy chính là sự lựa chọn tuyệt vời giúp bạn thư giãn nhẹ
            nhàng sau những giờ phút hối hả và bận rộn của cuộc sống hàng ngày.{" "}
          </p>
        </div>
      </section>
      <section className="section_3 container-fluid">
        <div>
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}>Bài viết </span>của chúng tôi
          </p>
          <p className="content text-center">
            Hy vọng bài viết của chúng tôi sẽ giúp bạn có được gợi ý về không
            gian nhà hàng lý tưởng cho buổi hẹn hay dịp tổ chức tiệc đặc biệt
            sắp tới. Đừng quên chia sẻ cảm nhận của bạn khi đến với nhà hàng
            Yummy cùng chúng tôi nhé!
          </p>
        </div>
        <hr />
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
              Mấy năm gần đây, nấm trở thành một món ăn được người tiêu dùng ưa
              thích do "độ sạch" và "độ dinh dưỡng" cao của sản phẩm. Chỉ cần
              gia giảm một chút nguyên liệu hoặc gia vị từ những công thức này,
              bạn còn có thể chế biến thành những món ăn chay tuyệt hảo.
            </p>
            <a href="singerBlog.html">
              <p className="post_detail">Xem chi tiết ...</p>
            </a>
          </div>
          <hr />
        </div>
        <div className="text-center btn_detail">
          <a href="blog.html">
            <button className="btn" type="button">
              Xem thêm
            </button>
          </a>
        </div>
      </section>
      <section className="section_4 container-fluid">
        <div className="review">
          <p className="heading text-center">
            {" "}
            <span style={{ color: "#FD5B00" }}>Nhận xét </span>của khách hàng
          </p>
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
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="content text-center">
                Tinh thần, thái độ của anh chị em nhân viên nhà hàng hết sức
                nhiệt tình, rất tốt và chu đáo, anh Minh giám đốc cũng hết sức
                tận tình với khách hàng. Thức ăn đảm bảo an toàn thực phẩm, các
                món ăn ngon và đầy đặn, hình thức trang trí cũng rất đẹp.
              </p>
              <div className="reviewers row">
                <div className="col-4 avatar">
                  <img src="./images/about_Page/reviewer1.jpg" />
                </div>
                <div className="col-8 name_reviewers">
                  <p className="name">Suni Hạ Linh</p>
                  <p className="role">Ca sỹ</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <p className="content text-center">
                Tinh thần, thái độ của anh chị em nhân viên nhà hàng hết sức
                nhiệt tình, rất tốt và chu đáo, anh Minh giám đốc cũng hết sức
                tận tình với khách hàng. Thức ăn đảm bảo an toàn thực phẩm, các
                món ăn ngon và đầy đặn, hình thức trang trí cũng rất đẹp.
              </p>
              <div className="reviewers row">
                <div className="col-4 avatar">
                  <img src="./images/about_Page/sontung.png" />
                </div>
                <div className="col-8 name_reviewers">
                  <p className="name">Sơn Tùng MTP</p>
                  <p className="role">Ca sỹ</p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <p className="content text-center">
                Tinh thần, thái độ của anh chị em nhân viên nhà hàng hết sức
                nhiệt tình, rất tốt và chu đáo, anh Minh giám đốc cũng hết sức
                tận tình với khách hàng. Thức ăn đảm bảo an toàn thực phẩm, các
                món ăn ngon và đầy đặn, hình thức trang trí cũng rất đẹp.
              </p>
              <div className="reviewers row">
                <div className="col-4 avatar">
                  <img src="./images/about_Page/reviewer1.jpg" />
                </div>
                <div className="col-8 name_reviewers">
                  <p className="name">Suni Hạ Linh</p>
                  <p className="role">Ca sỹ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Page = () => (
  <Layout>
    <Head>
      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="css/about.css"
      />
    </Head>
    <Content />
  </Layout>
);

export default Page;
