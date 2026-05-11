import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { getUserApi } from '../util/api';

const UserPage = () => {
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await getUserApi();
            if (res && !res.message) {
                setDataSource(res);
            }
        }
        fetchUser();
    }, []);

    const columns = [
        { title: 'ID', dataIndex: '_id', key: '_id' },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
    ];

    return (
        <div style={{ padding: '30px' }}>
            <Table dataSource={dataSource} columns={columns} rowKey={"_id"} />
        </div>
    );
};

export default UserPage;