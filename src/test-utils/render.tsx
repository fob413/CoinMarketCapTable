import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

export const render = (ui: React.ReactNode) => {
    return testingLibraryRender(<>{ui}</>, {
        wrapper: ({ children }: { children: React.ReactNode }) => (
            <QueryClientProvider client={queryClient}>
                <MantineProvider>
                    {children}
                </MantineProvider>
            </QueryClientProvider>
        ),
    });
}
