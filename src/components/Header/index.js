import React from 'react'
import './index.less'
import { Row, Col } from 'antd';
import axios from '../../axios'
import { formatDate } from '../../util/util'

// http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2

export default class Header extends React.Component {
    // state={}
    componentWillMount() {
        this.setState({
            userName: 'Sj'
        })
        setInterval(()=>{
            let sysTime=formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIDate()
    }

    getWeatherAPIDate(){
        let city='北京'
        axios.jsonp({
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
        }).then((res)=>{
            this.setState({
                weather:res.results[0].weather_data[0].date
            })
        })
    }

    render() {
        return (
            <div className='header'>
                <Row >
                    <Col span={24} className="header-top">
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}