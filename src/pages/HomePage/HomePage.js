import React from "react";
import { BEMHelper } from "../../utils/bem-helper";
import { Tabs } from "../../components/Tabs/Tabs"
import {CreateUser} from "../CreateUser/CreateUser"
import { Searchpage } from "../Searchpage/Searchpage";

const classHelper = BEMHelper("homepage");

export const HomePage = () => {
    const tabData = [
        {
          label: "Create",
          content: (
            <CreateUser />
          ),
        },
        {
          label: "Search",
          content: (
            <Searchpage />
          ),
        },
      ];
  return (
    <div className={classHelper("")}>
      <Tabs data={tabData}/>
    </div>
  );
};