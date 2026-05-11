import React, { useContext, useState } from 'react';
import { UsergroupAddOutlined, HomeOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const { auth, setAuth } = useContext(AuthContext);
    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = () => {
        localStorage.removeItem("access_token");
        setAuth({
            isAuthenticated: false,
            user: { email: "", name: "" }
        })
        navigate("/");
    }

    const items = [
        {
            label: <Link to={'/'}>Trang chủ</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/user'}>Users</Link>,
            key: 'user',
            icon: <UsergroupAddOutlined />,
        },
        // Nếu chưa đăng nhập thì hiện Login
        ...(!auth.isAuthenticated ? [{
            label: <Link to={'/login'}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
            style: { marginLeft: 'auto' }
        }] : [{
            // Nếu đã đăng nhập thì hiện tên User và nút Logout
            label: `Welcome ${auth.user.name}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            style: { marginLeft: 'auto' },
            children: [
                {
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span>,
                    key: 'logout',
                },
            ],
        }]),
    ];

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;