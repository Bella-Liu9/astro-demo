import { useContext } from "react";
import { SettingContext } from "../providers/SettingProvider";

const useSetting = (defaultValue?: any) => {
  return useContext(SettingContext);
};

export default useSetting;
