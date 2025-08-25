'use client';

import { VWOProvider } from 'vwo-fme-react-sdk';
import { v4 as uuidv4 } from 'uuid';

const userId = uuidv4();

console.log(userId);

const options = {
    accountId: '1132425',
    sdkKey: 'a4e46a4b13b53d9c06d3228847648f91'
};

const userContext = {
    id: uuidv4() //'group_default'
};

export default function VwoContextProvider({ children }) {
    return (
        <VWOProvider config={options} userContext={userContext}>
            {children}
        </VWOProvider>
    );
}
