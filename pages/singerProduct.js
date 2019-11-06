import { useRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import Head from "next/head";

const Content = () => {
  const router = useRouter();
  return (
    <div>
      <div>
        <section className="section_1 container-fluid">
          <div className="product_area">
            <div className="main_product row">
              <div className="col-6 image_area">
                <div className="slider-for">
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp5.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp1.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp2.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp3.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp4.jpeg"
                      alt="Xem chi tiết"
                    />
                  </div>
                </div>
                <div className="slider-nav">
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp5.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp1.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp2.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp3.jpg"
                      alt="Xem chi tiết"
                    />
                  </div>
                  <div>
                    <img
                      width={300}
                      height={169}
                      src="images/singerProduct_Page/sp4.jpeg"
                      alt="Xem chi tiết"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 product_content_area">
                <p className="name_product">Bít Tết Bò Kobe</p>
                <p className="price_product">150.000 vnd</p>
                <p className="sub_product">
                  Bò bít tết là 1 món ăn được rất nhiếu người ưa chuộng, bởi mùi
                  vị thơm ngon ngọt của miếng thịt bò kết hợp với nước sốt khiến
                  ai cũng mê mẩn. Món bò bít tết rất dễ làm , bạn có thể làm bò
                  bít tết tại nhà hoặc có thưởng thức tại các nhà hàng .
                </p>
                <hr />
                <p className="ingredients">Thành phần chính:</p>
                <p className="igd">- 500g bò Kobe</p>
                <p className="igd">- Kiwi</p>
                <p className="igd">- Hạt điều</p>
                <p />
                <div className="quantity d-flex pt-2">
                  <button className="qty-decrease" onclick type="button">
                    -
                  </button>
                  <input
                    id="qty"
                    type="text"
                    name="quantity"
                    defaultValue={1}
                    size={4}
                  />
                  <button className="qty-increase" onclick type="button">
                    +
                  </button>
                  <div className="btn_chose">
                    <a href="cart.html">
                      <button className="btn" type="submit">
                        Thêm vào giỏ hàng
                      </button>
                    </a>
                  </div>
                  <div className="btn_return">
                    <a href="shop.html">
                      <button className="btn" type="submit">
                        Tiếp tục mua hàng
                      </button>
                    </a>
                  </div>
                </div>
                <hr />
                <div className="tag">Tags: Món chính</div>
              </div>
            </div>
          </div>
        </section>
        <section className="section_2 container">
          <div className="comment">BÌNH LUẬN</div>
          <hr />
          <div className="row comment_area">
            <div className="col-1 avatar_comter">
              <img src="images/singerProduct_Page/sontung.png" alt />
            </div>
            <div className="col-11 form_comment">
              <div className="vote">
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
                <span className="fa fa-star checked" />
              </div>
              <div className="name_comment">Sơn Tùng M-TP</div>
              <div className="date_comment">8/8/2019</div>
              <div className="content_comment">
                Món này quá ngon luôn. Tôi ăn hoài mà không thấy chán à. Mang
                một con bò đến đây cho tôi!!! Các bạn nhất định phải thử ăn qua
                món này nhé. Sky ơi!
              </div>
            </div>
          </div>
          <hr />
          <div className="post_comment">
            Để lại đánh giá của bạn
            <hr />
            <div className="row">
              <div className="col-6 form-group">
                <label htmlFor>Tên</label>
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Nhập tên gọi của bạn"
                />
              </div>
              <div className="col-6 form-group">
                <label htmlFor>Email</label>
                <input
                  className="form-control"
                  id="exampleInputEmail1"
                  type="email"
                  aria-describedby="emailHelp"
                  placeholder="Nhập địa chỉ Email"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor>Bình luận của bạn</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                placeholder="Viết bình luận"
                defaultValue={""}
              />
            </div>
            <div className="text-left">
              <div className="btn_chose">
                <button className="btn" type="submit">
                  Hoàn thành
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section_3 container">
          <div className="title">SẢN PHẨM LIÊN QUAN</div>
          <hr />
          <div className="card-deck row">
            <div className="col-md-4 col-lg-3 col-sm-6">
              <div className="card">
                <div className="hover_area">
                  <img
                    className="card-img-top"
                    src="./images/shop_Page/sp5.jpg"
                    alt="Card image cap"
                  />
                  <div className="hover_card">
                    <a href="cart.html">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-expand" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <a className="card-text name" href="singerProduct.html">
                      Bít Tết Bò Kobe
                    </a>
                  </div>
                  <p className="card-text tag text-center">
                    <small className="text-muted">Món chính</small>
                  </p>
                  <hr />
                  <p />
                  <p className="card-text price text-center">50.000 VND</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6">
              <div className="card">
                <div className="hover_area">
                  <img
                    className="card-img-top"
                    src="./images/shop_Page/sp1.jpg"
                    alt="Card image cap"
                  />
                  <div className="hover_card">
                    <a href="cart.html">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-expand" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <a className="card-text name" href="singerProduct.html">
                      Bít Tết Bò Kobe
                    </a>
                  </div>
                  <p className="card-text tag text-center">
                    <small className="text-muted">Món chính</small>
                  </p>
                  <hr />
                  <p />
                  <p className="card-text price text-center">50.000 VND</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6">
              <div className="card">
                <div className="hover_area">
                  <img
                    className="card-img-top"
                    src="./images/shop_Page/sp2.jpg"
                    alt="Card image cap"
                  />
                  <div className="hover_card">
                    <a href="cart.html">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-expand" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <a className="card-text name" href="singerProduct.html">
                      Bít Tết Bò Kobe
                    </a>
                  </div>
                  <p className="card-text tag text-center">
                    <small className="text-muted">Món chính</small>
                  </p>
                  <hr />
                  <p />
                  <p className="card-text price text-center">50.000 VND</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3 col-sm-6">
              <div className="card">
                <div className="hover_area">
                  <img
                    className="card-img-top"
                    src="./images/shop_Page/sp3.jpg"
                    alt="Card image cap"
                  />
                  <div className="hover_card">
                    <a href="cart.html">
                      <i className="fas fa-cart-plus" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-expand" />
                    </a>
                    <a href="cart.html">
                      <i className="fas fa-heart" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <a className="card-text name" href="singerProduct.html">
                      Bít Tết Bò Kobe
                    </a>
                  </div>
                  <p className="card-text tag text-center">
                    <small className="text-muted">Món chính</small>
                  </p>
                  <hr />
                  <p />
                  <p className="card-text price text-center">50.000 VND</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
        href="css/singerProduct.css"
      />
    </Head>
    <Content />
  </Layout>
);

export default Page;
