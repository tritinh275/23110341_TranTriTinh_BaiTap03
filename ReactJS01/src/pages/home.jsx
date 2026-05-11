import React from 'react';
import { Result } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const HomePage = () => {
    return (
        <div style={{ padding: "20px" }}>
            <Result
                icon={<SmileOutlined />}
                title="Fullstack Course - ThS. Nguyễn Hữu Trung"
                subTitle="Chào mừng bạn đến với dự án ReactJS + NodeJS + MongoDB"
            />
            
            <div style={{ textAlign: "center" }}>
                <img 
                    style={{ width: "500px", borderRadius: "10px" }}
                    src="https://hoidanit.vn/images/logo.png" 
                    alt="hoi dan it logo" 
                />
            </div>
        </div>
    );
};

export default HomePage;