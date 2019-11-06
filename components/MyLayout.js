import Header from './Header';
import Footer from './Footer';
//Cách viết để render ra các component <con /> trong component cha là <Layout />
const Layout = props => (
    <div>
        <Header />

        {props.children}
        
        <Footer />
    </div>
);

export default Layout;