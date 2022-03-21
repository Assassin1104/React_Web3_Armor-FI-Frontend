import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import { LedgerConnector } from '@web3-react/ledger-connector'
import { TrezorConnector } from '@web3-react/trezor-connector'
import { FrameConnector } from '@web3-react/frame-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { PortisConnector } from '@web3-react/portis-connector'
import { SquarelinkConnector } from '@web3-react/squarelink-connector'
import { TorusConnector } from '@web3-react/torus-connector'
import { AuthereumConnector } from '@web3-react/authereum-connector'
import { SafeAppConnector } from '@gnosis.pm/safe-apps-web3-react'

const POLLING_INTERVAL = 12000
const RPC_URLS = {
  1: 'https://mainnet.infura.io/v3/708516bc857c485d932b73cdc93ca100',
  4: 'https://rinkeby.infura.io/v3/708516bc857c485d932b73cdc93ca100',
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42],
})

// export const network = new NetworkConnector({
//   urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
//   defaultChainId: 1,
//   pollingInterval: POLLING_INTERVAL
// });

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'yinsure.financaae',
})

export const ledger = new LedgerConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
})

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dao@armor.fi',
  manifestAppUrl: 'https://armor.fi/',
})

export const frame = new FrameConnector({ supportedChainIds: [1] })

export const fortmatic = new FortmaticConnector({
  apiKey: 'pk_live_F95FEECB1BE324B5',
  chainId: 1,
})

export const portis = new PortisConnector({
  dAppId: '5dea304b-33ed-48bd-8f00-0076a2546b60',
  networks: [1, 100],
})

export const squarelink = new SquarelinkConnector({
  clientId: '5f2a2233db82b06b24f9',
  networks: [1, 100],
})

export const gnosisSafe = new SafeAppConnector()

export const torus = new TorusConnector({ chainId: 1 })

export const authereum = new AuthereumConnector({ chainId: 1 })
