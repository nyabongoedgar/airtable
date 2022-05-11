import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../redux/reducers/types'
import type { AppDispatch } from '../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector