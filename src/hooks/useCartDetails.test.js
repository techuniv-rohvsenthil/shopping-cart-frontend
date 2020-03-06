import {renderHook} from '@testing-library/react-hooks';
import TestRenderer from 'react-test-renderer';
import useCartDetails from './useCartDetails';
import axios from 'axios';

const {act} = TestRenderer;

describe('the useCartDetails hook', () => {
    beforeAll(() => {
        jest.spyOn(axios, 'get').mockImplementation(() => {});
    });

    afterEach(() => {
        axios.get.mockClear();
    });

    afterAll(() => {
        axios.get.mockRestore();
    })

    it('should make the api call', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCartDetails());
        await waitForNextUpdate();
        expect(axios.get).toHaveBeenCalledWith('http://localhost:8080/items');
    });
});