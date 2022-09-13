import React from 'react';
import '../styles/globals.css'
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import type { AppProps } from 'next/app'
import Navbar from '../components/layout/Navbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Footer from '../components/layout/Footer';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';




function MyApp({ Component, pageProps }: AppProps) {

    const [queryClient] = React.useState(() => new QueryClient({}));

    return (

        <UserProvider supabaseClient={supabaseClient}>
          <QueryClientProvider client={queryClient}>
            <ShoppingCartProvider>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
              <ReactQueryDevtools />
            </ShoppingCartProvider>
          </QueryClientProvider>
        </UserProvider>

    );
}

export default MyApp
