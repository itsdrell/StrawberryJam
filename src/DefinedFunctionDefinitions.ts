import { FunctionDefinition } from './FunctionDefinition'; 

function CreateAllDefinitions() 
{ 
 
var temp = new FunctionDefinition('Print');
temp.AddSignature('string');
temp.AddSummary('Prints a String to the debugger, Web browser dev console, as well as the in game console.');


var temp = new FunctionDefinition('dPrint');
temp.AddSignature('string, timeLength, color');
temp.AddSummary('Prints a timed message in the top left of the screen thats a certain color');
temp.AddParam('timeLength : How long for it to stay up on the screen');


var temp = new FunctionDefinition('Cls');
temp.AddSignature('r,g,b,a');
temp.AddSummary('Clears the Screen.');
temp.AddSummary('Sets the default color to use if no color given in a function that takes a color');


var temp = new FunctionDefinition('Camera');
temp.AddSignature('x , y');
temp.AddSummary('Moves the Cameras position. This camera is not centered');


var temp = new FunctionDefinition('CameraLookAt');
temp.AddSignature('x, y, clampToMap');
temp.AddSummary('Centers the camera around a position');
temp.AddParam('clampToMap : makes sure the camera doesnt go outside of the map');


var temp = new FunctionDefinition('Screenshake');
temp.AddSignature('amountZeroToOne');
temp.AddSummary('Creates an impulse based screenshake that decays over time');
temp.AddParam('amountZeroToOne : a float 0 -> 1. 1 being a bunch of screenshake for that frame, 0 being none');


var temp = new FunctionDefinition('DrawLine');
temp.AddSignature(' startX, startY, endX, endY, color');
temp.AddSummary('Draws a 2D line from one point to another');


var temp = new FunctionDefinition('DrawCircle');
temp.AddSignature(' centerX, centerY, radius, color');
temp.AddSummary('Draws an outline of a circle (not filled!)');


var temp = new FunctionDefinition('DrawCircleFill');
temp.AddSignature(' centerX, centerY, radius, color ');
temp.AddSummary('Draws a circle that is filled a certain color');


var temp = new FunctionDefinition('DrawAABB2Fill');
temp.AddSignature(' minX, minY, maxX, maxY, color ');
temp.AddSummary('Draws a box that is filled a certain color');


var temp = new FunctionDefinition('DrawAABB2');
temp.AddSignature(' minX, minY, maxX, maxY, color ');
temp.AddSummary('Draws an outline of a box (not filled!)');


var temp = new FunctionDefinition('DrawSprite');
temp.AddSignature('index, x, y, rotation, width, height, flipX, flipY, ppu');
temp.AddSummary('Draws a sprite from the sprite sheet based on the index given');
temp.AddParam('index : the index on the sprite sheet. Sprite sheet viewer can help you find this!');
temp.AddParam('x,y : the center position of the sprite');
temp.AddParam('rotation : 0-360 rotation of the sprite (counter clockwise)');
temp.AddParam('width and height : how many sprite indices to go. if you want to draw a 32x16 pixel sprite your width is 2 and height is 1');
temp.AddParam('flipx and flipy : bools that you can turn on to flip/inverse a sprite in a dir');
temp.AddParam('ppu : scaling of the sprite');


var temp = new FunctionDefinition('DrawText');
temp.AddSignature(' x, y, height, color');
temp.AddSummary('Draws text using the font.png found in Data');
temp.AddParam('height : how tall to draw the font. The width will be determines based off aspect and the height you choose');


var temp = new FunctionDefinition('IsKeyPressed ');
temp.AddSignature(' KeyCode ');
temp.AddSummary('Checks if a key is being held down');
temp.AddParam('Keycode : Ex would be "a" for a key');


var temp = new FunctionDefinition('WasKeyJustPressed ');
temp.AddSignature(' KeyCode ');
temp.AddSummary('Checks if the key was just pressed down during that frame');
temp.AddParam('Keycode : Ex would be "a" for a key');


var temp = new FunctionDefinition('WasKeyJustReleased ');
temp.AddSignature(' KeyCode ');
temp.AddSummary('Checks if the key was just relased during that frame');
temp.AddParam('Keycode : Ex would be "a" for a key');


var temp = new FunctionDefinition('PlayOneShot');
temp.AddSignature(' nameOfFile, volume ');
temp.AddSummary('Plays a SFX (or music!) ONCE. This is non looping');


var temp = new FunctionDefinition('PlayMusic');
temp.AddSignature(' nameOfFile, volume ');
temp.AddSummary('Plays music that is looped');


var temp = new FunctionDefinition('StopMusic');
temp.AddSignature(' nameOfFile ');
temp.AddSummary('Stops the music from playing its loop');


var temp = new FunctionDefinition('DrawMap');
temp.AddSignature('');
temp.AddSummary('Call this in Draw() if you want the map to be drawn');


var temp = new FunctionDefinition('SetTileSprite');
temp.AddSignature('x,y,spriteIndex');
temp.AddSummary('Changes the sprite of a tile on the map');
temp.AddParam('x,y : are in world position not tile pos. It will figure the tilePos out for you');
temp.AddParam('spriteIndex : sprite to use from the spritesheet');


var temp = new FunctionDefinition('GetTileSprite');
temp.AddSignature('x,y');
temp.AddSummary('Gets the sprite index of a tile based on a world position');
temp.AddParam('x,y : are in world position not tile pos. It will figure the tilePos out for you');
temp.AddReturn('returns a int representing the sprite index');


var temp = new FunctionDefinition('DoesTileHaveCollision');
temp.AddSignature('x,y,channelToCheck');
temp.AddSummary('checks if a tile has a certain collision flag');
temp.AddParam('channelToCheck is 1-16 based on a combinations of bits set in the editor');
temp.AddReturn('returns a bool');


var temp = new FunctionDefinition('Abs');
temp.AddSignature('number');
temp.AddSummary('Get the absolute value. Calls std::abs under the hood');


var temp = new FunctionDefinition('ATan2');
temp.AddSignature('x,y');
temp.AddSummary('calculates atan2f on a pos');


var temp = new FunctionDefinition('CosDegrees');
temp.AddSignature('degrees');
temp.AddSummary('calculates cos');
temp.AddParam('degrees : 0-360');


var temp = new FunctionDefinition('SinDegrees');
temp.AddSignature('degrees');
temp.AddParam('calculates sin');
temp.AddParam('degrees : 0-360');


var temp = new FunctionDefinition('Floor');
temp.AddSignature('value');
temp.AddSummary('Floors a value for you');


var temp = new FunctionDefinition('Ceil');
temp.AddSignature('value');
temp.AddSummary('Raises a value');


var temp = new FunctionDefinition('Min');
temp.AddSignature('a,b');
temp.AddSummary('returns the lesser value');
temp.AddParam('a,b : are treated as floats');
temp.AddReturn('returns a float');


var temp = new FunctionDefinition('Max');
temp.AddSignature('a,b');
temp.AddSummary('returns the lesser value');
temp.AddParam('a,b : are treated as floats');
temp.AddReturn('returns a float');


var temp = new FunctionDefinition('Sqrt');
temp.AddSignature('value');
temp.AddSummary('Calculates the sqrt');


var temp = new FunctionDefinition('Clamp');
temp.AddSignature('value, min, max');
temp.AddSummary('clamps a value between min and max');


var temp = new FunctionDefinition('RandomRange');
temp.AddSignature('min, max');
temp.AddSummary('Gives you a random value from min to max');


var temp = new FunctionDefinition('Dot');
temp.AddSignature('x1,y1,x2,y2');
temp.AddSummary('Calculates the dot product of the two vectors');
temp.AddReturn('returns a float (not normalized)');


var temp = new FunctionDefinition('Lerp');
temp.AddSignature('start, end, t');
temp.AddSummary('Lerps from start to end based on t');


var temp = new FunctionDefinition('Chance');
temp.AddSignature('percentChance');
temp.AddSummary('rolls a dice for you and see if the chance passes');
temp.AddParam('percentChance : 0-100%');
temp.AddReturn('returns a bool if it passed or failed');


var temp = new FunctionDefinition('Fract');
temp.AddSignature('value');
temp.AddSummary('gets the fraction part of the value');


var temp = new FunctionDefinition('GetDistance');
temp.AddSignature('startX,startY, endX,endY');
temp.AddSummary('Gets the distace from start to end positions');


var temp = new FunctionDefinition('GetDistanceSquared');
temp.AddSignature('startX,startY, endX,endY');
temp.AddSummary('Gets the distance from start to end postions (but without using a square root to be faster)');


var temp = new FunctionDefinition('Normalize');
temp.AddSignature('x,y');
temp.AddSummary('Normalizes a vector');
temp.AddReturn('returns a normalized x,y');


var temp = new FunctionDefinition('RangeMap');
temp.AddSignature('currentValue, currentRangeMin, currentRangeMax, newRangeMin, newRangeMax');
temp.AddSummary('Takes a value with a range and translates it to another range');
temp.AddReturn('returns the value based on the new range');


} 

export {CreateAllDefinitions};

