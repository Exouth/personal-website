import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiLitecoin, SiMonero, SiTether, SiSolana, SiBinance, SiDogecoin } from 'react-icons/si';
import { TbCurrencyBitcoin } from 'react-icons/tb';
import { CryptoOption } from '@/types/donate';
import { pgpSignatures } from '@data/pgp';

/**
 * All available cryptocurrency options for donations
 */
export const cryptoOptions: CryptoOption[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    icon: <FaBitcoin size={24} />,
    address: 'bc1qds0szwvunhmj84yjseysavp8xdrt44vudfrej4',
    color: 'bg-[#f7931a]',
    pgpSignature: pgpSignatures.bitcoin,
    network: 'Bitcoin (BTC)',
    explorerUrl:
      'https://www.blockchain.com/explorer/addresses/btc/bc1qds0szwvunhmj84yjseysavp8xdrt44vudfrej4',
  },
  {
    id: 'bitcoin-cash',
    name: 'Bitcoin Cash',
    icon: <TbCurrencyBitcoin size={24} />,
    address: 'qpq6mayr4ap9p6fn7fmhueudtk7fq4ejdvg8tg3d5t',
    color: 'bg-[#0ac18e]',
    pgpSignature: pgpSignatures.bitcoinCash,
    network: 'Bitcoin Cash (BCH)',
    explorerUrl:
      'https://www.blockchain.com/explorer/addresses/bch/qpq6mayr4ap9p6fn7fmhueudtk7fq4ejdvg8tg3d5t',
  },
  {
    id: 'monero',
    name: 'Monero',
    icon: <SiMonero size={24} />,
    address:
      '423ikTdokPG1179rMP1DTX78tTF8YoPcBgk7qaPtMQQnCX1ZmNXRe7RH3zDZUsmNfG7DiMTw86YuHGr3VXjTRSyjMKZCWKH',
    color: 'bg-[#ff6600]',
    pgpSignature: pgpSignatures.monero,
    network: 'Monero (XMR)',
    explorerUrl: 'https://xmrchain.net/',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    icon: <FaEthereum size={24} />,
    address: '0xd0D3576f77AbA5e8CbCc6bc09026d942d4CcD2bC',
    color: 'bg-[#627eea]',
    pgpSignature: pgpSignatures.ethereum,
    network: 'Ethereum (ETH)',
    explorerUrl: 'https://etherscan.io/address/0xd0D3576f77AbA5e8CbCc6bc09026d942d4CcD2bC',
  },
  {
    id: 'solana',
    name: 'Solana',
    icon: <SiSolana size={24} />,
    address: 'B7DvDUHoyQZQ3ZVDxayTJu1aBcCd5pJKreRdAH21tCEe',
    color: 'bg-[#14f195]',
    pgpSignature: pgpSignatures.solana,
    network: 'Solana (SOL)',
    explorerUrl: 'https://explorer.solana.com/address/B7DvDUHoyQZQ3ZVDxayTJu1aBcCd5pJKreRdAH21tCEe',
  },
  {
    id: 'bnb',
    name: 'BNB',
    icon: <SiBinance size={24} />,
    address: '0x0CE8d102E06A03D1dBE61C8BBd0DE20aD135e6F6',
    color: 'bg-[#f3ba2f]',
    pgpSignature: pgpSignatures.bnb,
    network: 'BNB Smart Chain (BSC)',
    explorerUrl: 'https://bscscan.com/address/0x0CE8d102E06A03D1dBE61C8BBd0DE20aD135e6F6',
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    icon: <SiDogecoin size={24} />,
    address: 'DDRtBQoj7aZNrw4iDPpS4ZduNQGg9H2JU3',
    color: 'bg-[#c3a634]',
    pgpSignature: pgpSignatures.dogecoin,
    network: 'Dogecoin (DOGE)',
    explorerUrl: 'https://dogechain.info/address/DDRtBQoj7aZNrw4iDPpS4ZduNQGg9H2JU3',
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    icon: <SiLitecoin size={24} />,
    address: 'ltc1qqz7nh9xttk0wn30c2qz7cmadtpddkh8v8z8fc0',
    color: 'bg-[#345d9d]',
    pgpSignature: pgpSignatures.litecoin,
    network: 'Litecoin (LTC)',
    explorerUrl:
      'https://blockchair.com/litecoin/address/ltc1qqz7nh9xttk0wn30c2qz7cmadtpddkh8v8z8fc0',
  },
  {
    id: 'usdt',
    name: 'USDT ERC20',
    icon: <SiTether size={24} />,
    address: '0x0CE8d102E06A03D1dBE61C8BBd0DE20aD135e6F6',
    color: 'bg-[#26a17b]',
    pgpSignature: pgpSignatures.usdt,
    network: 'Ethereum (ERC20)',
    explorerUrl: 'https://etherscan.io/address/0x0CE8d102E06A03D1dBE61C8BBd0DE20aD135e6F6',
    memo: 'This is a USDT address on the Ethereum network (ERC20). Please do not send USDT from other networks like Tron or BSC to this address, as your donation could be lost.',
  },
];
