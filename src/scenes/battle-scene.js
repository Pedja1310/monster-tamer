import {
	BATTLE_ASSET_KEYS,
	BATTLE_BACKGROUND_ASSET_KEYS,
	HEALTH_BAR_ASSET_KEYS,
	MONSTER_ASSET_KEYS,
} from '../asstes/asset-keys.js'
import Phaser from '../lib/phaser.js'
import { SCENE_KEYS } from './scene-keys.js'

export class BattleScene extends Phaser.Scene {
	constructor() {
		super({ key: SCENE_KEYS.BATTLE_SCENE })
	}

	preload() {}

	create() {
		// create main background
		this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0, 0)

		// create monsters
		this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0)
		this.add.image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0).setFlipX(true)
	}
}
