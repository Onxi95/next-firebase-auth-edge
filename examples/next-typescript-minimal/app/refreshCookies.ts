'use server';

import {cookies, headers} from 'next/headers';
import {refreshServerCookies} from 'next-firebase-auth-edge/lib/next/cookies';
import {serverConfig} from '@/config';

export const refreshCookies = async () => {
  await refreshServerCookies(cookies(), new Headers(headers()), serverConfig);
};
