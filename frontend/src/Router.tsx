import {Routes, Route} from "react-router-dom";
import {lazy, Suspense} from 'react';

import Home from "./pages/Home.tsx";
const CreateAccount = lazy(() => import('./pages/CreateAccount.tsx'))

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-account" element={<Suspense fallback={<div style={{color:"purple"}}>Loading...</div>}>  <CreateAccount /></Suspense>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <p>404</p>
        </div>
    )
}
