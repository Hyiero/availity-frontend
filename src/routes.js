import { 
    ProblemOnePage,
    ProblemTwoPage,
    ProblemThreePage,
    ProblemFourPage, 
    ProblemFivePage, 
    ProblemSixPage,
    ProblemSevenPage
} from './pages';

export const routes = [
    { path: '/problem/one', name: 'Problem One', element: ProblemOnePage },
    { path: '/problem/two', name: 'Problem Two',element: ProblemTwoPage },
    { path: '/problem/three', name: 'Problem Three', element: ProblemThreePage },
    { path: '/problem/four', name: 'Problem Four', element: ProblemFourPage },
    { path: '/problem/five', name: 'Problem Five', element: ProblemFivePage },
    { path: '/problem/six', name: 'Problem Six', element: ProblemSixPage },
    { path: '/problem/seven', name: 'Problem Seven', element: ProblemSevenPage },
]