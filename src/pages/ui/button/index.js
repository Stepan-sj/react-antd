import React from 'react'
import './index.less'
import {Card,Button} from 'antd'
export default class Buttons extends React.Component{
    render(){
        return(
            <div>
                <Card title='基础按钮'>
                    <Button type='primary'>imooc</Button>
                </Card>
            </div>
        )
    }
}