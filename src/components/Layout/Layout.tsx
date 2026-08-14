import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { initAnimations } from '../../features/animations';
export function Layout({ children }: {children?:ReactNode}){useEffect(()=>initAnimations(),[]);return <div className="w-full overflow-x-clip relative"><Header/><main>{children ?? <Outlet/>}</main><Footer/></div>}
