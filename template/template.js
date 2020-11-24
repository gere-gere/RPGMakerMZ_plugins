//=============================================================================
// Plugin for RPG Maker MZ
// ******.js
// ----------------------------------------------------------------------------
// Released under the MIT License.
// https://opensource.org/licenses/mit-license.php
// ----------------------------------------------------------------------------
// Version 1.0.0
//=============================================================================
/*:ja
 * @target MZ
 * @plugindesc 
 * @author げれげれ
 * @url https://twitter.com/geregeregere
 *
 * 
 * @param 
 * @text 
 * @desc 
 * @default
 * @type 
 * @max 
 * @min 
 * @on 
 * @off 
 * @parent 
 *
 * @command 
 * @text 
 * @desc 
 * 
 * @arg 
 * @type 
 * @text 
 * @desc 
 * 
 * 
 * @help
 * 
 * 
 * 
 * 
 * 
 * 
 */

(() => {
    'use strict';
    const PLUGIN_NAME = 'プラグイン名';
    const COMMAND1 = 'プラグインコマンド名'
    //以下、コマンドの種類分だけ繰り返し

    //プラグインパラメータ=================================================
    const PARAMETERS = PluginManager.parameters(PLUGIN_NAME);
    //以後、PARAMETERS['パラメータ名']の形で値を取得していく



    //プラグインコマンド===================================================
    PluginManager.registerCommand(PLUGIN_NAME, "", args => {
        //プラグインコマンドの開始処理
    });

    //実処理==============================================================






})();
