import axios from 'axios';
import { NextApiRequest, NextPageContext } from 'next';
import { parseCookies } from 'nookies';

type ContextType =
  | Pick<NextPageContext, 'req'>
  | { req: NextApiRequest }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { req: any }
  | null
  | undefined;

export function setupApiClient(ctx: ContextType = undefined) {
  const cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URI,
    headers: {
      Authorization: `Bearer ${cookies['blackbelt.token']}`,
    },
  });
  return api;
}

export const api = setupApiClient();
