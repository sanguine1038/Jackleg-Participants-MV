/*=============================================================================*\
 * CTB AltMenuScreen3Ex
 * Terms of Use:
 *  Free for commercial or non-commercial use
 *
/*=============================================================================*/
var CTB = CTB || {}; CTB.AltMenuScreen3Ex  = CTB.AltMenuScreen3Ex || {};
var Imported = Imported || {}; Imported["CTB.AltMenuScreen3Ex"] = 1.00;
//=============================================================================//

/*:
 * @target MV
 * @plugindesc [RPG Maker MV] [Tier 1] [Version 1.00] [CT_Bolt - AltMenuScreen3 Extended]
 * @author CT_Bolt 
 *
 * @param Keep Screen Snapshot
 * @desc Keep screen snapshot?
 * By default AltMenuScreen3 disables this
 * @default true
 *
 * @help
 * With this AltMenuScreen3 now uses evaluated javascript for image filenames instead of simple strings
 *
 */
//=============================================================================
//=============================================================================

(function ($_$) {	
	function getPluginParameters() {var a = document.currentScript || (function() { var b = document.getElementsByTagName('script'); return b[b.length - 1]; })(); return PluginManager.parameters(a.src.substring((a.src.lastIndexOf('/') + 1), a.src.indexOf('.js')));} $_$.params = getPluginParameters();	
    var parameters = PluginManager.parameters('AltMenuScreen3');	
	const sceneNames = Object.keys(parameters).filter(key => key.includes('bgBitmap')).map(key => key.replace('bgBitmap',''));
  	var bgBitmap = {};sceneNames.forEach(v =>	bgBitmap[v] = parameters['bgBitmap'+v] || '');	
	sceneNames.forEach(function(v){
		window['Scene_'+v].prototype.createBackground = function() {			
			if(bgBitmap[v]){
				if (eval($_$.params['Keep Screen Snapshot'])){Scene_MenuBase.prototype.createBackground.apply(this, arguments);};			
				this._backgroundSprite = new Sprite();
				this._backgroundSprite.bitmap =
				 ImageManager.loadPicture(eval(bgBitmap[v]));
				this.addChild(this._backgroundSprite);
				return;
			}
			Scene_MenuBase.prototype.createBackground.apply(this, arguments);
		};
	},this);	
})(CTB.AltMenuScreen3Ex, this);