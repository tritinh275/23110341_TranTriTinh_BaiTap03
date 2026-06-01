import React, { useEffect, useState } from 'react';
import { Table, notification } from 'antd';
import { getUserApi } from '../util/api';

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if (res && !res.message) {
                setDataSource(res);
            } else {
                notification.error({
                    message: "Unauthorized",
                    description: res?.message ?? "Error"
                });
            }
        }
        fetchUser();
    }, []);

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Role',
            dataIndex: 'role',
        },
    ];

    return (
        <div style={{ padding: '30px' }}>
            <Table bordered dataSource={dataSource} columns={columns} rowKey={"_id"} />
        </div>
    );
};

export default UserPage;