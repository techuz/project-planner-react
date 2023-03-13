import React, { createContext, useCallback, useContext, useMemo } from 'react';

const defaultContext = {
  featureFlags: [],
  getIsFeatureEnabled: () => true
};

const FeatureFlagsContext = createContext(defaultContext);

export const FeatureFlagsProvider = ({ children }) => {
  //This Data will comes from the API based on user role, this also might need to change based on backend structure
  const featureFlags = useMemo(
    () => [
      {
        enabled: true,
        feature: 'DASHBOARD'
      },
      {
        enabled: true,
        feature: 'PROJECT_LIST'
      },
      {
        enabled: false,
        feature: 'PROJECT_DETAILS'
      },
      {
        enabled: true,
        feature: 'MANAGE_DAILY_STANDUP'
      }
    ],
    []
  );

  const getIsFeatureEnabled = useCallback(
    (feature) => {
      const featureFlag = featureFlags.find((featureName) => featureName.feature === feature);

      if (!featureFlag) {
        return false;
      }

      return featureFlag.enabled;
    },
    [featureFlags]
  );

  const context = useMemo(() => {
    return {
      featureFlags,
      getIsFeatureEnabled
    };
  }, [featureFlags, getIsFeatureEnabled]);

  return <FeatureFlagsContext.Provider value={context}>{children}</FeatureFlagsContext.Provider>;
};

export const useFeatureFlags = () => useContext(FeatureFlagsContext);
