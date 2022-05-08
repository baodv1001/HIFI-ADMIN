import { PostDetails } from '@/components/post/PostDetails';
import { IRoute } from '@/models/route';
import { Welcome } from '@/pages';
import { PostPage } from '@/pages/posts';
import { Recruiters } from '@/pages/recruiters';
import { UserPage } from '@/pages/users/index';

export const adminRoutes: IRoute[] = [
  {
    path: '/',
    exact: true,
    page: <Welcome />,
  },
  {
    path: '/users',
    exact: true,
    page: <UserPage />,
  },
  {
    path: '/posts',
    exact: true,
    page: <PostPage />,
  },
  {
    path: '/posts/:id',
    exact: true,
    page: <PostDetails />,
  },
  {
    path: '/recruiters',
    exact: true,
    page: <Recruiters />,
  },
];
