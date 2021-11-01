// Copyright 2017-2020 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useEffect, useState } from "react";
// import useSWR, { cache } from "swr";

export interface ToggleContext {
  isIOS: boolean;
  isAndroid: boolean;
  isSafari: boolean;
  isWindows: boolean;
  browserType: string;
  isBrowser: boolean;
}

interface Props {
  children: React.ReactNode;
}

const SettingContext: React.Context<ToggleContext> =
  React.createContext<ToggleContext>({} as ToggleContext);

function SettingProvider({ children }: Props): React.ReactElement<Props> {
  const [browserType, setBrowserType] = useState("");
  const [isIOS, setIsIOS] = useState<boolean>(false);
  const [isAndroid, setIsAndroid] = useState<boolean>(false);
  const [isSafari, setIsSafari] = useState<boolean>(false);
  const [isBrowser, setIsBrowser] = useState<boolean>(true);
  const [isWindows, setIsWindows] = useState(false);
  const [ua, setUa] = useState<string>("");
  useEffect(() => {
    if (isIOS || isAndroid) {
      setBrowserType("MBOL");
    } else if (ua && !isIOS && !isAndroid) {
      setBrowserType("CBOL");
    }
  }, [isIOS, isAndroid, ua]);
  useEffect(() => {
    ua?.match(/windows/) && setIsWindows(true);
  }, [ua]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUa(window.navigator.userAgent.toLowerCase());
    }
  });
  useEffect(() => {
    ua?.match(/(iphone|ipad|ipod)/) && setIsIOS(true);
    ua?.match(/android[\s\/]([\d\.]+)/) && setIsAndroid(true);
    ua?.match(/version\/([\d.]+).*safari/) && setIsSafari(true);
    ua?.match(/micromessenger/i) && setIsBrowser(false);
  }, [ua]);
  return (
    <SettingContext.Provider
      value={{
        isIOS,
        isAndroid,
        isSafari,
        isBrowser,
        isWindows,
        browserType,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
}

export { SettingContext };

export default React.memo(SettingProvider);
