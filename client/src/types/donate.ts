import { ReactNode } from 'react';

/**
 * Represents a cryptocurrency option for donations
 */
export interface CryptoOption {
  id: string;
  name: string;
  icon: ReactNode;
  address: string;
  color: string;
  pgpSignature?: string;
  network?: string;
  memo?: string;
  explorerUrl?: string;
}

/**
 * Props for the CryptoAddressDisplay component
 */
export interface CryptoAddressDisplayProps {
  selectedOption: string | null;
}

/**
 * Props for the CryptoCurrencySelector component
 */
export interface CryptoCurrencySelectorProps {
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
  containerVariants: any;
  cryptoOptions: CryptoOption[];
}

/**
 * Props for the DonationOptions component
 */
export interface DonationOptionsProps {
  selectedOption: string | null;
  setSelectedOption: (option: string) => void;
}

/**
 * Props for the PGPKeyDisplay component
 */
export interface PGPKeyDisplayProps {
  showPgpKey: boolean;
  setShowPgpKey: (show: boolean) => void;
}
