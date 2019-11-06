import { useRouter } from "next/router";
import Layout from "../components/MyLayout.js";
import Head from "next/head";

const Content = () => {
  const router = useRouter();
  return (
    <div>
      <section className="section_1 container-fluid">
        <div className="menu row">
          <div className="col-7 detail_menu">
            <p className="title">
              {" "}
              <span style={{ color: "#FD5B00" }}>Thực đơn </span>Bữa sáng
            </p>
            <p className="sub_title">Tất cả các ngày trong tuần 6h30-10h30</p>
            <ul className="leaders">
              <li>
                <span className="dish_name">Bít tết bò Kobe</span>
                <span className="dish_info">150.000VND</span>
              </li>
              <li>
                <span className="dish_name">Gà nướng ngũ vị hương</span>
                <span className="dish_info">150.000VND</span>
              </li>
              <li>
                <span className="dish_name">Gà cay phô mai</span>
                <span className="dish_info">150.000VND</span>
              </li>
              <li>
                <span className="dish_name">Trứng tráng rau củ</span>
                <span className="dish_info">150.000VND</span>
              </li>
              <li>
                <span className="dish_name">Sừng trâu hầm nhân sâm</span>
                <span className="dish_info">100.000VND</span>
              </li>
              <li>
                <span className="dish_name">Bánh mì ốp trứng cút</span>
                <span className="dish_info">100.000VND</span>
              </li>
              <li>
                <span className="dish_name">Pate Italy</span>
                <span className="dish_info">100.000VND</span>
              </li>
              <li>
                <span className="dish_name">Sườn sốt me</span>
                <span className="dish_info">100.000VND</span>
              </li>
              <li>
                <span className="dish_name">Châu chấu chiên tỏi ớt</span>
                <span className="dish_info">100.000VND</span>
              </li>
            </ul>
          </div>
          <div className="col-5 select_menu">
            <div className="row select">
              <div className="col-3 image">
                <img src="./images/menu_Page/breakfast.png" alt />
              </div>
              <div className="col-9 content_select">
                <p className="title_select">Bữa sáng</p>
                <p className="sub_title_select">
                  Tất cả các ngày trong tuần 6h30-10h30
                </p>
              </div>
            </div>
            <hr />
            <div className="row select">
              <div className="col-3 image">
                <img src="./images/menu_Page/lunch.png" alt />
              </div>
              <div className="col-9 content_select">
                <p className="title_select">Bữa trưa</p>
                <p className="sub_title_select">
                  Tất cả các ngày trong tuần 6h30-10h30
                </p>
              </div>
            </div>
            <hr />
            <div className="row select">
              <div className="col-3 image">
                <img src="./images/menu_Page/dinner.png" alt />
              </div>
              <div className="col-9 content_select">
                <p className="title_select">Bữa tối</p>
                <p className="sub_title_select">
                  Tất cả các ngày trong tuần 6h30-10h30
                </p>
              </div>
            </div>
            <hr />
            <div className="row select">
              <div className="col-3 image">
                <img src="./images/menu_Page/drinks.png" alt />
              </div>
              <div className="col-9 content_select">
                <p className="title_select">Đồ uống</p>
                <p className="sub_title_select">
                  Tất cả các ngày trong tuần 6h30-10h30
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_2 container-fluid" />
    </div>
  );
};

const namePage = "Menu";

const Page = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" type="text/css" media="screen" href="css/menu.css" />
          
    </Head>
    <Content />
  </Layout>
);

export default Page;