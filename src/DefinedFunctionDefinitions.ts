import { FunctionDefinition } from "./FunctionDefinition";


function CreateAllDefinitions()
{
    //-------------------------------------------------------------------------
    // Rendering
    //-------------------------------------------------------------------------
    var temp = new FunctionDefinition("DrawCirc");
    temp.AddSummary("Draws an outline of a circle (not filled!)");
    temp.AddSignature("x,y,r,c");
    temp.AddParam("x : center of the circles x pos");
    temp.AddParam("y : center of the circles y pos");
    temp.AddParam("r : the radius of the circle");
    temp.AddParam("c : the color of the circle");
    
    var temp = new FunctionDefinition("DrawAABB2");
    temp.AddSummary("Draws an outline of a box (not filled!)");
    temp.AddSignature("minx,miny,maxx,maxy,color");
    temp.AddParam("minx : The minimum point of the bounding box x po");
    temp.AddParam("miny : The minimum point of the bounding box y po");
    temp.AddParam("maxx : The maximum point of the bounding box x po");
    temp.AddParam("maxy : The maximum point of the bounding box y po");
    temp.AddParam("color: The color of the box!");

    var temp = new FunctionDefinition("DrawAABB2Fill");
    temp.AddSummary("Draws an solid box (filled!)");
    temp.AddSignature("minx,miny,maxx,maxy,color");
    temp.AddParam("minx : The minimum point of the bounding box x po");
    temp.AddParam("miny : The minimum point of the bounding box y po");
    temp.AddParam("maxx : The maximum point of the bounding box x po");
    temp.AddParam("maxy : The maximum point of the bounding box y po");
    temp.AddParam("color: The color of the box!");


}

//  var temp = new FunctionDefinition("");
//  temp.AddSummary("");
//  temp.AddSignature("");
//  temp.AddParam("");
//  temp.AddParam("");
//  temp.AddParam("");
//  temp.AddParam("");
//  temp.AddParam("");



export {CreateAllDefinitions};