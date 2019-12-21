import React from 'react'
import { Row, Col } from 'antd';
import './styles/common.less';
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
// import Home from './pages/Home'
import menuList from './config/menuConfig'

class Admin extends React.Component {
    state = {  val: 0 }
    componentDidMount() {
        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val);    // 第 1 次 log

        this.setState({ val: this.state.val + 1 });
        console.log(this.state.val);    // 第 2 次 log

        setTimeout(() => {
            this.setState({ val: this.state.val + 1 });
            console.log(this.state.val);  // 第 3 次 log

            this.setState({ val: this.state.val + 1 });
            console.log(this.state.val);  // 第 4 次 log
        }, 0);
    }
    render() {
        return (
            <Row className="container">
                <Col span={3} className='nav-left'>
                    <NavLeft menuList={menuList}></NavLeft>
                </Col>
                <Col span={21} className='main'>
                    <Header></Header>
                    <Row className='content'>
                        {this.props.children}
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        )
    }
}

export default Admin;