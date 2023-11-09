import { lazy } from 'react';

const Main = lazy(() => import('../pages/main'));
const Emails = lazy(() => import('../components/Emails'));
const ViewEmail = lazy(() => import('../components/ViewEmail'));

const routes = {
    main: {
        path: '/',
        element: Main
    },
    emails: {
        path: '/mails',
        element: Emails
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmail
    }
}

export { routes };