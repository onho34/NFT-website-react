import ReactDOM from 'react-dom/client'
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import ChainUpdater from './updaters/ChainUpdater'
import ApplicationUpdater from './updaters/ApplicationUpdater'
import TransactionUpdater from './updaters/TransactionUpdater'
import './theme/global.scss'
import getLibrary from './utils/getLibrary';
import 'react-notifications/lib/notifications.css';

const Web3ProviderNetwork = createWeb3ReactRoot('NETWORK')

if (!!(window as any).ethereum) {
    (window as any).ethereum.autoRefreshOnNetworkChange = false
}

function Updaters() {
    return (
        <>
            <ChainUpdater />
            <TransactionUpdater />
            <ApplicationUpdater />
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
                <Updaters />

                <Router>
                    <App />
                </Router>
            </Web3ProviderNetwork>
        </Web3ReactProvider>
    </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
