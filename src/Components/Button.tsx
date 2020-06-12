import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { testAsyncThunk } from 'Redux/ButtonSlice'
import history from 'Util/History';

const ButtonComponent = () => {
    const dispatch = useDispatch()
    return (
        <Button type="primary" onClick={() => {
            dispatch(testAsyncThunk(true))
            history.push('/profile')
        }}>Go to Profile Page</Button>
    )
};

export default ButtonComponent;
