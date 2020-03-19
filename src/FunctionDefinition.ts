import { stringify } from "querystring";
import { KeyObject } from "crypto";

export class FunctionDefinition
{
    m_name : string = "";
    m_signature : string = "";
    m_summary : string = "";
    m_params : string = "";

    static s_definitionMap : Map<string,FunctionDefinition> = new Map();
    
    constructor(name: string) 
    {
        this.m_name = name;

        FunctionDefinition.s_definitionMap.set(name,this);
    }

    AddSummary(summary : string)
    {
        this.m_summary = summary;
    }

    AddSignature(signature: string)
    {
        this.m_signature = (this.m_name + "(" + signature + ")");
    }

    AddParam(param: string) 
    {
        this.m_params += ("\n@PARAM " + param);
    }

    GetSummaryWithParams() : string
    {
        return (this.m_summary + "\n" + this.m_params);
    }

    static GetFunctionDefinition(name : string) : FunctionDefinition
    {
        name = name.replace("(","");
        name = name.replace(")","");

        for(let key of Array.from( FunctionDefinition.s_definitionMap.keys()))
        {
            if(key.toLowerCase() === name.toLowerCase())
            {
                let foundDef : FunctionDefinition | undefined = FunctionDefinition.s_definitionMap.get(name);
                if(foundDef !== undefined)
                {
                    return foundDef;
                }
            }
        }

        return new FunctionDefinition("empty");
    }

    static GetAllNamesThatMatch(name : string) : string[]
    {
        let foundNames : string[] = [];

        for(let key of Array.from( FunctionDefinition.s_definitionMap.keys()) ) 
        {
            let lowerCaseKey : string = key.toLowerCase();
            if(lowerCaseKey.startsWith(name.toLowerCase()))
            {
                foundNames.push(key);
            }
        }

        // I tried sorting the strings so that the list would be from 
        // shortest to longest name but it doesn't seem to change it
        // even tho this works :(
        function SortStringHelper(a : string, b : string) : number
        {
            if(a.length < b.length) { return -1;}
            return 1;
        }

        foundNames = foundNames.sort(SortStringHelper);
        return foundNames;
    }
}

