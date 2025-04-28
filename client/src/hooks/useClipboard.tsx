import { useState, useCallback } from 'react';
import { UseClipboardOptions, CopyState } from '@/types/hooks';

/**
 * Hook for managing clipboard operations with feedback status
 * 
 * @param options Options for the hook
 * @returns Clipboard functions and status
 */
export const useClipboard = (options: UseClipboardOptions = {}) => {
  const { successDuration = 2000 } = options;
  const [copyState, setCopyState] = useState<CopyState>(null);

  /**
   * Copies text to the clipboard and sets a feedback status
   * 
   * @param text The text to copy
   * @param identifier Optional: An identifier for the copied content (for multiple copy actions)
   */
  const copyToClipboard = useCallback(
    (text: string, identifier?: string | boolean) => {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopyState(identifier !== undefined ? identifier : true);
          setTimeout(() => setCopyState(null), successDuration);
        })
        .catch(() => {
          setCopyState(typeof identifier === 'string' ? 'error' : false);
          setTimeout(() => setCopyState(null), successDuration);
        });
    },
    [successDuration]
  );

  /**
   * Checks if a specific content has been copied
   * 
   * @param identifier The identifier of the copied content or true for standard check
   * @returns Whether the content is currently copied
   */
  const isCopied = useCallback(
    (identifier?: string | boolean): boolean => {
      if (identifier === undefined) {
        return copyState === true;
      }
      return copyState === identifier;
    },
    [copyState]
  );

  /**
   * Checks if an error occurred during copying
   */
  const hasError = useCallback(
    (): boolean => {
      return copyState === 'error' || copyState === false;
    },
    [copyState]
  );

  return {
    copyToClipboard,
    copyState,
    isCopied,
    hasError,
    resetCopyState: () => setCopyState(null)
  };
};

export default useClipboard; 