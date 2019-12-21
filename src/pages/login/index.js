import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'
export default class Login extends React.Component{
    render(){
        return(
            <div className="login">
                欢迎来访问我的页面
                <Link to='/admin/ui/buttons'>dsfdsf</Link>
            </div>
        )
    }
}