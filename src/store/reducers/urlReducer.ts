import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IURL } from '../types/IURL';

export interface IURLS {
    urls: IURL[];
}

export const initialState: IURLS = {
    urls: [],
}

export const urlsSlice = createSlice({
    name: 'urls',
    initialState,
    reducers: {
        addUrl: (state, action: PayloadAction<IURL>) => {
            state.urls = [ ...state.urls, action.payload ];
        },
    }
})

export const { addUrl } = urlsSlice.actions
export default urlsSlice.reducer;