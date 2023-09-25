import { Box } from "@chakra-ui/react"
import { MarkdownRender } from "src/components/markdown/MarkdownRender"
import { PanelProps } from "types/dashboard"
import { replaceWithVariables } from "utils/variable"
import React from "react";
import { defaultsDeep } from "lodash";
import { PluginSettings } from "./types";
import { DisableDatasource } from "types/panel/plugins";

/* 
This panel is for demonstration purpose, it is an external plugin, auto generated by Datav.

The origin plugin files is in https://github.com/data-observe/datav/tree/main/ui/external-plugins
*/


export const initSettings: PluginSettings & DisableDatasource = {
    disableDatasource: true, // whether display datasource editor in panel editor and query data from datasource
    md: `## This is just a simple demo for how to develop Datav's external panel plugin \n\n For more info please visit https://github.com/data-observe/datav/wiki/External-plugins`,
    justifyContent: "left",
    alignItems: "top",
    fontSize: '1.2em',
    fontWeight: '500',
}

const PanelComponent = (props: PanelProps) => {
    const {panel} = props
    // init panel plugin settings
    props.panel.plugins[panel.type] = defaultsDeep(props.panel.plugins[panel.type], initSettings)
    // give plugin settings a name for easy access
    const options: PluginSettings = props.panel.plugins[panel.type]
    return (<Box px="2" height="100%" id="text-panel" display="flex" alignItems={options.alignItems} justifyContent={options.justifyContent} >
        <MarkdownRender fontSize={options.fontSize} fontWeight={options.fontWeight} md={replaceWithVariables(options.md ?? "")} width="100%"/>
    </Box>)
}

export default PanelComponent

// Our demo panel dont need query data from datasource, so we just return null
export const  mockDataForTestDataDs = () => {
    return null
}