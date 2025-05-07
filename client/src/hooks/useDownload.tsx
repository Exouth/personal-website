import { useState, useCallback } from 'react';
import { UseDownloadOptions, DownloadState } from '@/types/hooks';

/**
 * Hook for managing download operations with feedback status
 *
 * @param options Options for the hook
 * @returns Download functions and status
 */
export const useDownload = (options: UseDownloadOptions = {}) => {
  const { successDuration = 2000 } = options;
  const [downloadState, setDownloadState] = useState<DownloadState>(null);

  /**
   * Marks a file as downloaded and sets a feedback status
   *
   * @param identifier Optional: An identifier for the downloaded file (for tracking multiple downloads)
   */
  const markAsDownloaded = useCallback(
    (identifier?: string | boolean) => {
      setDownloadState(identifier !== undefined ? identifier : true);
      setTimeout(() => setDownloadState(null), successDuration);
    },
    [successDuration],
  );

  /**
   * Checks if a specific file has been downloaded
   *
   * @param identifier The identifier of the downloaded file or true for standard check
   * @returns Whether the file is currently marked as downloaded
   */
  const isDownloaded = useCallback(
    (identifier?: string | boolean): boolean => {
      if (identifier === undefined) {
        return downloadState === true;
      }
      return downloadState === identifier;
    },
    [downloadState],
  );

  return {
    markAsDownloaded,
    downloadState,
    isDownloaded,
    resetDownloadState: () => setDownloadState(null),
  };
};

export default useDownload;
