import '../styles/globals.css'
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from 'react';
import {store} from '../store'
import {Provider} from 'react-redux'
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }: AppProps) {

    const [queryClient] = React.useState(() => new QueryClient({}));

    return (
      <Provider store={store}>
       <UserProvider supabaseClient={supabaseClient}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <ReactQueryDevtools />
        </QueryClientProvider>
       </UserProvider>
        </Provider>
    );
}

export default MyApp
